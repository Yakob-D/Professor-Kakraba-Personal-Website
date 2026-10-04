import { education } from "@/app/about/data";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

export function EducationList() {
  return (
    <ol className="relative space-y-6 border-l border-line pl-8">
      {education.map((deg, i) => (
        <Reveal as="li" key={deg.degree + deg.year} delay={i * 90} className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.35rem] top-0.5 grid size-7 place-items-center rounded-full bg-brand-gradient text-white shadow-sm dark:text-brand-950"
          >
            <Icon name="graduation-cap" className="size-3.5" />
          </span>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-[1.0625rem] font-semibold text-ink">
              {deg.degree} in {deg.field}
            </h3>
            <span className="font-mono text-[0.75rem] text-faint">{deg.year}</span>
          </div>
          <p className="mt-1 text-[0.9375rem] text-brand-700 dark:text-brand-300">
            {deg.institution}
            {deg.secondInstitution && <> &amp; {deg.secondInstitution}</>}
          </p>
          <p className="mt-0.5 text-[0.8125rem] text-muted">
            {deg.location}
            {deg.note && <span className="text-faint"> · {deg.note}</span>}
          </p>
          {deg.thesis && (
            <p className="mt-2 text-[0.875rem] italic leading-relaxed text-ink-soft">
              “{deg.thesis.title}”
              {deg.thesis.advisor && (
                <span className="not-italic text-muted"> — {deg.thesis.advisor}</span>
              )}
            </p>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
