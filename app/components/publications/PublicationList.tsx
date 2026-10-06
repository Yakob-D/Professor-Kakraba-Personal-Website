import type { PeerReviewedPublication } from "@/app/publications/data";
import { Icon } from "../ui/Icon";

/** Groups items by year, newest first, keeping their original order. */
export function groupByYear<T extends { year: number }>(items: T[]) {
  const years = [...new Set(items.map((i) => i.year))].sort((a, b) => b - a);
  return years.map((year) => ({ year, items: items.filter((i) => i.year === year) }));
}

/**
 * The full peer-reviewed list, laid out like the research group's
 * publications page: year jump-links with counts, then numbered entries
 * whose titles link to the DOI.
 */
export function PublicationList({ publications }: { publications: PeerReviewedPublication[] }) {
  const groups = groupByYear(publications);
  // Number entries 1…N across all years, in display order.
  const order = new Map(groups.flatMap((g) => g.items).map((p, i) => [p, i + 1]));

  return (
    <div>
      <nav aria-label="Jump to year" className="flex flex-wrap items-center gap-2">
        {groups.map((g) => (
          <a
            key={g.year}
            href={`#pub-${g.year}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 dark:hover:text-brand-200"
          >
            {g.year}
            <span className="rounded-full bg-surface-2 px-1.5 font-mono text-[0.6875rem] text-faint">
              {g.items.length}
            </span>
          </a>
        ))}
        <span className="ml-auto font-mono text-[0.8125rem] text-faint">
          {publications.length} publications
        </span>
      </nav>

      <div className="mt-10 space-y-12">
        {groups.map((g) => (
          <section key={g.year} id={`pub-${g.year}`} className="scroll-mt-28">
            <h3 className="border-b border-line pb-3 font-display text-2xl font-bold text-ink">{g.year}</h3>
            <ol className="mt-2 divide-y divide-line">
              {g.items.map((p) => {
                const url = p.doi ? `https://doi.org/${p.doi}` : undefined;
                return (
                  <li key={p.title} className="flex gap-4 py-5">
                    <span className="w-7 shrink-0 pt-0.5 text-right font-mono text-[0.8125rem] font-semibold text-brand-600 dark:text-brand-300">
                      {order.get(p)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:text-brand-700 hover:underline dark:hover:text-brand-200"
                          >
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </h4>
                      <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
                        {p.authors}
                      </p>
                      <p className="mt-1 text-[0.875rem] text-ink-soft">
                        <em className="font-medium text-brand-700 dark:text-brand-300">{p.journal}</em>
                        {p.details && <>, {p.details}</>}
                      </p>
                      {p.identifiers && (
                        <p className="mt-1 font-mono text-[0.75rem] text-muted">{p.identifiers}</p>
                      )}
                      {p.note && (
                        <p className="mt-1 text-[0.8125rem] italic text-faint">{p.note}</p>
                      )}
                      {p.impact && (
                        <p className="mt-1.5 text-[0.8125rem] text-muted">
                          <span className="font-semibold text-ink-soft">Impact: </span>
                          {p.impact}
                        </p>
                      )}
                      {p.role && (
                        <p className="mt-0.5 text-[0.8125rem] text-muted">
                          <span className="font-semibold text-ink-soft">Role: </span>
                          {p.role}
                        </p>
                      )}
                      {p.links?.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mr-4 mt-2 inline-flex items-center gap-1 text-[0.75rem] font-medium text-brand-700 hover:underline dark:text-brand-300"
                        >
                          {l.label}
                          <Icon name="arrow-up-right" className="size-3 shrink-0" />
                        </a>
                      ))}
                      {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-2 inline-flex items-center gap-1 break-all font-mono text-[0.75rem] text-brand-700 hover:underline dark:text-brand-300"
                        >
                          doi.org/{p.doi}
                          <Icon name="arrow-up-right" className="size-3 shrink-0" />
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
