/* =============================================================================
   ABOUT PAGE DATA
   Source: Kakraba-Website-Informations.docx. Every fact below traces to that
   document; see app/data/site.tsx for the general sourcing note. Privacy and
   funding-disclosure rules from the document's "Caveats" section are applied
   throughout — see inline notes.
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
      "Samuel Kakraba, Ph.D., is an Assistant Professor of Biostatistics and Data Science at the Tulane University School of Public Health and Tropical Medicine and Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science (CAIDS). He develops explainable, open machine-learning tools that turn complex health data into earlier, fairer decisions — most visibly SMART-Pred, built with the Louisiana Department of Health, which reached 91% test accuracy in a JMIR Aging case study. His record includes 17+ peer-reviewed publications, 3 patents or applications, and 59 presentations. He trained as a mathematics teacher in Ghana before earning his Ph.D. in bioinformatics, and he now serves as Tulane's University Liaison for Global Engagement with KNUST, the University of Ghana, the University of Cape Coast and Ensign Global University.",
    ],
  },
  {
    id: "long",
    label: "Full bio",
    wordCountLabel: "~350 words",
    paragraphs: [
      "Samuel Kakraba, Ph.D., develops explainable, open machine-learning tools that turn complex health data into earlier, fairer decisions across surveillance, aging and drug discovery, and builds the people and partnerships, especially across Africa, to make public health AI responsible and globally shared. He is an Assistant Professor of Biostatistics and Data Science at the Tulane University School of Public Health and Tropical Medicine, an Assistant Professor (tertiary) at the Tulane Center for Aging, and — since July 2026 — Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science.",
      "His flagship project is SMART-Pred, an explainable AI platform for public health surveillance developed with the Louisiana Department of Health. It currently runs 10 machine-learning algorithms, with a roadmap toward more than 20, and its top model reached 91% test accuracy in a JMIR Aging case study. As he has put it, \"SMART-pred represents a new model for public health… AI-driven, explainable, affordable and accessible to everyone.\" He is Principal Investigator on a WSPH–CAIDS AI Seed Grant (2026–2027) supporting the platform's next phase.",
      "His research record runs from graph-theoretic analyses of protein structure (CFTR, sickle-cell haemoglobin, the SARS-CoV-2 spike, Hepatitis B) to AI-driven drug discovery for aging and neurodegeneration (AI-QSAR, TDZD analogs, quinoline-based inhibitors) to explainable and responsible AI more broadly — including a paper on cognitive sovereignty and decolonial public health in Frontiers in Public Health. His CV lists 17+ peer-reviewed publications, 328+ citations, an h-index of 10, 3 patents or patent applications, 59 presentations, and 47 ORCID-verified peer reviews across 16 journals. He serves as Associate Editor at JMIR Aging and Scientific Reports.",
      "He trained as a mathematics teacher at the University of Cape Coast (B.Ed. Mathematics, 2011) and taught mathematics in Ghana, including at Wesley Girls' High School (2009–2013), before moving to the United States for an M.S. in Mathematical Sciences at East Tennessee State University (2015, advised by Debra Knisley) and a Ph.D. in Bioinformatics at the University of Arkansas at Little Rock and the University of Arkansas for Medical Sciences (2021, GPA 4.0, advised by Robert J. Shmookler Reis). He joined the faculty at Eastern Kentucky University in 2021 before moving to Tulane in January 2024.",
      "Across Ghana and Africa he serves as Tulane's University Liaison for Global Engagement with KNUST, Ensign Global University, the University of Cape Coast and the University of Ghana, and was part of the Tulane delegation behind the Tulane–KNUST memorandum of understanding signed in 2025. He speaks English, Fante and Twi.",
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
    period: "2009–2013",
    role: "Mathematics teacher; B.Ed. Mathematics, UCC (2011)",
    institution: "University of Cape Coast · Wesley Girls' High School",
    description:
      "Trained as a mathematics teacher at the University of Cape Coast and taught mathematics in Ghana, including at Wesley Girls' High School — the start of a career that has kept teaching at its centre.",
    map: { x: 46.5, y: 54 },
    icon: "graduation-cap",
  },
  {
    id: "tennessee",
    place: "Johnson City",
    region: "Tennessee",
    period: "2015",
    role: "M.S. Mathematical Sciences",
    institution: "East Tennessee State University",
    description:
      "Completed an M.S. in Mathematical Sciences, advised by Debra Knisley. Thesis: \"A Hierarchical Graph for Nucleotide Binding Domain 2\" — the first step from teaching mathematics to using it on biological structure.",
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
      "Completed a Ph.D. in Bioinformatics (GPA 4.0), advised by Robert J. Shmookler Reis. Dissertation: \"Drugs that Protect Against Protein Aggregation in Neurodegenerative Diseases.\" Supported as a graduate research assistant on NIH/NIA P01, VA and Arkansas INBRE-funded research.",
    map: { x: 20, y: 40.5 },
    icon: "network",
  },
  {
    id: "kentucky",
    place: "Richmond",
    region: "Kentucky",
    period: "2021–2023",
    role: "Assistant Professor of Statistics & Data Science",
    institution: "Eastern Kentucky University",
    description:
      "First faculty appointment: taught R and Data Mining, Regression, Applied Statistics, Statistical ML in R and Multivariate Analysis, and directed the university's Statistical Consulting Center.",
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
      "Leads an independent research programme in explainable AI for public health, directs SMART-Pred with the Louisiana Department of Health, and serves as Tulane's University Liaison for Global Engagement with partner institutions across Ghana.",
    map: { x: 20.5, y: 42.5 },
    icon: "map-pin",
  },
];

export const storyParagraphs = [
  "He trained as a mathematics teacher at the University of Cape Coast (B.Ed. Mathematics, 2011) and taught mathematics in Ghana, including at Wesley Girls' High School (2009–2013) and earlier schools. That start matters to how he works now: the first audience for any model he builds is a person who has to act on it.",
  "From Cape Coast he moved to East Tennessee State University for an M.S. in Mathematical Sciences (2015, advised by Debra Knisley, thesis on a hierarchical graph for Nucleotide Binding Domain 2), then to Little Rock for a Ph.D. in Bioinformatics shared between the University of Arkansas at Little Rock and the University of Arkansas for Medical Sciences (2021, advised by Robert J. Shmookler Reis). There, the mathematics turned biological: proteins became graphs, and the question became which parts of a structure carry the most weight.",
  "A first faculty post at Eastern Kentucky University followed in 2021, and in January 2024 he joined Tulane — where the work widened from molecules and patients out to whole populations, and where the Ghana partnerships became a formal part of the job as Tulane's University Liaison for Global Engagement.",
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
    href: "https://sph.tulane.edu",
  },
  {
    // Placed under CAIDS only, per the source document's consistency fix:
    // "Decide how to present the Senior Advisor role and place it under
    // CAIDS only. The CV lists it under different units."
    title: "Senior Advisor for Health Data Science Engagement",
    organisation: "Connolly Alexander Institute for Data Science (CAIDS)",
    period: "Jul 2026 – present",
    current: true,
    href: "https://caids.tulane.edu",
  },
  {
    title: "Assistant Professor (tertiary)",
    organisation: "Tulane Center for Aging, School of Medicine",
    period: "Jan 2024 – present",
    current: true,
  },
  {
    title: "Director",
    organisation: "Kakraba Research Group",
    period: "2024 – present",
    current: true,
    description: "People, projects and open positions all live on the lab's own site.",
    href: "https://kakraba-research-group.vercel.app",
    external: true,
  },
  {
    title: "Assistant Professor of Statistics & Data Science",
    organisation: "Eastern Kentucky University",
    period: "2021 – 2023",
    current: false,
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
  /** e.g. "GPA 4.0" */
  note?: string;
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
    note: "GPA 4.0",
    thesis: {
      title: "Drugs that Protect Against Protein Aggregation in Neurodegenerative Diseases",
      advisor: "Robert J. Shmookler Reis",
    },
  },
  {
    degree: "M.S.",
    field: "Mathematical Sciences",
    institution: "East Tennessee State University",
    year: 2015,
    location: "Johnson City, Tennessee",
    thesis: {
      title: "A Hierarchical Graph for Nucleotide Binding Domain 2",
      advisor: "Debra Knisley",
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
  /** A descriptive period rather than a single invented year where the
   *  source document doesn't give one. */
  year: string;
  note?: string;
};

export const honors: Honor[] = [
  {
    title: "Outstanding College Doctoral Candidate",
    organisation: "University of Arkansas at Little Rock & UAMS",
    year: "2020–21",
  },
  {
    title: "Outstanding Departmental Doctoral Candidate",
    organisation: "University of Arkansas at Little Rock & UAMS",
    year: "2020–21",
  },
  {
    title: "Top-ranked student, College of STEM",
    organisation: "University of Arkansas at Little Rock",
    year: "During Ph.D. (2015–2021)",
  },
  {
    title: "3rd place, Outstanding Oral Presentation",
    organisation: "UAMS Drug Discovery Colloquium",
    year: "During Ph.D. (2015–2021)",
  },
  {
    title: "Faculty Award for Outstanding Graduate Student",
    organisation: "East Tennessee State University",
    year: "During M.S. (– 2015)",
  },
  {
    title: "Graduate assistantship awards",
    organisation: "East Tennessee State University · University of Arkansas at Little Rock & UAMS",
    year: "2013–2021",
  },
];

/* ----------------------------------------------------------------- skills */

export type SkillGroup = {
  label: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Statistics & programming",
    icon: "code",
    items: ["R", "Python", "SAS", "SPSS", "Minitab", "Prism", "Hadoop"],
  },
  {
    label: "Molecular modeling",
    icon: "flask",
    items: ["GROMACS", "Schrödinger Maestro", "AutoDock Vina", "Discovery Studio", "Chimera", "Sybyl"],
  },
  { label: "Network analysis", icon: "network", items: ["Cytoscape"] },
  { label: "Infrastructure", icon: "layers", items: ["Linux", "LaTeX"] },
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
    "Outside the department he competed in track and field (wins at 5K, 1500m and 3000m), and he moves between English, Fante and Twi depending on who is in the room.",
  items: [
    { label: "Track & field — 5K, 1500m, 3000m", icon: "activity" },
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
    "For event programmes, press and introductions. Photographs are free to use with credit.",
  terms: "Free to use with credit: “Photo courtesy of Samuel Kakraba.”",
  // Exact four speaking topics given in the source document.
  speakingTopics: [
    "Explainable AI for public health practice",
    "Responsible AI governance",
    "AI and decolonial global health",
    "From handwriting to health: AI for early Alzheimer's screening",
  ],
  assets: [
    {
      label: "Hi-res headshot",
      description: "Colour, neutral background.",
      icon: "users",
      href: "/images/headshots/samuel-kakraba-headshot.jpg",
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
    caption: "Teaching at the Tulane University School of Public Health & Tropical Medicine.",
  },
  ghana: {
    src: null,
    alt: "Dr. Kakraba with colleagues during a university visit in Ghana",
    caption: "University partnership visit, Ghana.",
  },
  speaking: {
    src: null,
    alt: "Dr. Kakraba delivering a keynote address",
    caption: "Keynote, KNUST 11th Biennial Scientific Conference, 2025.",
  },
};
