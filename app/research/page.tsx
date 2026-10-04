import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Paragraphs } from "../components/ui/Prose";
import { Badge } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { CTABand } from "../components/ui/CTABand";
import { ScaleDiagram } from "../components/ui/GraphNetwork";
import { AreaCard } from "../components/research/AreaCard";
import { researchAreas, researchVision, patents, patentsCount, patentsNote, funding, fundingNote } from "./data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explainable AI for public health — four research pillars running from molecules to populations.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="From molecules to"
        gradientWord="populations."
        lede="One question asked at four different scales: can a model be accurate enough to change a decision, and still explain itself well enough to be trusted?"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/research/smart-pred" icon="arrow-right">
            See SMART-Pred
          </Button>
          <Button href="/software" variant="secondary" leadingIcon="code">
            Software & Tools
          </Button>
        </div>
      </PageHeader>

      {/* --------------------------------------------------------- vision */}
      <Section id="vision" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
          <div>
            <SectionHeading eyebrow="Vision" title="One path," gradientWord="four pillars." />
            <Reveal delay={100} className="mt-8">
              <Paragraphs items={researchVision.paragraphs} />
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="rounded-3xl border border-line bg-brand-gradient-soft p-8">
              <ScaleDiagram />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------ 4 pillars */}
      <Section id="areas" tone="tint" className="border-y border-line">
        <SectionHeading
          eyebrow="Four research pillars"
          title="Pick a scale,"
          gradientWord="start exploring."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {researchAreas.map((area, i) => (
            <Reveal as="li" key={area.slug} delay={i * 90}>
              <AreaCard area={area} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------- patents */}
      <Section id="patents" spacing="lg">
        <SectionHeading eyebrow="Patents" title="Protecting the" gradientWord="methods." />
        <ul className="mt-10 space-y-3">
          {patents.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.75rem] text-faint">{p.number}</p>
                  <p className="mt-1 text-[0.8125rem] text-muted">{p.filingBody}</p>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
                <Badge tone="outline" className="shrink-0">
                  {p.status}
                </Badge>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-5 text-[0.8125rem] italic text-faint">
          {patentsCount} patents/applications in total. {patentsNote}
        </p>
      </Section>

      {/* ------------------------------------------------------- funding */}
      <Section id="funding" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Funding" title="Who's" gradientWord="behind it." />
        <ul className="mt-10 space-y-3">
          {funding.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 90}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[1.0625rem] font-semibold text-ink">{f.title}</h3>
                  <span className="font-mono text-[0.75rem] text-faint">{f.period}</span>
                </div>
                <p className="mt-1 text-[0.9375rem] font-medium text-brand-700 dark:text-brand-300">
                  {f.role} · {f.sponsor}
                </p>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-5 text-[0.8125rem] italic text-faint">{fundingNote}</p>
      </Section>

      <CTABand />
    </>
  );
}
