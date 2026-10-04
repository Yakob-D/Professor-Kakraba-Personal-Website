import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { CopyButton } from "../components/ui/CopyButton";
import { Icon } from "../components/ui/Icon";
import { contactReasons, studentNote } from "./data";
import { labSite, profile, socialLinks } from "../data/site";
import { mailtoHref } from "../lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaboration, speaking invitations or media enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        gradientWord="research, talks or press."
        lede="Collaboration enquiries, speaking invitations and media requests are all welcome — the fastest route is straight to his inbox."
      />

      {/* ------------------------------------------------------- email */}
      <Section id="email" spacing="lg">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-line bg-brand-gradient-soft p-10 text-center sm:p-14">
            <span className="grid size-14 place-items-center rounded-2xl border border-line bg-surface text-brand-700 shadow-sm dark:text-brand-300">
              <Icon name="mail" className="size-6" />
            </span>
            <div>
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-faint">
                Email
              </p>
              <a
                href={mailtoHref(profile.email)}
                className="mt-2 block text-2xl font-semibold text-ink transition-colors hover:text-brand-700 dark:hover:text-brand-200 sm:text-3xl"
              >
                {profile.email}
              </a>
            </div>
            <CopyButton value={profile.email} label="Copy email" />
          </div>
        </Reveal>
      </Section>

      {/* ---------------------------------------------- reason shortcuts */}
      <Section id="reasons" tone="tint" className="border-y border-line">
        <SectionHeading
          eyebrow="What's this about?"
          title="Pick a reason,"
          gradientWord="the subject fills itself in."
          lede="Each button opens your email client with the subject already set, so a message about a talk doesn't get buried under a generic one."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactReasons.map((r, i) => (
            <Reveal as="li" key={r.value} delay={i * 70}>
              <a
                href={mailtoHref(profile.email, r.subject)}
                className="group/reason flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-surface p-6 text-center transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand-300/70"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-gradient-soft text-brand-700 dark:text-brand-300">
                  <Icon name={r.icon} className="size-5" />
                </span>
                <span className="text-[0.9375rem] font-medium text-ink">{r.label}</span>
                <span className="mt-auto inline-flex items-center gap-1 text-[0.75rem] text-faint">
                  Subject: “{r.subject}”
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------ office / profiles */}
      <Section id="details" spacing="lg">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <a
              href={profile.office.mapUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/office flex h-full items-start gap-3 rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-300/70"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-700 dark:text-brand-300">
                <Icon name="map-pin" className="size-4.5" />
              </span>
              <div>
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-faint">
                  Office
                </p>
                <p className="mt-1 text-[0.9375rem] font-medium text-ink">
                  {profile.office.building}
                </p>
                <p className="text-[0.875rem] text-muted">
                  {profile.office.street}, {profile.office.city}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-faint">
                Profiles
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      title={s.label}
                      className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200"
                    >
                      <Icon name={s.icon} className="size-[1.05rem]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140} className="sm:col-span-2 lg:col-span-1">
            <a
              href={labSite.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group/student flex h-full items-start gap-3 rounded-2xl border border-dashed border-line-strong p-6 transition-colors hover:border-brand-300"
            >
              <Icon name="graduation-cap" className="mt-0.5 size-4 shrink-0 text-accent-500" />
              <p className="text-[0.8125rem] leading-relaxed text-muted">
                {studentNote}{" "}
                <span className="font-medium text-brand-700 group-hover/student:underline dark:text-brand-300">
                  Visit the lab site →
                </span>
              </p>
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
