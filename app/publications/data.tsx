/* =============================================================================
   PUBLICATIONS DATA
   Source: the Kakraba Research Group publications page
   (kakraba-research-group.vercel.app/publications), which mirrors the CV's
   "Peer-Reviewed Publications" list: 17 papers, each with its DOI. Only
   peer-reviewed / in-press work is listed; manuscripts under review are not.
   ========================================================================== */

export type ResearchAreaTag =
  | "AI for public health"
  | "Explainable & responsible AI"
  | "Drug discovery"
  | "Graph theory & computational biology";

export type PeerReviewedPublication = {
  year: number;
  title: string;
  /** Author list exactly as printed on the source; "Kakraba, S." is
   *  highlighted when rendered. */
  authors: string;
  journal: string;
  /** Volume, issue, pages or article number. */
  details?: string;
  doi?: string;
  note?: string;
  /** Impact factor / CiteScore line, as printed on the CV. */
  impact?: string;
  /** His role on the paper, as printed on the CV. */
  role?: string;
  /** PMID / PMCID / ISSN and similar identifiers from the CV. */
  identifiers?: string;
  /** Extra URLs printed on the CV (besides the DOI). */
  links?: { label: string; href: string }[];
};

export const allPublications: PeerReviewedPublication[] = [
  {
    year: 2026,
    title: "Leveraging machine learning algorithms and explainable AI for predicting mental health disorder treatment at the workplace",
    authors: "Daniela Candanedo, Edmund Agyemang, Farhana Chaudhry, Taylor Franks, Bailey Taylor, Kevin Siliezar, Samuel Kakraba",
    journal: "Acta Psychologica",
    details: "Volume 267, 2026, 107081",
    doi: "10.1016/j.actpsy.2026.107081",
    identifiers: "ISSN 0001-6918",
    impact: "Impact factor (2026 JCR): 3.8 (Q1/Q2); CiteScore: 3.8",
    role: "Corresponding author; senior mentor; explainability analyses; oversaw entire project, and manuscript refinement.",
    links: [{ label: "ScienceDirect", href: "https://www.sciencedirect.com/science/article/pii/S0001691826008826" }],
  },
  {
    year: 2026,
    title: "Unraveling protein secrets: machine learning unveils novel biologically significant associations among amino acids",
    authors: "Kakraba, S., Yadem, A.C., Abraham, K.E., et al.",
    journal: "Network Modeling Analysis in Health Informatics and Bioinformatics",
    details: "15, 114",
    doi: "10.1007/s13721-026-00732-4",
    impact: "Impact factor: 2.0; CiteScore (2024): 3.7",
    role: "First and corresponding author; senior mentor; led study design, machine learning methods, and manuscript development.",
  },
  {
    year: 2026,
    title: "Advancing data science research education in Africa through datathon-driven innovations",
    authors: "Doumbia, S., Kane, F., Diabate, O., Cisse, C., Sanogo, I., Coulibaly, M.D., Fofana, F.G., Delamou, A., Beavogui, A.H., Thiam, S.M., Li, J., Keïta, M., Sogoba, N., Tangara, C.O., Kakraba, S., Wele, M., Diakite, M., Toure, M., Shaffer, J.G.",
    journal: "Scientific Reports",
    details: "2026 Mar 2. Epub ahead of print",
    doi: "10.1038/s41598-026-41474-7",
    identifiers: "PMID: 41771994",
    impact: "Impact factor (2024): 3.9",
    role: "Coauthor; contributed to design, analysis, and writing.",
  },
  {
    year: 2026,
    title: "Cognitive sovereignty and decolonial public health: reclaiming epistemic authority in the global AI era",
    authors: "Kakraba, S., Agyemang, E.F., Srivastav, S.K.",
    journal: "Frontiers in Public Health",
    details: "14:1785170",
    doi: "10.3389/fpubh.2026.1785170",
    impact: "Impact factor (2024): 3.4; CiteScore (2024): 5.5",
    role: "First and corresponding author; conceptual lead; senior mentor.",
  },
  {
    year: 2026,
    title: "Accelerating discovery of leukemia inhibitors using AI-driven quantitative structure–activity relationship: algorithm development and validation",
    authors: "Kakraba, S., Agyemang, E.F., Shmookler Reis, R.J.",
    journal: "JMIR AI",
    details: "5:e81552",
    doi: "10.2196/81552",
    identifiers: "2026 Jan 27. PMID: 41358925; PMCID: PMC12892034",
    impact: "Impact factor (2026): 6.1; CiteScore: 5.0",
    role: "First and corresponding author; led conceptual framework, developed AI–QSAR workflow, and led writing.",
  },
  {
    year: 2025,
    title: "Optimizing Parkinson’s disease prediction: a comparative analysis of data aggregation methods using multiple voice recordings via an automated artificial intelligence pipeline",
    authors: "Yang, Z., Zhou, H., Srivastav, S., Shaffer, J.G., Abraham, K.E., Naandam, S.M., Kakraba, S.",
    journal: "Data",
    details: "10(1), 4",
    doi: "10.3390/data10010004",
    impact: "Impact factor / Impact score (2024, Scopus-based): 2.91 (Q2); CiteScore: 5.0",
    role: "Corresponding author; senior mentor; supervised AI pipeline design, analysis, and writing.",
  },
  {
    year: 2025,
    title: "AI-enhanced multi-algorithm R Shiny app for predictive modeling and analytics: a case study of Alzheimer’s disease diagnostics",
    authors: "Wenzheng, H., Agyemang, E.F., Srivastav, S., Shaffer, J.G., Kakraba, S.",
    journal: "JMIR Aging",
    details: "2025 Nov 5",
    doi: "10.2196/70272",
    identifiers: "PMID: 41237410",
    impact: "Impact factor (2024): 5.0 (Q1); CiteScore: 6.6",
    role: "Corresponding author; senior mentor; led conception, modeling framework, and app integration.",
  },
  {
    year: 2025,
    title: "Structural and functional impacts of SARS-CoV-2 spike protein mutations: insights from predictive modeling and analytics",
    authors: "Netsey, E.K., Naandam, S.M., Asante Jnr, J., Abraham, K.E., Yadem, A.C., Owusu, G., Shaffer, J.G., Srivastav, S.K., Doumbia, S., Owusu-Dabo, E., Morkle, C.E., Yemeh, D., Manortey, S., Yankson, E., Sangare, M., Kakraba, S.",
    journal: "JMIR Bioinformatics and Biotechnology",
    details: "6:e73637",
    doi: "10.2196/73637",
    impact: "CiteScore (2025): 4.0",
    role: "Corresponding author; senior mentor; led predictive modeling strategy and manuscript integration, oversaw correction and clarified methods and results",
    note: "Article corrected in 2025, see erratum: Netsey, E.K., Naandam, S.M., Asante Jnr, J., Abraham, K.E., Yadem, A.C., Owusu, G., Shaffer, J.G., Srivastav, S.K., Doumbia, S., Owusu-Dabo, E., Morkle, C.E., Yemeh, D., Manortey, S., Yankson, E., Sangare, M., Kakraba, S. (2025). Correction: Structural and functional impacts of SARS-CoV-2 spike protein mutations: insights from predictive modeling and analytics. JMIR Bioinformatics and Biotechnology, 6:e89673. Erratum to: 10.2196/73637.",
  },
  {
    year: 2025,
    title: "Machine learning-enhanced quantitative structure–activity relationship modeling for DNA polymerase inhibitor discovery: algorithm development and validation",
    authors: "Kakraba, S., Ayyadevara, S., Yadem, C.A., Abraham, K.E., Compadre, C.M., Shmookler Reis, R.J.",
    journal: "JMIR AI",
    details: "4:e77890",
    doi: "10.2196/77890",
    identifiers: "2025 Dec 3. PMID: 41340396; PMCID: PMC12675996",
    impact: "Impact factor (2026): 6.1; CiteScore: 5.0",
    role: "First and corresponding author; senior mentor; led conceptual framework, developed AI–QSAR workflow, and led writing.",
  },
  {
    year: 2023,
    title: "Thiadiazolidinone (TDZD) analogs inhibit aggregation-mediated pathology in diverse neurodegeneration models, and extend C. elegans life- and healthspan",
    authors: "Kakraba, S., Ayyadevara, S., Mainali, N., Balasubramaniam, M., Bowroju, S., Penthala, N.R., Atluri, R., Barger, S.W., Griffin, S.T., Crooks, P.A., et al.",
    journal: "Pharmaceuticals",
    details: "16(10), 1498",
    doi: "10.3390/ph16101498",
    impact: "Impact factor (2023): 4.8 (Q1); CiteScore: 6.1",
    role: "First and corresponding author; led experimental and analytical components and primary writing.",
  },
  {
    year: 2022,
    title: "Temperature effect on the structural dynamics of SARS-CoV-2 nucleocapsid domain",
    authors: "Naandam, S.M., Gogovi, G.K., Kakraba, S.",
    journal: "Advances in Computer Vision and Computational Biology",
    details: "Springer Nature Research Book Series",
    note: "Accepted, in press",
    impact: "Impact factor: not applicable (book series).",
    role: "Co-author; provided modeling guidance and interpretation.",
  },
  {
    year: 2021,
    title: "A mathematical graph-theoretic model of single point mutations associated with sickle cell anemia disease",
    authors: "Netsey, E.K., Kakraba, S., Naandam, S.M., Yadem, A.C.",
    journal: "Journal of Advances in Biotechnology",
    details: "9, 1–14",
    doi: "10.24297/jbt.v9i.9109",
    impact: "Impact factor / CiteScore: not indexed in JCR/Scopus.",
    role: "Corresponding author; senior mentor; led modeling framework and supervised student first author.",
  },
  {
    year: 2020,
    title: "Design and synthesis of novel hybrid 8-hydroxy quinoline–indole derivatives as inhibitors of Aβ self-aggregation and metal chelation-induced Aβ aggregation",
    authors: "Bowroju, S.K., Mainali, N., Ayyadevara, S., Penthala, N.R., Krishnamachari, S., Kakraba, S., Reis, R.J., Crooks, P.A.",
    journal: "Molecules",
    details: "25(16), 3610",
    doi: "10.3390/molecules25163610",
    impact: "Impact factor (2020): 4.411 (Q2); CiteScore: 7.4",
    role: "Contributed to data analysis and manuscript review.",
  },
  {
    year: 2019,
    title: "A novel microtubule-binding drug attenuates and reverses protein aggregation in animal models of Alzheimer’s disease",
    authors: "Kakraba, S., Ayyadevara, S., Penthala, N.R., Balasubramaniam, M., Ganne, A., Liu, L., Alla, R., Bommagani, S.B., Barger, S.W., Griffin, W.S.T., Crooks, P.A., Shmookler Reis, R.J.",
    journal: "Frontiers in Molecular Neuroscience",
    details: "12, 310",
    doi: "10.3389/fnmol.2019.00310",
    impact: "Impact factor (2019): 5.639 (Q2); CiteScore: 6.8",
    role: "First author; led in vivo work, integrative analysis, and manuscript writing and review.",
  },
  {
    year: 2019,
    title: "Aggregate interactome based on protein-crosslinking interfaces predicts drug targets to limit aggregation in neurodegenerative diseases",
    authors: "Balasubramaniam, M., Ayyadevara, S., Kakraba, S., Alla, R., Mehta, J.L., Shmookler Reis, R.J.",
    journal: "iScience",
    details: "19, 356–372",
    doi: "10.1016/j.isci.2019.09.026",
    impact: "Impact factor (2019): 5.458 (Q1); CiteScore: 6.9",
    role: "Contributed to computational analysis and interpretation.",
  },
  {
    year: 2017,
    title: "Aspirin-mediated acetylation protects against multiple neurodegenerative pathologies by impeding protein aggregation",
    authors: "Ayyadevara, S., Balasubramaniam, M., Kakraba, S., Alla, R., Mehta, J.L., Shmookler Reis, R.J.",
    journal: "Antioxidants & Redox Signaling",
    details: "27(17), 1383–1396",
    doi: "10.1089/ars.2016.6978",
    impact: "Impact factor (2017): 6.530 (Q1); CiteScore: 6.18.",
    role: "Contributed to experiments, analysis, and revisions.",
  },
  {
    year: 2016,
    title: "A graph-theoretic model of single point mutations in the cystic fibrosis transmembrane conductance regulator",
    authors: "Kakraba, S., Knisley, D.",
    journal: "Journal of Advances in Biotechnology",
    details: "6(1), 780–786",
    doi: "10.24297/jbt.v6i1.4013",
    impact: "Impact factor / CiteScore: not indexed in JCR/Scopus.",
    role: "First and corresponding author; designed model, performed analysis, drafted and reviewed manuscript.",
  },
];

export const publicationsIntro =
  "Peer-reviewed research in journals including Scientific Reports, JMIR AI, JMIR Aging, iScience, Frontiers in Public Health, Frontiers in Molecular Neuroscience, Pharmaceuticals, and Antioxidants & Redox Signaling. Many of these papers are first-authored by lab trainees and mentored by Dr. Kakraba as senior and corresponding author.";

/* ------------------------------------------------------------ featured */

export type Publication = {
  id: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
  area: ResearchAreaTag;
  whyItMatters: string;
};

/** Three papers highlighted at the top of the page and on the homepage. */
export const publications: Publication[] = [
  {
    id: "smart-pred-jmir-aging",
    title: "AI-enhanced multi-algorithm R Shiny app for predictive modeling and analytics: a case study of Alzheimer’s disease diagnostics",
    journal: "JMIR Aging",
    year: 2025,
    doi: "10.2196/70272",
    area: "AI for public health",
    whyItMatters:
      "The JMIR Aging case study behind SMART-Pred — 91% test accuracy, developed with the Louisiana Department of Health.",
  },
  {
    id: "ai-qsar-dna-polymerase",
    title: "Machine learning-enhanced quantitative structure–activity relationship modeling for DNA polymerase inhibitor discovery",
    journal: "JMIR AI",
    year: 2025,
    doi: "10.2196/77890",
    area: "Drug discovery",
    whyItMatters:
      "Shows how far a well-posed QSAR model can narrow a search space before any wet-lab work begins.",
  },
  {
    id: "cognitive-sovereignty",
    title: "Cognitive sovereignty and decolonial public health: reclaiming epistemic authority in the global AI era",
    journal: "Frontiers in Public Health",
    year: 2026,
    doi: "10.3389/fpubh.2026.1785170",
    area: "Explainable & responsible AI",
    whyItMatters:
      "Names the governance problem at the centre of deploying AI across unequal health systems.",
  },
];

export const featuredPublications = publications;

/* --------------------------------------------- manuscripts in review */
/* Source: the CV's "B.1. Manuscripts Under Review (Submitted)" and
   "B.4. Manuscripts in Preparation", in full. */

export type ManuscriptUnderReview = {
  authors: string;
  title: string;
  /** Journal, manuscript ID and submission date, as printed on the CV. */
  submission: string;
  impact?: string;
  role?: string;
};

export const manuscriptsUnderReview: ManuscriptUnderReview[] = [
  {
    authors: "Kakraba, S.",
    title: "The Proxy Problem: Toward a Shared Governance Framework for Artificial Intelligence in Public Health and Social Work",
    submission: "Artificial Intelligence in Medicine (Elsevier), (submitted September 21, 2026)",
    impact: "Impact factor: 6.1 (Q1); CiteScore: 10.9",
    role: "Sole author",
  },
  {
    authors: "Kakraba, S.",
    title: "Algorithmic monoculture: an overlooked systemic risk in artificial intelligence for public health",
    submission: "Medcomm (Wiley), Manuscript ID: MCO2-2026-9259 (submitted September 20, 2026)",
    impact: "Impact factor: 14.1 (Q1); CiteScore: 12.5",
    role: "Sole author",
  },
  {
    authors: "Dery, K., Naandam, S.M., Abraham, K.E., Agyemang, E.F., Kakraba, S.",
    title: "Mapping Mutation-Induced Perturbations in Hepatitis B Surface Antigen: An Integrated Graph-Theoretic, ab initio, Molecular Dynamics, and Machine Learning Study",
    submission: "Applied Mathematical Modeling (Elsevier), Manuscript ID: AMMOD-D-26-04762 (submitted July 2026)",
    impact: "Impact factor: 5.5 (Q1); CiteScore: 10.2",
    role: "Corresponding author; senior mentor; interpretability analysis, and student-led writing",
  },
  {
    authors: "Yemeh, D., Kakraba, S.",
    title: "Machine learning–enhanced drug discovery in protein aggregation–related pathologies: a systematic review",
    submission: "Current Neurology and Neuroscience Reports (Springer Nature). Manuscript ID: 26237a43-a272-489f-883b-3449a9745b1a (submitted September, 2026)",
    impact: "Impact factor: 7.4 (Q1); CiteScore: 10.5",
    role: "Corresponding author; study design, supervision, senior mentor, and manuscript development.",
  },
  {
    authors: "Kakraba, S.",
    title: "Beyond AUC: From Prediction to Epistemic Action in Healthcare Machine Learning",
    submission: "MedComm (Wiley). Manuscript ID: MCO2-2026-8299 (submitted July 2026)",
    impact: "Impact factor: 14.1 (Q1); CiteScore: 12.5",
    role: "Sole author",
  },
  {
    authors: "Chaudhry, F., Agyemang, E.F, Candanedo, D., Yemeh, D., Akter E., Assefa S., Siliezar, K., Franks, T., Taylor, B., Kakraba, S.",
    title: "Development and External Validation of Explainable Machine Learning Models for Cardiovascular Disease Prediction",
    submission: "MedComm (Wiley). Manuscript ID: MCO2-2026-8224 (submitted June 26, 2026)",
    impact: "Impact factor: 14.1 (Q1); CiteScore: 12.5",
    role: "Corresponding author; senior mentor; supervised ML methods, interpretability analysis, and student-led writing.",
  },
  {
    authors: "Agyemang, E.F., Kakraba, S.",
    title: "Stratified Probability Sampling Allocation Procedures and Differential Nonresponse in Healthcare: A Narrative Review",
    submission: "International Journal of Medical Informatics, Elsevier (Manuscript ID: IJMEDI-S-26-07299, Submitted Sept 23, 2026)",
    impact: "Impact factor (latest available, 2024 data): 5.0. (Q1); CiteScore: 8.8",
  },
  {
    authors: "Kakraba, S., Agyemang, E., Abraham, K.E. (2026)",
    title: "Large language models for infectious disease surveillance: a surveillance-attribute–centered scoping review with implementation and governance agenda",
    submission: "MedComm Journal, Wiley (manuscript ID: MCO2-2026-8956, Submitted July 25, 2026)",
    impact: "Impact factor (latest available, 2024 data): 14.1 (Q1); CiteScore: 12.5",
    role: "First and corresponding author; led review design, framework development, and manuscript drafting.",
  },
  {
    authors: "Kakraba, S., et al.",
    title: "Therapeutic strategies for Alzheimer’s disease: a narrative review tracing the evolution from symptomatic treatment to multimodal precision medicine",
    submission: "Alzheimer’s & Dementia (Wiley). Manuscript ID: ADJ-D-26-01391 (submitted April 2026)",
    impact: "Impact factor: 11.1 (Q1); CiteScore: 13.6",
    role: "Corresponding author; study design, supervision, senior mentor, and manuscript development.",
  },
  {
    authors: "Kakraba, S., Agyemang, E.F., Srivastav, S.K., Liu, Y., Li, J., Ho, L., Shaffer, J.G. (2026)",
    title: "Generative AI as public health “language infrastructure”: designing the prompt layer of modern health departments",
    submission: "Medcomm (Wiley), (submitted July 2026)",
    impact: "Impact factor: 14.1 (Q1); CiteScore: 12.5",
    role: "Corresponding author; study design, supervision, senior mentor, and manuscript development",
  },
  {
    authors: "Agyemang, E.F., Kakraba, S., Srivastav, S., Shaffer, J.G.",
    title: "Impact of missing data imputation on the performance of machine and deep learning algorithms for breast cancer and leukemia risk prediction: a narrative review",
    submission: "Cancer Medicine (Wiley). Manuscript ID: 6026811 (submitted April 2026)",
    impact: "Impact factor (2025): 3.1 (Q1); CiteScore (2025): 6.7",
    role: "Co-corresponding author; study design, supervision, senior mentor, and manuscript development.",
  },
  {
    authors: "Kakraba, S., Agyemang, E., Hutchinson, P.",
    title: "The Stethoscope That Doubts Itself: Integrating Epistemic Humility with Containment for Safe Clinical Artificial Intelligence",
    submission: "MedComm Journal, Wiley (manuscript ID: MCO2-2026-8761, Submitted July 25, 2026)",
    impact: "Impact factor (latest available, 2024 data): 14.1 (Q1); CiteScore: 12.5",
    role: "First and corresponding author; led review design, framework development, and manuscript drafting.",
  },
];

export const manuscriptsInPreparation = [
  "Artificial Intelligence for Aging and Geriatric Public Health: Opportunities, Risks, and Research Priorities.",
  "Mathematical modeling and optimal control of Fusarium wilt transmission",
  "The Anticipatory Gaze: Generative Health Stewardship, Prefigurative Algorithmic Equity, and the Constitutional Governance of Public Health Artificial Intelligence",
  "Modeling predictors of hypertension in the United States of America: Empirical evidence from the cross-sectional study of the General Social Survey",
  "Fluent Machines, Fragile Judgement: Reimaging AI through Three Births and a Sparring Partner.",
  "Perspective Piece on From Case Files to Code: Reclaiming Social Work in the Age of Artificial Intelligence.",
  "Novel Quinoline Analogs inhibit Protein Aggregation in Neurodegenerative Disease Model.",
  "Methods of generating novel molecular descriptors/database for the 20 most essential amino acids.",
  "Artificial Intelligence as a Constitutional Moment: Reconfiguring Power, Governance, and Equity in Public Health Before the Window Closes.",
  "Development of an AI-enhanced workflow for automated quality classification of biomedical fluorescence.",
  "Effects of sampling scheme on variogram uncertainty: A simulation-based approach.",
  "Artificial Intelligence Pipeline for Classification-Based Predictive Modeling in R Statistical Software.",
  "Novel NSAIDs Ameliorate Cytotoxic Protein Aggregation in Neuronal Cell-Culture Model of Amyloidopathy.",
  "Artificial intelligence-driven image classification and analysis of bioassays.",
  "Moderate-throughput Screening for Anti-aggregative NSAIDs Drugs.",
];

/* --------------------------------------------------------------- theses */

export type Thesis = {
  title: string;
  degree: string;
  institution: string;
  year: number;
  advisor?: string;
  /** Repository record, as printed under "Theses & Dissertations" on the CV. */
  record?: string;
  href?: string;
};

export const theses: Thesis[] = [
  {
    title: "Drugs That Protect Against Protein Aggregation in Neurodegenerative Diseases",
    degree: "Ph.D. Dissertation, Bioinformatics",
    institution: "University of Arkansas at Little Rock & UAMS",
    year: 2021,
    advisor: "Robert J.S. Reis, Ph.D.",
    record: "(2569992650) [Doctoral dissertation]. ProQuest Dissertations and Theses Global.",
  },
  {
    title: "A Hierarchical Graph for Nucleotide Binding Domain 2",
    degree: "M.S. Thesis, Mathematical Sciences",
    institution: "East Tennessee State University",
    year: 2015,
    advisor: "Debra J. Knisley, Ph.D.",
    record: "Electronic Theses and Dissertations. Paper 2517.",
    href: "https://dc.etsu.edu/etd/2517",
  },
  {
    title: "The Relationship Between Students’ Perception of Mathematics and their Mathematics Achievements",
    degree: "B.Ed. Dissertation, Mathematics",
    institution: "University of Cape Coast, Ghana",
    year: 2011,
    advisor: "Benjamin Y. Sokpe, M.Phil.",
  },
];

export const publicationAreas: ResearchAreaTag[] = [
  "AI for public health",
  "Explainable & responsible AI",
  "Drug discovery",
  "Graph theory & computational biology",
];
