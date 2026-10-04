import Link from "next/link";
import { crossCuttingLens } from "@/app/(home)/data";
import { Container } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { GraphNetwork } from "../ui/GraphNetwork";
import { Icon } from "../ui/Icon";

/**
 * The homepage's fifth, "cross-cutting lens" banner, called for explicitly
 * in the source document in addition to the four research-pillar cards.
 */
export function CrossCuttingBanner() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink py-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <GraphNetwork animated={false} />
      </div>
      <Container className="relative">
        <Link
          href={crossCuttingLens.href}
          className="group/lens flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <Reveal className="flex items-start gap-4 sm:items-center">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-bg/20 text-bg">
              <Icon name="globe" className="size-5" />
            </span>
            <span>
              <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-bg/60">
                {crossCuttingLens.eyebrow}
              </span>
              <span className="mt-1 block text-xl font-semibold text-bg sm:text-2xl">
                {crossCuttingLens.title}
              </span>
            </span>
          </Reveal>
          <Reveal delay={100} className="max-w-md text-[0.9375rem] leading-relaxed text-bg/70">
            {crossCuttingLens.body}
            <span className="mt-2 flex items-center gap-1.5 text-bg">
              Learn more
              <Icon
                name="arrow-right"
                className="size-4 transition-transform group-hover/lens:translate-x-0.5"
              />
            </span>
          </Reveal>
        </Link>
      </Container>
    </section>
  );
}
