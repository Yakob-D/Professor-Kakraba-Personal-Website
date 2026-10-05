/* =============================================================================
   RESEARCH DATA
   Source: Kakraba-Website-Informations.docx. Pillar names, topics, patent
   numbers and funding are drawn from that document; see app/data/site.tsx
   for the general sourcing note. In-review manuscripts without a public
   preprint are named by topic only, per the document's explicit rule that
   they "shouldn't appear as headline metrics" and belong on pillar pages,
   not the public Publications list. Unfunded/pending grant applications are
   omitted entirely, per the document's funding caveats.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

/* --------------------------------------------------------------- areas */

export type ResearchOutput = {
  label: string;
  href?: string;
  kind: "paper" | "software" | "patent" | "collaboration" | "in-review";
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
    title: "AI for Public Health Surveillance & Precision Prediction",
    shortTitle: "Surveillance & Precision Prediction",
    icon: "activity",
    summary:
      "Early-warning and precision-prediction models for the conditions that move population health, built so the people using them can see why a prediction was made.",
    problem:
      "Public health teams often learn about a rising risk — postpartum depression, sepsis, a cardiovascular event, a mental-health crisis — after it has already become urgent. The data to act earlier usually exists; it is rarely turned into a timely, trustworthy signal.",
    approach:
      "Interpretable machine-learning models built on routinely collected health data, validated with state and clinical partners, and designed from the start to explain their own output. SMART-Pred, developed with the Louisiana Department of Health, is the flagship: it currently runs 10 machine-learning algorithms, with a roadmap toward more than 20.",
    keyOutputs: [
      { label: "SMART-Pred", href: "/research/smart-pred", kind: "software" },
      { label: "Postpartum depression prediction model", kind: "paper" },
      { label: "Sepsis and heart-failure/CVD prediction", kind: "paper" },
      { label: "Parkinson's voice pipeline, published in Data", kind: "paper" },
      { label: "Handwriting-based Alzheimer's screening", kind: "paper" },
      { label: "Mental health & hypertension workflows", kind: "paper" },
      { label: "LLMs for infectious disease surveillance", kind: "in-review" },
      { label: "Louisiana Department of Health partnership", kind: "collaboration" },
    ],
    whatsNext:
      "Extending SMART-Pred toward more than 20 algorithms, multi-disease validation and HIPAA compliance, under the WSPH–CAIDS AI Seed Grant (2026–2027).",
    topics: [
      "SMART-Pred",
      "Maternal health",
      "Sepsis",
      "Heart failure & CVD",
      "Mental health",
      "Hypertension",
      "Infectious disease surveillance (LLMs)",
      "Alzheimer's handwriting screening",
    ],
    image: {
      src: null,
      alt: "A clinical dashboard showing a population health risk prediction",
      caption: "SMART-Pred, developed with the Louisiana Department of Health.",
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
      "Partly methodological work on evaluation frameworks that go beyond a single metric like AUC, and partly argumentative work naming who gets to interpret a model's output and designing systems that stay humble about what they don't know. This area anchors a new course, BIOS 6790, and Tulane's WSPH AI Literacy committee.",
    keyOutputs: [
      {
        label: "Cognitive sovereignty and decolonial public health, Frontiers in Public Health",
        href: "/publications#cognitive-sovereignty",
        kind: "paper",
      },
      { label: "\"The Proxy Problem\"", kind: "in-review" },
      { label: "Algorithmic monoculture", kind: "in-review" },
      { label: "Beyond AUC", kind: "in-review" },
      { label: "Epistemic humility in clinical AI", kind: "in-review" },
      { label: "Generative AI as public health language infrastructure", kind: "in-review" },
    ],
    whatsNext:
      "Several manuscripts from this pillar are currently in review; as they clear peer review, they will move from this page onto the Publications list.",
    topics: [
      "Cognitive sovereignty",
      "Beyond AUC",
      "The Proxy Problem",
      "Algorithmic monoculture",
      "Epistemic humility",
    ],
    image: {
      src: null,
      alt: "A diagram comparing model accuracy against interpretability",
      caption: "Evaluating a model on more than a single accuracy number.",
    },
  },
  {
    slug: "ai-drug-discovery-aging",
    number: "03",
    title: "AI-Driven Drug Discovery for Aging & Neurodegeneration",
    shortTitle: "Drug Discovery for Aging & Neurodegeneration",
    icon: "flask",
    summary:
      "Machine-learning structure–activity modelling to narrow the search for compounds that act on aging and neurodegenerative-disease pathways.",
    problem:
      "Screening candidate compounds against age-related disease targets by hand is slow and expensive, and most candidates fail. A model that can rank candidates before any wet-lab work begins saves both time and reagents.",
    approach:
      "AI-QSAR combines machine-learning structure–activity modelling with molecular docking and simulation (GROMACS, Schrödinger Maestro, AutoDock Vina) to prioritise compounds — including TDZD analogs, quinoline-based multi-target inhibitors, and C. elegans lifespan models — for further testing.",
    keyOutputs: [
      { label: "AI-QSAR for DNA polymerase inhibitors, JMIR AI", kind: "paper" },
      { label: "Second AI-QSAR study, JMIR AI", kind: "paper" },
      { label: "TDZD analogs & C. elegans lifespan models, Pharmaceuticals", kind: "paper" },
      { label: "Published work in Frontiers in Molecular Neuroscience", kind: "paper" },
      { label: "Published work in iScience", kind: "paper" },
      { label: "Published work in Antioxidants & Redox Signaling", kind: "paper" },
      { label: "Published work in Molecules", kind: "paper" },
      { label: "Quinoline multi-target AChE/aggregation inhibitors — patent filed", kind: "patent" },
      { label: "TDZD analogs — patent", kind: "patent" },
    ],
    whatsNext:
      "Validating top-ranked AI-QSAR candidates in collaboration with wet-lab partners at the Tulane Center for Aging.",
    topics: ["AI-QSAR", "TDZD analogs", "Quinoline inhibitors", "C. elegans lifespan models"],
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
      "Protein structures are represented as residue-interaction graphs and analysed with centrality and community-detection methods. This method traces back to his master's thesis — a hierarchical graph for Nucleotide Binding Domain 2 (NBD2) — and has since generalised across several structural targets.",
    keyOutputs: [
      { label: "CFTR and sickle-cell mutation models", kind: "paper" },
      { label: "A Hierarchical Graph for Nucleotide Binding Domain 2 (M.S. thesis)", kind: "paper" },
      {
        label: "SARS-CoV-2 spike edge weights, JMIR Bioinformatics and Biotechnology",
        kind: "paper",
      },
      { label: "Hepatitis B structural graph/MD/ML analysis", kind: "in-review" },
    ],
    whatsNext:
      "The Hepatitis B structural analysis is currently in review. Future work applies the same graph-theoretic pipeline to targets identified by the drug-discovery pillar.",
    topics: ["CFTR", "Sickle cell", "NBD2", "SARS-CoV-2 spike protein", "Hepatitis B"],
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
  tagline: "An explainable, AI-driven platform for public health surveillance.",
  description:
    "SMART-Pred turns routinely collected health data into a risk estimate a public health team can act on, paired with an explanation of the factors behind it. Developed with the Louisiana Department of Health, it currently runs 10 machine-learning algorithms, with a roadmap toward more than 20, and its top model reached 91% test accuracy in a JMIR Aging case study.",
  quote: {
    text: "SMART-pred represents a new model for public health… AI-driven, explainable, affordable and accessible to everyone.",
    attribution: "Samuel Kakraba, Ph.D.",
  },
  result: { value: "91%", label: "Test accuracy, JMIR Aging case study" },
  partner: {
    name: "Louisiana Department of Health",
    description:
      "SMART-Pred was developed and validated with the Louisiana Department of Health, working toward HIPAA compliance.",
  },
  // Collaborators named in Tulane's own CAIDS/WSPH press coverage of SMART-Pred.
  collaborators: ["Sudesh K. Srivastav", "Jeffrey G. Shaffer", "Edmund F. Agyemang", "Han Wenzheng"],
  sections: [
    {
      title: "What it is",
      body: "A machine-learning platform: it returns a risk estimate alongside the factors driving it, so the output can be checked rather than taken on faith. It currently uses 10 machine-learning algorithms for multi-algorithm comparison.",
    },
    {
      title: "How it was built",
      body: "Built and validated with the Louisiana Department of Health, with the explanation layer treated as a first-class design requirement — and with no coding required to use it.",
    },
    {
      title: "Roadmap",
      body: "Expanding from 10 to more than 20 algorithms, multi-disease validation, and HIPAA compliance, supported by a WSPH–CAIDS AI Seed Grant (2026–2027) with Dr. Kakraba as Principal Investigator.",
    },
  ] satisfies SmartPredSection[],
  links: {
    demo: "https://smart-pred.example.org",
    paper: "/publications#smart-pred-jmir-aging",
    code: "https://github.com/KakrabaLab",
  },
  image: {
    src: null,
    alt: "The SMART-Pred interface showing a risk score and its explanation",
    caption: "SMART-Pred's explanation panel, shown alongside the risk estimate.",
  } satisfies ImageRef,
};

/* -------------------------------------------------------------- patents */

export type Patent = {
  title: string;
  number: string;
  status: string;
  filingBody: string;
  description: string;
};

/**
 * The source document's headline metric is "3 patents/applications," but it
 * only gives verifiable reference numbers for two. Rather than invent a
 * third, this list shows the two documented patents and says so.
 */
export const patents: Patent[] = [
  {
    title: "Quinoline multi-target AChE/aggregation inhibitors",
    number: "Filed with Tulane OIPM, 2026",
    status: "Filed",
    filingBody: "Tulane Office of Intellectual Property Management (OIPM)",
    description:
      "Covers quinoline-based multi-target acetylcholinesterase (AChE) and protein-aggregation inhibitors from the drug-discovery pillar.",
  },
  {
    title: "TDZD analogs",
    number: "US 2023/0125667 A1 · PCT/US2021/017970",
    status: "Application published",
    filingBody: "U.S. Patent and Trademark Office / PCT",
    description: "Covers TDZD-analog compounds developed from the AI-QSAR screening pipeline.",
  },
];

export const patentsCount = 3;
export const patentsNote =
  "The headline figure of 3 patents/applications includes one additional application not yet publicly detailed here.";

/* -------------------------------------------------------------- funding */

export type FundingStatus = "current" | "pending" | "prior";

export type FundingItem = {
  title: string;
  role: string;
  /** Lead PI, where he is not the PI himself. */
  pi?: string;
  /** Omitted where the CV doesn't name the sponsor. */
  sponsor?: string;
  period: string;
  status: FundingStatus;
  /** Per the source document's funding caveats: no dollar amounts, pending
   *  applications shown as "under review" only, unfunded applications left
   *  off entirely, and prior support labelled as a graduate research
   *  assistantship rather than his own PI funding. */
  description: string;
};

export const fundingGroups: { status: FundingStatus; label: string }[] = [
  { status: "current", label: "Current support" },
  { status: "pending", label: "Under review" },
  { status: "prior", label: "Previously funded support" },
];

export const funding: FundingItem[] = [
  {
    title: "SMART-Pred: Machine Learning for Population Health Surveillance",
    role: "Principal Investigator",
    sponsor: "Tulane WSPH–CAIDS AI Seed Grant",
    period: "2026 – 2027",
    status: "current",
    description:
      "Develops and pilots SMART-Pred as a scalable multi-algorithm AI/ML platform for population health surveillance, extending the Alzheimer's-focused tool to cancer, maternal health and infectious diseases, with intensive graduate training in applied AI and biostatistics.",
  },
  {
    title: "SMART-Pred v2 Teach: Equitable, Explainable Clinical Prediction and AI",
    role: "Principal Investigator",
    sponsor: "Josiah Macy Jr. Foundation (Board Grant)",
    period: "2026 – 2029",
    status: "pending",
    description:
      "A curriculum built on SMART-Pred v2, the open-source Shiny platform integrating multi-algorithm benchmarking, SHAP-based explainability, subgroup equity analysis and temporal surveillance.",
  },
  {
    title: "Multilevel machine learning to predict and prevent adverse pregnancy, birth and postpartum outcomes in Louisiana",
    role: "Co-Investigator",
    pi: "Vilda (PI)",
    period: "2027 – 2032",
    status: "pending",
    description: "Multilevel AI/ML modeling to predict and prevent adverse maternal and birth outcomes.",
  },
  {
    title: "A Neurovascular Pathway to Apathy in AD/ADRD: Extracellular Vesicle and Imaging Markers",
    role: "Co-Investigator",
    pi: "Japa (PI)",
    period: "2027 – 2029",
    status: "pending",
    description: "Biostatistical and computational support for vascular and white-matter injury markers in AD/ADRD.",
  },
  {
    title: "Scalable and Efficient Bootstrap Methods",
    role: "Co-Investigator",
    pi: "Srivastav (PI)",
    sponsor: "NSF Statistics",
    period: "2026 – 2029",
    status: "pending",
    description: "Statistical and computational expertise for scalable bootstrap methodology.",
  },
  {
    title: "Early Events in Alzheimer Pathogenesis",
    role: "Graduate Research Assistant",
    pi: "Griffin (PI)",
    sponsor: "NIH/NIA P01 AG012411",
    period: "2016 – 2021",
    status: "prior",
    description:
      "Protein aggregation and drug-testing research within a large interdisciplinary Alzheimer's disease program.",
  },
  {
    title: "Analysis and Therapy of Age-Dependent Proteostasis Failure in Neurodegeneration",
    role: "Graduate Research Assistant",
    pi: "Reis (PI)",
    sponsor: "Department of Veterans Affairs (I01BX001655)",
    period: "2013 – 2022",
    status: "prior",
    description:
      "Protein aggregation studies in C. elegans and human CNS samples on neurodegeneration and proteostasis failure.",
  },
  {
    title: "Senior Research Career Scientist Award",
    role: "Graduate Research Assistant",
    pi: "Reis (PI)",
    sponsor: "Department of Veterans Affairs",
    period: "2012 – 2019",
    status: "prior",
    description:
      "A sustained aging and neurodegeneration research program covering protein aggregation and translational therapeutics.",
  },
  {
    title: "Arkansas IDeA Network of Biomedical Research Excellence",
    role: "Doctoral Graduate Assistant",
    sponsor: "NIGMS/NIH Arkansas INBRE (P20 GM103429)",
    period: "2015 – 2017",
    status: "prior",
    description: "Protein aggregation inhibition studies during early doctoral research.",
  },
];

export const fundingNote =
  "Prior support was held as a graduate research assistant, not as Principal Investigator. Proposals under review are listed without amounts.";

/* ------------------------------------------------------------ page copy */

export const researchVision = {
  paragraphs: [
    "The research moves along one arc — molecules → patients → populations — with explainability and equity as the common thread running through all of it. A compound identified through AI-QSAR eventually becomes a question a clinician has to answer about a patient; a pattern found in a protein's residue network can point toward exactly that compound; a prediction made about an individual patient only becomes useful at scale if a health department can trust and act on it across a whole population.",
    "The four pillars on this page — surveillance and precision prediction, explainable and responsible AI, drug discovery for aging, and graph-theoretic computational biology — are stops along that same path, not four separate fields. A model is treated as unfinished until the people who have to act on it can be shown why it says what it says, whether that person is a patient, a clinician, or a health department evaluating a new tool.",
  ],
};
