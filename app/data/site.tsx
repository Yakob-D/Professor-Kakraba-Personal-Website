/* =============================================================================
   SITE-WIDE DATA
   -----------------------------------------------------------------------------
   Shared across every page: identity, navigation, external profiles, footer,
   and the headline metrics.

   BACKEND NOTE
   Every export here is a plain, JSON-serialisable value and every type is
   exported alongside it. When the CMS lands, replace each `export const X`
   with `export async function getX(): Promise<XType>` that fetches the same
   shape — no component needs to change.
   ========================================================================== */

/* ---------------------------------------------------------------- identity */

export type Profile = {
  firstName: string;
  lastName: string;
  /** Rendered in the hero and in <title>. */
  displayName: string;
  credential: string;
  /** Each line of the title block under the name, in order. */
  titles: string[];
  institution: string;
  tagline: string;
  /** 2–3 sentences. Homepage "short intro" section. */
  intro: string;
  email: string;
  phone: string | null;
  office: {
    building: string;
    street: string;
    city: string;
    mapUrl: string;
  };
  /** Set `src` once a real photograph is in /public/images/headshots/. */
  portrait: ImageRef;
  /** Pronouns, for accessible copy. Leave null if he prefers not to list them. */
  pronouns: string | null;
  languages: string[];
  cv: { href: string; updated: string };
};

/** A single image. `src: null` renders the designed placeholder instead. */
export type ImageRef = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  /** Shown under the image where a caption is appropriate. */
  caption?: string;
  credit?: string;
};

export const profile: Profile = {
  firstName: "Samuel",
  lastName: "Kakraba",
  displayName: "Samuel Kakraba",
  credential: "Ph.D.",
  titles: [
    "Assistant Professor of Biostatistics & Data Science",
    "Senior Advisor for Health Data Science Engagement, CAIDS",
    "Tulane University",
  ],
  institution: "Tulane University School of Public Health & Tropical Medicine",
  tagline:
    "Building trustworthy, accessible AI for public health — from New Orleans to Accra.",
  intro:
    "I build explainable, open artificial-intelligence tools that help health systems act earlier and more fairly. My work runs the full length of the problem — from the molecules behind age-related disease to the populations that carry its burden — and it is deliberately shared: open code, open methods, and partnerships that reach from Louisiana to Ghana.",
  email: "skakraba@tulane.edu",
  phone: null,
  office: {
    building: "Tulane School of Public Health & Tropical Medicine",
    street: "1440 Canal Street",
    city: "New Orleans, LA 70112",
    mapUrl: "https://maps.google.com/?q=1440+Canal+Street,+New+Orleans,+LA+70112",
  },
  portrait: {
    src: "https://medicine.tulane.edu/sites/default/files/2024-04/olivier_240416_3726_11zon.jpg",
    alt: "Portrait of Dr. Samuel Kakraba",
    width: 1200,
    height: 1500,
  },
  pronouns: "He/Him",
  languages: ["English", "Fante", "Twi"],
  cv: {
    href: "/cv/samuel-kakraba-cv.pdf",
    updated: "2026-09",
  },
};

/* -------------------------------------------------------------- navigation */

export type NavItem = {
  label: string;
  href: string;
  blurb?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", blurb: "Start here" },
  { label: "About", href: "/about", blurb: "Bio, story, timeline and CV" },
  { label: "Research", href: "/research", blurb: "Four areas, from molecules to populations" },
  { label: "Publications", href: "/publications", blurb: "Papers, theses and patents" },
  { label: "Teaching", href: "/teaching", blurb: "Courses, philosophy and mentoring" },
  { label: "Engagement", href: "/engagement", blurb: "Talks, media, service and Ghana" },
];

export const navCta: NavItem = { label: "Contact", href: "/contact" };

/* ---------------------------------------------------------------- profiles */

export type SocialLink = {
  label: string;
  href: string;
  /** Key into the icon set in app/components/ui/Icon.tsx */
  icon: string;
  handle?: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=PLACEHOLDER",
    icon: "scholar",
  },
  { label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000", icon: "orcid" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/PLACEHOLDER", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/PLACEHOLDER", icon: "github" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/PLACEHOLDER", icon: "researchgate" },
  {
    label: "Tulane profile",
    href: "https://sph.tulane.edu/bios/samuel-kakraba",
    icon: "building",
  },
];

/** The research group lives on its own site; this site links out to it. */
export const labSite = {
  name: "Kakraba Research Group",
  shortName: "Kakraba Research Group",
  href: "https://kakraba-research-group.vercel.app",
};

/* ------------------------------------------------------------- at a glance */

export type Metric = {
  /** Numeric part, animated by the counter. */
  value: number;
  /** Rendered after the number, e.g. "+" */
  suffix?: string;
  prefix?: string;
  label: string;
  /** Every figure carries its own vintage, per the plan. */
  asOf: string;
  /** Optional deep link so the figure can be checked. */
  href?: string;
  /** Hover/aria detail. */
  note?: string;
};

export const headlineMetrics: Metric[] = [
  {
    value: 17,
    suffix: "+",
    label: "Peer-reviewed publications",
    asOf: "2026-09",
    href: "/publications",
  },
  {
    value: 297,
    suffix: "+",
    label: "Citations",
    asOf: "2026-09",
    note: "Google Scholar",
    href: socialLinks[0].href,
  },
  { value: 10, label: "h-index", asOf: "2026-09", note: "Google Scholar" },
  { value: 3, label: "Patents", asOf: "2026-09", href: "/research#patents" },
  { value: 59, label: "Invited talks & presentations", asOf: "2026-09", href: "/engagement" },
  {
    value: 20,
    suffix: "+",
    label: "Students mentored",
    asOf: "2026-09",
    href: "/teaching#mentoring",
  },
  {
    value: 2,
    label: "Associate editor roles",
    asOf: "2026-09",
    href: "/engagement#editorial",
  },
];

/* ----------------------------------------------------------------- footer */

export const siteMeta = {
  /** Used for canonical URLs, OG images and the sitemap. */
  url: "https://samuelkakraba.com",
  title: "Samuel Kakraba, Ph.D.",
  description:
    "Samuel Kakraba, Ph.D. — Assistant Professor of Biostatistics & Data Science at Tulane University. Explainable, open AI for public health, from molecules to populations.",
  /** Shown in the footer. Keep in sync with real deployments. */
  lastUpdated: "2026-10-04",
  locale: "en_US",
};
