import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Card";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { featuredPublications, publicationVenues, publicationRecordNote, theses } from "./data";
import { patents, patentsCount, patentsNote } from "../research/data";
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
                id={pub.id}
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
                <div className="mt-4 flex gap-2.5 border-t border-line pt-4">
                  <Icon name="sparkles" className="mt-0.5 size-4 shrink-0 text-accent-500" />
                  <p className="text-[0.875rem] leading-relaxed text-muted">{pub.whyItMatters}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------- venue record */}
      <Section id="record" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Full publication record" title="Published" gradientWord="across." />
        <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
          {publicationRecordNote}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {publicationVenues.map((v, i) => (
            <Reveal as="li" key={v.journal} delay={i * 60}>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
                <Icon name="file-text" className="mt-0.5 size-4 shrink-0 text-brand-500" />
                <div>
                  <p className="text-[0.9375rem] font-medium italic text-ink">{v.journal}</p>
                  {v.area && <Badge tone="neutral" className="mt-1.5">{v.area}</Badge>}
                  {v.note && <p className="mt-1.5 text-[0.8125rem] text-muted">{v.note}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------------- theses */}
      <Section id="theses" spacing="lg">
        <SectionHeading eyebrow="Theses" title="Where it" gradientWord="started." />
        <ul className="mt-10 space-y-3">
          {theses.map((t) => (
            <li key={t.title} className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                  “{t.title}”
                </h3>
                <span className="font-mono text-[0.75rem] text-faint">{t.year}</span>
              </div>
              <p className="mt-1.5 text-[0.9375rem] text-muted">
                {t.degree} · {t.institution}
                {t.advisor && <> · advised by {t.advisor}</>}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------- patents */}
      <Section id="patents" tone="tint" className="border-y border-line" spacing="md">
        <SectionHeading eyebrow="Patents" title={`${patentsCount}, so`} gradientWord="far." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {patents.map((p) => (
            <li key={p.title} className="rounded-2xl border border-line bg-surface p-5">
              <Icon name="shield" className="size-4 text-brand-600 dark:text-brand-300" />
              <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-2 font-mono text-[0.6875rem] text-faint">{p.number}</p>
              <p className="mt-1 text-[0.75rem] text-muted">{p.status} · {p.filingBody}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.8125rem] italic text-faint">{patentsNote}</p>
      </Section>

      <CTABand />
    </>
  );
}
