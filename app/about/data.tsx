/* =============================================================================
   ABOUT PAGE DATA
   The most important page on a personal site (§4). Everything here is
   JSON-serialisable and typed, ready to be served from the CMS later.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

/* --------------------------------------------------------------- the bios */

export type Bio = {
  id: "short" | "long";
  label: string;
  /** Roughly how long it is, shown to event organisers. */
  wordCountLabel: string;
  paragraphs: string[];
};

export const bios: Bio[] = [
  {
    id: "short",
    label: "Short bio",
    wordCountLabel: "~100 words",
    paragraphs: [
      "Samuel Kakraba, Ph.D., is an Assistant Professor of Biostatistics and Data Science at the Tulane University School of Public Health and Tropical Medicine, and Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science. His research builds explainable artificial-intelligence tools for public health, spanning molecular simulation, clinical prediction and population-level surveillance. He is the developer of SMART-Pred, an open early-warning tool built with the Louisiana Department of Health, and holds three patents. He trained as a mathematician in Ghana before earning his Ph.D. in bioinformatics, and he continues to work as a bridge between health data science in the United States and across West Africa.",
    ],
  },
  {
    id: "long",
    label: "Full bio",
    wordCountLabel: "~350 words",
    paragraphs: [
      "Samuel Kakraba, Ph.D., is an Assistant Professor of Biostatistics and Data Science at the Tulane University School of Public Health and Tropical Medicine, where he also holds a tertiary appointment in the Tulane Center for Aging. Since July 2026 he has served as Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science, and he directs the Kakraba International Research Lab.",
      "His research asks a single question at four different scales: can a model be accurate enough to change a decision and still explain itself well enough to be trusted? The answer, in his work, has taken the form of early-warning systems for maternal risk, sepsis, cardiovascular disease and cognitive decline; machine-learning structure–activity models that narrow the search for compounds acting on age-related disease; and graph-theoretic analyses that treat proteins as networks in order to find the residues that actually matter.",
      "The most visible result of that approach is SMART-Pred, an interpretable prediction tool developed with the Louisiana Department of Health. It reports a risk estimate and the reasoning behind it, and both the model and the code are open. Alongside the applied work, he writes on the governance of these systems — on cognitive sovereignty, on the limits of evaluating a clinical model by its AUC alone, and on designing for epistemic humility.",
      "He came to the field by way of the classroom. He trained as a mathematician at the University of Cape Coast and taught mathematics in Ghana before moving to the United States for an M.S. in mathematical sciences at East Tennessee State University and a Ph.D. in bioinformatics at the University of Arkansas at Little Rock and the University of Arkansas for Medical Sciences. He joined the faculty at Eastern Kentucky University in 2021 and moved to Tulane in January 2024.",
      "He has given 59 invited talks and presentations, holds three patents, and serves as an Associate Editor at JMIR Aging and Scientific Reports. He has mentored more than twenty students into graduate programmes. Much of his current effort goes into partnerships across Ghana — with KNUST, the University of Ghana, the University of Cape Coast and Ensign Global College — building health data science capacity in both directions.",
    ],
  },
];

/* --------------------------------------------------- his story / timeline */

export type TimelineStop = {
  id: string;
  /** Short place label used on the map. */
  place: string;
  region: string;
  /** e.g. "2007–2011" */
  period: string;
  role: string;
  institution: string;
  description: string;
  /** Percentage position on the stylised world map (0–100). */
  map: { x: number; y: number };
  icon: string;
};

/** The signature visual of the site: Ghana → Tennessee → Arkansas → Kentucky → New Orleans. */
export const journey: TimelineStop[] = [
  {
    id: "ghana",
    place: "Cape Coast",
    region: "Ghana",
    period: "2007–2012",
    role: "B.Ed. Mathematics, then mathematics teacher",
    institution: "University of Cape Coast",
    description:
      "Trained as a mathematics teacher and taught in Ghanaian classrooms — the start of a career that has kept teaching at its centre.",
    map: { x: 46.5, y: 54 },
    icon: "graduation-cap",
  },
  {
    id: "tennessee",
    place: "Johnson City",
    region: "Tennessee",
    period: "2013–2015",
    role: "M.S. Mathematical Sciences",
    institution: "East Tennessee State University",
    description:
      "Moved from teaching mathematics to doing it — graduate work in mathematical sciences, and a first look at biological data.",
    map: { x: 23.5, y: 39 },
    icon: "compass",
  },
  {
    id: "arkansas",
    place: "Little Rock",
    region: "Arkansas",
    period: "2015–2021",
    role: "Ph.D. Bioinformatics",
    institution: "University of Arkansas at Little Rock & UAMS",
    description:
      "Doctoral work applying graph theory and molecular simulation to protein structure, supported as a graduate research assistant.",
    map: { x: 20, y: 40.5 },
    icon: "network",
  },
  {
    id: "kentucky",
    place: "Richmond",
    region: "Kentucky",
    period: "2021–2023",
    role: "Assistant Professor",
    institution: "Eastern Kentucky University",
    description:
      "First faculty appointment: built and taught statistics and data science courses, and began mentoring students into graduate programmes.",
    map: { x: 23, y: 36.5 },
    icon: "book",
  },
  {
    id: "new-orleans",
    place: "New Orleans",
    region: "Louisiana",
    period: "2024–present",
    role: "Assistant Professor of Biostatistics & Data Science",
    institution: "Tulane University",
    description:
      "Leads an independent research programme in explainable AI for public health, with state health partners in Louisiana and university partners across Ghana.",
    map: { x: 20.5, y: 42.5 },
    icon: "map-pin",
  },
];

export const storyParagraphs = [
  "He began as a mathematics teacher. That matters to how he works now: the first audience for any model he builds is a person who has to act on it, and if the model cannot be explained to that person, he treats it as unfinished.",
  "From the University of Cape Coast he moved to East Tennessee State University for graduate work in mathematical sciences, then to Little Rock for a Ph.D. in bioinformatics shared between the University of Arkansas at Little Rock and the University of Arkansas for Medical Sciences. There, the mathematics turned biological: proteins became graphs, and the question became which parts of a structure carry the most weight.",
  "A first faculty post at Eastern Kentucky University followed in 2021, and in January 2024 he joined Tulane — where the work widened from molecules and patients out to whole populations, and where the Ghana partnerships became a formal part of the job rather than something done on the side.",
];

/* ------------------------------------------------------------- positions */

export type Position = {
  title: string;
  organisation: string;
  /** e.g. "Jan 2024 – present" */
  period: string;
  /** Used to group current vs. previous. */
  current: boolean;
  description?: string;
  href?: string;
  /** Set when the role belongs to the lab site rather than this one. */
  external?: boolean;
};

export const positions: Position[] = [
  {
    title: "Assistant Professor of Biostatistics & Data Science",
    organisation: "Tulane University School of Public Health & Tropical Medicine",
    period: "Jan 2024 – present",
    current: true,
    description:
      "Leads an independent research programme in explainable AI for public health; teaches the department's machine-learning and statistical-methods sequence.",
    href: "https://sph.tulane.edu",
  },
  {
    title: "Senior Advisor for Health Data Science Engagement",
    organisation: "Connolly Alexander Institute for Data Science (CAIDS)",
    period: "Jul 2026 – present",
    current: true,
    description:
      "Connects the institute's data science capacity with public health partners in Louisiana and internationally.",
    href: "https://caids.tulane.edu",
  },
  {
    title: "Assistant Professor (tertiary appointment)",
    organisation: "Tulane Center for Aging",
    period: "2024 – present",
    current: true,
    description:
      "Supports the Center's computational work on age-related disease, including the drug-discovery line of research.",
  },
  {
    title: "Director",
    organisation: "Kakraba International Research Lab",
    period: "2024 – present",
    current: true,
    description:
      "The research group: students, projects and open positions all live on the lab's own site.",
    href: "https://kakrabalab.org",
    external: true,
  },
  {
    title: "Assistant Professor",
    organisation: "Eastern Kentucky University",
    period: "2021 – 2023",
    current: false,
    description:
      "Taught statistics and data science; mentored undergraduate and master's students into graduate programmes.",
  },
];

/* ------------------------------------------------------------- education */

export type Degree = {
  degree: string;
  field: string;
  institution: string;
  /** Second institution for joint programmes. */
  secondInstitution?: string;
  year: number;
  location: string;
  thesis?: { title: string; advisor?: string };
};

export const education: Degree[] = [
  {
    degree: "Ph.D.",
    field: "Bioinformatics",
    institution: "University of Arkansas at Little Rock",
    secondInstitution: "University of Arkansas for Medical Sciences",
    year: 2021,
    location: "Little Rock, Arkansas",
    thesis: {
      title:
        "Graph-theoretic and molecular-dynamic approaches to protein structure and stability",
      advisor: "Advisor to be confirmed",
    },
  },
  {
    degree: "M.S.",
    field: "Mathematical Sciences",
    institution: "East Tennessee State University",
    year: 2015,
    location: "Johnson City, Tennessee",
    thesis: {
      title: "Thesis title to be confirmed",
    },
  },
  {
    degree: "B.Ed.",
    field: "Mathematics",
    institution: "University of Cape Coast",
    year: 2011,
    location: "Cape Coast, Ghana",
  },
];

/* ---------------------------------------------------------------- honours */

export type Honor = {
  title: string;
  organisation: string;
  year: string;
  note?: string;
};

export const honors: Honor[] = [
  {
    title: "Delta Omega Honorary Society in Public Health",
    organisation: "Delta Omega, Beta Rho chapter",
    year: "2025",
    note: "Elected member.",
  },
  {
    title: "Seed grant, Principal Investigator",
    organisation: "Tulane University",
    year: "2026",
    note: "Supports the next phase of explainable risk-prediction work.",
  },
  {
    title: "Associate Editor",
    organisation: "JMIR Aging",
    year: "2026",
  },
  {
    title: "Associate Editor",
    organisation: "Scientific Reports",
    year: "2026",
  },
  {
    title: "Graduate research fellowship support",
    organisation: "NIH / VA / Arkansas INBRE",
    year: "2015–2021",
    note: "Held as a graduate research assistant.",
  },
];

/* ----------------------------------------------------------------- skills */

export type SkillGroup = {
  label: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Statistics & programming", icon: "code", items: ["R", "Python", "SAS"] },
  {
    label: "Molecular simulation",
    icon: "flask",
    items: ["GROMACS", "Maestro", "AutoDock Vina"],
  },
  { label: "Network analysis", icon: "network", items: ["Cytoscape", "igraph"] },
  { label: "Tooling", icon: "layers", items: ["Linux", "LaTeX", "Git"] },
];

export const memberships = [
  "Delta Omega Honorary Society in Public Health",
  "International Society for Computational Biology (ISCB)",
  "American Statistical Association (ASA)",
  "American Association of University Professors (AAUP)",
  "MidSouth Computational Biology and Bioinformatics Society (MCBIOS)",
];

/* ------------------------------------------------------------ beyond work */

export const beyondWork = {
  intro:
    "Outside the department he is a track-and-field man — a competitor first and now a spectator who still talks about splits — and he moves between English, Fante and Twi depending on who is in the room.",
  items: [
    { label: "Track & field", icon: "activity" },
    { label: "English · Fante · Twi", icon: "globe" },
  ],
};

/* -------------------------------------------------------------- media kit */

export type MediaKitAsset = {
  label: string;
  description: string;
  icon: string;
  /** Null until the asset is uploaded. */
  href: string | null;
  meta?: string;
};

export const mediaKit = {
  intro:
    "For event programmes, press and introductions. The photographs are free to use with credit.",
  terms: "Free to use with credit: “Photo courtesy of Samuel Kakraba.”",
  speakingTopics: [
    "Explainable AI in public health: what accuracy leaves out",
    "Building early-warning systems with state health departments",
    "Cognitive sovereignty and who gets to interpret the model",
    "Health data science capacity in West Africa",
    "From graph theory to drug discovery for age-related disease",
  ],
  assets: [
    {
      label: "Hi-res headshot",
      description: "Colour, 3000 × 3750 px, neutral background.",
      icon: "users",
      href: null,
      meta: "JPEG",
    },
    {
      label: "Speaking photograph",
      description: "On stage, landscape crop suitable for programme covers.",
      icon: "mic",
      href: null,
      meta: "JPEG",
    },
    {
      label: "Curriculum vitae",
      description: "The full CV, including the complete talks and teaching record.",
      icon: "file-text",
      href: "/cv/samuel-kakraba-cv.pdf",
      meta: "PDF",
    },
  ] satisfies MediaKitAsset[],
};

/* ------------------------------------------------------------- page images */

export const aboutImages: Record<string, ImageRef> = {
  teaching: {
    src: null,
    alt: "Dr. Kakraba teaching a biostatistics class at Tulane",
    caption: "Teaching the department's machine-learning sequence, New Orleans.",
  },
  ghana: {
    src: null,
    alt: "Dr. Kakraba with colleagues during a university visit in Ghana",
    caption: "University partnership visit, Ghana.",
  },
  speaking: {
    src: null,
    alt: "Dr. Kakraba delivering a keynote address",
    caption: "Keynote, KNUST, Kumasi, 2025.",
  },
};
