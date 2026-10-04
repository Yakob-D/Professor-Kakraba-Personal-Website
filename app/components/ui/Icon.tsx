import { cn } from "@/app/lib/utils";

/* Inline icon set — no runtime dependency, tree-shaken, and every glyph
   inherits `currentColor` so it reacts to the theme automatically.
   Data files refer to icons by *name* (a string) so they stay serialisable
   for the future backend. */

export type IconName = keyof typeof paths | keyof typeof custom;

const paths = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-up-right": "M7 17 17 7M9 7h8v8",
  "arrow-left": "M19 12H5M11 18l-6-6 6-6",
  "chevron-down": "m6 9 6 6 6-6",
  "chevron-right": "m9 6 6 6-6 6",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  check: "m20 6-11 11-5-5",
  x: "M18 6 6 18M6 6l12 12",
  menu: "M4 7h16M4 12h16M4 17h16",
  mail: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3.5 7.5 12 13l8.5-5.5",
  "map-pin": "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  download: "M12 3v12M7.5 10.5 12 15l4.5-4.5M4 20h16",
  copy: "M9 9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-4M5 9h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z",
  sun: "M12 4V2M12 22v-2M4 12H2M22 12h-2M6 6 4.5 4.5M19.5 19.5 18 18M18 6l1.5-1.5M4.5 19.5 6 18M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z",
  moon: "M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z",
  "external-link": "M14 4h6v6M20 4 11 13M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  filter: "M4 6h16M7 12h10M10 18h4",
  calendar: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M8 3v4M16 3v4",
  mic: "M12 15a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v4a4 4 0 0 0 4 4zM5 11a7 7 0 0 0 14 0M12 18v3M8.5 21h7",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.3 9h17.4M3.3 15h17.4M12 3c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3z",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14 7 22l5-2.5L17 22l-1.5-8",
  users: "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5zM20 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 4.3a3.75 3.75 0 0 1 0 7",
  "file-text": "M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7zM14 3v4h4M9 12h6M9 16h6",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM19 19v2H6",
  code: "m9 8-4 4 4 4M15 8l4 4-4 4",
  play: "M8 5.5v13l11-6.5z",
  quote: "M9 11H5.5a.5.5 0 0 1-.5-.5V9a4 4 0 0 1 4-4M19 11h-3.5a.5.5 0 0 1-.5-.5V9a4 4 0 0 1 4-4M9 11v3a4 4 0 0 1-4 4M19 11v3a4 4 0 0 1-4 4",
  sparkles: "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8zM5 14l.6 1.6L7.2 16l-1.6.6L5 18.2l-.6-1.6L2.8 16l1.6-.6z",
  building: "M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 10h3a1 1 0 0 1 1 1v10M3 21h18M8.5 8h3M8.5 12h3M8.5 16h3",
  "graduation-cap": "m3 9 9-4.5L21 9l-9 4.5zM7 11v5.2c0 .5.3 1 .8 1.2A10 10 0 0 0 12 18a10 10 0 0 0 4.2-.6c.5-.2.8-.7.8-1.2V11M21 9v5",
  activity: "M3 12h3.5l2.5-7 4 14 2.5-7H21",
  shield: "M12 21s7-3.2 7-9V5.8l-7-2.6-7 2.6V12c0 5.8 7 9 7 9z",
  flask: "M9 3h6M10 3v6.2L5.3 18A2 2 0 0 0 7 21h10a2 2 0 0 0 1.7-3L14 9.2V3M7.5 15h9",
  network: "M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM19 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 8v4M12 12 6 16M12 12l6 4",
  brain: "M9.5 4a3 3 0 0 0-3 3 2.8 2.8 0 0 0-1.5 2.5 2.8 2.8 0 0 0 .8 2A2.8 2.8 0 0 0 5 14a3 3 0 0 0 3 3v3M14.5 4a3 3 0 0 1 3 3 2.8 2.8 0 0 1 1.5 2.5 2.8 2.8 0 0 1-.8 2A2.8 2.8 0 0 1 19 14a3 3 0 0 1-3 3v3M12 4.5v15.5",
  "trending-up": "M3 17l6-6 4 4 7-7M15 8h5v5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7.5V12l3 2",
  link: "M10 13a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7L11.3 6M14 11a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7L12.7 18",
  database: "M12 7.5c4.4 0 8-1 8-2.25S16.4 3 12 3 4 4 4 5.25 7.6 7.5 12 7.5zM4 5.25v13.5C4 20 7.6 21 12 21s8-1 8-2.25V5.25M4 12c0 1.25 3.6 2.25 8 2.25s8-1 8-2.25",
  layers: "m12 3 8 4.5-8 4.5-8-4.5zM4 12l8 4.5 8-4.5M4 16.5 12 21l8-4.5",
  "message-square": "M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z",
  heart: "M12 20s-7-4.3-7-9.3A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7 3.7c0 5-7 9.3-7 9.3z",
  "dna": "M8 3c0 6 8 6 8 12M16 3c0 6-8 6-8 12M8 21h0M16 21h0M9.5 7h5M9 11h6M9.5 15h5",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z",
  "arrow-down": "M12 5v14M6 13l6 6 6-6",
} as const;

/* Brand marks need their own fill geometry. */
const custom = {
  scholar: (
    <path
      d="M12 2.5 1.5 9.1l4.1 2.6V9.3L12 5.4l6.4 3.9v2.4l4.1-2.6zM12 12.6a5.3 5.3 0 0 0-5.3 4.9 5.3 5.3 0 0 0 10.6 0A5.3 5.3 0 0 0 12 12.6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  orcid: (
    <>
      <circle cx="12" cy="12" r="9.2" fill="currentColor" stroke="none" />
      <path
        d="M8.6 7.9h1.5v8.6H8.6zM9.35 6.9a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9zM12.4 7.9h3.1c2.6 0 3.9 1.9 3.9 4.3s-1.5 4.3-3.9 4.3h-3.1zm1.5 1.4v5.8h1.4c1.8 0 2.5-1.3 2.5-2.9 0-1.7-.8-2.9-2.5-2.9z"
        fill="var(--surface)"
        stroke="none"
      />
    </>
  ),
  linkedin: (
    <path
      d="M4.5 3h15A1.5 1.5 0 0 1 21 4.5v15A1.5 1.5 0 0 1 19.5 21h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3zM8.3 18v-7.4H6V18zM7.15 9.5a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7zM18 18v-4.2c0-2.2-1.2-3.3-2.8-3.3a2.4 2.4 0 0 0-2.1 1.2v-1H10.9c.03.6 0 7.3 0 7.3h2.2v-4a1.5 1.5 0 0 1 .07-.55 1.2 1.2 0 0 1 1.13-.8c.8 0 1.4.55 1.4 1.7V18z"
      fill="currentColor"
      stroke="none"
    />
  ),
  github: (
    <path
      d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.68-.21.68-.47v-1.8c-2.7.6-3.3-1.3-3.3-1.3-.45-1.13-1.1-1.43-1.1-1.43-.9-.6.07-.6.07-.6 1 .07 1.5 1.02 1.5 1.02.88 1.5 2.3 1.07 2.86.82.09-.64.35-1.08.63-1.33-2.16-.24-4.43-1.08-4.43-4.8 0-1.07.38-1.94 1-2.62-.1-.25-.43-1.24.1-2.58 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .53 1.34.2 2.33.1 2.58.62.68 1 1.55 1 2.62 0 3.73-2.28 4.55-4.45 4.79.35.3.66.9.66 1.81v2.68c0 .26.18.58.69.47A9.8 9.8 0 0 0 12 2.2z"
      fill="currentColor"
      stroke="none"
    />
  ),
  researchgate: (
    <path
      d="M4.5 2.5h15A2 2 0 0 1 21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2zm11.1 4.1c-1.5 0-2.4.9-2.4 2.3 0 1.3.9 2.3 2.3 2.3 1.5 0 2.4-1 2.4-2.4 0-1.3-.9-2.2-2.3-2.2zm0 1a1.2 1.2 0 0 1 1.2 1.3c0 .8-.5 1.3-1.2 1.3-.8 0-1.3-.5-1.3-1.3 0-.8.5-1.3 1.3-1.3zM6.6 7.6v9h1.7v-3.5h1.3l1.9 3.5h2l-2.2-3.9c1-.4 1.6-1.3 1.6-2.5 0-1.7-1.2-2.6-3.2-2.6zm1.7 1.4h1.2c1 0 1.6.4 1.6 1.3s-.6 1.4-1.6 1.4H8.3z"
      fill="currentColor"
      stroke="none"
    />
  ),
} as const;

export function Icon({
  name,
  className,
  strokeWidth = 1.7,
  ...rest
}: {
  name: IconName | (string & {});
  className?: string;
  strokeWidth?: number;
} & Omit<React.SVGProps<SVGSVGElement>, "name">) {
  const isCustom = name in custom;
  const d = paths[name as keyof typeof paths];

  if (!isCustom && !d) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`<Icon /> has no glyph named "${name}".`);
    }
    return null;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("size-[1.15em] shrink-0", className)}
      {...rest}
    >
      {isCustom ? custom[name as keyof typeof custom] : <path d={d} />}
    </svg>
  );
}
