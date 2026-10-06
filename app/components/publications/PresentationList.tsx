"use client";

import { useState } from "react";
import {
  presentationCategories,
  type Presentation,
  type PresentationCategory,
} from "@/app/publications/conferences";
import { cn } from "@/app/lib/utils";
import { Icon } from "../ui/Icon";
import { groupByYear } from "./PublicationList";

/**
 * Presentations grouped by year, like the research group's conferences
 * page. With `filterable`, a row of category tabs (All / Talks / Posters /
 * Panels / Workshops) narrows the list.
 */
export function PresentationList({
  presentations,
  filterable = false,
}: {
  presentations: Presentation[];
  filterable?: boolean;
}) {
  const [active, setActive] = useState<PresentationCategory | "all">("all");
  const shown = active === "all" ? presentations : presentations.filter((p) => p.category === active);
  const groups = groupByYear(shown);

  const tabs = [
    { id: "all" as const, label: "All", count: presentations.length },
    ...presentationCategories
      .map((c) => ({ ...c, count: presentations.filter((p) => p.category === c.id).length }))
      .filter((c) => c.count > 0),
  ];

  return (
    <div>
      {filterable && (
        <div role="tablist" aria-label="Filter presentations" className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors",
                active === t.id
                  ? "border-ink bg-ink text-bg"
                  : "border-line bg-surface text-ink-soft hover:border-brand-300 hover:text-brand-700 dark:hover:text-brand-200",
              )}
            >
              {t.label}
              <span className={cn("font-mono text-[0.6875rem]", active === t.id ? "text-bg/70" : "text-faint")}>
                {t.count}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className={cn("space-y-12", filterable && "mt-10")}>
        {groups.map((g) => (
          <section key={g.year}>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h3 className="font-display text-2xl font-bold text-ink">{g.year}</h3>
              <span className="font-mono text-[0.75rem] text-faint">
                {g.items.length} {g.items.length === 1 ? "event" : "events"}
              </span>
            </div>
            <ul className="divide-y divide-line">
              {g.items.map((p) => (
                <li key={p.title + p.date + p.venue} className="py-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.06em]",
                        p.category === "poster"
                          ? "bg-surface-2 text-muted"
                          : "bg-brand-50 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200",
                      )}
                    >
                      {p.role}
                    </span>
                    <span className="font-mono text-[0.75rem] text-faint">{p.date}</span>
                  </div>
                  <h4 className="mt-2 text-[1.0625rem] font-semibold leading-snug text-ink">{p.title}</h4>
                  <p className="mt-1 flex items-start gap-1.5 text-[0.875rem] text-ink-soft">
                    <Icon name="map-pin" className="mt-[0.2rem] size-3.5 shrink-0 text-brand-500" />
                    {p.venue}
                  </p>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">
                    {p.authors}
                  </p>
                  {p.mentorRole && (
                    <p className="mt-1 text-[0.8125rem] text-muted">
                      <span className="font-semibold text-ink-soft">Role: </span>
                      {p.mentorRole}
                    </p>
                  )}
                  {p.links && (
                    <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-brand-700 hover:underline dark:text-brand-300"
                        >
                          {l.label}
                          <Icon name="arrow-up-right" className="size-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
