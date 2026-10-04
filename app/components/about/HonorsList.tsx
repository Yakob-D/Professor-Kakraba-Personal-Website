import { honors } from "@/app/about/data";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

export function HonorsList() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {honors.map((h, i) => (
        <Reveal as="li" key={h.title + h.year} delay={i * 70}>
          <div className="group/h flex h-full gap-4 rounded-2xl border border-line bg-surface p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent-300/70">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-brand-950">
              <Icon name="award" className="size-4.5" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink">
                  {h.title}
                </h3>
                <span className="font-mono text-[0.6875rem] text-faint">{h.year}</span>
              </div>
              <p className="mt-1 text-[0.8125rem] text-muted">{h.organisation}</p>
              {h.note && (
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-soft">
                  {h.note}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
