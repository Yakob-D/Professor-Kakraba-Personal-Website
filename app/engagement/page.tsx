import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Figure } from "../components/ui/Figure";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { Counter } from "../components/ui/Counter";
import { Prose } from "../components/ui/Prose";
import { Button } from "../components/ui/Button";
import { PresentationList } from "../components/publications/PresentationList";
import { MediaLinks } from "../components/engagement/MediaLinks";
import {
  talks,
  talksStat,
  mediaCoverage,
  globalEngagement,
  ghanaTalks,
  philanthropy,
  internationalMentorship,
  editorialRoles,
  editorialService,
  refereedJournals,
  orcidReviews,
  universityCommittees,
  schoolCommittees,
} from "./data";
import { allPublications } from "../publications/data";

export const metadata: Metadata = {
  title: "Engagement",
  description: "Talks, media coverage, global engagement with Ghana, philanthropy, international mentorship and editorial service.",
  alternates: { canonical: "/engagement" },
};

const th = "px-4 py-2.5 text-left font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-faint";

export default function EngagementPage() {
  const mediaYears = [...new Set(mediaCoverage.map((m) => m.year))];

  return (
    <>
      <PageHeader eyebrow="Engagement" title="Talks, media &" gradientWord="global work." />

      {/* --------------------------------------------------------- talks */}
      <Section id="talks" spacing="lg">
        <SectionHeading
          eyebrow="Talks & keynotes"
          title="On the"
          gradientWord="record."
          lede={talksStat}
          action={
            <Button href="/conferences" variant="secondary" icon="arrow-right">
              All conferences
            </Button>
          }
        />
        <div className="mt-10">
          <PresentationList presentations={talks} filterable />
        </div>
      </Section>

      {/* ------------------------------------------------- media coverage */}
      <Section id="news" tone="tint" className="border-y border-line">
        <SectionHeading
          eyebrow="Media coverage & public engagement"
          title="Press"
          gradientWord="coverage."
          lede={`All ${mediaCoverage.length} entries from the CV, with links to every article.`}
        />
        <div className="mt-10 space-y-12">
          {mediaYears.map((year) => (
            <section key={year}>
              <h3 className="border-b border-line pb-3 font-display text-2xl font-bold text-ink">{year}</h3>
              <ol className="mt-4 space-y-3">
                {mediaCoverage
                  .filter((m) => m.year === year)
                  .map((m) => (
                    <Reveal as="li" key={m.headline}>
                      <div className="rounded-2xl border border-line bg-surface p-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-brand-700 dark:text-brand-300">
                            {m.outlet}
                          </span>
                          {m.date && <span className="font-mono text-[0.75rem] text-faint">{m.date}</span>}
                        </div>
                        <h4 className="mt-2 text-[1.0625rem] font-semibold leading-snug text-ink">{m.headline}</h4>
                        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{m.description}</p>
                        <MediaLinks links={m.links} />
                        {m.subItems && (
                          <ol className="mt-5 space-y-4 border-l-2 border-brand-200 pl-5 dark:border-brand-800">
                            {m.subItems.map((sub, i) => (
                              <li key={sub.headline}>
                                <span className="font-mono text-[0.75rem] font-semibold text-brand-600 dark:text-brand-300">
                                  {String.fromCharCode(97 + i)}.
                                </span>{" "}
                                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
                                  {sub.outlet}
                                </span>
                                <p className="mt-1 text-[0.9375rem] font-semibold leading-snug text-ink">
                                  {sub.headline}
                                </p>
                                <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">{sub.description}</p>
                                <MediaLinks links={sub.links} />
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </Reveal>
                  ))}
              </ol>
            </section>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- global engagement */}
      <Section id="global" spacing="lg">
        <SectionHeading eyebrow="Global engagement" title="Ghana &" gradientWord="Africa." lede={globalEngagement.intro} />

        <Reveal delay={80} className="mt-6 max-w-3xl">
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{globalEngagement.delegationNote}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h3 className="text-xl font-bold text-ink">Partner institutions</h3>
            <ul className="mt-4 space-y-3">
              {globalEngagement.partners.map((p) => (
                <li key={p.name} className="rounded-2xl border border-line bg-surface p-5">
                  <div className="flex items-start gap-3">
                    <Icon name="building" className="mt-1 size-4 shrink-0 text-brand-500" />
                    <div className="min-w-0 space-y-4">
                      <p className="text-[1rem] font-semibold text-ink">{p.name}</p>
                      {p.coverage.map((c) => (
                        <div key={c.headline}>
                          <p className="text-[0.875rem] leading-relaxed text-muted">{c.description}</p>
                          <p className="mt-1 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-muted">
                            {c.outlet}
                            {c.date && <span className="font-mono font-normal normal-case"> · {c.date}</span>}
                          </p>
                          <p className="mt-0.5 text-[0.875rem] leading-snug text-ink-soft">“{c.headline}”</p>
                          <MediaLinks links={c.links} />
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-line bg-brand-gradient-soft p-5">
              <div className="flex items-center gap-2">
                <Icon name="file-text" className="size-4 shrink-0 text-brand-600 dark:text-brand-300" />
                <h4 className="text-[0.9375rem] font-semibold text-ink">{globalEngagement.overview.headline}</h4>
              </div>
              <p className="mt-1 text-[0.75rem] text-faint">
                {globalEngagement.overview.outlet}, {globalEngagement.overview.year}
              </p>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                {globalEngagement.overview.description}
              </p>
              <MediaLinks links={globalEngagement.overview.links} />
            </div>
          </div>

          <div className="grid content-start grid-cols-2 gap-3 sm:grid-cols-3">
            {globalEngagement.galleryImages.map((img, i) => (
              <Reveal key={img.alt} delay={i * 90} className={i === 0 ? "col-span-2 sm:col-span-3" : undefined}>
                <Figure image={img} aspect={i === 0 ? "16/9" : "1"} placeholderIcon="globe" showCaption={false} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Talks given in Ghana */}
        <h3 className="mt-14 text-xl font-bold text-ink">Keynotes, talks and panels in Ghana</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {ghanaTalks.map((t) => (
            <li key={t.title + t.date} className="h-full rounded-2xl border border-line bg-surface p-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-brand-700 dark:bg-brand-900/60 dark:text-brand-200">
                  {t.role}
                </span>
                <span className="font-mono text-[0.75rem] text-faint">{t.date}</span>
              </div>
              <p className="mt-2 text-[0.9375rem] font-semibold leading-snug text-ink">{t.title}</p>
              <p className="mt-1 flex items-start gap-1.5 text-[0.8125rem] text-muted">
                <Icon name="map-pin" className="mt-[0.2rem] size-3.5 shrink-0 text-brand-500" />
                {t.venue}
              </p>
              {t.links && <MediaLinks links={t.links} />}
            </li>
          ))}
        </ul>

        {/* International thesis committees */}
        <h3 className="mt-14 text-xl font-bold text-ink">International thesis and dissertation committees</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {globalEngagement.internationalCommittees.map((c) => (
            <li key={c.student + c.period} className="h-full rounded-2xl border border-line bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-[1rem] font-semibold text-ink">{c.student}</p>
                <span className="font-mono text-[0.75rem] text-faint">{c.period}</span>
              </div>
              <p className="mt-1 text-[0.8125rem] font-medium text-brand-700 dark:text-brand-300">
                {c.role} · {c.degree}
              </p>
              <p className="mt-1.5 text-[0.875rem] leading-snug text-ink-soft">{c.title}</p>
              <p className="mt-1.5 flex items-start gap-1.5 text-[0.8125rem] text-muted">
                <Icon name="map-pin" className="mt-[0.2rem] size-3.5 shrink-0 text-brand-500" />
                {c.institution}
              </p>
              {c.note && <p className="mt-1 text-[0.8125rem] italic text-faint">{c.note}</p>}
            </li>
          ))}
        </ul>

        {/* Research with African partners */}
        {allPublications
          .filter((p) => p.title.includes("Africa"))
          .map((p) => (
            <div key={p.title} className="mt-10 rounded-2xl border border-line bg-brand-gradient-soft p-5">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-brand-700 dark:text-brand-300">
                Research with African partners · {p.year}
              </p>
              <p className="mt-1.5 text-[1rem] font-semibold leading-snug text-ink">{p.title}</p>
              <p className="mt-1 text-[0.8125rem] text-muted">
                <em>{p.journal}</em>
                {p.details && <>, {p.details}</>}
              </p>
              {p.doi && <MediaLinks links={[{ label: `doi.org/${p.doi}`, href: `https://doi.org/${p.doi}` }]} />}
            </div>
          ))}
      </Section>

      {/* ---------------------------------------------------- philanthropy */}
      <Section id="philanthropy" tone="tint" className="border-y border-line" spacing="lg">
        <SectionHeading eyebrow="Philanthropy" title="Opening doors" gradientWord="others opened." />
        <Reveal className="mt-10 max-w-3xl">
          <Prose size="lg">
            {philanthropy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Reveal>

        <h3 className="mt-12 text-xl font-bold text-ink">{philanthropy.scholarsTitle}</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {philanthropy.scholars.map((sch, i) => (
            <Reveal as="li" key={sch.name} delay={i * 80} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-gradient-soft font-mono text-[0.8125rem] font-semibold text-brand-700 dark:text-brand-200">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="text-[1.0625rem] font-semibold text-ink">{sch.name}</p>
                    <span className="font-mono text-[0.75rem] text-faint">{sch.period}</span>
                  </div>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-soft">{sch.support}</p>
                  <p className="mt-1.5 flex items-start gap-1.5 text-[0.8125rem] text-muted">
                    <Icon name="map-pin" className="mt-[0.2rem] size-3.5 shrink-0 text-brand-500" />
                    Origin: {sch.origin}
                  </p>
                  {sch.note && <p className="mt-1.5 text-[0.8125rem] italic text-faint">{sch.note}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-6">
          <div className="flex gap-4 rounded-2xl border border-brand-300/70 bg-brand-gradient-soft p-6 dark:border-brand-600">
            <Icon name="heart" className="mt-1 size-5 shrink-0 text-brand-600 dark:text-brand-300" />
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-bold text-ink">{philanthropy.emergency.title}</h3>
                <span className="font-mono text-[0.75rem] text-faint">{philanthropy.emergency.year}</span>
              </div>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{philanthropy.emergency.body}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------------------------------- international mentorship */}
      <Section id="mentorship" spacing="lg">
        <SectionHeading eyebrow="International mentorship" title="From Ghana to" gradientWord="graduate school." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-start lg:gap-14">
          <Reveal>
            <Prose size="lg">
              {internationalMentorship.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {internationalMentorship.stats.map((st, i) => (
              <Reveal key={st.label} delay={i * 90}>
                <div className="rounded-2xl border border-line bg-brand-gradient-soft p-6 text-center">
                  <span className="block font-display text-4xl font-semibold text-gradient">
                    <Counter value={st.value} prefix={st.prefix} suffix={st.suffix} />
                  </span>
                  <span className="mt-2 block text-[0.875rem] font-medium text-ink-soft">{st.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line px-5 py-4">
              <h3 className="text-xl font-bold text-ink">{internationalMentorship.placementsTitle}</h3>
              <span className="font-mono text-[0.75rem] text-faint">
                {internationalMentorship.placements.length} mentees
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse">
                <thead className="bg-surface-2">
                  <tr>
                    {["#", "Name", "Year", "Program", "Institution"].map((h) => (
                      <th key={h} scope="col" className={th}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {internationalMentorship.placements.map((m, i) => (
                    <tr key={m.name + m.year} className="border-t border-line">
                      <td className="px-4 py-2.5 font-mono text-[0.75rem] text-faint">{i + 1}</td>
                      <td className="px-4 py-2.5 text-[0.875rem] font-semibold text-ink">{m.name}</td>
                      <td className="px-4 py-2.5 font-mono text-[0.75rem] text-muted">{m.year}</td>
                      <td className="px-4 py-2.5 text-[0.8125rem] font-medium text-ink-soft">{m.program}</td>
                      <td className="px-4 py-2.5 text-[0.8125rem] text-muted">{m.institution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ------------------------------------------------- editorial/service */}
      <Section id="editorial" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Editorial & peer-review activities" title="Keeping the" gradientWord="field honest." />

        <h3 className="mt-10 text-xl font-bold text-ink">Editorial board membership</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {editorialRoles.map((r) => (
            <div key={r.role + r.organisation} className="rounded-2xl border border-line bg-surface p-5">
              <Icon name="shield" className="size-4 text-brand-600 dark:text-brand-300" />
              <h4 className="mt-3 text-[0.9375rem] font-semibold text-ink">{r.role}</h4>
              <p className="mt-1 text-[0.8125rem] text-muted">{r.organisation}</p>
              <p className="mt-2 font-mono text-[0.6875rem] text-faint">{r.period}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-line bg-surface p-5">
            <Icon name="check" className="size-4 text-brand-600 dark:text-brand-300" />
            <h4 className="mt-3 text-[0.9375rem] font-semibold text-ink">{editorialService.reviewCount}</h4>
            <p className="mt-1 text-[0.8125rem] text-muted">{editorialService.reviewLabel}</p>
          </div>
        </div>

        <h3 className="mt-12 text-xl font-bold text-ink">Refereed journals</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {refereedJournals.map((g) => (
            <div key={g.period} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-[0.75rem] font-semibold text-brand-700 dark:text-brand-300">{g.period}</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-[0.875rem] text-ink-soft marker:text-faint">
                {g.journals.map((j) => (
                  <li key={j}>Reviewer, {j}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line px-5 py-4">
            <div>
              <h3 className="text-xl font-bold text-ink">Verified peer review activity</h3>
              <p className="mt-0.5 text-[0.8125rem] text-muted">
                Source: ORCID Peer Review record ·{" "}
                <a href={orcidReviews.href} target="_blank" rel="noreferrer noopener" className="font-medium text-brand-700 hover:underline dark:text-brand-300">
                  ORCID: {orcidReviews.orcid}
                </a>
              </p>
            </div>
            <span className="font-mono text-[0.75rem] text-faint">{orcidReviews.summary}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[56rem] border-collapse">
              <thead className="bg-surface-2">
                <tr>
                  {["#", "Journal", "Publisher", "ISSN (print / electronic)", "Reviews", "Year(s)", "Notes"].map((h) => (
                    <th key={h} scope="col" className={th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orcidReviews.rows.map((r, i) => (
                  <tr key={r.journal} className="border-t border-line align-top">
                    <td className="px-4 py-2.5 font-mono text-[0.75rem] text-faint">{i + 1}</td>
                    <td className="px-4 py-2.5 text-[0.8125rem] font-semibold text-ink">{r.journal}</td>
                    <td className="px-4 py-2.5 text-[0.8125rem] text-ink-soft">{r.publisher}</td>
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.75rem] text-muted">{r.issn}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-[0.8125rem] font-semibold text-ink">{r.reviews}</td>
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.75rem] text-muted">{r.years}</td>
                    <td className="px-4 py-2.5 text-[0.8125rem] text-muted">{r.notes}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-line-strong bg-surface-2">
                  <td />
                  <td className="px-4 py-2.5 text-[0.8125rem] font-bold text-ink">Total</td>
                  <td />
                  <td />
                  <td className="px-4 py-2.5 text-right font-mono text-[0.8125rem] font-bold text-ink">
                    {editorialService.reviewCount}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-[0.75rem] text-muted">2024–2026</td>
                  <td className="px-4 py-2.5 text-[0.8125rem] text-muted">{orcidReviews.totalNote}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- committees */}
      <Section id="committees" spacing="lg">
        <SectionHeading eyebrow="Service" title="Committees &" gradientWord="leadership." />
        {[
          { label: "University committees / advisory boards", items: universityCommittees },
          { label: "School / department committees", items: schoolCommittees },
        ].map((group) => (
          <div key={group.label} className="mt-10">
            <h3 className="text-xl font-bold text-ink">{group.label}</h3>
            <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
              {group.items.map((c) => (
                <li key={c.role} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-6">
                  <span className="w-32 shrink-0 font-mono text-[0.75rem] text-faint">{c.period ?? ""}</span>
                  <span className="text-[0.875rem] leading-relaxed text-ink-soft">{c.role}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <CTABand />
    </>
  );
}
