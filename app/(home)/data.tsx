/* =============================================================================
   HOMEPAGE DATA
   Section order matches the source document's "Homepage Design" spec.
   Source: Kakraba-Website-Informations.docx; see app/data/site.tsx for the
   general sourcing note.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

/* -------------------------------------------------- 4. research area cards */

export type ResearchAreaCard = {
  /** Must match the `slug` in app/research/data.tsx. */
  slug: string;
  number: string;
  title: string;
  /** One line, card-sized. */
  summary: string;
  /** Icon name from app/components/ui/Icon.tsx */
  icon: string;
  /** Three short keyword chips. */
  keywords: string[];
};

export const researchAreaCards: ResearchAreaCard[] = [
  {
    slug: "ai-public-health-surveillance",
    number: "01",
    title: "AI for public health surveillance & precision prediction",
    summary:
      "SMART-Pred, maternal health, cardiovascular disease, mental health, hypertension and LLMs for infectious-disease surveillance.",
    icon: "activity",
    keywords: ["SMART-Pred", "Early warning", "Precision prediction"],
  },
  {
    slug: "explainable-responsible-ai",
    number: "02",
    title: "Explainable & responsible AI",
    summary:
      "Beyond AUC, epistemic humility, the Proxy Problem, algorithmic monoculture and cognitive sovereignty.",
    icon: "shield",
    keywords: ["Cognitive sovereignty", "Beyond AUC", "Governance"],
  },
  {
    slug: "ai-drug-discovery-aging",
    number: "03",
    title: "AI-driven drug discovery for aging & neurodegeneration",
    summary: "AI-QSAR, TDZD analogs, quinoline multi-target inhibitors and C. elegans lifespan models.",
    icon: "flask",
    keywords: ["AI-QSAR", "TDZD analogs", "Neurodegeneration"],
  },
  {
    slug: "graph-theoretic-computational-biology",
    number: "04",
    title: "Graph-theoretic computational biology",
    summary: "CFTR, sickle cell, NBD2, the SARS-CoV-2 spike and Hepatitis B, treated as residue networks.",
    icon: "network",
    keywords: ["CFTR", "Sickle cell", "Spike protein"],
  },
];

/** The source document's fifth, "cross-cutting lens" homepage banner. */
export const crossCuttingLens = {
  eyebrow: "Across every pillar",
  title: "Global Health Data Science in Africa",
  body: "Every research pillar runs through the same cross-cutting commitment: building the people and partnerships, especially across Africa, to make public health AI responsible and globally shared.",
  href: "/engagement#global",
};

/* ------------------------------------------------- 5. featured work module */

export type FeaturedWork = {
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  /** Up to four short result statements. */
  highlights: Array<{ value: string; label: string }>;
  partner: string;
  image: ImageRef;
  links: Array<{ label: string; href: string; variant: "primary" | "secondary"; icon?: string }>;
};

export const featuredWork: FeaturedWork = {
  eyebrow: "Flagship tool",
  name: "SMART-Pred",
  tagline: "An explainable, AI-driven platform for public health surveillance.",
  description:
    "SMART-Pred turns routinely collected health data into risk estimates a public health team can act on, with an explanation of the factors behind each one. Developed with the Louisiana Department of Health, it currently runs 10 machine-learning algorithms, with a roadmap toward more than 20.",
  highlights: [
    { value: "91%", label: "Test accuracy, JMIR Aging" },
    { value: "10 → 20+", label: "ML algorithms, roadmap" },
    { value: "LDH", label: "State partner" },
  ],
  partner: "Developed with the Louisiana Department of Health",
  image: {
    src: null,
    alt: "The SMART-Pred web interface showing a risk prediction and its explanation",
    caption: "SMART-Pred returns a risk estimate alongside the factors that drove it.",
  },
  links: [
    { label: "Try it", href: "https://smart-pred.example.org", variant: "primary", icon: "arrow-up-right" },
    { label: "Read the paper", href: "/publications#smart-pred-jmir-aging", variant: "secondary", icon: "file-text" },
    { label: "View the code", href: "https://github.com/KakrabaLab", variant: "secondary", icon: "code" },
  ],
};

/* --------------------------------------------- 6. selected publications */

export type SelectedPublication = {
  /** Matches an `id` in app/publications/data.tsx. */
  id: string;
  title: string;
  journal: string;
  year: number;
  /** The one-line "why it matters". */
  why: string;
  href: string;
  area: string;
};

export const selectedPublications: SelectedPublication[] = [
  {
    id: "smart-pred-jmir-aging",
    title: "SMART-Pred: an explainable AI platform for public health surveillance",
    journal: "JMIR Aging",
    year: 2026,
    why: "91% test accuracy, developed with the Louisiana Department of Health.",
    href: "/publications#smart-pred-jmir-aging",
    area: "AI for public health",
  },
  {
    id: "ai-qsar-dna-polymerase",
    title: "AI-QSAR for DNA polymerase inhibitors",
    journal: "JMIR AI",
    year: 2026,
    why: "Shows how far a well-posed QSAR model can narrow a search space before any wet-lab work begins.",
    href: "/publications#ai-qsar-dna-polymerase",
    area: "Drug discovery",
  },
  {
    id: "cognitive-sovereignty",
    title: "Cognitive sovereignty and decolonial public health",
    journal: "Frontiers in Public Health",
    year: 2026,
    why: "Names the governance problem at the centre of deploying AI across unequal health systems.",
    href: "/publications#cognitive-sovereignty",
    area: "Responsible AI",
  },
];

/* ------------------------------------------------------- 7. recent news */

export type NewsItem = {
  /** ISO date; drives sorting and the printed date. */
  date: string;
  title: string;
  /** One or two sentences. */
  excerpt: string;
  kind: "Appointment" | "Service" | "Funding" | "Talk" | "Publication" | "Media";
  href?: string;
};

/** Matches the source document's homepage "Latest news" list exactly. */
export const recentNews: NewsItem[] = [
  {
    date: "2026-07-01",
    kind: "Appointment",
    title: "Named Senior Advisor for Health Data Science Engagement at CAIDS",
    excerpt:
      "The role connects the Connolly Alexander Institute for Data Science's capacity with public health partners across Louisiana and abroad.",
    href: "/about#positions",
  },
  {
    date: "2026-04-15",
    kind: "Service",
    title: "Appointed Associate Editor at JMIR Aging and Scientific Reports",
    excerpt: "Two editorial roles covering aging research and the methods side of applied machine learning.",
    href: "/engagement#editorial",
  },
  {
    date: "2026-02-10",
    kind: "Funding",
    title: "Awarded the WSPH–CAIDS AI Seed Grant as Principal Investigator",
    excerpt: "Supports the next phase of SMART-Pred's development and validation.",
    href: "/research#funding",
  },
  {
    date: "2025-10-20",
    kind: "Talk",
    title: "Keynote at the KNUST 11th Biennial Scientific Conference",
    excerpt: "On building health data science capacity in Ghana.",
    href: "/engagement#talks",
  },
  {
    date: "2026-03-05",
    kind: "Talk",
    title: "Keynote at the Louisiana Department of Health AI Symposium",
    excerpt: "On SMART-Pred and explainable AI for state health surveillance.",
    href: "/engagement#talks",
  },
];

/* ------------------------------------------------- 8. affiliations strip */

export type Affiliation = {
  name: string;
  shortName: string;
  href?: string;
  /** Logos need permission before use; until then the wordmark is rendered. */
  logo: string | null;
};

/** "Where we work" strip — matches the source document's list exactly. */
export const affiliations: Affiliation[] = [
  {
    name: "Tulane University School of Public Health & Tropical Medicine",
    shortName: "Tulane WSPH",
    href: "https://sph.tulane.edu",
    logo: null,
  },
  {
    name: "Connolly Alexander Institute for Data Science",
    shortName: "CAIDS",
    href: "https://caids.tulane.edu",
    logo: null,
  },
  {
    name: "Tulane Center for Aging",
    shortName: "Tulane Center for Aging",
    href: "https://medicine.tulane.edu/center-aging",
    logo: null,
  },
  {
    name: "Kwame Nkrumah University of Science and Technology",
    shortName: "KNUST",
    href: "https://www.knust.edu.gh",
    logo: null,
  },
  {
    name: "University of Ghana",
    shortName: "University of Ghana",
    href: "https://www.ug.edu.gh",
    logo: null,
  },
  {
    name: "University of Cape Coast",
    shortName: "UCC",
    href: "https://ucc.edu.gh",
    logo: null,
  },
  {
    name: "Ensign Global University",
    shortName: "Ensign Global University",
    logo: null,
  },
];

/* ---------------------------------------------------------- recruiting */

/** Points to the separate lab site, per direction, rather than an on-site Join page. */
export const recruitingCta = {
  text: "Now recruiting motivated MS/PhD students in health AI.",
  linkLabel: "Read how to join →",
  href: "https://kakraba-research-group.vercel.app",
};

/* ------------------------------------------------------- hero micro-copy */

export const heroMeta = {
  /** The small animated line above the name. */
  availability: "Open to collaborations and speaking invitations",
  /** Three anchors used in the hero's quick-jump row. */
  quickLinks: [
    { label: "Four research pillars", href: "/research", icon: "layers" },
    { label: "SMART-Pred", href: "/research/smart-pred", icon: "sparkles" },
    { label: "Publications", href: "/publications", icon: "file-text" },
  ],
};
