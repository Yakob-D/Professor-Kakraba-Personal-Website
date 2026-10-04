"use client";

import { useMemo, useState } from "react";
import { cn } from "@/app/lib/utils";
import {
  allPublications,
  publicationAreas,
  publicationYears,
  type Publication,
} from "@/app/publications/data";
import { Icon } from "../ui/Icon";
import { CopyButton } from "../ui/CopyButton";
import { Badge } from "../ui/Card";

const typeLabels: Record<Publication["type"], string> = {
  "journal-article": "Journal article",
  "conference-paper": "Conference paper",
  preprint: "Preprint",
};

/** The filterable publication list: year, area and type, all client-side. */
export function PublicationFilters() {
  const [year, setYear] = useState<number | "all">("all");
  const [area, setArea] = useState<Publication["area"] | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return allPublications.filter((p) => {
      if (year !== "all" && p.year !== year) return false;
      if (area !== "all" && p.area !== area) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.journal.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [year, area, query]);

  const activeFilterCount = (year !== "all" ? 1 : 0) + (area !== "all" ? 1 : 0);

  return (
    <div>
      {/* ---------------------------------------------------------- controls */}
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-faint"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or journal…"
            aria-label="Search publications"
            className="h-10 w-full rounded-full border border-line bg-bg pl-10 pr-4 text-sm text-ink placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <FilterSelect
            label="Year"
            value={year === "all" ? "all" : String(year)}
            onChange={(v) => setYear(v === "all" ? "all" : Number(v))}
            options={[{ value: "all", label: "All years" }, ...publicationYears.map((y) => ({ value: String(y), label: String(y) }))]}
          />
          <FilterSelect
            label="Area"
            value={area}
            onChange={(v) => setArea(v as typeof area)}
            options={[
              { value: "all", label: "All areas" },
              ...publicationAreas.map((a) => ({ value: a, label: a })),
            ]}
          />
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={() => {
                setYear("all");
                setArea("all");
              }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.8125rem] font-medium text-muted hover:text-ink"
            >
              <Icon name="x" className="size-3.5" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------ count */}
      <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-muted">
        <Icon name="filter" className="size-3.5" />
        {filtered.length} of {allPublications.length} publications
      </p>

      {/* ------------------------------------------------------------- list */}
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {filtered.map((pub) => (
          <li key={pub.id} id={pub.id} className="py-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="brand">{pub.area}</Badge>
              <Badge tone="neutral">{typeLabels[pub.type]}</Badge>
              <span className="ml-auto font-mono text-[0.75rem] text-faint">{pub.year}</span>
            </div>
            <h3 className="mt-3 text-pretty text-[1.0625rem] font-semibold leading-snug text-ink">
              {pub.title}
            </h3>
            <p className="mt-1.5 text-[0.875rem] text-muted">
              {pub.authors.join(", ")} · <span className="italic">{pub.journal}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pub.pdfHref && (
                <a
                  href={pub.pdfHref}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-3 text-[0.75rem] font-medium text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200"
                >
                  <Icon name="file-text" className="size-3.5" />
                  PDF
                </a>
              )}
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-3 text-[0.75rem] font-medium text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200"
                >
                  <Icon name="external-link" className="size-3.5" />
                  DOI
                </a>
              )}
              <CopyButton value={pub.citation} label="Cite" size="sm" />
            </div>
          </li>
        ))}
      </ol>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-muted">
          <Icon name="search" className="mx-auto size-6 text-faint" />
          <p className="mt-3 text-sm">No publications match those filters.</p>
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="relative">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "h-10 appearance-none rounded-full border border-line bg-bg pl-4 pr-9 text-[0.8125rem] font-medium text-ink-soft transition-colors hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
        )}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <Icon
        name="chevron-down"
        className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-faint"
      />
    </label>
  );
}
