import Link from "next/link";
import { researchAreaCards } from "@/app/(home)/data";
import { mainResearchAreas } from "@/app/research/data";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

/** §3.4 — four cards into the research pages. */
export function ResearchAreas() {
  return (
    <Section id="research" tone="tint" className="border-y border-line">
      <SectionHeading
        eyebrow="Main research areas"
        title="From molecules to populations, in"
        gradientWord="four areas."
        lede={mainResearchAreas}
        action={
          <Button href="/research" variant="secondary" icon="arrow-right">
            Research overview
          </Button>
        }
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {researchAreaCards.map((area, i) => (
          <Reveal as="li" key={area.slug} delay={i * 90}>
            <Link
              href={`/research/${area.slug}`}
              className="group/area relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-lg dark:hover:border-brand-600"
            >
              {/* Soft gradient wash that blooms on hover. */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-700 group-hover/area:opacity-25"
              />

              <div className="relative flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-line bg-brand-gradient-soft text-brand-700 transition-colors duration-500 group-hover/area:border-brand-300 dark:text-brand-300">
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
                {area.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] font-medium text-muted"
                  >
                    {k}
                  </span>
                ))}
              </div>

              <span className="relative mt-7 inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-brand-700 dark:text-brand-300">
                <span className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden />
                Explore this area
                <Icon
                  name="arrow-right"
                  className="size-4 transition-transform duration-300 group-hover/area:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
