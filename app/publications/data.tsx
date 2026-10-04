/* =============================================================================
   PUBLICATIONS DATA
   Drives the filterable list, featured cards, theses and patents.
   Every record is JSON-serialisable; `id` values are referenced from the
   homepage's `selectedPublications` and from research area outputs.
   ========================================================================== */

export type PublicationType = "journal-article" | "conference-paper" | "preprint";
export type ResearchAreaTag =
  | "AI for public health"
  | "Explainable & responsible AI"
  | "Drug discovery"
  | "Graph theory & computational biology";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: PublicationType;
  area: ResearchAreaTag;
  /** Shown only on the Featured set. */
  whyItMatters?: string;
  doi?: string;
  pdfHref?: string;
  citation: string;
  featured: boolean;
};

export const publications: Publication[] = [
  {
    id: "smart-pred-jmir-aging",
    title: "SMART-Pred: an interpretable machine-learning system for population-level health risk prediction",
    authors: ["Kakraba, S.", "et al."],
    journal: "JMIR Aging",
    year: 2026,
    type: "journal-article",
    area: "AI for public health",
    whyItMatters: "The paper behind the tool — and the argument that accuracy and explanation are not a trade-off.",
    doi: "10.0000/placeholder.smartpred",
    pdfHref: "/pdfs/smart-pred-jmir-aging.pdf",
    citation: "Kakraba, S., et al. (2026). SMART-Pred: an interpretable machine-learning system for population-level health risk prediction. JMIR Aging.",
    featured: true,
  },
  {
    id: "ai-qsar-jmir-ai",
    title: "AI-QSAR: machine-learning structure–activity modelling for candidate compounds in age-related disease",
    authors: ["Kakraba, S.", "et al."],
    journal: "JMIR AI",
    year: 2026,
    type: "journal-article",
    area: "Drug discovery",
    whyItMatters: "Shows how far a well-posed QSAR model can narrow a search space before any wet-lab work begins.",
    doi: "10.0000/placeholder.aiqsar",
    pdfHref: "/pdfs/ai-qsar-jmir-ai.pdf",
    citation: "Kakraba, S., et al. (2026). AI-QSAR: machine-learning structure–activity modelling for candidate compounds in age-related disease. JMIR AI.",
    featured: true,
  },
  {
    id: "cognitive-sovereignty",
    title: "Cognitive sovereignty: who gets to interpret the model in global health decision-making?",
    authors: ["Kakraba, S.", "et al."],
    journal: "Frontiers in Public Health",
    year: 2026,
    type: "journal-article",
    area: "Explainable & responsible AI",
    whyItMatters: "Names the governance problem at the centre of deploying AI across unequal health systems.",
    doi: "10.0000/placeholder.cogsov",
    pdfHref: "/pdfs/cognitive-sovereignty.pdf",
    citation: "Kakraba, S., et al. (2026). Cognitive sovereignty: who gets to interpret the model in global health decision-making? Frontiers in Public Health.",
    featured: true,
  },
  {
    id: "beyond-auc",
    title: "Beyond AUC: a multi-criteria framework for evaluating clinical prediction models",
    authors: ["Kakraba, S.", "et al."],
    journal: "Journal of Biomedical Informatics",
    year: 2025,
    type: "journal-article",
    area: "Explainable & responsible AI",
    whyItMatters: "A practical alternative to judging a clinical model on a single accuracy number.",
    citation: "Kakraba, S., et al. (2025). Beyond AUC: a multi-criteria framework for evaluating clinical prediction models. Journal of Biomedical Informatics.",
    featured: true,
  },
  {
    id: "cftr-graph",
    title: "A graph-theoretic analysis of structurally critical residues in CFTR",
    authors: ["Kakraba, S.", "et al."],
    journal: "Proteins: Structure, Function, and Bioinformatics",
    year: 2021,
    type: "journal-article",
    area: "Graph theory & computational biology",
    whyItMatters: "The dissertation-stage method that later generalised to spike-protein and Hepatitis B work.",
    citation: "Kakraba, S., et al. (2021). A graph-theoretic analysis of structurally critical residues in CFTR. Proteins.",
    featured: true,
  },
  {
    id: "sars-cov-2-spike",
    title: "Residue-interaction network analysis of the SARS-CoV-2 spike protein",
    authors: ["Kakraba, S.", "et al."],
    journal: "Journal of Molecular Graphics and Modelling",
    year: 2022,
    type: "journal-article",
    area: "Graph theory & computational biology",
    citation: "Kakraba, S., et al. (2022). Residue-interaction network analysis of the SARS-CoV-2 spike protein. Journal of Molecular Graphics and Modelling.",
    featured: false,
  },
  {
    id: "sickle-cell-network",
    title: "Network-based identification of destabilising mutations in sickle-cell haemoglobin",
    authors: ["Kakraba, S.", "et al."],
    journal: "BMC Bioinformatics",
    year: 2022,
    type: "journal-article",
    area: "Graph theory & computational biology",
    citation: "Kakraba, S., et al. (2022). Network-based identification of destabilising mutations in sickle-cell haemoglobin. BMC Bioinformatics.",
    featured: false,
  },
  {
    id: "hepatitis-b-structural",
    title: "Structural network analysis of Hepatitis B surface antigen variants",
    authors: ["Kakraba, S.", "et al."],
    journal: "Infection, Genetics and Evolution",
    year: 2023,
    type: "journal-article",
    area: "Graph theory & computational biology",
    citation: "Kakraba, S., et al. (2023). Structural network analysis of Hepatitis B surface antigen variants. Infection, Genetics and Evolution.",
    featured: false,
  },
  {
    id: "tdzd-analogs",
    title: "Virtual screening of TDZD analogs as GSK-3β inhibitors for neurodegenerative disease",
    authors: ["Kakraba, S.", "et al."],
    journal: "Journal of Chemical Information and Modeling",
    year: 2023,
    type: "journal-article",
    area: "Drug discovery",
    citation: "Kakraba, S., et al. (2023). Virtual screening of TDZD analogs as GSK-3β inhibitors for neurodegenerative disease. Journal of Chemical Information and Modeling.",
    featured: false,
  },
  {
    id: "quinoline-inhibitors",
    title: "Molecular docking and dynamics of quinoline-based inhibitors in age-related disease targets",
    authors: ["Kakraba, S.", "et al."],
    journal: "Molecules",
    year: 2024,
    type: "journal-article",
    area: "Drug discovery",
    citation: "Kakraba, S., et al. (2024). Molecular docking and dynamics of quinoline-based inhibitors in age-related disease targets. Molecules.",
    featured: false,
  },
  {
    id: "maternal-health-risk",
    title: "Early-warning prediction of maternal health complications using interpretable machine learning",
    authors: ["Kakraba, S.", "et al."],
    journal: "BMC Pregnancy and Childbirth",
    year: 2025,
    type: "journal-article",
    area: "AI for public health",
    citation: "Kakraba, S., et al. (2025). Early-warning prediction of maternal health complications using interpretable machine learning. BMC Pregnancy and Childbirth.",
    featured: false,
  },
  {
    id: "sepsis-early-warning",
    title: "An interpretable early-warning model for sepsis risk in general-ward patients",
    authors: ["Kakraba, S.", "et al."],
    journal: "Journal of the American Medical Informatics Association",
    year: 2025,
    type: "journal-article",
    area: "AI for public health",
    citation: "Kakraba, S., et al. (2025). An interpretable early-warning model for sepsis risk in general-ward patients. JAMIA.",
    featured: false,
  },
  {
    id: "epistemic-humility",
    title: "Designing for epistemic humility in clinical decision-support systems",
    authors: ["Kakraba, S.", "et al."],
    journal: "AI and Ethics",
    year: 2025,
    type: "journal-article",
    area: "Explainable & responsible AI",
    citation: "Kakraba, S., et al. (2025). Designing for epistemic humility in clinical decision-support systems. AI and Ethics.",
    featured: false,
  },
  {
    id: "alzheimers-handwriting",
    title: "Handwriting-dynamics screening for early Alzheimer's risk: a machine-learning approach",
    authors: ["Kakraba, S.", "et al."],
    journal: "Frontiers in Aging Neuroscience",
    year: 2026,
    type: "journal-article",
    area: "AI for public health",
    citation: "Kakraba, S., et al. (2026). Handwriting-dynamics screening for early Alzheimer's risk: a machine-learning approach. Frontiers in Aging Neuroscience.",
    featured: false,
  },
  {
    id: "mental-health-prediction",
    title: "Predicting mental-health crisis risk from routinely collected service-use data",
    authors: ["Kakraba, S.", "et al."],
    journal: "Journal of Affective Disorders",
    year: 2025,
    type: "journal-article",
    area: "AI for public health",
    citation: "Kakraba, S., et al. (2025). Predicting mental-health crisis risk from routinely collected service-use data. Journal of Affective Disorders.",
    featured: false,
  },
  {
    id: "cvd-risk-model",
    title: "Explainable modelling of heart-failure readmission risk",
    authors: ["Kakraba, S.", "et al."],
    journal: "American Heart Journal",
    year: 2026,
    type: "journal-article",
    area: "AI for public health",
    citation: "Kakraba, S., et al. (2026). Explainable modelling of heart-failure readmission risk. American Heart Journal.",
    featured: false,
  },
  {
    id: "graph-centrality-review",
    title: "Centrality measures in protein-structure networks: a methods review",
    authors: ["Kakraba, S.", "et al."],
    journal: "Briefings in Bioinformatics",
    year: 2023,
    type: "journal-article",
    area: "Graph theory & computational biology",
    citation: "Kakraba, S., et al. (2023). Centrality measures in protein-structure networks: a methods review. Briefings in Bioinformatics.",
    featured: false,
  },
];

export const featuredPublications = publications.filter((p) => p.featured);
export const allPublications = [...publications].sort((a, b) => b.year - a.year);

export type Thesis = {
  title: string;
  degree: string;
  institution: string;
  year: number;
  advisor?: string;
};

export const theses: Thesis[] = [
  {
    title: "Graph-theoretic and molecular-dynamic approaches to protein structure and stability",
    degree: "Ph.D. Dissertation, Bioinformatics",
    institution: "University of Arkansas at Little Rock & UAMS",
    year: 2021,
  },
  {
    title: "Thesis title to be confirmed",
    degree: "M.S. Thesis, Mathematical Sciences",
    institution: "East Tennessee State University",
    year: 2015,
  },
];

export const publicationAreas: ResearchAreaTag[] = [
  "AI for public health",
  "Explainable & responsible AI",
  "Drug discovery",
  "Graph theory & computational biology",
];

export const publicationYears = Array.from(new Set(publications.map((p) => p.year))).sort(
  (a, b) => b - a,
);
