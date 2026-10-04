import type { ResearchOutput } from "@/app/research/data";
import { Icon } from "../ui/Icon";
import { ArrowLink } from "../ui/Button";

const iconFor: Record<ResearchOutput["kind"], string> = {
  paper: "file-text",
  software: "code",
  patent: "shield",
  collaboration: "users",
};

export function OutputsList({ items }: { items: ResearchOutput[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3"
        >
          <Icon name={iconFor[item.kind]} className="size-4 shrink-0 text-brand-500" />
          {item.href ? (
            <ArrowLink href={item.href} className="text-[0.9375rem] font-medium text-ink">
              {item.label}
            </ArrowLink>
          ) : (
            <span className="text-[0.9375rem] font-medium text-ink-soft">{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
