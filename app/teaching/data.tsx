/* =============================================================================
   TEACHING PAGE DATA
   Source: Kakraba-Website-Informations.docx. Course titles, guest-lecture
   titles and the teaching-evaluation framing are drawn from that document;
   see app/data/site.tsx for the general sourcing note. Per the document's
   explicit guidance, evaluation percentages are not shown (Tulane's 80–82%
   figure "reads weaker than EKU's near-100% and invites comparison"); a
   qualitative line is used instead.
   ========================================================================== */

export type Course = {
  code?: string;
  title: string;
  institution: string;
  level: "Graduate" | "Undergraduate";
  status: "current" | "history" | "in-development";
  description?: string;
};

export const courses: Course[] = [
  {
    code: "BIOS 7650",
    title: "Statistical Learning in Data Science",
    institution: "Tulane University",
    level: "Graduate",
    status: "current",
  },
  {
    code: "BIOS 6310",
    title: "Intro to Methods in Data Science",
    institution: "Tulane University",
    level: "Graduate",
    status: "current",
  },
  { title: "R and Data Mining", institution: "Eastern Kentucky University", level: "Graduate", status: "history" },
  { title: "Regression", institution: "Eastern Kentucky University", level: "Graduate", status: "history" },
  { title: "Applied Statistics", institution: "Eastern Kentucky University", level: "Graduate", status: "history" },
  { title: "Statistical ML in R", institution: "Eastern Kentucky University", level: "Graduate", status: "history" },
  { title: "Multivariate Analysis", institution: "Eastern Kentucky University", level: "Graduate", status: "history" },
  { code: "MATH 1530", title: "MATH 1530", institution: "East Tennessee State University", level: "Undergraduate", status: "history" },
];

export const teachingStat = "20+ courses across 4 universities";

export const philosophy = {
  paragraphs: [
    "Student-centered, applied, reproducible, and grounded in responsible AI. I started as a mathematics teacher, and that has never really changed — it just moved to a different subject: a model is only as useful as the explanation a student, a clinician or a policymaker can build around it.",
  ],
};

export type GuestLecture = {
  title: string;
  /** Not given in the source document for these three titles — left unset
   *  rather than invented. */
  venue?: string;
  date?: string;
};

export const guestLectures: GuestLecture[] = [
  { title: "C. elegans as a Model of Aging" },
  { title: "Responsible Research Conduct Using AI" },
  { title: "AI at the Frontiers of Aging" },
];

export const studentResources = {
  intro:
    "Starter guides and recommended readings for R and Python, and instructions for requesting a letter of recommendation.",
};

export const evaluationsNote =
  "Consistently strong student evaluations across Tulane and Eastern Kentucky University.";

export const mentoring = {
  paragraph:
    "More than 20 students have been mentored into MS and PhD programmes in biostatistics, bioinformatics and data science. People, projects and current students live on the lab's own site.",
  stat: { value: 20, suffix: "+", label: "Students mentored into MS/PhD programs" },
};
