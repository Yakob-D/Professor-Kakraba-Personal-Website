import { cn } from "@/app/lib/utils";
import { Reveal } from "./Reveal";

/** Standard page gutter + max width (~1100px, per the design direction). */
export function Container({
  children,
  className,
  width = "page",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "page" | "prose" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        width === "page" && "max-w-(--container-page)",
        width === "prose" && "max-w-[46rem]",
        width === "wide" && "max-w-[82rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  width = "page",
  tone = "default",
  spacing = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  width?: "page" | "prose" | "wide";
  tone?: "default" | "tint" | "surface";
  spacing?: "sm" | "md" | "lg";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        spacing === "sm" && "py-12 sm:py-16",
        spacing === "md" && "py-16 sm:py-20",
        spacing === "lg" && "py-20 sm:py-28",
        tone === "tint" && "bg-bg-tint",
        tone === "surface" && "bg-surface",
        className,
      )}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading + optional lede, with the gradient rule above it. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  gradientWord,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Trailing words of the title rendered in the brand gradient. */
  gradientWord?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        Boolean(action) && "sm:flex-row sm:items-end sm:justify-between sm:gap-10",
        className,
      )}
    >
      <Reveal className="max-w-2xl">
        {eyebrow && (
          <div
            className={cn(
              "mb-4 flex items-center gap-3",
              align === "center" && "justify-center",
            )}
          >
            <span className="h-px w-8 bg-brand-gradient" aria-hidden />
            <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-balance text-3xl font-semibold leading-[1.1] text-ink sm:text-[2.6rem]">
          {title}
          {gradientWord && (
            <>
              {" "}
              <span className="text-gradient">{gradientWord}</span>
            </>
          )}
        </h2>
        {lede && (
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{lede}</p>
        )}
      </Reveal>
      {action && (
        <Reveal delay={120} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}

/** A soft, slow-drifting colour mesh used behind hero and CTA bands. */
export function MeshBackdrop({
  className,
  intensity = "medium",
}: {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}) {
  const opacity =
    intensity === "subtle" ? "opacity-40" : intensity === "strong" ? "opacity-90" : "opacity-65";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute -left-[12%] -top-[28%] size-[46rem] rounded-full blur-[120px] animate-drift",
          opacity,
        )}
        style={{
          background:
            "radial-gradient(circle at 35% 35%, var(--gradient-mesh-a), transparent 68%)",
        }}
      />
      <div
        className={cn(
          "absolute -right-[16%] top-[6%] size-[38rem] rounded-full blur-[110px] animate-drift [animation-delay:-8s]",
          opacity,
        )}
        style={{
          background:
            "radial-gradient(circle at 60% 40%, var(--gradient-mesh-b), transparent 70%)",
        }}
      />
      <div
        className={cn(
          "absolute bottom-[-30%] left-[26%] size-[40rem] rounded-full blur-[130px] animate-drift [animation-delay:-14s]",
          opacity,
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--gradient-mesh-c), transparent 72%)",
        }}
      />
    </div>
  );
}
