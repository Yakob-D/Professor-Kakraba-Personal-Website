import type { CourseHistory, EvaluationTable as EvaluationTableData } from "@/app/teaching/data";
import { cn } from "@/app/lib/utils";

/** Shared shell: a bordered card whose table scrolls sideways on narrow
 *  screens instead of pushing the page wider. */
function TableShell({
  title,
  subtitle,
  aside,
  children,
}: {
  title: string;
  subtitle: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line px-5 py-4">
        <div>
          <h3 className="text-xl font-bold text-ink">{title}</h3>
          <p className="mt-0.5 text-[0.8125rem] text-muted">{subtitle}</p>
        </div>
        {aside}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

const th = "px-4 py-2.5 text-left font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-faint";
const td = "px-4 py-2.5 align-top text-[0.8125rem] text-ink-soft";

export function CourseHistoryTable({ history }: { history: CourseHistory }) {
  return (
    <TableShell
      title={history.institution}
      subtitle={history.department}
      aside={
        <span className="font-mono text-[0.75rem] text-faint">
          {history.period} · {history.rows.length} sections
        </span>
      }
    >
      <table className="w-full min-w-[40rem] border-collapse">
        <thead className="bg-surface-2">
          <tr>
            <th scope="col" className={th}>Term</th>
            <th scope="col" className={th}>Code</th>
            <th scope="col" className={th}>Course</th>
            <th scope="col" className={th}>Level</th>
            <th scope="col" className={cn(th, "text-right")}>Credits</th>
            <th scope="col" className={th}>Modality</th>
          </tr>
        </thead>
        <tbody>
          {history.rows.map((r, i) => (
            <tr key={i} className="border-t border-line">
              <td className={cn(td, "whitespace-nowrap font-mono text-[0.75rem] text-muted")}>
                {r.semester} {r.year}
              </td>
              <td className={cn(td, "whitespace-nowrap font-mono text-[0.75rem] font-semibold text-brand-700 dark:text-brand-300")}>
                {r.code}
              </td>
              <td className={cn(td, "font-medium text-ink")}>
                {r.title}
                {r.revived && (
                  <span className="ml-0.5 text-brand-500" aria-label="revived course">
                    *
                  </span>
                )}
              </td>
              <td className={td}>{r.level}</td>
              <td className={cn(td, "text-right font-mono")}>{r.credits}</td>
              <td className={td}>{r.modality ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableShell>
  );
}

export function EvaluationTable({ table }: { table: EvaluationTableData }) {
  const hasScore = table.rows.some((r) => r.score);
  return (
    <TableShell
      title={table.institution}
      subtitle={`${table.instrument} · ${table.measure}`}
      aside={<span className="font-mono text-[0.75rem] text-faint">{table.rows.length} evaluations</span>}
    >
      <table className="w-full min-w-[36rem] border-collapse">
        <thead className="bg-surface-2">
          <tr>
            <th scope="col" className={th}>Course</th>
            <th scope="col" className={th}>Title</th>
            <th scope="col" className={th}>Semester</th>
            {hasScore && <th scope="col" className={cn(th, "text-right")}>Mean</th>}
            <th scope="col" className={cn(th, "w-[30%]")}>Result</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i} className="border-t border-line">
              <td className={cn(td, "whitespace-nowrap font-mono text-[0.75rem] font-semibold text-brand-700 dark:text-brand-300")}>
                {r.code}
              </td>
              <td className={cn(td, "font-medium text-ink")}>{r.title}</td>
              <td className={cn(td, "whitespace-nowrap text-muted")}>{r.semester}</td>
              {hasScore && <td className={cn(td, "text-right font-mono")}>{r.score ?? "—"}</td>}
              <td className={td}>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2" aria-hidden>
                    <span className="block h-full rounded-full bg-brand-gradient" style={{ width: `${r.percent}%` }} />
                  </span>
                  <span className="w-14 text-right font-mono text-[0.75rem] font-semibold text-ink">
                    {Number.isInteger(r.percent) ? r.percent : r.percent.toFixed(2)}%
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableShell>
  );
}
