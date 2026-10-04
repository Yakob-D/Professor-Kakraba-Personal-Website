import type { Metadata } from "next";

import { PageHeader } from "@/app/components/ui/PageHeader";
import { Section } from "@/app/components/ui/Section";
import { Reveal } from "@/app/components/ui/Reveal";
import { Prose } from "@/app/components/ui/Prose";
import { Button } from "@/app/components/ui/Button";
import { Figure } from "@/app/components/ui/Figure";
import { CTABand } from "@/app/components/ui/CTABand";
import { Icon } from "@/app/components/ui/Icon";
import { smartPred } from "@/app/research/data";

export const metadata: Metadata = {
  title: "SMART-Pred",
  description: smartPred.tagline,
  alternates: { canonical: "/research/smart-pred" },
};

export default function SmartPredPage() {
  return (
    <>
      <PageHeader eyebrow="Featured work" title="SMART-Pred" lede={smartPred.tagline}>
        <div className="flex flex-wrap gap-3">
          <Button href={smartPred.links.demo} icon="arrow-up-right">
            Try it
          </Button>
          <Button href={smartPred.links.paper} variant="secondary" leadingIcon="file-text">
            Read the paper
          </Button>
          <Button href={smartPred.links.code} variant="secondary" leadingIcon="code">
            View the code
          </Button>
        </div>
      </PageHeader>

      <Section id="overview" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
          <Reveal>
            <Figure image={smartPred.image} aspect="16/11" placeholderIcon="activity" rounded="rounded-[1.5rem]" />
          </Reveal>

          <div>
            <Prose>
              <p>{smartPred.description}</p>
            </Prose>

            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-line bg-brand-gradient-soft p-6">
              <span className="font-display text-4xl font-semibold text-gradient">
                {smartPred.result.value}
              </span>
              <span className="border-l border-line pl-5 text-sm font-medium text-ink-soft">
                {smartPred.result.label}
              </span>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
              <Icon name="building" className="mt-0.5 size-4 shrink-0 text-accent-500" />
              <div>
                <p className="text-[0.9375rem] font-semibold text-ink">{smartPred.partner.name}</p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">
                  {smartPred.partner.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Reveal delay={120} className="mt-10">
          <blockquote className="relative rounded-2xl border border-line bg-brand-gradient-soft p-6 sm:p-8">
            <Icon name="quote" className="size-6 text-accent-400" strokeWidth={1.4} />
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink sm:text-xl">
              “{smartPred.quote.text}”
            </p>
            <footer className="mt-4 text-[0.875rem] font-medium text-muted">
              — {smartPred.quote.attribution}
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-[0.8125rem] font-medium text-muted">Collaborators:</span>
          {smartPred.collaborators.map((name) => (
            <span
              key={name}
              className="rounded-full border border-line px-3 py-1 text-[0.8125rem] text-ink-soft"
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      <Section id="details" tone="tint" className="border-y border-line">
        <div className="grid gap-6 sm:grid-cols-3">
          {smartPred.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-[0.9375rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Interested in piloting SMART-Pred with your health department?"
        lede="We're looking for additional state and institutional partners for the next validation phase."
      />
    </>
  );
}
