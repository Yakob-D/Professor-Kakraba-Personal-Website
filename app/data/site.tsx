/* =============================================================================
   SITE-WIDE DATA
   -----------------------------------------------------------------------------
   Shared across every page: identity, navigation, external profiles, footer,
   and the headline metrics.

   SOURCE OF TRUTH
   Every fact in this file (and in every sibling data.tsx) is drawn from
   "Kakraba-Website-Informations.docx" — the research-backed website
   blueprint the content was rebuilt from. Where that document gave a fact
   (a date, a number, a name, a quote), it is used verbatim or near-verbatim.
   Where it only gave a topic or a category with no further detail, this
   file says so rather than inventing specifics. Nothing here should be
   read as independently fact-checked beyond what that source document
   itself states.

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
  /** Positioning statement, third person — reused on the homepage and in the media kit. */
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
  // Matches the source document's hero line exactly: "Assistant Professor of
  // Biostatistics & Data Science · Senior Advisor for Health Data Science
  // Engagement, CAIDS · Tulane University." The Senior Advisor role is
  // placed under CAIDS only, per the document's explicit consistency fix
  // ("the CV lists it under different units; place it under CAIDS only").
  titles: [
    "Assistant Professor of Biostatistics & Data Science",
    "Senior Advisor for Health Data Science Engagement, CAIDS",
    "Tulane University",
  ],
  institution: "Tulane University School of Public Health & Tropical Medicine",
  // One of the three tagline options given verbatim in the source document.
  tagline: "Building trustworthy, accessible AI for public health, from New Orleans to Accra.",
  // The document's own positioning statement, given verbatim for "About page
  // and media kit" use, reused here for the homepage intro.
  intro:
    "Dr. Samuel Kakraba develops explainable, open machine-learning tools that turn complex health data into earlier, fairer decisions across surveillance, aging and drug discovery, and builds the people and partnerships, especially across Africa, to make public health AI responsible and globally shared.",
  // Verified as his correct email address.
  email: "skakraba@tulane.edu",
  phone: null,
  office: {
    // "office (1440 Canal Street, Tulane)" — confirmed in the source document's
    // footer specification.
    building: "Tulane University School of Public Health & Tropical Medicine",
    street: "1440 Canal Street",
    city: "New Orleans, LA 70112",
    mapUrl: "https://maps.google.com/?q=1440+Canal+Street,+New+Orleans,+LA+70112",
  },
  portrait: {
    src: "/images/headshots/samuel-kakraba-headshot.jpg",
    alt: "Portrait of Dr. Samuel Kakraba",
    width: 3087,
    height: 4631,
  },
  pronouns: "He/Him",
  // "mention the Fante/Twi/English heritage" — confirmed in the source document.
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

/**
 * Follows the source document's recommended navigation exactly, with one
 * deliberate exception: the document recommends folding Lab/Mentorship/
 * Join-the-Lab content into this site. By direction, that stays on the
 * separate Kakraba Research Group site instead (this site only links out
 * to it — see `labSite` below), so "Lab" is not a nav item here.
 */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", blurb: "Start here" },
  { label: "About", href: "/about", blurb: "Bio, story, positions and CV" },
  { label: "Research", href: "/research", blurb: "Four pillars, from molecules to populations" },
  { label: "Publications", href: "/publications", blurb: "Papers, theses and patents" },
  { label: "Software & Tools", href: "/software", blurb: "SMART-Pred and open research code" },
  { label: "Teaching", href: "/teaching", blurb: "Courses, philosophy and guest lectures" },
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
    href: "https://scholar.google.com/citations?user=S9_ha_UAAAAJ",
    icon: "scholar",
    handle: "S9_ha_UAAAAJ",
  },
  {
    // Real ORCID iD, confirmed in the source document's footer specification.
    label: "ORCID",
    href: "https://orcid.org/0000-0002-6362-5126",
    icon: "orcid",
    handle: "0000-0002-6362-5126",
  },
  {
    // The document lists PubMed among the footer profile links but gives no
    // specific PubMed ID — this is an author-name search, not a verified
    // deep link to a confirmed profile.
    label: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov/?term=Kakraba+S%5BAuthor%5D",
    icon: "file-text",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kakrabasamuel/", icon: "linkedin" },
  {
    // Real GitHub organisation name, confirmed in the source document.
    label: "GitHub",
    href: "https://github.com/KakrabaLab",
    icon: "github",
    handle: "KakrabaLab",
  },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Samuel-Kakraba", icon: "researchgate" },
  {
    label: "Tulane profile",
    href: "https://sph.tulane.edu/bios/samuel-kakraba",
    icon: "building",
  },
];

/**
 * The research group lives on its own site; this site only links out to it.
 * The source document recommends merging lab/mentorship content into this
 * site, but by direction that stays separate — the lab site remains the
 * single source for people, alumni, projects and "Join the Lab".
 */
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

/**
 * Matches the source document's "Impact metrics bar" list exactly:
 * "17+ peer-reviewed publications · 327+ citations · h-index 10 · 3
 * patents/applications · 7+ open ML workflows · 59 presentations · 20+
 * students mentored into MS/PhD programs · 47 verified peer reviews."
 *
 * One deliberate change: the citation count. The document itself flags
 * this as unresolved ("Google Scholar recently displayed 297 versus the
 * CV's 327+... pull it live or state 'per Google Scholar, [month year]'")
 * and its own consistency-fix section repeats the instruction to pick one
 * figure with a date stamp. 297 (the Google Scholar figure, with a date)
 * is used here per that instruction.
 */
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
    note: "per Google Scholar",
    href: socialLinks[0].href,
  },
  { value: 10, label: "h-index", asOf: "2026-09", note: "per Google Scholar" },
  { value: 3, label: "Patents / applications", asOf: "2026-09", href: "/research#patents" },
  { value: 7, suffix: "+", label: "Open ML workflows", asOf: "2026-09", href: "/software" },
  { value: 59, label: "Presentations", asOf: "2026-09", href: "/engagement#talks" },
  {
    value: 20,
    suffix: "+",
    label: "Students mentored into MS/PhD programs",
    asOf: "2026-09",
    href: "https://kakraba-research-group.vercel.app",
  },
  {
    value: 47,
    label: "Verified peer reviews",
    asOf: "2026-09",
    note: "ORCID-verified, 16 journals, 2024–2026",
    href: "/engagement#editorial",
  },
];

/* ----------------------------------------------------------------- footer */

export const siteMeta = {
  /** Used for canonical URLs, OG images and the sitemap. */
  url: "https://samuelkakraba.com",
  title: "Samuel Kakraba, Ph.D.",
  description:
    "Samuel Kakraba, Ph.D. — Assistant Professor of Biostatistics & Data Science at Tulane University. Explainable, open AI for public health, from molecules to populations, New Orleans to Accra.",
  /** Shown in the footer. Keep in sync with real deployments. */
  lastUpdated: "2026-10-05",
  locale: "en_US",
};
