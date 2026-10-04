import Link from "next/link";
import type { ResearchArea } from "@/app/research/data";
import { Icon } from "../ui/Icon";

export function AreaCard({ area }: { area: ResearchArea }) {
  return (
    <Link
      href={`/research/${area.slug}`}
      className="group/area relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-lg dark:hover:border-brand-600"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-700 group-hover/area:opacity-25"
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl border border-line bg-brand-gradient-soft text-brand-700 dark:text-brand-300">
          <Icon name={area.icon} className="size-5" />
        </span>
        <span className="font-mono text-xs font-medium tracking-[0.12em] text-faint">
          {area.number}
        </span>
      </div>
      <h3 className="relative mt-6 text-balance text-xl font-semibold leading-snug text-ink">
        {area.title}
      </h3>
      <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-muted">
        {area.summary}
      </p>
      <div className="relative mt-6 flex flex-wrap gap-1.5">
        {area.topics.slice(0, 3).map((t) => (
          <span key={t} className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] font-medium text-muted">
            {t}
          </span>
        ))}
      </div>
      <span className="relative mt-7 inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-brand-700 dark:text-brand-300">
        <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden />
        Explore this area
        <Icon name="arrow-right" className="size-4 transition-transform duration-300 group-hover/area:translate-x-1" />
      </span>
    </Link>
  );
}
