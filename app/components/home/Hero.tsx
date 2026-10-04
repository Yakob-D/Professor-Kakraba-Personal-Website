import Link from "next/link";
import { profile } from "@/app/data/site";
import { heroMeta } from "@/app/(home)/data";
import { Container, MeshBackdrop } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Portrait } from "../ui/Figure";
import { GraphNetwork } from "../ui/GraphNetwork";
import { Icon } from "../ui/Icon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <MeshBackdrop intensity="medium" />

      {/* Graph-network lines behind the type — the nod to his graph theory work. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 w-[72rem] max-w-none -translate-x-1/2 opacity-[0.28] dark:opacity-[0.3]"
      >
        <GraphNetwork />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-faint opacity-[0.3] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* ----------------------------------------------------- type side */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2 pr-4 text-[0.8125rem] font-medium text-ink-soft backdrop-blur">
                <span className="relative grid size-5 place-items-center">
                  <span className="absolute size-2 rounded-full bg-brand-400 animate-pulse-ring motion-reduce:hidden" />
                  <span className="size-2 rounded-full bg-brand-500" />
                </span>
                {heroMeta.availability}
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.1rem]">
                {profile.firstName}
                <br />
                <span className="text-gradient">{profile.lastName}</span>
                <span className="text-muted">, {profile.credential}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-7 flex gap-4">
                <span aria-hidden className="mt-1 w-px shrink-0 bg-brand-gradient" />
                <ul className="space-y-1.5 text-[0.9375rem] leading-relaxed text-ink-soft sm:text-base">
                  {profile.titles.map((line, i) => (
                    <li key={line} className={i === 0 ? "font-medium text-ink" : undefined}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={230}>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/about" size="lg" icon="arrow-right">
                  About me
                </Button>
                <Button href="/research" size="lg" variant="secondary" leadingIcon="layers">
                  Research
                </Button>
              </div>
            </Reveal>

            <Reveal delay={370}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-7">
                {heroMeta.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group/q inline-flex items-center gap-2 text-[0.8125rem] font-medium text-muted transition-colors hover:text-brand-700 dark:hover:text-brand-200"
                    >
                      <Icon name={link.icon} className="size-4 text-brand-500" />
                      {link.label}
                      <Icon
                        name="arrow-right"
                        className="size-3.5 opacity-0 transition-all duration-300 group-hover/q:translate-x-0.5 group-hover/q:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* --------------------------------------------------- portrait side */}
          <Reveal direction="none" delay={200} duration={1000} className="lg:pl-6">
            <div className="relative mx-auto max-w-[26rem] lg:max-w-none">
              <Portrait image={profile.portrait} />

              {/* Floating credential chip */}
              <div className="absolute -bottom-5 -left-3 animate-float sm:-left-6 motion-reduce:animate-none">
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-lg backdrop-blur">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-gradient text-white dark:text-brand-950">
                    <Icon name="graduation-cap" className="size-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[0.8125rem] font-semibold text-ink">
                      Ph.D. Bioinformatics
                    </span>
                    <span className="block text-[0.6875rem] text-muted">UALR &amp; UAMS, 2021</span>
                  </span>
                </div>
              </div>

              <div className="absolute -right-2 top-8 animate-float [animation-delay:-2.5s] sm:-right-5 motion-reduce:animate-none">
                <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-3.5 py-2.5 shadow-lg backdrop-blur">
                  <Icon name="globe" className="size-4 text-accent-500" />
                  <span className="text-[0.8125rem] font-medium text-ink">Ghana ↔ Louisiana</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
