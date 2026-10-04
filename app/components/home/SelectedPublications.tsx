import Link from "next/link";
import { selectedPublications } from "@/app/(home)/data";
import { socialLinks } from "@/app/data/site";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Card";
import { Icon } from "../ui/Icon";

/** §3.6 — three publication cards, each with its "why it matters". */
export function SelectedPublications() {
  return (
    <Section id="selected-publications" tone="tint" className="border-y border-line">
      <SectionHeading
        eyebrow="Selected publications"
        title="Three papers that explain"
        gradientWord="the work."
        lede="A fuller list — filterable by year, area and type — lives on the publications page."
        action={
          <div className="flex flex-wrap gap-3">
            <Button href="/publications" variant="secondary" icon="arrow-right">
              All publications
            </Button>
            <Button href={socialLinks[0].href} variant="ghost" icon="arrow-up-right">
              Google Scholar
            </Button>
          </div>
        }
      />

      <ol className="mt-12 grid gap-4 lg:grid-cols-3">
        {selectedPublications.map((pub, i) => (
          <Reveal as="li" key={pub.id} delay={i * 100}>
            <Link
              href={pub.href}
              className="group/pub flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-lg dark:hover:border-brand-600"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge tone="brand">{pub.area}</Badge>
                <span className="font-mono text-xs text-faint">{pub.year}</span>
              </div>

              <h3 className="mt-5 text-pretty text-[1.0625rem] font-semibold leading-snug text-ink">
                {pub.title}
              </h3>

              <p className="mt-2.5 text-[0.8125rem] font-medium italic text-brand-700 dark:text-brand-300">
                {pub.journal}
              </p>

              <div className="mt-5 flex gap-3 border-t border-line pt-5">
                <Icon
                  name="sparkles"
                  className="mt-0.5 size-4 shrink-0 text-accent-500"
                  strokeWidth={1.5}
                />
                <p className="text-[0.875rem] leading-relaxed text-muted">{pub.why}</p>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                Read more
                <Icon
                  name="arrow-right"
                  className="size-4 transition-transform duration-300 group-hover/pub:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
