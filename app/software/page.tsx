import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Prose } from "../components/ui/Prose";
import { Button } from "../components/ui/Button";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { smartPred } from "../research/data";
import { softwareProjects, githubOrg, reproducibilityStatement } from "./data";

export const metadata: Metadata = {
  title: "Software & Tools",
  description: "SMART-Pred and the open research code behind it, via the KakrabaLab GitHub organisation.",
  alternates: { canonical: "/software" },
};

export default function SoftwarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Software & Tools"
        title="Built in the"
        gradientWord="open."
        lede="Open, reproducible code is the strongest evidence that a result holds up — every tool here ships with the data and methods behind it."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/research/smart-pred" icon="arrow-right">
            SMART-Pred
          </Button>
          <Button href={githubOrg.href} variant="secondary" icon="arrow-up-right">
            {githubOrg.name} on GitHub
          </Button>
        </div>
      </PageHeader>

      {/* ------------------------------------------------------ SMART-Pred */}
      <Section id="smart-pred" spacing="lg">
        <SectionHeading eyebrow="Flagship tool" title="SMART-Pred" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Prose>
              <p>{smartPred.description}</p>
            </Prose>
            <div className="mt-6 flex items-center gap-5 rounded-2xl border border-line bg-brand-gradient-soft p-6">
              <span className="font-display text-4xl font-semibold text-gradient">
                {smartPred.result.value}
              </span>
              <span className="border-l border-line pl-5 text-sm font-medium text-ink-soft">
                {smartPred.result.label}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3">
              {smartPred.sections.map((s) => (
                <li key={s.title} className="rounded-2xl border border-line bg-surface p-5">
                  <h3 className="text-[0.9375rem] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* --------------------------------------------------- GitHub gallery */}
      <Section id="github" tone="tint" className="border-y border-line">
        <SectionHeading
          eyebrow={`GitHub · ${githubOrg.name}`}
          title="Open research"
          gradientWord="code."
          action={
            <Button href={githubOrg.href} variant="secondary" icon="arrow-up-right">
              Visit the organisation
            </Button>
          }
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.map((proj, i) => (
            <Reveal as="li" key={proj.name} delay={i * 80}>
              <a
                href={githubOrg.href}
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
                <h3 className="mt-4 text-[0.9375rem] font-medium text-ink">{proj.name}</h3>
                <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted">
                  {proj.description}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------- reproducibility */}
      <Section id="reproducibility" spacing="md">
        <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
          <Icon name="shield" className="mt-0.5 size-5 shrink-0 text-brand-600 dark:text-brand-300" />
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{reproducibilityStatement}</p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
