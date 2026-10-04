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
  name: string;
  description: string;
  relatedArea?: string;
};

/** Project names drawn directly from the source document's GitHub
 *  (KakrabaLab) gallery list. */
export const softwareProjects: SoftwareProject[] = [
  {
    name: "AI-optimized consensus clustering",
    description: "A clustering pipeline tuned with AI-optimized consensus methods.",
  },
  {
    name: "Parkinson's voice pipeline",
    description: "The voice-based prediction pipeline behind the Data-journal Parkinson's study.",
    relatedArea: "ai-public-health-surveillance",
  },
  {
    name: "SARS-CoV-2 edge weights",
    description: "Residue-interaction edge-weight analysis of the SARS-CoV-2 spike protein.",
    relatedArea: "graph-theoretic-computational-biology",
  },
  {
    name: "Mental health & hypertension workflows",
    description: "Prediction workflows for mental-health crisis risk and hypertension.",
    relatedArea: "ai-public-health-surveillance",
  },
  {
    name: "HBsAg workflow",
    description: "The structural graph/MD/ML workflow behind the Hepatitis B surface-antigen analysis.",
    relatedArea: "graph-theoretic-computational-biology",
  },
  {
    name: "Multi-model predictive-modeling pipeline",
    description: "A Python multi-model predictive-modeling pipeline, built with students.",
  },
];

export const githubOrg = { name: "KakrabaLab", href: "https://github.com/KakrabaLab" };

export const reproducibilityStatement =
  "Research code and data behind each published result are shared through the KakrabaLab GitHub organisation, so results can be checked and reused rather than taken on faith.";
