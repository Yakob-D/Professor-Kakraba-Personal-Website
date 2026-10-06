/* =============================================================================
   SOFTWARE & TOOLS PAGE DATA
   New top-level section, added per the source document
   (Kakraba-Website-Informations.docx), which calls open, reproducible code
   "his strongest differentiator for a health data science audience."
   GitHub organisation and individual project names are drawn from that
   document; see app/data/site.tsx for the general sourcing note. Individual
   repository URLs are not given, so cards link to the KakrabaLab GitHub
   organisation rather than an invented repo slug.
   ========================================================================== */

export type SoftwareProject = {
  year: number;
  name: string;
  /** Author list as printed on the CV. */
  authors: string;
  href: string;
  doi?: string;
  role?: string;
  /** Short plain-language summary. */
  description: string;
};

/** Every entry under "B.2. Software and Data Repositories" on the CV. */
export const softwareProjects: SoftwareProject[] = [
  {
    year: 2025,
    name: "Workflow for “Mapping Mutation-Induced Perturbations in Hepatitis B Surface Antigen: An Integrated Graph-Theoretic, ab initio, Molecular Dynamics, and Machine Learning Study”",
    authors: "Dery, K., Naandam, S.M., Abraham, K.E., Agyemang, E.F., Kakraba, S.",
    href: "https://github.com/KakrabaLab/Structural-and-Functional-Impacts-of-Hepatitis-B-Surface-Antigen-Point-Mutations",
    description: "The structural graph/MD/ML workflow behind the Hepatitis B surface-antigen analysis.",
  },
  {
    year: 2025,
    name: "Workflow for “Development and External Validation of Explainable Machine Learning Models for Cardiovascular Disease Prediction”",
    authors: "Chaudhry, F., Agyemang, E.F, Candanedo, D., Yemeh, D., Akter E., Assefa S., Siliezar, K., Franks, T., Taylor, B., Kakraba, S.",
    href: "https://github.com/Agyemang1z/Heart-Failure-Manuscript",
    description: "Explainable cardiovascular disease prediction models and external validation.",
  },
  {
    year: 2025,
    name: "Workflow for leveraging machine learning algorithms and explainable AI for predicting mental health disorder treatment at the workplace",
    authors: "Agyemang, E. (student mentee; first author), Ruyego, J., Kyei, D., Nyarko, P., Obu-Amoah, A., Mensah, J., Kakraba, S.",
    href: "https://github.com/Agyemang1z/Mental-Health-Manuscript",
    doi: "10.13140/RG.2.2.29677.09448",
    role: "Senior mentor; led overall project design, workflow architecture, and supervision of all stages.",
    description: "Explainable ML prediction of workplace mental health treatment.",
  },
  {
    year: 2025,
    name: "Edge-interaction-weights-of-protein-phenotypes-for-SARS-CoV-2-Spike-RBD-Chain-E",
    authors: "Kakraba, S., Netsey, E. (student mentee)",
    href: "https://github.com/KakrabaLab/Edge-interaction-weights-of-protein-phenotypes-for-SARS-CoV-2-Spike-RBD-Chain-E-",
    role: "Senior mentor; designed analytic framework, led repository structure, and supervised data preparation.",
    description: "Residue-interaction edge-weight analysis of the SARS-CoV-2 spike protein.",
  },
  {
    year: 2025,
    name: "Python workflow for AI-optimized consensus clustering analysis for amino acids",
    authors: "Kakraba, S., Aayire, Y.C., Abraham, E.K.",
    href: "https://github.com/KakrabaLab/AI-Optimized-Consensus-Clustering",
    role: "Senior mentor; led method development, implementation, and validation of the workflow.",
    description: "A clustering pipeline tuned with AI-optimized consensus methods.",
  },
  {
    year: 2025,
    name: "Parkinson’s disease prediction code and data repository",
    authors: "Yang, Z., Zhou, H., Srivastav, S., Shaffer, J.G., Abraham, K.E., Naandam, S.M., Kakraba, S.",
    href: "https://github.com/Durixas/Parkinson-s-Disease-Prediction-Code-and-Data-Repository",
    doi: "10.13140/RG.2.2.16331.71202",
    role: "Senior mentor; led project direction, modeling strategy, and code review.",
    description: "The voice-based prediction pipeline behind the Data-journal Parkinson's study.",
  },
  {
    year: 2025,
    name: "Basic SMART-Pred R Shiny web application for machine learning and deep learning tasks",
    authors: "Wenzheng, H., Agyemang, E.F., Srivastav, S., Shaffer, J.G., Kakraba, S.",
    href: "https://github.com/Agyemang1z/SMART-Pred-Shiny-Multi-Algorithm-R-Tool-for-Predictive-Modeling-Manuscript",
    doi: "10.13140/RG.2.2.34301.68326",
    role: "Senior mentor; led SMART-Pred app concept, multi-algorithm integration, and quality control.",
    description: "The open-source SMART-Pred Shiny application.",
  },
  {
    year: 2025,
    name: "Python-based workflow for uncovering the key predictors of hypertension in U.S. adults",
    authors: "Agyemang, E., Ruyego, J., Kyei, D., Nyarko, P., Obu-Amoah, A., Mensah, J., Kakraba, S.",
    href: "https://github.com/Agyemang1z/Hypertension-GSS-2022-Manuscript/tree/main",
    role: "Senior mentor; led methodological framework, workflow design, and oversight of analysis and interpretation.",
    description: "Predictors of hypertension in U.S. adults from the General Social Survey.",
  },
  {
    year: 2024,
    name: "A Python-based machine learning pipeline for predictive modeling",
    authors: "Yang, Z. (student mentee; first author), Zhou, H. (student mentee), Kakraba, S. (corresponding author; senior mentor)",
    href: "https://colab.research.google.com/drive/10Hph-cZpjYmrrfA2rCa-y9-SAa_mLhvz?usp=share_link",
    role: "Senior mentor; led pipeline architecture, methodological choices, and performance evaluation.",
    description: "A Python multi-model predictive-modeling pipeline, built with students.",
  },
];

export const githubOrg = { name: "KakrabaLab", href: "https://github.com/KakrabaLab" };

export const reproducibilityStatement =
  "Research code and data behind each published result are shared through the KakrabaLab GitHub organisation, so results can be checked and reused rather than taken on faith.";
