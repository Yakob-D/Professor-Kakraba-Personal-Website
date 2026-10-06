import type { MediaLink } from "@/app/engagement/data";
import { Icon } from "../ui/Icon";

/** The article links printed on the CV for a media item. */
export function MediaLinks({ links }: { links: MediaLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[0.8125rem] font-medium text-brand-700 transition-colors hover:border-brand-300 dark:text-brand-300"
        >
          {l.label}
          <Icon name="arrow-up-right" className="size-3.5" />
        </a>
      ))}
    </div>
  );
}
