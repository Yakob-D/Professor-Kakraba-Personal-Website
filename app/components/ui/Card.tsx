import { cn } from "@/app/lib/utils";

/**
 * The site's one card shell. `interactive` adds the lift + gradient hairline
 * that appears on hover; `tone` switches between the plain surface and the
 * soft brand gradient used for feature cards.
 */
export function Card({
  children,
  className,
  interactive = false,
  tone = "surface",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "surface" | "tint" | "gradient" | "bare";
  as?: "div" | "article" | "li" | "section";
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-3xl border border-line",
        tone === "surface" && "bg-surface",
        tone === "tint" && "bg-surface-2",
        tone === "gradient" && "bg-brand-gradient-soft",
        tone === "bare" && "border-transparent bg-transparent",
        interactive &&
          "group/card transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-lg motion-reduce:hover:translate-none dark:hover:border-brand-600",
        className,
      )}
    >
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 -top-px h-px bg-linear-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        />
      )}
      {children}
    </Tag>
  );
}

/** Numbered/iconed label chip used on cards and in section eyebrows. */
export function Badge({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "accent" | "neutral" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em]",
        tone === "brand" &&
          "bg-brand-50 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200",
        tone === "accent" &&
          "bg-accent-50 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200",
        tone === "neutral" && "bg-surface-2 text-muted",
        tone === "outline" && "border border-line text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
