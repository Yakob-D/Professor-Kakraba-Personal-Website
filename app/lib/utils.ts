/** Tiny class-name joiner. Keeps JSX readable without pulling in a dependency. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** "2026-07-01" -> "July 2026" */
export function formatMonthYear(iso: string) {
  const [y, m] = iso.split("-");
  if (!m) return y;
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

/** "2026-03-14" -> "March 14, 2026" */
export function formatLongDate(iso: string) {
  const [y, m, d] = iso.split("-");
  if (!d) return formatMonthYear(iso);
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Sort helper for anything with a `date` or `year` field, newest first. */
export function byNewest<T extends { date?: string; year?: number }>(a: T, b: T) {
  if (a.date && b.date) return a.date < b.date ? 1 : -1;
  return (b.year ?? 0) - (a.year ?? 0);
}

/** Builds a `mailto:` href with an optional pre-filled subject. */
export function mailtoHref(email: string, subject?: string) {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}
