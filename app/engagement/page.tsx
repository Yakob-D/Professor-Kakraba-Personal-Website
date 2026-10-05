import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Figure } from "../components/ui/Figure";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { Counter } from "../components/ui/Counter";
import { Prose } from "../components/ui/Prose";
import { TalkItem } from "../components/engagement/TalkItem";
import {
  talks,
  talksStat,
  newsMedia,
  globalEngagement,
  philanthropy,
  internationalMentorship,
  editorialRoles,
  editorialService,
  leadershipRoles,
} from "./data";
import { formatLongDate } from "../lib/utils";

export const metadata: Metadata = {
  title: "Engagement",
  description: "Talks, media, global engagement with Ghana, philanthropy, international mentorship and editorial service.",
  alternates: { canonical: "/engagement" },
};

export default function EngagementPage() {
  const pinned = talks.filter((t) => t.pinned);
  const rest = talks.filter((t) => !t.pinned);
  const currentLeadership = leadershipRoles.filter((r) => r.current);
  const earlierLeadership = leadershipRoles.filter((r) => !r.current);

  return (
    <>
      <PageHeader eyebrow="Engagement" title="Talks, media &" gradientWord="global work." />

      {/* --------------------------------------------------------- talks */}
      <Section id="talks" spacing="lg">
        <SectionHeading eyebrow="Talks & keynotes" title="On the" gradientWord="record." lede={talksStat} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {pinned.map((t, i) => (
            <Reveal as="li" key={t.title + t.venue} delay={i * 90}>
              <TalkItem talk={t} />
            </Reveal>
          ))}
        </ul>
        {rest.length > 0 && (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {rest.map((t, i) => (
              <Reveal as="li" key={t.title + t.venue} delay={i * 70}>
                <TalkItem talk={t} />
              </Reveal>
            ))}
          </ul>
        )}
      </Section>

      {/* ----------------------------------------------------- news/media */}
      <Section id="news" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="News & media" title="Press" gradientWord="coverage." />
        <ul className="mt-10 space-y-3">
          {newsMedia.map((n, i) => (
            <Reveal as="li" key={n.headline} delay={i * 90}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-brand-700 dark:text-brand-300">
                    {n.outlet}
                  </span>
                  <time dateTime={n.date} className="font-mono text-[0.75rem] text-faint">
                    {formatLongDate(n.date)}
                  </time>
                </div>
                <h3 className="mt-2 text-[1.0625rem] font-semibold leading-snug text-ink">
                  {n.headline}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{n.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------- global engagement */}
      <Section id="global" spacing="lg">
        <SectionHeading eyebrow="Global engagement" title="Ghana &" gradientWord="Africa." lede={globalEngagement.intro} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <h3 className="text-sm font-semibold text-ink">Partner institutions</h3>
            <ul className="mt-4 space-y-2.5">
              {globalEngagement.partners.map((p) => (
                <li key={p.name} className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                  <Icon name="building" className="mt-0.5 size-4 shrink-0 text-brand-500" />
                  <span className="text-[0.9375rem] font-medium text-ink">{p.name}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-line bg-brand-gradient-soft p-5">
              <div className="flex items-center gap-2">
                <Icon name="file-text" className="size-4 text-brand-600 dark:text-brand-300" />
                <h4 className="text-[0.9375rem] font-semibold text-ink">{globalEngagement.mou.title}</h4>
              </div>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                {globalEngagement.mou.description}
              </p>
              <p className="mt-2 font-mono text-[0.6875rem] text-faint">{globalEngagement.mou.date}</p>
            </div>

            <a
              href="#philanthropy"
              className="mt-6 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand-700 hover:underline dark:text-brand-300"
            >
              {globalEngagement.philanthropyNote}
              <Icon name="arrow-down" className="size-3.5 shrink-0" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {globalEngagement.galleryImages.map((img, i) => (
              <Reveal key={img.alt} delay={i * 90} className={i === 0 ? "col-span-2 sm:col-span-3" : undefined}>
                <Figure image={img} aspect={i === 0 ? "16/9" : "1"} placeholderIcon="globe" showCaption={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- philanthropy */}
      <Section id="philanthropy" tone="tint" className="border-y border-line" spacing="lg">
        <SectionHeading eyebrow="Philanthropy" title="Opening doors" gradientWord="others opened." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-start lg:gap-14">
          <Reveal>
            <Prose size="lg">
              {philanthropy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </Reveal>
          <ul className="grid gap-3">
            {philanthropy.highlights.map((h, i) => (
              <Reveal as="li" key={h.label} delay={i * 90}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                  <Icon name="heart" className="mt-1 size-4 shrink-0 text-brand-500" />
                  <div>
                    <p className="font-display text-2xl font-semibold text-gradient">{h.value}</p>
                    <p className="mt-1 text-[0.9375rem] font-medium text-ink">{h.label}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-faint">{h.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------------------------------------- international mentorship */}
      <Section id="mentorship" spacing="lg">
        <SectionHeading eyebrow="International mentorship" title="From Ghana to" gradientWord="graduate school." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-14">
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
              <h3 className="text-[1.0625rem] font-semibold text-ink">Where they went</h3>
              <p className="text-[0.8125rem] text-muted">{internationalMentorship.placementsIntro}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse">
                <thead className="bg-surface-2">
                  <tr>
                    {["Year", "Program", "Institution"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-4 py-2.5 text-left font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-faint"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {internationalMentorship.placements.map((m, i) => (
                    <tr key={i} className="border-t border-line">
                      <td className="px-4 py-2.5 font-mono text-[0.75rem] text-muted">{m.year}</td>
                      <td className="px-4 py-2.5 text-[0.8125rem] font-medium text-ink">{m.program}</td>
                      <td className="px-4 py-2.5 text-[0.8125rem] text-ink-soft">{m.institution}</td>
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
        <SectionHeading eyebrow="Editorial & service" title="Keeping the" gradientWord="field honest." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {editorialRoles.map((r) => (
            <div key={r.role + r.organisation} className="rounded-2xl border border-line bg-surface p-5">
              <Icon name="shield" className="size-4 text-brand-600 dark:text-brand-300" />
              <h3 className="mt-3 text-[0.9375rem] font-semibold text-ink">{r.role}</h3>
              <p className="mt-1 text-[0.8125rem] text-muted">{r.organisation}</p>
              <p className="mt-2 font-mono text-[0.6875rem] text-faint">{r.period}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-line bg-surface p-5">
            <Icon name="check" className="size-4 text-brand-600 dark:text-brand-300" />
            <h3 className="mt-3 text-[0.9375rem] font-semibold text-ink">{editorialService.reviewCount}</h3>
            <p className="mt-1 text-[0.8125rem] text-muted">{editorialService.reviewLabel}</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-ink">Tulane leadership</h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {currentLeadership.map((r) => (
              <li key={r.role} className="flex items-start gap-2.5 text-[0.875rem] text-ink-soft">
                <Icon name="users" className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
                {r.role}
              </li>
            ))}
          </ul>
        </div>

        {earlierLeadership.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-ink">Earlier service</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {earlierLeadership.map((r) => (
                <li key={r.role} className="flex items-start gap-2.5 text-[0.875rem] text-muted">
                  <Icon name="calendar" className="mt-0.5 size-3.5 shrink-0 text-faint" />
                  {r.role} — {r.organisation}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <CTABand />
    </>
  );
}
