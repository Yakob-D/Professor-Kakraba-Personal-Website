import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { CopyButton } from "../components/ui/CopyButton";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { PublicationFilters } from "../components/publications/PublicationFilters";
import { featuredPublications, theses } from "./data";
import { patents } from "../research/data";
import { socialLinks } from "../data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications, theses and patents by Samuel Kakraba, Ph.D.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader eyebrow="Publications" title="Papers, theses and" gradientWord="patents.">
        <div className="flex flex-wrap gap-3">
          <Button href={socialLinks[0].href} variant="secondary" icon="arrow-up-right">
            Google Scholar
          </Button>
          <Button href={socialLinks[1].href} variant="secondary" icon="arrow-up-right">
            ORCID
          </Button>
        </div>
      </PageHeader>

      {/* -------------------------------------------------------- featured */}
      <Section id="featured" spacing="lg">
        <SectionHeading eyebrow="Featured" title="Start" gradientWord="here." />
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {featuredPublications.map((pub, i) => (
            <Reveal as="li" key={pub.id} delay={i * 90}>
              <div
                id={`${pub.id}-card`}
                className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-brand-700 dark:bg-brand-900/60 dark:text-brand-200">
                    {pub.area}
                  </span>
                  <span className="font-mono text-xs text-faint">{pub.year}</span>
                </div>
                <h3 className="mt-5 text-pretty text-[1.0625rem] font-semibold leading-snug text-ink">
                  {pub.title}
                </h3>
                <p className="mt-2.5 text-[0.8125rem] font-medium italic text-brand-700 dark:text-brand-300">
                  {pub.journal}
                </p>
                {pub.whyItMatters && (
                  <div className="mt-4 flex gap-2.5 border-t border-line pt-4">
                    <Icon name="sparkles" className="mt-0.5 size-4 shrink-0 text-accent-500" />
                    <p className="text-[0.875rem] leading-relaxed text-muted">{pub.whyItMatters}</p>
                  </div>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {pub.pdfHref && (
                    <Button href={pub.pdfHref} variant="secondary" size="sm" leadingIcon="file-text">
                      PDF
                    </Button>
                  )}
                  {pub.doi && (
                    <Button href={`https://doi.org/${pub.doi}`} variant="secondary" size="sm" leadingIcon="external-link">
                      DOI
                    </Button>
                  )}
                  <CopyButton value={pub.citation} label="Cite" size="sm" />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------------ all */}
      <Section id="all" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="All peer-reviewed" title="Filter the full" gradientWord="list." />
        <div className="mt-10">
          <PublicationFilters />
        </div>
      </Section>

      {/* --------------------------------------------------------- theses */}
      <Section id="theses" spacing="lg">
        <SectionHeading eyebrow="Theses" title="Where it" gradientWord="started." />
        <ul className="mt-10 space-y-3">
          {theses.map((t) => (
            <li key={t.title} className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">{t.title}</h3>
                <span className="font-mono text-[0.75rem] text-faint">{t.year}</span>
              </div>
              <p className="mt-1.5 text-[0.9375rem] text-muted">
                {t.degree} · {t.institution}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------- patents */}
      <Section id="patents" tone="tint" className="border-y border-line" spacing="md">
        <SectionHeading eyebrow="Patents" title="Three, so" gradientWord="far." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {patents.map((p) => (
            <li key={p.title} className="rounded-2xl border border-line bg-surface p-5">
              <Icon name="shield" className="size-4 text-brand-600 dark:text-brand-300" />
              <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-2 font-mono text-[0.6875rem] text-faint">{p.status} · {p.year}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
