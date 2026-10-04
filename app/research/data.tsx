/* =============================================================================
   RESEARCH DATA
   Drives /research (overview), /research/[area] (4 dynamic pages) and
   /research/smart-pred. All exports are JSON-serialisable.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

/* --------------------------------------------------------------- areas */

export type ResearchOutput = {
  label: string;
  href?: string;
  kind: "paper" | "software" | "patent" | "collaboration";
};

export type ResearchArea = {
  slug: string;
  number: string;
  title: string;
  /** Short title for breadcrumbs/cards. */
  shortTitle: string;
  icon: string;
  summary: string;
  problem: string;
  approach: string;
  keyOutputs: ResearchOutput[];
  whatsNext: string;
  /** Named projects/topics inside this area, shown as a tag list. */
  topics: string[];
  image: ImageRef;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "ai-public-health-surveillance",
    number: "01",
    title: "AI for Public Health Surveillance & Prediction",
    shortTitle: "Surveillance & Prediction",
    icon: "activity",
    summary:
      "Early-warning models for the conditions that move population health, built so the people using them can see why a prediction was made.",
    problem:
      "Public health teams often learn about a rising risk — maternal complications, sepsis, a cardiovascular event, a mental-health crisis — after it has already become urgent. The data to act earlier usually exists; it is rarely turned into a timely, trustworthy signal.",
    approach:
      "We build interpretable machine-learning models on routinely collected health data, validated with state and clinical partners, and designed from the start to explain their own output rather than treat explanation as an afterthought.",
    keyOutputs: [
      { label: "SMART-Pred", href: "/research/smart-pred", kind: "software" },
      { label: "Maternal health risk model", kind: "paper" },
      { label: "Sepsis early-warning study", kind: "paper" },
      { label: "Louisiana Department of Health partnership", kind: "collaboration" },
    ],
    whatsNext:
      "Extending SMART-Pred's approach to heart failure and CVD risk, and to an Alzheimer's screening tool built on handwriting dynamics.",
    topics: [
      "Maternal health",
      "Sepsis",
      "Heart failure & CVD",
      "Mental health",
      "Alzheimer's handwriting screening",
    ],
    image: {
      src: null,
      alt: "A clinical dashboard showing a population health risk prediction",
      caption: "An early version of the SMART-Pred risk dashboard.",
    },
  },
  {
    slug: "explainable-responsible-ai",
    number: "02",
    title: "Explainable & Responsible AI",
    shortTitle: "Explainable & Responsible AI",
    icon: "shield",
    summary:
      "Methods and arguments for models that the people deploying them can interrogate, challenge and ultimately trust.",
    problem:
      "A model can be accurate and still be useless in practice if nobody downstream can tell why it made a particular call — or can see when it should not be trusted. In global health settings, this gap often falls hardest on the people with the least power to question the model.",
    approach:
      "This area is partly methodological — evaluation frameworks that go beyond a single metric like AUC — and partly argumentative: naming who gets to interpret a model's output, and designing systems that stay humble about what they don't know.",
    keyOutputs: [
      { label: "Cognitive sovereignty, Frontiers in Public Health", href: "/publications#cognitive-sovereignty", kind: "paper" },
      { label: "Beyond AUC: evaluation framework", kind: "paper" },
      { label: "Epistemic humility in clinical AI", kind: "paper" },
    ],
    whatsNext:
      "A practical checklist for health departments evaluating a vendor's AI claims, grounded in the same framework.",
    topics: ["Cognitive sovereignty", "Beyond AUC", "Epistemic humility", "Model governance"],
    image: {
      src: null,
      alt: "A diagram comparing model accuracy against interpretability",
      caption: "Evaluating a model on more than a single accuracy number.",
    },
  },
  {
    slug: "ai-drug-discovery-aging",
    number: "03",
    title: "AI-Driven Drug Discovery for Aging",
    shortTitle: "Drug Discovery for Aging",
    icon: "flask",
    summary:
      "Machine-learning structure–activity modelling to narrow the search for compounds that act on age-related disease pathways.",
    problem:
      "Screening candidate compounds against age-related disease targets by hand is slow and expensive, and most candidates fail. A model that can rank candidates before any wet-lab work begins saves both time and reagents.",
    approach:
      "AI-QSAR combines machine-learning structure–activity modelling with molecular docking and simulation (GROMACS, Maestro, AutoDock Vina) to prioritise compounds — including TDZD analogs and quinoline-based inhibitors — for further testing.",
    keyOutputs: [
      { label: "AI-QSAR, JMIR AI", href: "/publications#ai-qsar-jmir-ai", kind: "paper" },
      { label: "TDZD analog screening study", kind: "paper" },
      { label: "Quinoline inhibitor docking study", kind: "paper" },
    ],
    whatsNext:
      "Validating the top-ranked AI-QSAR candidates in collaboration with wet-lab partners at the Tulane Center for Aging.",
    topics: ["AI-QSAR", "TDZD analogs", "Quinoline inhibitors", "Molecular docking"],
    image: {
      src: null,
      alt: "A molecular docking visualization of a candidate compound",
      caption: "A docked candidate compound from the AI-QSAR pipeline.",
    },
  },
  {
    slug: "graph-theoretic-computational-biology",
    number: "04",
    title: "Graph-Theoretic Computational Biology",
    shortTitle: "Graph-Theoretic Computational Biology",
    icon: "network",
    summary:
      "Treating proteins as networks to find the residues and interactions that matter most to structure and function.",
    problem:
      "A protein's function often depends on a small number of structurally critical residues, buried inside a huge space of possible interactions. Graph theory gives a principled way to find them.",
    approach:
      "Protein structures are represented as residue-interaction graphs and analysed with centrality and community-detection methods, then linked back to known disease mechanisms.",
    keyOutputs: [
      { label: "CFTR structural network analysis", kind: "paper" },
      { label: "Sickle-cell haemoglobin study", kind: "paper" },
      { label: "SARS-CoV-2 spike protein network analysis", kind: "paper" },
      { label: "Hepatitis B structural study", kind: "paper" },
    ],
    whatsNext:
      "Applying the same graph-theoretic pipeline to targets identified by the drug-discovery line of work.",
    topics: ["CFTR", "Sickle cell", "SARS-CoV-2 spike protein", "Hepatitis B"],
    image: {
      src: null,
      alt: "A network diagram of a protein's residue interactions",
      caption: "A residue-interaction graph used to find structurally critical sites.",
    },
  },
];

export function getResearchArea(slug: string) {
  return researchAreas.find((a) => a.slug === slug);
}

/* ------------------------------------------------------------- SMART-Pred */

export type SmartPredSection = { title: string; body: string };

export const smartPred = {
  name: "SMART-Pred",
  tagline: "An open, explainable early-warning tool for population health risk.",
  description:
    "SMART-Pred turns routinely collected health data into a risk estimate a public health team can act on, paired with an explanation of the factors behind it. It was built and validated in partnership with the Louisiana Department of Health, and both the trained model and the source code are released openly.",
  result: { value: "91%", label: "Test accuracy" },
  partner: {
    name: "Louisiana Department of Health",
    description:
      "SMART-Pred was developed and validated against LDH surveillance data, with the department as a direct collaborator on model design and evaluation criteria.",
  },
  sections: [
    {
      title: "What it is",
      body: "A web-based prediction tool: enter the relevant inputs and SMART-Pred returns a risk estimate alongside the top factors driving that estimate, so the output can be checked rather than taken on faith.",
    },
    {
      title: "How it was built",
      body: "An interpretable machine-learning pipeline trained on de-identified health records, with the explanation layer treated as a first-class design requirement rather than a post-hoc add-on.",
    },
    {
      title: "Roadmap",
      body: "Extending the same approach to heart-failure and cardiovascular-disease risk, with further validation planned alongside additional state health partners.",
    },
  ] satisfies SmartPredSection[],
  links: {
    demo: "https://smart-pred.example.org",
    paper: "/publications#smart-pred-jmir-aging",
    code: "https://github.com/PLACEHOLDER/smart-pred",
  },
  image: {
    src: null,
    alt: "The SMART-Pred interface showing a risk score and its explanation",
    caption: "SMART-Pred's explanation panel, shown alongside the risk estimate.",
  } satisfies ImageRef,
};

/* ------------------------------------------------------------ software */

export type SoftwareProject = {
  name: string;
  description: string;
  href: string;
  language: string;
  relatedArea?: string;
};

export const softwareProjects: SoftwareProject[] = [
  {
    name: "smart-pred",
    description: "The SMART-Pred model, training pipeline and web interface.",
    href: "https://github.com/PLACEHOLDER/smart-pred",
    language: "Python",
    relatedArea: "ai-public-health-surveillance",
  },
  {
    name: "ai-qsar",
    description: "QSAR modelling pipeline used in the aging drug-discovery work.",
    href: "https://github.com/PLACEHOLDER/ai-qsar",
    language: "Python / R",
    relatedArea: "ai-drug-discovery-aging",
  },
  {
    name: "graph-residue-networks",
    description: "Residue-interaction graph construction and centrality analysis toolkit.",
    href: "https://github.com/PLACEHOLDER/graph-residue-networks",
    language: "Python",
    relatedArea: "graph-theoretic-computational-biology",
  },
];

/* -------------------------------------------------------------- patents */

export type Patent = {
  title: string;
  number: string;
  status: "Granted" | "Pending" | "Provisional";
  year: number;
  description: string;
};

export const patents: Patent[] = [
  {
    title: "System and method for interpretable population health risk prediction",
    number: "US Patent Application No. PLACEHOLDER-1",
    status: "Pending",
    year: 2025,
    description: "Covers the core SMART-Pred prediction and explanation architecture.",
  },
  {
    title: "Graph-based method for identifying structurally critical protein residues",
    number: "US Patent Application No. PLACEHOLDER-2",
    status: "Pending",
    year: 2024,
    description: "Covers the residue-centrality method used across the graph-theory projects.",
  },
  {
    title: "Machine-learning structure–activity screening method for candidate compounds",
    number: "US Patent Application No. PLACEHOLDER-3",
    status: "Provisional",
    year: 2026,
    description: "Covers the AI-QSAR screening pipeline.",
  },
];

/* -------------------------------------------------------------- funding */

export type FundingItem = {
  title: string;
  role: string;
  sponsor: string;
  period: string;
  current: boolean;
  /** Per the plan: no dollar amounts, ever. */
  description: string;
};

export const funding: FundingItem[] = [
  {
    title: "Explainable risk prediction for state health partners",
    role: "Principal Investigator",
    sponsor: "Tulane University (seed grant)",
    period: "2026 – present",
    current: true,
    description:
      "Supports the next phase of SMART-Pred's development and validation with additional state partners.",
  },
  {
    title: "Graduate research support",
    role: "Graduate Research Assistant",
    sponsor: "NIH / VA / Arkansas INBRE",
    period: "2015 – 2021",
    current: false,
    description:
      "Supported doctoral research in computational structural biology, held as a graduate research assistant.",
  },
];

/* ------------------------------------------------------------ page copy */

export const researchVision = {
  paragraphs: [
    "Most health AI work picks one scale and stays there — a model for a molecule, a model for a patient, a model for a population — and treats explainability as someone else's problem. This research programme is built around the idea that the scales are connected, and that the explanation has to travel with the model wherever it goes.",
    "A compound identified through AI-QSAR eventually becomes a question a clinician has to answer about a patient; a pattern found in a protein's residue network can point toward exactly that compound; a prediction made about an individual patient only becomes useful at scale if a health department can trust and act on it across a whole population. The four research areas on this page are stops along that same path, not four separate fields.",
  ],
};
