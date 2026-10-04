/* =============================================================================
   HOMEPAGE DATA
   Section order matches §3 of the build plan.
   Every export is JSON-serialisable so a backend can return the same shapes.
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
    title: "AI for public health surveillance & prediction",
    summary:
      "Early-warning models for the conditions that move population health: maternal risk, sepsis, cardiovascular disease, mental health and Alzheimer's.",
    icon: "activity",
    keywords: ["Surveillance", "Early warning", "Clinical records"],
  },
  {
    slug: "explainable-responsible-ai",
    number: "02",
    title: "Explainable & responsible AI",
    summary:
      "Methods and arguments for models that clinicians can interrogate — cognitive sovereignty, evaluation beyond AUC, and epistemic humility by design.",
    icon: "shield",
    keywords: ["Interpretability", "Evaluation", "Governance"],
  },
  {
    slug: "ai-drug-discovery-aging",
    number: "03",
    title: "AI-driven drug discovery for aging",
    summary:
      "Machine-learning QSAR and molecular simulation to narrow the search for compounds that act on age-related disease pathways.",
    icon: "flask",
    keywords: ["QSAR", "Docking", "Neurodegeneration"],
  },
  {
    slug: "graph-theoretic-computational-biology",
    number: "04",
    title: "Graph-theoretic computational biology",
    summary:
      "Treating proteins as networks to find the residues that matter — in CFTR, sickle-cell haemoglobin, the SARS-CoV-2 spike and Hepatitis B.",
    icon: "network",
    keywords: ["Protein networks", "Graph theory", "Structure"],
  },
];

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
  eyebrow: "Featured work",
  name: "SMART-Pred",
  tagline: "An open, explainable early-warning tool for population health risk.",
  description:
    "SMART-Pred turns routinely collected health data into risk estimates a public health team can actually act on — and, just as importantly, into an explanation of why each estimate was made. It was built and validated with the Louisiana Department of Health, and both the model and the code are open.",
  highlights: [
    { value: "91%", label: "Test accuracy" },
    { value: "Open", label: "Model & code" },
    { value: "LDH", label: "State partner" },
  ],
  partner: "Developed with the Louisiana Department of Health",
  image: {
    // TODO: screenshot of the live SMART-Pred interface.
    src: null,
    alt: "The SMART-Pred web interface showing a risk prediction and its explanation",
    caption: "SMART-Pred returns a risk estimate alongside the factors that drove it.",
  },
  links: [
    { label: "Try it", href: "https://smart-pred.example.org", variant: "primary", icon: "arrow-up-right" },
    { label: "Read the paper", href: "/publications#smart-pred", variant: "secondary", icon: "file-text" },
    { label: "View the code", href: "https://github.com/PLACEHOLDER/smart-pred", variant: "secondary", icon: "code" },
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
    title:
      "SMART-Pred: an interpretable machine-learning system for population-level health risk prediction",
    journal: "JMIR Aging",
    year: 2026,
    why: "The paper behind the tool — and the argument that accuracy and explanation are not a trade-off.",
    href: "/publications#smart-pred-jmir-aging",
    area: "AI for public health",
  },
  {
    id: "ai-qsar-jmir-ai",
    title:
      "AI-QSAR: machine-learning structure–activity modelling for candidate compounds in age-related disease",
    journal: "JMIR AI",
    year: 2026,
    why: "Shows how far a well-posed QSAR model can narrow a search space before any wet-lab work begins.",
    href: "/publications#ai-qsar-jmir-ai",
    area: "Drug discovery",
  },
  {
    id: "cognitive-sovereignty",
    title:
      "Cognitive sovereignty: who gets to interpret the model in global health decision-making?",
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

export const recentNews: NewsItem[] = [
  {
    date: "2026-07-01",
    kind: "Appointment",
    title:
      "Named Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science",
    excerpt:
      "The role connects CAIDS's data science capacity with public health partners across Louisiana and abroad.",
    href: "/about#positions",
  },
  {
    date: "2026-04-15",
    kind: "Service",
    title: "Appointed Associate Editor at JMIR Aging and Scientific Reports",
    excerpt:
      "Two editorial roles covering aging research and the methods side of applied machine learning.",
    href: "/engagement#editorial",
  },
  {
    date: "2026-02-10",
    kind: "Funding",
    title: "Awarded a seed grant as Principal Investigator",
    excerpt:
      "Supports the next phase of explainable risk-prediction work with state health partners.",
    href: "/research#funding",
  },
  {
    date: "2025-10-20",
    kind: "Talk",
    title: "Keynote at KNUST, Kumasi",
    excerpt:
      "On building health data science capacity in Ghana — and why the models have to be legible to the people using them.",
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
];

/* ------------------------------------------------------- hero micro-copy */

export const heroMeta = {
  /** The small animated line above the name. */
  availability: "Open to collaborations and speaking invitations",
  /** Three anchors used in the hero's quick-jump row. */
  quickLinks: [
    { label: "Four research areas", href: "/research", icon: "layers" },
    { label: "SMART-Pred", href: "/research/smart-pred", icon: "sparkles" },
    { label: "Publications", href: "/publications", icon: "file-text" },
  ],
};
