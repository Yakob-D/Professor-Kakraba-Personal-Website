"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";
import { Icon } from "../ui/Icon";
import { ChatPanel } from "./ChatPanel";

/**
 * Site-wide chat widget: a floating trigger button (bottom-right, every
 * page) that opens a small panel answering questions about Dr. Kakraba,
 * grounded in the site's own data (see app/lib/chat/).
 *
 * z-[70] sits above the mobile nav drawer (z-60) and the header (z-50) —
 * when open, the chat panel should be the topmost thing on the page — but
 * below the skip-to-content link's z-100, which only ever appears
 * transiently on keyboard focus and never overlaps this widget in practice.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Escape closes; lock background scroll while open (matches MobileMenu's
  // pattern, since the panel is full-screen on mobile); move focus into the
  // input on open and back to the trigger button on close.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Let the panel mount before focusing.
    const focusFrame = requestAnimationFrame(() => inputRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(focusFrame);
    };
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Ask about Dr. Kakraba"}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          "fixed bottom-5 right-5 z-[70] grid size-14 place-items-center rounded-full border border-line bg-surface text-ink shadow-lg transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none motion-reduce:hover:translate-none",
          open && "pointer-events-none opacity-0 motion-reduce:pointer-events-auto motion-reduce:opacity-100",
        )}
      >
        <Icon name="message-square" className="size-6" />
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Ask about Dr. Kakraba"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[70] flex flex-col overflow-hidden border-line bg-bg shadow-lg transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
          "sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[560px] sm:w-[380px] sm:rounded-3xl sm:border",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0 motion-reduce:translate-y-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-3.5 sm:rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-ink text-bg">
              <Icon name="sparkles" className="size-4" />
            </span>
            <span className="text-[0.9375rem] font-semibold text-ink">Ask about Dr. Kakraba</span>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close chat"
            tabIndex={open ? 0 : -1}
            className="grid size-8 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand-400 hover:text-ink"
          >
            <Icon name="x" className="size-4" />
          </button>
        </div>

        {/* Mount the panel only while open so useChat/network activity
            doesn't run for visitors who never click the button. */}
        {open && <ChatPanel inputRef={inputRef} />}
      </div>
    </>
  );
}
