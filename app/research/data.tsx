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

/** The main research areas, in his own words. */
export const mainResearchAreas =
  "His research combines artificial intelligence, machine learning, biostatistics, bioinformatics, and computational biology to address public-health prediction, aging and neurodegenerative diseases, drug discovery, and digital health.";

/* -------------------------------------------------------------- patents */

export type Patent = {
  title: string;
  /** Inventors exactly as listed on the CV. */
  inventors: string;
  year: number;
  number: string;
  status: string;
  filingBody: string;
  description: string;
  href?: string;
};

/** All three patents/applications, as listed under "Patents/Inventions" on the CV. */
export const patents: Patent[] = [
  {
    title: "Novel Quinoline Analogs as Multi-Target Inhibitors of Acetylcholinesterase and Protein Aggregation in Alzheimer’s Disease Therapy",
    inventors: "Kakraba, S., et al.",
    year: 2025,
    number: "Submission ID: OI2026-00561 · January 14, 2026",
    status: "Application submitted",
    filingBody: "Tulane Office of Intellectual Property Management",
    description:
      "Quinoline-based multi-target acetylcholinesterase (AChE) and protein-aggregation inhibitors from the drug-discovery pillar.",
  },
  {
    title: "Novel TDZD analogs as agents that delay, prevent, or reverse age-associated diseases and as anti-cancer and antileukemic agents",
    inventors: "Bowroju, S.K., Crooks, P., Penthala, N., Ayyadevara, S., Guzman, M., Shmookler Reis, R.J., Lopes, E., & Kakraba, S.",
    year: 2021,
    number: "U.S. Patent Application No. US20230125667A1",
    status: "Application published",
    filingBody: "U.S. Patent and Trademark Office",
    description: "TDZD-analog compounds for age-associated disease, cancer and leukemia.",
    href: "https://patents.google.com/patent/US20230125667A1",
  },
  {
    title: "U.S. Patent Application No. PCT/US/2021/017970",
    inventors: "Bowroju, K.S., Crooks, P., Penthala, N., Ayyadevara, S., Guzman, M., Reis, S.J.R., Lopes, E., Kakraba, S.",
    year: 2021,
    number: "PCT/US/2021/017970",
    status: "PCT application",
    filingBody: "Patent Cooperation Treaty (PCT)",
    description: "International application filed alongside the TDZD-analog work.",
  },
];

export const patentsCount = patents.length;

/* -------------------------------------------------------------- funding */

export type FundingStatus = "current" | "pending" | "unfunded" | "prior";

export type FundingItem = {
  /** The PI line and dates exactly as printed on the CV. */
  pi: string;
  period: string;
  sponsor: string;
  title: string;
  role: string;
  effort?: string;
  /** Total sponsor / direct costs, as printed on the CV. */
  costs?: string;
  /** The CV's status line. */
  statusLabel?: string;
  status: FundingStatus;
  description: string;
};

export const fundingGroups: { status: FundingStatus; label: string }[] = [
  { status: "current", label: "Current support" },
  { status: "pending", label: "Submitted / pending applications" },
  { status: "unfunded", label: "Unfunded applications" },
  { status: "prior", label: "Previously funded research support" },
];

/** Every entry under "Research Support" (C.2.1–C.2.3) on the CV. */
export const funding: FundingItem[] = [
  {
    pi: "Kakraba (PI)",
    period: "01/2026–06/2027",
    sponsor: "Tulane University – WSPH–CAIDS AI Seed Grant",
    title: "SMART-pred: Machine Learning for Population Health Surveillance",
    role: "Principal Investigator",
    effort: "N/A",
    costs: "Total Sponsor Costs: Approximately $50,000 (WSPH Seed Funds: $30,000; CAIDS Research Assistant Funds: $20,000)",
    statusLabel: "Funded / Active",
    status: "current",
    description:
      "Develops and pilots SMART-pred, a scalable multi-algorithm AI/ML platform for population health surveillance, extending an Alzheimer’s-focused prediction tool to broader applications such as cancer, maternal health, and infectious diseases, while providing intensive graduate student training in applied AI and biostatistics.",
  },
  {
    pi: "Vilda (PI)",
    period: "4/1/2027 – 3/31/2032",
    sponsor: "Project 26-0873-P0001",
    title: "Multilevel machine learning to predict and prevent adverse pregnancy, birth, and postpartum outcomes in Louisiana",
    role: "Co-Investigator",
    effort: "10%",
    costs: "Total Sponsor Costs: $3,553,208",
    statusLabel: "Under review",
    status: "pending",
    description:
      "Provides multilevel AI/ML modeling support to predict and prevent adverse pregnancy, birth, and postpartum outcomes in Louisiana.",
  },
  {
    pi: "Kakraba (PI)",
    period: "09/2026–09/2029",
    sponsor: "Josiah Macy Jr. Foundation (Board Grant)",
    title: "SMART-Pred v2 Teach: Transforming the Clinical Learning Environment for Equitable, Explainable Clinical Prediction and AI",
    role: "PI",
    effort: "30%",
    costs: "Total Sponsor Costs: Approx. $300,000 (3 years)",
    statusLabel: "Submitted",
    status: "pending",
    description:
      "SMART-Pred v2 Teach is built on existing, validated work from his laboratory. The curriculum centers on SMART-Pred v2, an open-source Shiny platform he has already developed that integrates multi-algorithm benchmarking, SHAP-based explainability, subgroup equity analysis, temporal surveillance, and operational decision-support views.",
  },
  {
    pi: "Shaffer, Doumbia (MPI)",
    period: "03/2025–02/2030",
    sponsor: "NIH (D43; 26-0076-P0001)",
    title: "Advancing Data Science Training for Enhancing Global Infectious Diseases in West Africa",
    role: "Co-Investigator (Subaward)",
    effort: "~7.5% (biostatistics and data science contribution)",
    costs: "Total Sponsor Costs: Approx. $545,000 (prime award; subaward to Tulane)",
    statusLabel: "Unfunded (not awarded to date)",
    status: "unfunded",
    description:
      "Provides biostatistical and data science expertise to support training and research activities in global infectious disease surveillance in West Africa.",
  },
  {
    pi: "Japa (PI)",
    period: "4/1/2027 – 3/31/2029",
    sponsor: "Project 26-1193-P0001",
    title: "A Neurovascular Pathway to Apathy in AD/ADRD: Extracellular Vesicle and Imaging Markers of Vascular and White Matter Injury",
    role: "Co-Investigator",
    effort: "5%",
    costs: "Total Sponsor Costs: $420,750",
    statusLabel: "Under review",
    status: "pending",
    description: "Provides biostatistical and computational support for the study.",
  },
  {
    pi: "Hutchinson (PI)",
    period: "04/2026–03/2028",
    sponsor: "Coefficient Giving (26-0621-P0001)",
    title: "AI-Enhanced Forecasting to Reduce Contraceptive Stockouts and Unplanned Pregnancies in LMICs",
    role: "Co-Investigator",
    effort: "10%",
    costs: "Total Sponsor Costs: $600,000",
    statusLabel: "Unfunded",
    status: "unfunded",
    description:
      "Provides AI/ML modeling support for contraceptive supply chain forecasting to reduce stockouts and unplanned pregnancies in low- and middle-income countries.",
  },
  {
    pi: "Hutchinson (PI)",
    period: "10/2025–03/2027",
    sponsor: "Bill & Melinda Gates Foundation (25-0865-P0001)",
    title: "Economic Impact of Gender Violence and Mental Health (EIGVM) Calculator",
    role: "Co-Investigator",
    effort: "10%",
    costs: "Total Sponsor Costs: $149,955",
    statusLabel: "Unfunded",
    status: "unfunded",
    description:
      "Contributes data science and analytical methods for economic impact modeling of gender-based violence and mental health outcomes.",
  },
  {
    pi: "Datta (PI)",
    period: "07/2025–06/2030",
    sponsor: "NIH (Tulane National Primate Research Center) (R01; 25-0492-P0001)",
    title: "Neuroinflammation and CNS HIV Persistence: Role of DDX3",
    role: "Co-Investigator",
    effort: "5%",
    costs: "Total Sponsor Costs: $3,393,494",
    statusLabel: "Unfunded",
    status: "unfunded",
    description:
      "Provides biostatistical and computational support for CNS HIV neuroinflammation research, with emphasis on DDX3-mediated mechanisms.",
  },
  {
    pi: "Datta (PI)",
    period: "04/2025–03/2030",
    sponsor: "NIH (Tulane National Primate Research Center) (R01; 25-0092-P0001)",
    title: "DDX3X Inhibitor, RK-33, as an Antiviral Agent for HIV-1 Cure",
    role: "Co-Investigator",
    effort: "5%",
    costs: "Total Sponsor Costs: $4,233,933",
    statusLabel: "Unfunded",
    status: "unfunded",
    description:
      "Contributes statistical modeling and data analysis for antiviral drug discovery and evaluation of DDX3X inhibitor RK‑33 in the context of an HIV‑1 cure.",
  },
  {
    pi: "Srivastav (PI)",
    period: "07/2026–06/2029",
    sponsor: "NSF Statistics (26-0593-P0001)",
    title: "Scalable and Efficient Bootstrap Methods",
    role: "Co-Investigator",
    effort: "10%",
    statusLabel: "Submitted / Under Review",
    status: "pending",
    description:
      "Provides statistical and computational expertise for the development and evaluation of scalable bootstrap methodology.",
  },
  {
    pi: "Shaffer (PI)",
    period: "12/2026–11/2031",
    sponsor: "NIH – USTTB/NIH R21/R33 (Global Infectious Disease Research; 26-0919-P0001)",
    title: "USTTB/NIH R21/R33 (Global Infectious Disease Research)",
    role: "Co-Investigator",
    effort: "7.0%",
    costs: "Total Sponsor Cost: $441,829",
    statusLabel: "Unfunded (to date)",
    status: "unfunded",
    description:
      "Contributes AI/ML and biostatistical support to global infectious disease research activities via subaward.",
  },
  {
    pi: "Kakraba (PI)",
    period: "2025–2026",
    sponsor: "Larvin Bernick Grant",
    title: "Piloting and Implementing Machine Learning Workflows to Enhance Disease Diagnostics and Public Health Outcomes in Ghana",
    role: "Principal Investigator",
    effort: "N/A",
    costs: "Total Sponsor Cost: $10,000",
    statusLabel: "Unfunded",
    status: "unfunded",
    description:
      "Proposed full scientific and administrative leadership to pilot AI/ML workflows for improving disease diagnostics and public health outcomes in Ghana.",
  },
  {
    pi: "Reis (PI)",
    period: "04/01/2013–03/31/2022",
    sponsor: "Department of Veterans Affairs (I01BX001655)",
    title: "Analysis and Therapy of Age-Dependent Proteostasis Failure in Neurodegeneration",
    role: "Graduate Research Assistant",
    costs: "Direct Costs: Approximately $150,000–$200,000/year",
    status: "prior",
    description:
      "Conducted protein aggregation studies using C. elegans and human CNS samples, contributing to mechanistic and therapeutic investigations of neurodegeneration and proteostasis failure.",
  },
  {
    pi: "Reis (PI)",
    period: "10/01/2012–09/30/2019",
    sponsor: "Department of Veterans Affairs",
    title: "Senior Research Career Scientist Award",
    role: "Graduate Research Assistant",
    costs: "Direct Costs: Approximately $150,000–$200,000/year",
    status: "prior",
    description:
      "Participated in a sustained aging and neurodegeneration research program, contributing to studies of protein aggregation, neurodegenerative mechanisms, and translational therapeutic development.",
  },
  {
    pi: "Griffin (PI)",
    period: "09/2016–06/2021",
    sponsor: "NIH / NIA (P01 AG012411-17A1)",
    title: "Early Events in Alzheimer Pathogenesis",
    role: "Graduate Research Assistant",
    costs: "Direct Costs: Approximately $1.2–$1.5 million/year",
    status: "prior",
    description:
      "Conducted protein aggregation and drug-testing research within a large, interdisciplinary Alzheimer’s disease program; project also supported graduate assistantship including tuition, stipend, and health insurance.",
  },
  {
    pi: "Arkansas INBRE Program",
    period: "08/17/2015–03/17/2017",
    sponsor: "NIGMS / NIH (P20 GM103429)",
    title: "Arkansas IDeA Network of Biomedical Research Excellence",
    role: "Doctoral Graduate Assistant",
    status: "prior",
    description:
      "Supported protein aggregation inhibition studies and provided research-training infrastructure (tuition, health insurance, conference travel, and stipend support) during early doctoral research development.",
  },
];

export const fundingNote =
  "As listed under Research Support on the CV. Prior support was held as a graduate research assistant, not as Principal Investigator.";

/* ------------------------------------------------------------ page copy */

export const researchVision = {
  paragraphs: [
    "The research moves along one arc — molecules → patients → populations — with explainability and equity as the common thread running through all of it. A compound identified through AI-QSAR eventually becomes a question a clinician has to answer about a patient; a pattern found in a protein's residue network can point toward exactly that compound; a prediction made about an individual patient only becomes useful at scale if a health department can trust and act on it across a whole population.",
    "The four pillars on this page — surveillance and precision prediction, explainable and responsible AI, drug discovery for aging, and graph-theoretic computational biology — are stops along that same path, not four separate fields. A model is treated as unfinished until the people who have to act on it can be shown why it says what it says, whether that person is a patient, a clinician, or a health department evaluating a new tool.",
  ],
};
