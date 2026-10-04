"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";
import { Icon } from "./Icon";

/** Copies `value` to the clipboard — for the bios and the email address. */
export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  className,
  size = "md",
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions). Fall back
      // to selecting the text so the visitor can copy it by hand.
      const area = document.createElement("textarea");
      area.value = value;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand?.("copy");
      area.remove();
      setCopied(true);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface font-medium text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200",
        size === "sm" ? "h-8 px-3 text-xs" : "h-9 px-3.5 text-[0.8125rem]",
        copied && "border-brand-400 text-brand-700 dark:text-brand-200",
        className,
      )}
    >
      <Icon name={copied ? "check" : "copy"} className="size-3.5" />
      {copied ? copiedLabel : label}
    </button>
  );
}
