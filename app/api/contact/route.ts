import { NextResponse } from "next/server";

/* =============================================================================
   CONTACT API ROUTE
   -----------------------------------------------------------------------------
   This is the one, stable seam between the contact form and wherever the real
   backend ends up living. The frontend (app/components/contact/ContactForm.tsx)
   always POSTs here, same-origin — it never talks to the backend directly.

   WIRING UP THE REAL BACKEND
   Set the `CONTACT_API_URL` environment variable (server-side only — do NOT
   prefix it with NEXT_PUBLIC_, since there's no reason to expose a backend
   URL to the browser) to the real endpoint once it exists, e.g. in
   `.env.local` for development and in the Vercel project's environment
   variables for production:

     CONTACT_API_URL=https://api.your-backend.example.com/contact

   This route will then forward every submission to it as JSON and relay
   the response back to the browser, unchanged. Until that variable is set,
   it returns 503 so the failure is obvious rather than silently swallowed.

   If the backend ends up living inside this same Next.js app instead of as
   a separate service, skip the env var entirely and replace the `forward`
   call below with the real logic directly (send an email via a provider,
   write to a database, etc.) — everything else in this file stays the same.

   REQUEST CONTRACT (what the backend receives)
     POST, Content-Type: application/json
     { name: string; email: string; reason: string; message: string }

   RESPONSE CONTRACT (what this route — and the backend, if proxied — returns)
     2xx  { ok: true }
     4xx  { ok: false, error: string }   — client-side problem, e.g. bad input
     5xx  { ok: false, error: string }   — server/backend problem
   ========================================================================== */

type ContactPayload = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    typeof v.email === "string" &&
    typeof v.reason === "string" &&
    typeof v.message === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Never trust client-side validation alone — re-check here.
  if (!isContactPayload(body)) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();
  const reason = body.reason.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "That email address doesn't look valid." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const backendUrl = process.env.CONTACT_API_URL;

  if (!backendUrl) {
    // Expected until the real backend is wired up — see the file-level
    // comment above. 503 Service Unavailable, not 501: the route itself is
    // implemented, it just has nowhere to send the message yet.
    console.warn("[contact] CONTACT_API_URL is not set — dropping submission.");
    return NextResponse.json(
      { ok: false, error: "The contact backend isn't connected yet. Please email directly instead." },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, reason, message }),
      // This route has no caching concerns of its own, but make sure a
      // misconfigured upstream fetch never gets cached either.
      cache: "no-store",
    });

    // Relay the upstream backend's response as-is where possible, so its
    // own error messages reach the visitor.
    const contentType = upstream.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json")
      ? await upstream.json().catch(() => null)
      : null;

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: payload?.error ?? "The contact backend rejected the message." },
        { status: upstream.status },
      );
    }

    return NextResponse.json({ ok: true, ...payload });
  } catch (error) {
    console.error("[contact] Failed to reach CONTACT_API_URL:", error);
    return NextResponse.json(
      { ok: false, error: "Couldn't reach the contact backend. Please try again shortly." },
      { status: 502 },
    );
  }
}
