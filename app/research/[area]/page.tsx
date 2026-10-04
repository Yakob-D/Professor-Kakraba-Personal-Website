import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { PageHeader } from "@/app/components/ui/PageHeader";
import { Section, SectionHeading } from "@/app/components/ui/Section";
import { Reveal } from "@/app/components/ui/Reveal";
import { Prose } from "@/app/components/ui/Prose";
import { Badge } from "@/app/components/ui/Card";
import { Figure } from "@/app/components/ui/Figure";
import { CTABand } from "@/app/components/ui/CTABand";
import { Icon } from "@/app/components/ui/Icon";
import { OutputsList } from "@/app/components/research/OutputBadge";
import { researchAreas, getResearchArea } from "@/app/research/data";

export function generateStaticParams() {
  return researchAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata(props: PageProps<"/research/[area]">): Promise<Metadata> {
  const { area: slug } = await props.params;
  const area = getResearchArea(slug);
  if (!area) return {};
  return {
    title: area.shortTitle,
    description: area.summary,
    alternates: { canonical: `/research/${area.slug}` },
  };
}

export default async function ResearchAreaPage(props: PageProps<"/research/[area]">) {
  const { area: slug } = await props.params;
  const area = getResearchArea(slug);
  if (!area) notFound();

  const index = researchAreas.findIndex((a) => a.slug === slug);
  const next = researchAreas[(index + 1) % researchAreas.length];

  return (
    <>
      <PageHeader eyebrow={`Research · ${area.number}`} title={area.title} lede={area.summary}>
        <div className="flex flex-wrap gap-1.5">
          {area.topics.map((t) => (
            <Badge key={t} tone="outline">
              {t}
            </Badge>
          ))}
        </div>
      </PageHeader>

      <Section id="overview" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <SectionHeading eyebrow="Problem" title="What's" gradientWord="unsolved." />
              <Reveal delay={80} className="mt-6">
                <Prose>
                  <p>{area.problem}</p>
                </Prose>
              </Reveal>
            </div>

            <div>
              <SectionHeading eyebrow="Approach" title="How we're" gradientWord="working on it." />
              <Reveal delay={80} className="mt-6">
                <Prose>
                  <p>{area.approach}</p>
                </Prose>
              </Reveal>
            </div>
          </div>

          <Reveal delay={140}>
            <Figure image={area.image} aspect="4/5" placeholderIcon={area.icon} />
          </Reveal>
        </div>
      </Section>

      <Section id="outputs" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Key outputs" title="What this has" gradientWord="produced." />
        <div className="mt-10 max-w-2xl">
          <OutputsList items={area.keyOutputs} />
        </div>
      </Section>

      <Section id="whats-next" spacing="lg">
        <SectionHeading eyebrow="What's next" title="Where this" gradientWord="goes." />
        <Reveal delay={80} className="mt-6 max-w-2xl">
          <Prose>
            <p>{area.whatsNext}</p>
          </Prose>
        </Reveal>
      </Section>

      <Section id="next-area" spacing="md">
        <Link
          href={`/research/${next.slug}`}
          className="group/next flex flex-col gap-4 rounded-3xl border border-line bg-brand-gradient-soft p-7 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-300 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="flex items-center gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-brand-700 dark:text-brand-300">
              <Icon name={next.icon} className="size-5" />
            </span>
            <span>
              <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-faint">
                Next area · {next.number}
              </span>
              <span className="mt-1 block text-lg font-semibold text-ink">{next.shortTitle}</span>
            </span>
          </span>
          <Icon
            name="arrow-right"
            className="size-5 text-brand-600 transition-transform group-hover/next:translate-x-1 dark:text-brand-300"
          />
        </Link>
      </Section>

      <CTABand />
    </>
  );
}
