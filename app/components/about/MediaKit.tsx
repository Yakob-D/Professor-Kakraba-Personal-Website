import { mediaKit } from "@/app/about/data";
import { Button } from "../ui/Button";
import { CopyButton } from "../ui/CopyButton";
import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

export function MediaKit() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <Reveal>
        <p className="text-[0.9375rem] leading-relaxed text-muted">{mediaKit.intro}</p>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-line bg-surface-2 p-4">
          <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-500" />
          <p className="text-[0.8125rem] leading-relaxed text-ink-soft">{mediaKit.terms}</p>
        </div>

        <h3 className="mt-8 text-sm font-semibold text-ink">Speaking topics</h3>
        <ul className="mt-3 space-y-2">
          {mediaKit.speakingTopics.map((topic) => (
            <li key={topic} className="flex gap-2.5 text-[0.875rem] leading-snug text-ink-soft">
              <Icon name="mic" className="mt-0.5 size-3.5 shrink-0 text-accent-500" />
              {topic}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120}>
        <div className="grid gap-3">
          {mediaKit.assets.map((asset) => (
            <div
              key={asset.label}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-700 dark:text-brand-300">
                <Icon name={asset.icon} className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-[0.9375rem] font-semibold text-ink">{asset.label}</h4>
                  {asset.meta && (
                    <span className="font-mono text-[0.6875rem] text-faint">{asset.meta}</span>
                  )}
                </div>
                <p className="mt-0.5 text-[0.8125rem] text-muted">{asset.description}</p>
              </div>
              {asset.href ? (
                <Button href={asset.href} variant="secondary" size="sm" icon="download">
                  Download
                </Button>
              ) : (
                <span className="shrink-0 rounded-full border border-line px-3 py-1.5 text-[0.75rem] text-faint">
                  Pending
                </span>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-line-strong p-5">
            <p className="text-[0.8125rem] text-muted">Need the full bio text for a programme?</p>
            <CopyButton value="Samuel Kakraba, Ph.D." label="Copy name" size="sm" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
