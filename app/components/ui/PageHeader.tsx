import { cn } from "@/app/lib/utils";
import { Container, MeshBackdrop } from "./Section";
import { Reveal } from "./Reveal";

/** The shared top band for every page except the homepage. */
export function PageHeader({
  eyebrow,
  title,
  gradientWord,
  lede,
  children,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  lede?: React.ReactNode;
  /** Chips, quick links or stats rendered under the lede. */
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-line bg-bg-tint pt-32 pb-16 sm:pt-40 sm:pb-20",
        className,
      )}
    >
      <MeshBackdrop intensity="subtle" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-faint opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <Container className="relative">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          <Reveal>
            <div
              className={cn(
                "mb-5 flex items-center gap-3",
                align === "center" && "justify-center",
              )}
            >
              <span className="h-[3px] w-12 rounded-full bg-brand-gradient" aria-hidden />
              <span className="font-mono text-base font-bold uppercase tracking-[0.12em] text-brand-600 sm:text-xl dark:text-brand-300">
                {eyebrow}
              </span>
            </div>
            <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-[4.25rem]">
              {title}
              {gradientWord && (
                <>
                  {" "}
                  <span className="text-gradient">{gradientWord}</span>
                </>
              )}
            </h1>
          </Reveal>
          {lede && (
            <Reveal delay={110}>
              <p className="mt-6 text-lg leading-relaxed text-muted">{lede}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={200} className="mt-8">
              {children}
            </Reveal>
          )}
        </div>
      </Container>
    </header>
  );
}
