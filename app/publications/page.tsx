import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { PublicationList } from "../components/publications/PublicationList";
import { featuredPublications, allPublications, publicationsIntro, theses, manuscriptsUnderReview, manuscriptsInPreparation } from "./data";
import { presentations } from "./conferences";
import { patents, patentsCount } from "../research/data";
import { socialLinks } from "../data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed publications, theses, patents and patent applications by Samuel Kakraba, Ph.D.",
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
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-brand-700 hover:underline dark:hover:text-brand-200"
                  >
                    {pub.title}
                  </a>
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

      {/* ------------------------------------------- full publication list */}
      <Section id="record" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Peer-reviewed publications" title="The full" gradientWord="record." lede={publicationsIntro} />
        <div className="mt-10">
          <PublicationList publications={allPublications} />
        </div>
      </Section>

      {/* ------------------------------------------- manuscripts in review */}
      <Section id="in-review" spacing="lg">
        <SectionHeading
          eyebrow="Publications in review"
          title="Manuscripts under"
          gradientWord="review."
          lede={`${manuscriptsUnderReview.length} manuscripts submitted and under review.`}
        />
        <ol className="mt-10 divide-y divide-line">
          {manuscriptsUnderReview.map((m, i) => (
            <li key={m.title} className="flex gap-4 py-5">
              <span className="w-7 shrink-0 pt-0.5 text-right font-mono text-[0.8125rem] font-semibold text-brand-600 dark:text-brand-300">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">{m.title}</h3>
                <p className="mt-1.5 text-[0.875rem] text-muted">{m.authors}</p>
                <p className="mt-1 text-[0.875rem] italic text-ink-soft">{m.submission}</p>
                {m.impact && (
                  <p className="mt-1.5 text-[0.8125rem] text-muted">
                    <span className="font-semibold text-ink-soft">Impact: </span>
                    {m.impact}
                  </p>
                )}
                {m.role && (
                  <p className="mt-0.5 text-[0.8125rem] text-muted">
                    <span className="font-semibold text-ink-soft">Role: </span>
                    {m.role}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 text-xl font-bold text-ink">Manuscripts in preparation</h3>
        <ol className="mt-4 list-decimal space-y-2 rounded-2xl border border-line bg-surface p-6 pl-11 text-[0.9375rem] text-ink-soft marker:font-mono marker:text-[0.75rem] marker:text-faint">
          {manuscriptsInPreparation.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------ conference presentations */}
      <Section id="conferences" tone="tint" className="border-y border-line" spacing="md">
        <div className="flex flex-col gap-5 rounded-3xl border border-line bg-brand-gradient-soft p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">Conference presentations</h2>
            <p className="mt-1 text-[0.9375rem] text-muted">
              All {presentations.length} talks, keynotes, panels, workshops and posters, 2015–2026, now have their own page.
            </p>
          </div>
          <Button href="/conferences" icon="arrow-right" className="shrink-0">
            View conferences
          </Button>
        </div>
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
              {t.record && (
                <p className="mt-1 text-[0.8125rem] text-muted">
                  {t.record}{" "}
                  {t.href && (
                    <a href={t.href} target="_blank" rel="noreferrer noopener" className="font-medium text-brand-700 hover:underline dark:text-brand-300">
                      {t.href.replace("https://", "")}
                    </a>
                  )}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------- patents */}
      <Section id="patents" tone="tint" className="border-y border-line" spacing="md">
        <SectionHeading eyebrow="Patents & applications" title={`${patentsCount}, so`} gradientWord="far." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {patents.map((p) => (
            <li key={p.title} className="rounded-2xl border border-line bg-surface p-5">
              <Icon name="shield" className="size-4 text-brand-600 dark:text-brand-300" />
              <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-1.5 text-[0.75rem] text-muted">{p.inventors} ({p.year})</p>
              <p className="mt-2 font-mono text-[0.6875rem] text-faint">{p.number}</p>
              <p className="mt-1 text-[0.75rem] text-muted">{p.status} · {p.filingBody}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
