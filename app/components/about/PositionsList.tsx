import { cn } from "@/app/lib/utils";
import { positions } from "@/app/about/data";
import { ArrowLink } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export function PositionsList() {
  const current = positions.filter((p) => p.current);
  const previous = positions.filter((p) => !p.current);

  return (
    <div className="space-y-10">
      <Group label="Current" items={current} />
      {previous.length > 0 && <Group label="Previous" items={previous} muted />}
    </div>
  );
}

function Group({
  label,
  items,
  muted = false,
}: {
  label: string;
  items: typeof positions;
  muted?: boolean;
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-faint">
        {label}
      </p>
      <ol className="space-y-3">
        {items.map((pos, i) => (
          <Reveal as="li" key={pos.title + pos.organisation} delay={i * 70}>
            <div
              className={cn(
                "group/pos relative flex gap-4 rounded-2xl border border-line p-5 transition-[border-color,background-color] duration-300",
                muted
                  ? "bg-surface-2/50"
                  : "bg-surface hover:border-brand-300/70 dark:hover:border-brand-600",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl",
                  muted
                    ? "border border-line text-muted"
                    : "bg-brand-gradient-soft text-brand-700 dark:text-brand-300",
                )}
              >
                <Icon name="building" className="size-4.5" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                    {pos.title}
                  </h3>
                  <span className="font-mono text-[0.75rem] text-faint">{pos.period}</span>
                </div>
                <p className="mt-1 text-[0.9375rem] font-medium text-brand-700 dark:text-brand-300">
                  {pos.organisation}
                </p>
                {pos.description && (
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
                    {pos.description}
                  </p>
                )}
                {pos.href && (
                  <div className="mt-3">
                    <ArrowLink href={pos.href} external={pos.external}>
                      {pos.external ? "Visit the lab site" : "Learn more"}
                    </ArrowLink>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
