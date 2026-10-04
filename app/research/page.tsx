import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Paragraphs } from "../components/ui/Prose";
import { Badge } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { ScaleDiagram } from "../components/ui/GraphNetwork";
import { AreaCard } from "../components/research/AreaCard";
import { researchAreas, researchVision, softwareProjects, patents, funding } from "./data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explainable AI for public health — four research areas running from molecules to populations.",
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
        <Button href="/research/smart-pred" icon="arrow-right">
          See SMART-Pred
        </Button>
      </PageHeader>

      {/* --------------------------------------------------------- vision */}
      <Section id="vision" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
          <div>
            <SectionHeading eyebrow="Vision" title="One path," gradientWord="four stops." />
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

      {/* ------------------------------------------------------ 4 areas */}
      <Section id="areas" tone="tint" className="border-y border-line">
        <SectionHeading
          eyebrow="Four research areas"
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

      {/* ----------------------------------------------------- software */}
      <Section id="software" spacing="lg">
        <SectionHeading eyebrow="Software & code" title="Built to be" gradientWord="reused." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {softwareProjects.map((proj, i) => (
            <Reveal as="li" key={proj.name} delay={i * 90}>
              <a
                href={proj.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group/sw flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand-300/70"
              >
                <div className="flex items-center justify-between">
                  <Icon name="code" className="size-5 text-brand-600 dark:text-brand-300" />
                  <Icon
                    name="arrow-up-right"
                    className="size-4 text-faint transition-transform group-hover/sw:translate-x-0.5"
                  />
                </div>
                <h3 className="mt-4 font-mono text-[0.9375rem] font-medium text-ink">
                  {proj.name}
                </h3>
                <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted">
                  {proj.description}
                </p>
                <span className="mt-4 text-[0.75rem] text-faint">{proj.language}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------- patents */}
      <Section id="patents" tone="tint" className="border-y border-line">
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
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Badge tone={p.status === "Granted" ? "brand" : "outline"}>{p.status}</Badge>
                  <span className="font-mono text-[0.75rem] text-faint">{p.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------- funding */}
      <Section id="funding" spacing="lg">
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
      </Section>

      <CTABand />
    </>
  );
}
