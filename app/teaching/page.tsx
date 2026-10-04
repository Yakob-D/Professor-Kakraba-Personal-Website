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
import {
  courses,
  teachingStat,
  philosophy,
  guestLectures,
  studentResources,
  evaluationsNote,
  mentoring,
} from "./data";
import { labSite } from "../data/site";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses, teaching philosophy, guest lectures and mentoring.",
  alternates: { canonical: "/teaching" },
};

export default function TeachingPage() {
  const current = courses.filter((c) => c.status === "current");
  const inDevelopment = courses.filter((c) => c.status === "in-development");
  const history = courses.filter((c) => c.status === "history");

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
            <Reveal as="li" key={c.title} delay={i * 90}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section id="new-courses" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="New courses" title="Built from the" gradientWord="research." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {inDevelopment.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------- teaching history */}
      <Section id="history" spacing="md">
        <SectionHeading eyebrow="Teaching history" title="Earlier" gradientWord="classrooms." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {history.map((c, i) => (
            <Reveal as="li" key={c.title + c.institution} delay={i * 60}>
              <div className="rounded-xl border border-line bg-surface px-4 py-3">
                <p className="text-[0.875rem] font-medium text-ink">{c.title}</p>
                <p className="mt-0.5 text-[0.75rem] text-faint">{c.institution}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* --------------------------------------------------- philosophy */}
      <Section id="philosophy" tone="tint" className="border-y border-line">
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
      <Section id="guest-lectures" spacing="lg">
        <SectionHeading eyebrow="Guest lectures" title="Borrowed" gradientWord="classrooms." />
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {guestLectures.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 90}>
              <div className="rounded-2xl border border-line bg-surface p-5">
                <Icon name="mic" className="size-4 text-brand-600 dark:text-brand-300" />
                <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink">
                  {g.title}
                </h3>
                {g.venue && <p className="mt-1.5 text-[0.8125rem] text-muted">{g.venue}</p>}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------- student resources */}
      <Section id="student-resources" tone="tint" className="border-y border-line" spacing="md">
        <SectionHeading eyebrow="Student resources" title="For students in the" gradientWord="classroom." />
        <Reveal delay={100} className="mt-6 max-w-2xl">
          <p className="text-[0.9375rem] leading-relaxed text-muted">{studentResources.intro}</p>
        </Reveal>
      </Section>

      {/* ------------------------------------------------------- evaluations */}
      <Section id="evaluations" spacing="md">
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-5">
          <Icon name="check" className="size-4 shrink-0 text-brand-500" />
          <p className="text-[0.9375rem] text-ink-soft">{evaluationsNote}</p>
        </div>
      </Section>

      {/* -------------------------------------------------------- mentoring */}
      <Section id="mentoring" tone="tint" className="border-y border-line" spacing="lg">
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
