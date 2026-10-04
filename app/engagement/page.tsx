import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Figure } from "../components/ui/Figure";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { TalkItem } from "../components/engagement/TalkItem";
import {
  talks,
  talksStat,
  newsMedia,
  globalEngagement,
  editorialRoles,
  editorialService,
  leadershipRoles,
} from "./data";
import { formatLongDate } from "../lib/utils";

export const metadata: Metadata = {
  title: "Engagement",
  description: "Talks, media, global engagement with Ghana, and editorial service.",
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

            <p className="mt-6 text-[0.8125rem] italic leading-relaxed text-faint">
              {globalEngagement.philanthropyNote}
            </p>
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
