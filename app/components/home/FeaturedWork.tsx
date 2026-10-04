import { featuredWork } from "@/app/(home)/data";
import { Container, MeshBackdrop } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Figure } from "../ui/Figure";
import { Icon } from "../ui/Icon";

/** §3.5 — the SMART-Pred showcase. */
export function FeaturedWork() {
  const w = featuredWork;

  return (
    <section id="smart-pred" className="relative overflow-hidden py-20 sm:py-28">
      <MeshBackdrop intensity="subtle" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Screenshot */}
          <Reveal direction="right" duration={900} className="order-last lg:order-first">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl"
              />
              <Figure
                image={w.image}
                aspect="16/11"
                rounded="rounded-[1.5rem]"
                placeholderIcon="activity"
                sizes="(min-width: 1024px) 520px, 100vw"
                className="relative"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal direction="left" duration={900}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gradient" aria-hidden />
              <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                {w.eyebrow}
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              <span className="text-gradient">{w.name}</span>
            </h2>
            <p className="mt-3 text-lg font-medium text-ink-soft">{w.tagline}</p>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{w.description}</p>

            <dl className="mt-9 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface">
              {w.highlights.map((h) => (
                <div key={h.label} className="px-4 py-5 text-center">
                  <dt className="sr-only">{h.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-semibold text-gradient">
                      {h.value}
                    </span>
                    <span className="mt-1.5 block text-[0.75rem] leading-tight text-muted">
                      {h.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-muted">
              <Icon name="building" className="size-4 text-accent-500" />
              {w.partner}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {w.links.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  variant={link.variant}
                  icon={link.icon}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
