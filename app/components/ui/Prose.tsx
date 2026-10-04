import { cn } from "@/app/lib/utils";

/**
 * Typographic defaults for long-form blocks (bios, philosophy, vision).
 * Written as plain selectors rather than a plugin so it stays dependency-free
 * and reads from the same theme tokens as everything else.
 */
export function Prose({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "text-ink-soft",
        "[&_p]:leading-[1.75] [&_p+p]:mt-5",
        "[&_strong]:font-semibold [&_strong]:text-ink",
        "[&_em]:text-ink",
        "[&_a]:font-medium [&_a]:text-brand-700 [&_a]:underline [&_a]:decoration-brand-300 [&_a]:decoration-1 [&_a]:underline-offset-[3px] hover:[&_a]:decoration-brand-500 dark:[&_a]:text-brand-300 dark:[&_a]:decoration-brand-600",
        "[&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink",
        "[&_ul]:mt-5 [&_ul]:space-y-2.5 [&_ul]:pl-0",
        "[&_li]:relative [&_li]:pl-6",
        "[&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.6em] [&_ul>li]:before:size-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-brand-gradient [&_ul>li]:before:content-['']",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-accent-400 [&_blockquote]:pl-5 [&_blockquote]:text-ink [&_blockquote]:italic",
        size === "sm" && "text-[0.9375rem]",
        size === "md" && "text-[1.0625rem]",
        size === "lg" && "text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Renders an array of paragraph strings — the shape the backend will return. */
export function Paragraphs({
  items,
  className,
  size,
}: {
  items: string[];
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Prose className={className} size={size}>
      {items.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </Prose>
  );
}
