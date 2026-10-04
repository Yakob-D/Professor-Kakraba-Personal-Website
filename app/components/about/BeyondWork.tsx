import { beyondWork } from "@/app/about/data";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

export function BeyondWork() {
  return (
    <Reveal className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent-gradient text-brand-950">
        <Icon name="heart" className="size-5" />
      </span>
      <div>
        <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{beyondWork.intro}</p>
        <ul className="mt-3 flex flex-wrap gap-4">
          {beyondWork.items.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5 text-[0.8125rem] text-muted">
              <Icon name={item.icon} className="size-3.5 text-brand-500" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
