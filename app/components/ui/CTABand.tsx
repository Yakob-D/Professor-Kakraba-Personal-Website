import { Button } from "./Button";
import { Container, MeshBackdrop } from "./Section";
import { Reveal } from "./Reveal";
import { GraphNetwork } from "./GraphNetwork";
import { Icon } from "./Icon";
import { labSite } from "@/app/data/site";

/** The closing band. Appears at the foot of every page. */
export function CTABand({
  title = "Interested in collaborating, or inviting Dr. Kakraba to speak?",
  lede = "Research partnerships, keynotes, data-science training and media enquiries are all welcome.",
  primary = { label: "Get in touch", href: "/contact" },
  secondary,
  showLabLink = true,
}: {
  title?: string;
  lede?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  showLabLink?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-tint py-20 sm:py-24">
      <MeshBackdrop intensity="medium" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-[0.22] lg:block"
      >
        <GraphNetwork />
      </div>

      <Container className="relative">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold leading-[1.12] text-ink sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={primary.href} size="lg" icon="arrow-right">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>

          {showLabLink && (
            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <Icon name="users" className="size-4 text-brand-500" />
              Looking for the research group?
              <a
                href={labSite.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group/l inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
              >
                {labSite.shortName}
                <Icon
                  name="arrow-up-right"
                  className="size-3.5 transition-transform group-hover/l:translate-x-0.5"
                />
              </a>
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
