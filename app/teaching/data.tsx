/* =============================================================================
   TEACHING PAGE DATA
   ========================================================================== */

export type Course = {
  code: string;
  title: string;
  level: "Graduate" | "Undergraduate";
  status: "current" | "in-development";
  description: string;
};

export const courses: Course[] = [
  {
    code: "BIOS 7650",
    title: "Advanced Statistical Machine Learning",
    level: "Graduate",
    status: "current",
    description:
      "Interpretable and black-box machine-learning methods for health data, with an emphasis on explaining model output to a clinical audience.",
  },
  {
    code: "BIOS 6310",
    title: "Applied Biostatistics",
    level: "Graduate",
    status: "current",
    description:
      "Core applied statistical methods for public health research, from study design through model building.",
  },
  {
    code: "BIOS 6980",
    title: "Explainable AI for Health Data",
    level: "Graduate",
    status: "in-development",
    description:
      "A new course built directly from the research programme: methods for making a clinical model's reasoning legible.",
  },
  {
    code: "BIOS 6790",
    title: "Computational Methods in Structural Bioinformatics",
    level: "Graduate",
    status: "in-development",
    description:
      "Graph-theoretic and molecular-simulation methods for protein structure, drawing on the drug-discovery and graph-theory research lines.",
  },
];

export const teachingStat = "20+ courses taught across 4 universities";

export const philosophy = {
  paragraphs: [
    "I started as a mathematics teacher, and that has never really changed — it just moved to a different subject. A model is only as useful as the explanation a student, a clinician or a policymaker can build around it, so I teach the reasoning before the tool, and I expect students to be able to explain a method back to me in plain language before they're allowed to run it.",
  ],
};

export type GuestLecture = {
  title: string;
  venue: string;
  date: string;
};

export const guestLectures: GuestLecture[] = [
  { title: "Explainable AI in clinical risk prediction", venue: "Tulane School of Medicine, Grand Rounds", date: "2024-09-12" },
  { title: "Graph theory for structural biology", venue: "University of Ghana, Dept. of Statistics", date: "2025-05-20" },
  { title: "Building health data science capacity in West Africa", venue: "KNUST, School of Public Health", date: "2025-10-20" },
];

export const mentoring = {
  paragraph:
    "Mentoring students into graduate programmes is one of the most durable parts of this work — a model ships and gets replaced, but a student who learns to ask the right question of their data keeps asking it for a career. More than twenty students have moved from his courses or lab into MS and PhD programmes in biostatistics, bioinformatics and data science.",
  stat: { value: 20, suffix: "+", label: "Students mentored into MS/PhD programs" },
};
