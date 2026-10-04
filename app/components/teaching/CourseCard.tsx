import type { Course } from "@/app/teaching/data";
import { Badge } from "../ui/Card";
import { Icon } from "../ui/Icon";

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group/course flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand-300/70">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[0.8125rem] font-semibold text-brand-700 dark:text-brand-300">
          {course.code}
        </span>
        <Badge tone={course.status === "current" ? "brand" : "accent"}>
          {course.status === "current" ? "Current" : "In development"}
        </Badge>
      </div>
      <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug text-ink">
        {course.title}
      </h3>
      <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-muted">
        {course.description}
      </p>
      <p className="mt-4 flex items-center gap-1.5 text-[0.75rem] text-faint">
        <Icon name="graduation-cap" className="size-3.5" />
        {course.level}
      </p>
    </div>
  );
}
