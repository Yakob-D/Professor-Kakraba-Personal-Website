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
import { CourseHistoryTable, EvaluationTable } from "../components/teaching/TeachingTables";
import {
  courses,
  courseHistory,
  revivedCourseNote,
  evaluations,
  teachingStatement,
  otherTeaching,
  mastersCommittees,
  doctoralCommittees,
  studentsAdvised,
  academicAdvising,
  type CommitteeEntry,
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
  description: "Courses taught, student evaluations, teaching philosophy, guest lectures and mentoring.",
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
      <Section id="history" spacing="lg">
        <SectionHeading
          eyebrow="Teaching history"
          title="Every course,"
          gradientWord="every term."
          lede={teachingStatement}
        />
        <div className="mt-10 space-y-6">
          {courseHistory.map((h, i) => (
            <Reveal key={h.institution} delay={i * 80}>
              <CourseHistoryTable history={h} />
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[0.75rem] text-faint">
          <span className="text-brand-500">*</span> {revivedCourseNote}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="border-b border-line px-5 py-4">
            <h3 className="text-xl font-bold text-ink">Other teaching experience</h3>
            <p className="mt-0.5 text-[0.8125rem] text-muted">Schools in Cape Coast, Ghana, before graduate study</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse">
              <thead className="bg-surface-2">
                <tr>
                  {["Institution", "Course", "Times taught", "Mode", "Level"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-4 py-2.5 text-left font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-faint"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {otherTeaching.map((t) => (
                  <tr key={t.institution} className="border-t border-line">
                    <td className="px-4 py-2.5 text-[0.8125rem] font-medium text-ink">
                      {t.institution} <span className="font-mono text-[0.75rem] text-faint">({t.period})</span>
                    </td>
                    <td className="px-4 py-2.5 text-[0.8125rem] text-ink-soft">{t.course}</td>
                    <td className="px-4 py-2.5 font-mono text-[0.8125rem] text-ink-soft">{t.timesTaught}</td>
                    <td className="px-4 py-2.5 text-[0.8125rem] text-ink-soft">{t.mode}</td>
                    <td className="px-4 py-2.5 text-[0.8125rem] text-ink-soft">{t.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- evaluations */}
      <Section id="evaluations" tone="tint" className="border-y border-line" spacing="lg">
        <SectionHeading eyebrow="Student evaluations" title="What students" gradientWord="said." lede={evaluationsNote} />
        <div className="mt-10 space-y-6">
          {evaluations.map((t, i) => (
            <Reveal key={t.institution} delay={i * 80}>
              <EvaluationTable table={t} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------- philosophy */}
      <Section id="philosophy">
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
      <Section id="guest-lectures" tone="tint" className="border-y border-line" spacing="lg">
        <SectionHeading
          eyebrow="Guest lectures & seminars"
          title="Borrowed"
          gradientWord="classrooms."
          lede={`${guestLectures.length} guest lectures and invited seminars, 2024–2026.`}
        />
        <ol className="mt-10 grid gap-3 md:grid-cols-2">
          {guestLectures.map((g, i) => (
            <Reveal as="li" key={g.title + g.year + g.host} delay={(i % 4) * 70} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-5">
                <Icon name="mic" className="mt-1 size-4 shrink-0 text-brand-600 dark:text-brand-300" />
                <div className="min-w-0">
                  <p className="font-mono text-[0.75rem] text-faint">{g.date ?? g.year}</p>
                  <h3 className="mt-1 text-[1rem] font-semibold leading-snug text-ink">{g.title}</h3>
                  {g.course && (
                    <p className="mt-1.5 text-[0.8125rem] font-medium text-brand-700 dark:text-brand-300">
                      {g.course}
                    </p>
                  )}
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">{g.host}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------- committees */}
      <Section id="committees" spacing="lg">
        <SectionHeading eyebrow="Thesis & dissertation committees" title="Students he has" gradientWord="supervised." />

        <h3 className="mt-10 text-xl font-bold text-ink">Doctoral committees</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {doctoralCommittees.map((c) => (
            <CommitteeCard key={c.student + c.title} c={c} />
          ))}
        </ol>

        <h3 className="mt-12 text-xl font-bold text-ink">Master’s committees</h3>
        {mastersCommittees.map((g) => (
          <div key={g.period} className="mt-6">
            <p className="font-mono text-[0.8125rem] font-semibold text-brand-700 dark:text-brand-300">{g.period}</p>
            <ol className="mt-3 grid gap-3 md:grid-cols-2">
              {g.entries.map((c) => (
                <CommitteeCard key={c.student + c.title} c={c} />
              ))}
            </ol>
          </div>
        ))}
      </Section>

      {/* -------------------------------------------------------- advising */}
      <Section id="advising" tone="tint" className="border-y border-line" spacing="lg">
        <SectionHeading eyebrow="Academic advising" title="Guiding the" gradientWord="path." lede={academicAdvising.intro} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <ol className="list-decimal space-y-2 rounded-2xl border border-line bg-surface p-6 pl-10 text-[0.9375rem] text-ink-soft marker:font-mono marker:text-[0.75rem] marker:text-faint">
            {academicAdvising.advisees.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ol>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <p className="border-b border-line px-5 py-3 text-lg font-bold text-ink">Students advised</p>
            <table className="w-full border-collapse">
              <thead className="bg-surface-2">
                <tr>
                  <th scope="col" className="px-5 py-2 text-left font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-faint">Year</th>
                  <th scope="col" className="px-5 py-2 text-right font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-faint">No. of students</th>
                </tr>
              </thead>
              <tbody>
                {studentsAdvised.map((r) => (
                  <tr key={r.year} className="border-t border-line">
                    <td className="px-5 py-2 font-mono text-[0.8125rem] text-ink-soft">{r.year}</td>
                    <td className="px-5 py-2 text-right font-mono text-[0.8125rem] font-semibold text-ink">{r.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- student resources */}
      <Section id="student-resources" spacing="md">
        <SectionHeading eyebrow="Student resources" title="For students in the" gradientWord="classroom." />
        <Reveal delay={100} className="mt-6 max-w-2xl">
          <p className="text-[0.9375rem] leading-relaxed text-muted">{studentResources.intro}</p>
        </Reveal>
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

function CommitteeCard({ c }: { c: CommitteeEntry }) {
  return (
    <li className="h-full rounded-2xl border border-line bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <p className="text-[1rem] font-semibold text-ink">{c.student}</p>
        <span className="font-mono text-[0.75rem] text-faint">{c.date}</span>
      </div>
      <p className="mt-1 text-[0.8125rem] font-medium text-brand-700 dark:text-brand-300">{c.role}</p>
      <p className="mt-1.5 text-[0.875rem] leading-snug text-ink-soft">{c.title}</p>
      {c.program && <p className="mt-1.5 text-[0.8125rem] text-muted">{c.program}</p>}
      {c.note && <p className="mt-1 text-[0.8125rem] italic text-faint">{c.note}</p>}
    </li>
  );
}
