import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { systemPrompt } from "@/app/lib/chat/prompt";

/* =============================================================================
   CHAT API ROUTE
   -----------------------------------------------------------------------------
   POST /api/chat — the backend for ChatWidget's useChat() (default transport,
   so no client-side config needed to reach this route).

   Runs on the default Node.js runtime (Fluid Compute) — no `export const
   runtime = "edge"` needed or wanted; streaming works the same either way,
   and Node gives the full API surface the rate limiter below and any future
   persistence would need.
   ========================================================================== */

const MAX_MESSAGE_CHARS = 1000;
const MAX_HISTORY_MESSAGES = 20;

/* ------------------------------------------------------------ rate limit --- */
/**
 * Naive in-memory, per-IP fixed-window limiter: 10 requests / 60s.
 *
 * This resets on every cold start and is per-instance, not shared across
 * concurrent Fluid Compute instances — it slows down obvious abuse, it does
 * not guarantee a hard cap. Replace with Upstash Ratelimit (Redis-backed,
 * works across instances) or the Vercel Firewall's rate-limiting rules
 * before this matters for real traffic.
 */
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;
const requestLog = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestLog.get(ip);

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    requestLog.set(ip, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function getClientIp(request: Request): string {
  // Vercel (and most proxies) set this; the first value is the original client.
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * streamText retries transient failures internally and, if every attempt
 * fails, throws a `RetryError` whose own `statusCode` is undefined — the
 * real provider error (an `APICallError` with the actual `statusCode`, e.g.
 * 429 on a Gemini free-tier quota) lives one level down on `.lastError`.
 * Unwrap that before giving up, or a real 429 silently falls through to the
 * generic error message instead of the specific one.
 */
function extractStatusCode(error: unknown): number | undefined {
  if (!error || typeof error !== "object") return undefined;
  const statusCode = (error as { statusCode?: unknown }).statusCode;
  if (typeof statusCode === "number") return statusCode;
  if ("lastError" in error) return extractStatusCode((error as { lastError?: unknown }).lastError);
  return undefined;
}

/* -------------------------------------------------------------- validation --- */

function textOf(message: UIMessage): string {
  return message.parts
    .filter((p): p is Extract<typeof p, { type: "text" }> => p.type === "text")
    .map((p) => p.text)
    .join("");
}

type ValidationResult = { ok: true; messages: UIMessage[] } | { ok: false; error: string };

function validateMessages(body: unknown): ValidationResult {
  if (!body || typeof body !== "object" || !("messages" in body)) {
    return { ok: false, error: "Request body must include a `messages` array." };
  }
  const { messages } = body as { messages: unknown };
  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, error: "`messages` must be a non-empty array." };
  }

  // Cap history length by keeping only the most recent messages — a long
  // conversation shouldn't error out, it should just lose old context.
  const trimmed = (messages as UIMessage[]).slice(-MAX_HISTORY_MESSAGES);

  const lastUserMessage = [...trimmed].reverse().find((m) => m.role === "user");
  if (lastUserMessage && textOf(lastUserMessage).length > MAX_MESSAGE_CHARS) {
    return {
      ok: false,
      error: `Message is too long (max ${MAX_MESSAGE_CHARS} characters).`,
    };
  }

  return { ok: true, messages: trimmed };
}

/* --------------------------------------------------------------- handler --- */

const model = google("gemini-flash-latest");

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validation = validateMessages(body);
  if (!validation.ok) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  try {
    const modelMessages = await convertToModelMessages(validation.messages);

    const result = streamText({
      model,
      system: systemPrompt,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse({
      // Errors that happen mid-stream (after headers are already sent) can't
      // become a fresh JSON response — the SDK instead sends an error part
      // down the same stream, and `onError`'s return value is the message
      // the client sees (useChat's `error` state). This is also where a
      // Gemini free-tier 429 surfaces, since the provider call happens lazily
      // as the stream is consumed, not when streamText() is invoked above.
      onError: (error) => {
        const status = extractStatusCode(error);

        console.error("[api/chat] stream error:", error);

        if (status === 429) {
          return "The model is rate-limited right now (free-tier limit reached). Please try again in a minute.";
        }
        return "Something went wrong generating a response. Please try again.";
      },
    });
  } catch (error) {
    // Setup-time errors: missing/invalid API key, a bad request rejected
    // immediately, or convertToModelMessages failing on malformed input.
    const status = extractStatusCode(error);

    console.error("[api/chat] request error:", error);

    if (status === 429) {
      return Response.json(
        { error: "The model is rate-limited right now (free-tier limit reached). Please try again in a minute." },
        { status: 429 },
      );
    }

    return Response.json({ error: "Something went wrong. Please try again shortly." }, { status: 500 });
  }
}
