import Link from "next/link";
import { headlineMetrics, type Metric } from "@/app/data/site";
import { formatMonthYear } from "@/app/lib/utils";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Counter } from "../ui/Counter";
import { Icon } from "../ui/Icon";

/** §3.3 — the metrics strip. Every figure carries its own "as of" date. */
export function AtAGlance() {
  return (
    <Section id="at-a-glance" spacing="lg">
      <SectionHeading
        eyebrow="At a glance"
        title="The work, in"
        gradientWord="numbers."
        lede="Figures are kept current by hand and each one is dated, so you can see exactly how fresh it is."
      />

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {headlineMetrics.map((metric, i) => (
          <Reveal as="li" key={metric.label} delay={i * 70}>
            <MetricTile metric={metric} />
          </Reveal>
        ))}

        {/* Filler tile that keeps the 4-column grid honest and adds a route out. */}
        <Reveal as="li" delay={headlineMetrics.length * 70}>
          <Link
            href="/publications"
            className="group/all flex h-full flex-col justify-between rounded-3xl bg-brand-gradient p-6 text-white shadow-md transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-glow dark:text-brand-950"
          >
            <Icon name="sparkles" className="size-6 opacity-90" />
            <span className="mt-8">
              <span className="block font-display text-xl font-semibold leading-snug">
                See every paper, thesis and patent
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm opacity-90">
                Publications
                <Icon
                  name="arrow-right"
                  className="size-4 transition-transform group-hover/all:translate-x-0.5"
                />
              </span>
            </span>
          </Link>
        </Reveal>
      </ul>
    </Section>
  );
}

function MetricTile({ metric }: { metric: Metric }) {
  const body = (
    <>
      <span className="block font-display text-[2.75rem] font-semibold leading-none tracking-tight text-gradient">
        <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
      </span>
      <span className="mt-4 block text-[0.9375rem] font-medium leading-snug text-ink">
        {metric.label}
      </span>
      <span className="mt-auto flex items-center gap-1.5 pt-5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-faint">
        as of {formatMonthYear(metric.asOf)}
        {metric.note && <span className="normal-case tracking-normal">· {metric.note}</span>}
      </span>
    </>
  );

  const shell =
    "relative flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-500";

  if (!metric.href) {
    return <div className={shell}>{body}</div>;
  }

  const external = metric.href.startsWith("http");
  const interactive = `${shell} group/m hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-lg dark:hover:border-brand-600`;

  const arrow = (
    <Icon
      name={external ? "arrow-up-right" : "arrow-right"}
      className="absolute right-5 top-5 size-4 text-faint opacity-0 transition-all duration-300 group-hover/m:translate-x-0.5 group-hover/m:text-brand-500 group-hover/m:opacity-100"
    />
  );

  return external ? (
    <a href={metric.href} target="_blank" rel="noreferrer noopener" className={interactive}>
      {arrow}
      {body}
    </a>
  ) : (
    <Link href={metric.href} className={interactive}>
      {arrow}
      {body}
    </Link>
  );
}
