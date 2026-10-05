/* =============================================================================
   TEACHING PAGE DATA
   Source: Kakraba-Website-Informations.docx. Course titles, guest-lecture
   titles and the teaching-evaluation framing are drawn from that document;
   see app/data/site.tsx for the general sourcing note. The course-history
   and student-evaluation tables are transcribed from the CV (Tables 1–3
   and 5–7); every evaluation is shown, at the owner's request.
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
  {
    code: "BIOS 6980",
    title: "AI for Biomedical and Public Health Applications",
    institution: "Tulane University",
    level: "Graduate",
    status: "in-development",
    description: "Developed in full (syllabus, assignments and assessments); first offering Spring 2027.",
  },
  {
    code: "BIOS 6790",
    title: "Responsible AI Ethics and Governance",
    institution: "Tulane University",
    level: "Graduate",
    status: "in-development",
    description: "Developed in full (syllabus, assignments and assessments); first offering Fall 2027.",
  },
  {
    title: "R for Biomedical and Public Health Data Science",
    institution: "Tulane University",
    level: "Graduate",
    status: "in-development",
    description: "A 3-credit course in R for biomedical and public health data science.",
  },
];

/* ----------------------------------------------------- course history */

export type TaughtCourse = {
  year: string;
  semester: string;
  title: string;
  code: string;
  level: "Graduate" | "Undergraduate";
  credits: number;
  modality?: string;
  /** Course had not been taught for over six years before he took it on. */
  revived?: boolean;
};

export type CourseHistory = {
  institution: string;
  department: string;
  period: string;
  rows: TaughtCourse[];
};

export const courseHistory: CourseHistory[] = [
  {
    institution: "Tulane University",
    department: "Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine",
    period: "2024 – present",
    rows: [
      { year: "2026", semester: "Fall", title: "Statistical Learning in Data Science", code: "BIOS 7650", level: "Graduate", credits: 3, modality: "In-person" },
      { year: "2026", semester: "Spring", title: "Introduction to Methods in Data Science", code: "BIOS 6310", level: "Graduate", credits: 3, modality: "In-person" },
      { year: "2025", semester: "Fall", title: "Statistical Learning in Data Science", code: "BIOS 7650", level: "Graduate", credits: 3, modality: "In-person" },
      { year: "2025", semester: "Spring", title: "Introduction to Methods in Data Science", code: "BIOS 6310", level: "Graduate", credits: 3, modality: "In-person", revived: true },
      { year: "2024", semester: "Fall", title: "Statistical Learning in Data Science", code: "BIOS 7650", level: "Graduate", credits: 3, modality: "In-person" },
    ],
  },
  {
    institution: "Eastern Kentucky University",
    department: "Mathematics and Statistics",
    period: "Fall 2021 – Fall 2023",
    rows: [
      { year: "2023", semester: "Fall", title: "R and Introductory Data Mining", code: "STA/DSC 780", level: "Graduate", credits: 3, modality: "In-person" },
      { year: "2023", semester: "Fall", title: "R and Introductory Data Mining", code: "STA/DSC 580", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2023", semester: "Fall", title: "Introduction to Statistical Reasoning", code: "STA 215", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2023", semester: "Fall", title: "Intro to Statistical Reasoning – Lab", code: "STA 215P", level: "Undergraduate", credits: 2, modality: "In-person" },
      { year: "2023", semester: "Spring", title: "Applied Statistics", code: "STA 270", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2023", semester: "Spring", title: "Applied Statistics", code: "STA 270", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2023", semester: "Spring", title: "Seminar/Capstone", code: "STA 498W", level: "Undergraduate", credits: 1, modality: "In-person" },
      { year: "2022", semester: "Fall", title: "R and Introductory Data Mining", code: "STA/DSC 780", level: "Graduate", credits: 3, modality: "In-person" },
      { year: "2022", semester: "Fall", title: "R and Introductory Data Mining", code: "STA/DSC 580", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2022", semester: "Fall", title: "Regression Analysis", code: "STA 340", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2022", semester: "Fall", title: "Seminar/Capstone in Statistics", code: "STA 498W", level: "Undergraduate", credits: 1, modality: "In-person" },
      { year: "2022", semester: "Spring", title: "Applied Statistics", code: "STA 270", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2022", semester: "Spring", title: "Applied Statistics Lab", code: "STA 270L", level: "Undergraduate", credits: 2, modality: "In-person" },
      { year: "2022", semester: "Spring", title: "Regression Analysis", code: "STA 340", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2022", semester: "Spring", title: "Statistical Machine Learning in R", code: "STA 880", level: "Graduate", credits: 3, modality: "In-person", revived: true },
      { year: "2021", semester: "Winter", title: "Intro to Statistical Reasoning (Online)", code: "STA 215", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2021", semester: "Fall", title: "R and Introductory Data Mining", code: "STA/DSC 780", level: "Graduate", credits: 3, modality: "In-person" },
      { year: "2021", semester: "Fall", title: "R and Introductory Data Mining", code: "STA/DSC 580", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2021", semester: "Fall", title: "Applied Statistics", code: "STA 270", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2021", semester: "Fall", title: "Intro to Statistical Reasoning", code: "STA 215", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2021", semester: "Fall", title: "Applied Multivariate Statistics", code: "STA 840", level: "Graduate", credits: 4, modality: "Hybrid", revived: true },
      { year: "2021", semester: "Fall", title: "Intro to Statistical Reasoning – Lab", code: "STA 215P", level: "Undergraduate", credits: 2, modality: "In-person" },
      { year: "2021", semester: "Fall", title: "Intro to Statistical Reasoning – Lab", code: "STA 215P", level: "Undergraduate", credits: 2, modality: "In-person" },
    ],
  },
  {
    institution: "East Tennessee State University",
    department: "Mathematics and Statistics",
    period: "Fall 2013 – Spring 2015",
    rows: [
      { year: "2015", semester: "Spring", title: "Probability & Statistics – Non-calculus", code: "MATH 1530", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2015", semester: "Spring", title: "Probability & Statistics – Learning Support", code: "MATH 1530L", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2014", semester: "Fall", title: "Probability & Statistics – Non-calculus", code: "MATH 1530", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2014", semester: "Fall", title: "Probability & Statistics – Learning Support", code: "MATH 1530L", level: "Undergraduate", credits: 4, modality: "In-person" },
      { year: "2014", semester: "Summer", title: "Probability & Statistics – Non-calculus", code: "MATH 1530", level: "Undergraduate", credits: 3, modality: "In-person" },
      { year: "2013", semester: "Fall", title: "Probability & Statistics – Learning Support", code: "MATH 1530L", level: "Undergraduate", credits: 4, modality: "In-person" },
    ],
  },
];

export const revivedCourseNote =
  "Course had not been taught for over six years before he took it on.";

/* ----------------------------------------------------- evaluations */

export type EvaluationRow = {
  code: string;
  title: string;
  semester: string;
  /** Share of students giving the favourable response, 0–100. */
  percent: number;
  /** Mean score where the instrument reports one, e.g. "3.8/4". */
  score?: string;
};

export type EvaluationTable = {
  institution: string;
  instrument: string;
  /** What the percentage measures. */
  measure: string;
  rows: EvaluationRow[];
};

export const evaluations: EvaluationTable[] = [
  {
    institution: "Tulane University",
    instrument: "Tulane student course evaluation",
    measure: "Agree or Strongly Agree: \u201cOverall, I would recommend this professor\u201d",
    rows: [
      { code: "BIOS 6310", title: "Introduction to Methods in Data Science", semester: "Spring 2026", percent: 82 },
      { code: "BIOS 7650", title: "Statistical Learning", semester: "Fall 2024", percent: 80 },
    ],
  },
  {
    institution: "Eastern Kentucky University",
    instrument: "Explorance Blue",
    measure: "Students rating Average or Better",
    rows: [
      { code: "STA/DSC/CSC 580", title: "R and Introductory Data Mining", semester: "Fall 2023", percent: 100 },
      { code: "STA 215", title: "Intro to Statistical Reasoning", semester: "Fall 2023", percent: 90.91 },
      { code: "STA 215P (13570)", title: "Quantitative Support for STA 215", semester: "Fall 2023", percent: 88.88 },
      { code: "STA 215P (13570)", title: "Quantitative Support for STA 215", semester: "Fall 2023", percent: 85.72 },
      { code: "STA 270 (21335)", title: "Applied Statistics", semester: "Spring 2023", percent: 100 },
      { code: "STA 270 (24225)", title: "Applied Statistics", semester: "Spring 2023", percent: 100 },
      { code: "STA 340", title: "Regression Analysis", semester: "Fall 2022", percent: 100 },
      { code: "STA 498W", title: "Seminar/Capstone in Statistics", semester: "Fall 2022", percent: 100 },
      { code: "STA/DSC/CSC 580", title: "R and Introductory Data Mining", semester: "Fall 2022", percent: 100 },
      { code: "STA/DSC/CSC 780", title: "R and Introductory Data Mining", semester: "Fall 2022", percent: 100 },
      { code: "STA 270L", title: "Applied Statistics Lab", semester: "Spring 2022", percent: 100 },
      { code: "STA 340", title: "Regression Analysis", semester: "Spring 2022", percent: 100 },
      { code: "STA 880", title: "Statistical Machine Learning in R", semester: "Spring 2022", percent: 100 },
      { code: "STA 270", title: "Applied Statistics", semester: "Spring 2022", percent: 81.25 },
      { code: "STA 215", title: "Intro to Statistical Reasoning", semester: "Winter 2021/22", percent: 92.85 },
      { code: "STA/DSC/CSC 780", title: "R and Introductory Data Mining", semester: "Fall 2021", percent: 100 },
      { code: "STA/DSC/CSC 580", title: "R and Introductory Data Mining", semester: "Fall 2021", percent: 100 },
      { code: "STA 270", title: "Applied Statistics", semester: "Fall 2021", percent: 78.78 },
    ],
  },
  {
    institution: "East Tennessee State University",
    instrument: "Online SAI",
    measure: "Students rating Average or Better",
    rows: [
      { code: "MATH 1530 (L08)", title: "Probability & Statistics – Non-calculus", semester: "Fall 2014", percent: 95, score: "3.8/4" },
      { code: "MATH 1530 (L10)", title: "Probability & Statistics – Non-calculus", semester: "Fall 2014", percent: 95, score: "3.8/4" },
      { code: "MATH 1530-007", title: "Probability & Statistics – Non-calculus", semester: "Spring 2015", percent: 90, score: "3.6/4" },
      { code: "MATH 1530-008", title: "Probability & Statistics – Non-calculus", semester: "Spring 2015", percent: 75, score: "3/4" },
      { code: "MATH 1530 (L08)", title: "Probability & Statistics – Non-calculus", semester: "Summer 2014", percent: 75, score: "3/4" },
    ],
  },
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
  "Every student evaluation on record, by university. Each institution uses its own instrument, so the percentages measure slightly different things.";

export const mentoring = {
  paragraph:
    "More than 20 students have been mentored into MS and PhD programmes in biostatistics, bioinformatics and data science. People, projects and current students live on the lab's own site.",
  stat: { value: 20, suffix: "+", label: "Students mentored into MS/PhD programs" },
};
