import { cn } from "@/app/lib/utils";
import type { Talk } from "@/app/engagement/data";
import { formatLongDate } from "@/app/lib/utils";
import { Badge } from "../ui/Card";
import { Icon } from "../ui/Icon";

export function TalkItem({ talk }: { talk: Talk }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-5 transition-[border-color,transform] duration-300",
        talk.pinned
          ? "border-brand-300/70 bg-brand-gradient-soft hover:-translate-y-0.5 dark:border-brand-600"
          : "border-line bg-surface hover:-translate-y-0.5 hover:border-brand-300/50",
      )}
    >
      {talk.pinned && (
        <span className="absolute right-5 top-5">
          <Icon name="sparkles" className="size-4 text-accent-500" />
        </span>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={talk.pinned ? "brand" : "outline"}>{talk.type}</Badge>
        <time dateTime={talk.date} className="ml-auto font-mono text-[0.75rem] text-faint">
          {formatLongDate(talk.date)}
        </time>
      </div>
      <h3 className="mt-3 pr-6 text-[1.0625rem] font-semibold leading-snug text-ink">
        {talk.title}
      </h3>
      <p className="mt-1.5 flex items-center gap-1.5 text-[0.875rem] text-muted">
        <Icon name="map-pin" className="size-3.5 text-brand-500" />
        {talk.venue}
      </p>
      {talk.videoUrl && (
        <div className="mt-4 overflow-hidden rounded-xl border border-line">
          <div className="aspect-video">
            <iframe
              src={talk.videoUrl}
              title={talk.title}
              loading="lazy"
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
