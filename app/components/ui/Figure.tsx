import Image from "next/image";
import { cn } from "@/app/lib/utils";
import type { ImageRef } from "@/app/data/site";
import { Icon } from "./Icon";

/**
 * Renders a real photograph when `image.src` is set, and a designed
 * placeholder when it isn't — so the layout is final before the photos
 * arrive and nothing ever shows a broken image.
 *
 * Every photo on the site goes through here, which also guarantees alt text.
 */
export function Figure({
  image,
  className,
  imageClassName,
  aspect = "4/5",
  priority = false,
  sizes = "(min-width: 1024px) 480px, 100vw",
  placeholderLabel,
  placeholderIcon = "sparkles",
  rounded = "rounded-3xl",
  showCaption = true,
}: {
  image: ImageRef;
  className?: string;
  imageClassName?: string;
  /** Any valid CSS aspect-ratio, e.g. "4/5", "16/9", "1". */
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  /** Overrides the text shown inside the placeholder. */
  placeholderLabel?: string;
  placeholderIcon?: string;
  rounded?: string;
  showCaption?: boolean;
}) {
  const body = image.src ? (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", imageClassName)}
    />
  ) : (
    <Placeholder label={placeholderLabel ?? image.alt} icon={placeholderIcon} />
  );

  return (
    <figure className={cn("group/fig relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden border border-line bg-surface-2",
          rounded,
        )}
        style={{ aspectRatio: aspect }}
      >
        {body}
      </div>
      {showCaption && (image.caption || image.credit) && (
        <figcaption className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
          {image.caption}
          {image.credit && (
            <span className="text-faint">
              {image.caption ? " · " : ""}
              {image.credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function Placeholder({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-brand-gradient-soft">
      <div
        aria-hidden
        className="absolute inset-0 grid-faint opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />
      <div className="relative flex max-w-[82%] flex-col items-center gap-3 text-center">
        <span className="grid size-12 place-items-center rounded-2xl border border-line bg-surface/70 text-brand-600 shadow-sm backdrop-blur dark:text-brand-300">
          <Icon name={icon} className="size-5" />
        </span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-brand-700/80 dark:text-brand-200/80">
          Photo pending
        </span>
        <span className="text-[0.8125rem] leading-snug text-muted">{label}</span>
      </div>
    </div>
  );
}

/** The hero portrait: a Figure plus the layered frame and graph accent. */
export function Portrait({
  image,
  className,
}: {
  image: ImageRef;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Offset gradient plate behind the photograph. */}
      <div
        aria-hidden
        className="absolute -bottom-4 -right-4 top-8 left-8 rounded-[2rem] bg-brand-gradient opacity-90 blur-[2px]"
      />
      <div
        aria-hidden
        className="absolute -left-6 -top-6 size-28 rounded-full border border-accent-300/50 dark:border-accent-300/30"
      />
      <Figure
        image={image}
        aspect="4/5"
        priority
        rounded="rounded-[2rem]"
        sizes="(min-width: 1024px) 440px, (min-width: 640px) 60vw, 86vw"
        className="relative"
        imageClassName="transition-transform duration-[1200ms] ease-out group-hover/fig:scale-[1.03] motion-reduce:transition-none"
        placeholderIcon="users"
        showCaption={false}
      />
    </div>
  );
}
