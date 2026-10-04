"use client";

import { useEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import { useChat } from "@ai-sdk/react";
import { cn } from "@/app/lib/utils";
import { Icon } from "../ui/Icon";
import { ChatMessageContent } from "./ChatMessageContent";

const STARTER_QUESTIONS = [
  "What does he research?",
  "What is SMART-Pred?",
  "I'd like to invite him to speak",
  "Is he taking students?",
];

/** Pulls a clean message out of an AI SDK error. Setup-time errors (our own
 *  400/429 responses, thrown as APICallError) carry the raw JSON response
 *  body as `.message`; in-stream errors (e.g. a Gemini 429 mid-generation)
 *  already come through as the plain string our route's `onError` returned.
 *  Try JSON first, fall back to the raw text either way. */
function friendlyErrorMessage(error: Error): string {
  try {
    const parsed = JSON.parse(error.message);
    if (parsed && typeof parsed.error === "string") return parsed.error;
  } catch {
    // Not JSON — it's already the plain string our server sent.
  }
  return error.message || "Something went wrong. Please try again.";
}

function isRateLimitError(error: Error): boolean {
  const statusCode = (error as unknown as { statusCode?: number }).statusCode;
  if (statusCode === 429) return true;
  const message = friendlyErrorMessage(error).toLowerCase();
  return message.includes("rate-limited") || message.includes("too many requests");
}

export function ChatPanel({ inputRef }: { inputRef: RefObject<HTMLTextAreaElement | null> }) {
  const { messages, sendMessage, status, error, clearError, regenerate } = useChat();
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const busy = status === "submitted" || status === "streaming";

  // Keep the latest message in view as it streams in.
  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, status]);

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    clearError();
    sendMessage({ text: trimmed });
    setInput("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit(input);
  }

  return (
    <div className="flex h-full flex-col">
      {/* ----------------------------------------------------------- messages */}
      <div
        ref={listRef}
        role="log"
        aria-live="polite"
        aria-label="Conversation"
        className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
      >
        {messages.length === 0 && (
          <div className="flex h-full flex-col justify-end gap-4">
            <p className="text-[0.875rem] leading-relaxed text-muted">
              Ask me anything about Dr. Kakraba&apos;s research, background, or how to get in touch —
              I&apos;ll answer from what&apos;s on this site.
            </p>
            <div className="flex flex-wrap gap-2">
              {STARTER_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => submit(q)}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-left text-[0.8125rem] text-ink-soft transition-colors hover:border-brand-400 hover:text-ink"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.875rem] leading-relaxed",
                message.role === "user"
                  ? "bg-ink text-bg"
                  : "border border-line bg-surface text-ink-soft",
              )}
            >
              {message.parts.map((part, i) =>
                part.type === "text" ? (
                  <ChatMessageContent key={i} text={part.text} />
                ) : null,
              )}
            </div>
          </div>
        ))}

        {busy && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl border border-line bg-surface px-3.5 py-3">
              <TypingDot delay="0ms" />
              <TypingDot delay="150ms" />
              <TypingDot delay="300ms" />
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-start gap-2 rounded-2xl border border-line-strong bg-surface-2 px-3.5 py-3 text-[0.8125rem] text-ink-soft">
            <p>
              {isRateLimitError(error)
                ? friendlyErrorMessage(error)
                : "I'm busy right now, please try again in a moment."}
            </p>
            <button
              type="button"
              onClick={() => regenerate()}
              className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:text-brand-500 dark:text-brand-300"
            >
              <Icon name="arrow-right" className="size-3.5" />
              Try again
            </button>
          </div>
        )}
      </div>

      {/* --------------------------------------------------------------- input */}
      <form onSubmit={onSubmit} className="flex items-end gap-2 border-t border-line p-3">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit(input);
            }
          }}
          rows={1}
          placeholder="Ask a question…"
          disabled={busy}
          aria-label="Your question"
          className="max-h-24 flex-1 resize-none rounded-xl border border-line bg-bg px-3 py-2 text-[0.875rem] text-ink placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Send message"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-bg transition-[opacity,transform] duration-200 enabled:hover:-translate-y-0.5 disabled:opacity-40"
        >
          <Icon name="arrow-right" className="size-4" />
        </button>
      </form>

      <p className="border-t border-line px-4 py-2 text-center text-[0.6875rem] text-faint">
        AI-generated answers — verify important details.
      </p>
    </div>
  );
}

function TypingDot({ delay }: { delay: string }) {
  return (
    <span
      className="size-1.5 rounded-full bg-faint motion-safe:animate-bounce"
      style={{ animationDelay: delay }}
    />
  );
}
