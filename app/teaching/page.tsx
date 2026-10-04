import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Prose } from "../components/ui/Prose";
import { Button } from "../components/ui/Button";
import { Counter } from "../components/ui/Counter";
import { CTABand } from "../components/ui/CTABand";
import { Icon } from "../components/ui/Icon";
import { CourseCard } from "../components/teaching/CourseCard";
import { courses, teachingStat, philosophy, guestLectures, mentoring } from "./data";
import { formatLongDate } from "../lib/utils";
import { labSite } from "../data/site";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses, teaching philosophy, guest lectures and mentoring.",
  alternates: { canonical: "/teaching" },
};

export default function TeachingPage() {
  const current = courses.filter((c) => c.status === "current");
  const inDevelopment = courses.filter((c) => c.status === "in-development");

  return (
    <>
      <PageHeader eyebrow="Teaching" title="Explain it, or it isn't" gradientWord="finished.">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[0.8125rem] font-medium text-ink-soft">
          <Icon name="book" className="size-4 text-brand-500" />
          {teachingStat}
        </p>
      </PageHeader>

      {/* ------------------------------------------------------- courses */}
      <Section id="courses" spacing="lg">
        <SectionHeading eyebrow="Current courses" title="Teaching" gradientWord="this year." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {current.map((c, i) => (
            <Reveal as="li" key={c.code} delay={i * 90}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="new-courses" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="New courses" title="Built from the" gradientWord="research." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {inDevelopment.map((c, i) => (
            <Reveal as="li" key={c.code} delay={i * 90}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------- philosophy */}
      <Section id="philosophy" spacing="lg">
        <SectionHeading eyebrow="Teaching philosophy" title="The short" gradientWord="version." />
        <Reveal delay={100} className="mt-8 max-w-2xl">
          <Prose size="lg">
            {philosophy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Reveal>
      </Section>

      {/* -------------------------------------------------- guest lectures */}
      <Section id="guest-lectures" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Guest lectures" title="Borrowed" gradientWord="classrooms." />
        <ul className="mt-10 space-y-3">
          {guestLectures.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 90}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl border border-line bg-surface p-5">
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-ink">{g.title}</h3>
                  <p className="mt-1 text-[0.8125rem] text-muted">{g.venue}</p>
                </div>
                <time dateTime={g.date} className="font-mono text-[0.75rem] text-faint">
                  {formatLongDate(g.date)}
                </time>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------- mentoring */}
      <Section id="mentoring" spacing="lg">
        <SectionHeading eyebrow="Mentoring" title="Where students" gradientWord="go next." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-center">
          <Reveal>
            <Prose size="lg">
              <p>{mentoring.paragraph}</p>
            </Prose>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-line bg-brand-gradient-soft p-8 text-center">
              <span className="block font-display text-5xl font-semibold text-gradient">
                <Counter value={mentoring.stat.value} suffix={mentoring.stat.suffix} />
              </span>
              <span className="mt-3 block text-[0.9375rem] font-medium text-ink-soft">
                {mentoring.stat.label}
              </span>
              <Button href={labSite.href} variant="secondary" size="sm" icon="arrow-right" className="mt-6">
                Meet the lab
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
