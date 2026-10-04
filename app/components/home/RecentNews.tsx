import Link from "next/link";
import { recentNews } from "@/app/(home)/data";
import { byNewest, formatLongDate } from "@/app/lib/utils";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Card";
import { Icon } from "../ui/Icon";

/** §3.7 — dated news items, newest first. */
export function RecentNews() {
  const items = [...recentNews].sort(byNewest);

  return (
    <Section id="news">
      <SectionHeading
        eyebrow="Recent news"
        title="What's happened"
        gradientWord="lately."
        action={
          <Button href="/engagement#news" variant="secondary" icon="arrow-right">
            News &amp; media
          </Button>
        }
      />

      <ol className="mt-12 divide-y divide-line border-y border-line">
        {items.map((item, i) => {
          const inner = (
            <>
              <div className="flex shrink-0 flex-col gap-2 sm:w-44">
                <time
                  dateTime={item.date}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-faint"
                >
                  {formatLongDate(item.date)}
                </time>
                <Badge tone="outline" className="w-fit">
                  {item.kind}
                </Badge>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-pretty text-[1.0625rem] font-semibold leading-snug text-ink transition-colors group-hover/news:text-brand-700 dark:group-hover/news:text-brand-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {item.excerpt}
                </p>
              </div>

              {item.href && (
                <Icon
                  name="arrow-right"
                  className="mt-1 hidden size-5 shrink-0 text-faint transition-all duration-300 group-hover/news:translate-x-1 group-hover/news:text-brand-500 sm:block"
                />
              )}
            </>
          );

          const shell =
            "group/news flex flex-col gap-4 py-7 sm:flex-row sm:gap-8 transition-colors";

          return (
            <Reveal as="li" key={item.date + item.title} delay={i * 80}>
              {item.href ? (
                <Link href={item.href} className={`${shell} -mx-4 rounded-2xl px-4 hover:bg-surface-2`}>
                  {inner}
                </Link>
              ) : (
                <div className={shell}>{inner}</div>
              )}
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
