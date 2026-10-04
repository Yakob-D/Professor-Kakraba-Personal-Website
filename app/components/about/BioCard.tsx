"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { bios } from "@/app/about/data";
import { Prose } from "../ui/Prose";
import { CopyButton } from "../ui/CopyButton";
import { Badge } from "../ui/Card";

/** Tabs between the short and long bio, each with its own Copy button. */
export function BioCard() {
  const [activeId, setActiveId] = useState<(typeof bios)[number]["id"]>("short");
  const active = bios.find((b) => b.id === activeId) ?? bios[0];
  const plainText = active.paragraphs.join("\n\n");

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Bio length" className="inline-flex rounded-full border border-line bg-surface-2 p-1">
          {bios.map((bio) => (
            <button
              key={bio.id}
              type="button"
              role="tab"
              aria-selected={activeId === bio.id}
              onClick={() => setActiveId(bio.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                activeId === bio.id
                  ? "bg-brand-gradient text-white shadow-sm dark:text-brand-950"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {bio.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Badge tone="neutral">{active.wordCountLabel}</Badge>
          <CopyButton value={plainText} label="Copy bio" />
        </div>
      </div>

      <div className="mt-6 border-t border-line pt-6">
        <Prose>
          {active.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </div>
    </div>
  );
}
