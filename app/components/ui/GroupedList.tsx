import { cn } from "@/app/lib/utils";

export type ListGroup = { label: string; items: string[] };

/** Labelled groups of plain list items, for CV sections such as coursework
 *  or professional development. */
export function GroupedList({
  groups,
  columns = 2,
  numbered = false,
}: {
  groups: ListGroup[];
  columns?: 1 | 2;
  numbered?: boolean;
}) {
  const List = numbered ? "ol" : "ul";
  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.label}>
          <h3 className="text-lg font-bold text-ink">{g.label}</h3>
          <List
            className={cn(
              "mt-3 grid gap-x-8 gap-y-2",
              columns === 2 && "sm:grid-cols-2",
              numbered && "list-decimal pl-5 marker:font-mono marker:text-[0.75rem] marker:text-faint",
            )}
          >
            {g.items.map((item) => (
              <li
                key={item}
                className={cn(
                  "text-[0.9375rem] leading-relaxed text-ink-soft",
                  !numbered && "relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-brand-gradient",
                )}
              >
                {item}
              </li>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
}
