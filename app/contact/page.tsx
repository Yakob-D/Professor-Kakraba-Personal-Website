import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { CopyButton } from "../components/ui/CopyButton";
import { Icon } from "../components/ui/Icon";
import { ContactForm } from "../components/contact/ContactForm";
import { studentNote } from "./data";
import { labSite, profile, socialLinks } from "../data/site";

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
        lede="Collaboration enquiries, speaking invitations and media requests are all welcome — the fastest route is the form below or a direct email."
      />

      <Section id="contact" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* --------------------------------------------------- details */}
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-gradient-soft text-brand-700 dark:text-brand-300">
                    <Icon name="mail" className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-faint">
                      Email
                    </p>
                    <a href={`mailto:${profile.email}`} className="text-[0.9375rem] font-medium text-ink hover:text-brand-700 dark:hover:text-brand-200">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <CopyButton value={profile.email} label="Copy email" size="sm" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <a
                href={profile.office.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group/office block rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-300/70"
              >
                <div className="flex items-start gap-3">
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
                </div>
              </a>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-line bg-surface p-6">
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

            <Reveal delay={200}>
              <a
                href={labSite.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group/student flex items-start gap-3 rounded-2xl border border-dashed border-line-strong p-6 transition-colors hover:border-brand-300"
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

          {/* ------------------------------------------------------- form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
