/* =============================================================================
   PUBLICATIONS DATA
   Source: Kakraba-Website-Informations.docx.

   IMPORTANT MODELLING NOTE
   The source document names exact titles for only three papers (the
   `featuredPublications` below). For the rest of the record it gives only
   a list of journal names ("covering all the journals listed on the CV:
   Acta Psychologica; Network Modeling Analysis in Health Informatics and
   Bioinformatics; Scientific Reports; ... Molecules; the graph-theoretic
   mutation papers") with no individual titles, years or author lists.
   Rather than invent ~14 fake citations to fill out a conventional
   publication list, `publicationVenues` below lists those journals
   honestly as venues, not as fabricated individual papers. The document
   also explicitly says in-review manuscripts without a public preprint
   "shouldn't appear as headline metrics" on the public site — so none are
   listed here; they're mentioned by topic on the relevant research pillar
   pages instead.
   ========================================================================== */

export type PublicationType = "journal-article";
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
  whyItMatters: string;
  featured: true;
};

/**
 * The three publications the source document names explicitly, with full
 * topic and journal. These are also the homepage's "selected publications."
 */
export const publications: Publication[] = [
  {
    id: "smart-pred-jmir-aging",
    title: "SMART-Pred: an explainable AI platform for public health surveillance",
    authors: ["Kakraba, S.", "Srivastav, S.K.", "Shaffer, J.G.", "Agyemang, E.F.", "Wenzheng, H.", "et al."],
    journal: "JMIR Aging",
    year: 2026,
    type: "journal-article",
    area: "AI for public health",
    whyItMatters:
      "The JMIR Aging case study behind SMART-Pred — 91% test accuracy, developed with the Louisiana Department of Health.",
    featured: true,
  },
  {
    id: "ai-qsar-dna-polymerase",
    title: "AI-QSAR for DNA polymerase inhibitors",
    authors: ["Kakraba, S.", "et al."],
    journal: "JMIR AI",
    year: 2026,
    type: "journal-article",
    area: "Drug discovery",
    whyItMatters:
      "Shows how far a well-posed QSAR model can narrow a search space before any wet-lab work begins.",
    featured: true,
  },
  {
    id: "cognitive-sovereignty",
    title: "Cognitive sovereignty and decolonial public health",
    authors: ["Kakraba, S.", "et al."],
    journal: "Frontiers in Public Health",
    year: 2026,
    type: "journal-article",
    area: "Explainable & responsible AI",
    whyItMatters:
      "Names the governance problem at the centre of deploying AI across unequal health systems.",
    featured: true,
  },
];

export const featuredPublications = publications;

/** Journal venues named in the source document with no individual paper
 *  details — presented as a venue list, not fabricated citations. */
export type PublicationVenue = {
  journal: string;
  /** Loose topical grouping, where the source document implies one. */
  area?: ResearchAreaTag;
  note?: string;
};

export const publicationVenues: PublicationVenue[] = [
  { journal: "Acta Psychologica" },
  { journal: "Network Modeling Analysis in Health Informatics and Bioinformatics" },
  { journal: "Scientific Reports" },
  { journal: "JMIR AI", note: "A second paper, in addition to the AI-QSAR study above." },
  { journal: "Data", area: "AI for public health", note: "Parkinson's voice pipeline." },
  {
    journal: "JMIR Bioinformatics and Biotechnology",
    area: "Graph theory & computational biology",
    note: "SARS-CoV-2 spike edge-weight analysis.",
  },
  { journal: "Pharmaceuticals", area: "Drug discovery", note: "TDZD analogs and C. elegans lifespan models." },
  { journal: "Frontiers in Molecular Neuroscience", area: "Drug discovery" },
  { journal: "iScience", area: "Drug discovery" },
  { journal: "Antioxidants & Redox Signaling", area: "Drug discovery" },
  { journal: "Molecules", area: "Drug discovery" },
  {
    journal: "Graph-theoretic mutation studies",
    area: "Graph theory & computational biology",
    note: "CFTR and sickle-cell haemoglobin models.",
  },
];

export const publicationRecordNote =
  "Research published 2016–2026. Full citation details for each paper are maintained on the CV and Google Scholar; venues are listed here to keep this page strictly to verified information.";

/* --------------------------------------------------------------- theses */

export type Thesis = {
  title: string;
  degree: string;
  institution: string;
  year: number;
  advisor?: string;
};

export const theses: Thesis[] = [
  {
    title: "Drugs that Protect Against Protein Aggregation in Neurodegenerative Diseases",
    degree: "Ph.D. Dissertation, Bioinformatics",
    institution: "University of Arkansas at Little Rock & UAMS",
    year: 2021,
    advisor: "Robert J. Shmookler Reis",
  },
  {
    title: "A Hierarchical Graph for Nucleotide Binding Domain 2",
    degree: "M.S. Thesis, Mathematical Sciences",
    institution: "East Tennessee State University",
    year: 2015,
    advisor: "Debra Knisley",
  },
];

export const publicationAreas: ResearchAreaTag[] = [
  "AI for public health",
  "Explainable & responsible AI",
  "Drug discovery",
  "Graph theory & computational biology",
];
