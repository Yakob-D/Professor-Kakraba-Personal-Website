import Link from "next/link";
import {
  labSite,
  navCta,
  primaryNav,
  profile,
  siteMeta,
  socialLinks,
} from "@/app/data/site";
import { formatLongDate, formatMonthYear } from "@/app/lib/utils";
import { Container } from "../ui/Section";
import { Icon } from "../ui/Icon";
import { GraphNetwork } from "../ui/GraphNetwork";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 w-[30rem] opacity-[0.14]"
      >
        <GraphNetwork animated={false} />
      </div>
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-60" />

      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity + contact */}
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">
              {profile.displayName}
              <span className="text-muted">, {profile.credential}</span>
            </p>
            <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              {profile.titles[0]}
              <br />
              {profile.titles[2]}
            </p>

            <div className="mt-6 space-y-2.5 text-[0.9375rem]">
              <a
                href={`mailto:${profile.email}`}
                className="group/f inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-brand-700 dark:hover:text-brand-200"
              >
                <Icon name="mail" className="size-4 text-brand-500" />
                <span className="group-hover/f:underline group-hover/f:underline-offset-[3px]">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.office.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group/f flex items-start gap-2.5 text-ink-soft transition-colors hover:text-brand-700 dark:hover:text-brand-200"
              >
                <Icon name="map-pin" className="mt-0.5 size-4 shrink-0 text-brand-500" />
                <span>
                  {profile.office.street}
                  <br />
                  {profile.office.city}
                </span>
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    title={s.label}
                    className="grid size-10 place-items-center rounded-full border border-line text-muted transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-200"
                  >
                    <Icon name={s.icon} className="size-[1.05rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {[...primaryNav, navCta].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-ink-soft transition-colors hover:text-brand-700 dark:hover:text-brand-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-faint">
              Elsewhere
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={labSite.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group/l block rounded-2xl border border-line bg-brand-gradient-soft p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-300"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ink">
                    Visit the {labSite.shortName}
                  </span>
                  <Icon
                    name="arrow-up-right"
                    className="size-4 text-brand-600 transition-transform group-hover/l:translate-x-0.5 dark:text-brand-300"
                  />
                </span>
                <span className="mt-1.5 block text-[0.8125rem] leading-snug text-muted">
                  The research group, students and open positions.
                </span>
              </a>

              <a
                href={profile.cv.href}
                className="group/c flex items-center justify-between gap-3 rounded-2xl border border-line p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-300"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">Download CV</span>
                  <span className="mt-1 block text-[0.8125rem] text-muted">
                    PDF · updated {formatMonthYear(profile.cv.updated)}
                  </span>
                </span>
                <Icon
                  name="download"
                  className="size-4 text-brand-600 transition-transform group-hover/c:translate-y-0.5 dark:text-brand-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[0.8125rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.displayName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Icon name="clock" className="size-3.5" />
            Last updated {formatLongDate(siteMeta.lastUpdated)}
          </p>
        </div>
      </Container>
    </footer>
  );
}
