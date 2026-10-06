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
    description: "Graduate, 3 credits. Developed entire course including primary syllabus, assignments, and assessments; first offering scheduled Spring 2027.",
  },
  {
    code: "BIOS 6790",
    title: "Responsible AI Ethics and Governance",
    institution: "Tulane University",
    level: "Graduate",
    status: "in-development",
    description: "Graduate, 3 credits. Developed entire course including primary syllabus, assignments, and assessments; first offering scheduled Fall 2027.",
  },
  {
    title: "R for Biomedical and Public Health Data Science",
    institution: "Tulane University",
    level: "Graduate",
    status: "in-development",
    description: "3 Credits, Tulane University, New Orleans, LA, USA.",
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
      { year: "2025", semester: "Spring", title: "Introduction to Methods in Data Science", code: "BIOS 6310", level: "Graduate", credits: 3 },
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

/** The CV's opening line for the Teaching section, in the third person. */
export const teachingStatement =
  "He has taught over 20 different courses across 4 universities in the USA since his initial university teaching appointment, including courses at the graduate and undergraduate levels.";

/** CV Table 4: "Other Teaching Experience". */
export const otherTeaching = [
  { institution: "Wesley Girls’ High School, Ghana", period: "2009–2013", course: "Elective/Core Mathematics", timesTaught: 18, mode: "In-person", level: "HS" },
  { institution: "Montessori Jr HS, Ghana", period: "2006–2007", course: "All Elementary Subjects", timesTaught: 9, mode: "In-person", level: "Elementary" },
  { institution: "Cherish International School, Ghana", period: "2004–2006", course: "All Elementary Subjects", timesTaught: 9, mode: "In-person", level: "Elementary" },
];

export const philosophy = {
  paragraphs: [
    "Student-centered, applied, reproducible, and grounded in responsible AI. I started as a mathematics teacher, and that has never really changed — it just moved to a different subject: a model is only as useful as the explanation a student, a clinician or a policymaker can build around it.",
  ],
};

export type GuestLecture = {
  year: number;
  title: string;
  /** Course or seminar series, as printed on the CV. */
  course?: string;
  host: string;
  /** Exact date where the CV gives one. */
  date?: string;
};

const agingProgram =
  "Interdisciplinary PhD in Aging Studies, Center for Aging, School of Medicine, Tulane University, New Orleans, LA, USA";

/** Every entry under "Guest Lectures/Seminars" on the CV, newest first. */
export const guestLectures: GuestLecture[] = [
  {
    year: 2026,
    title: "C. elegans as a Model of Aging and Neurodegenerative Diseases",
    course: "AGST 7060: Topics in Aging Research I",
    host: agingProgram,
  },
  {
    year: 2026,
    title: "Responsible Research Conduct Using Artificial Intelligence (AI)",
    course: "INTD-6010-01: Responsible Conduct of Research (RCR) Seminar Series",
    host: agingProgram,
  },
  {
    year: 2025,
    title: "AI at the Frontiers of Aging: Redefining Diagnostics and Drug Discovery",
    course: "AGST 7020: Interdisciplinary Seminar on Aging I",
    host: agingProgram,
  },
  {
    year: 2025,
    title: "C. elegans as a Model of Aging and Neurodegenerative Diseases",
    course: "AGST 7060: Topics in Aging Research I",
    host: agingProgram,
  },
  {
    year: 2025,
    title: "Responsible Research Conduct Using Artificial Intelligence (AI)",
    course: "INTD-6010-01: Responsible Conduct of Research (RCR) Seminar Series",
    host: agingProgram,
  },
  {
    year: 2024,
    title: "Machine Learning: Concept and Application in Biomedical Sciences",
    course: "Statistics Capstone Course Webinar",
    host: "Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA",
  },
  {
    year: 2024,
    title: "Unearthing the Mechanisms of Age-Related Neurodegenerative Disease Using Caenorhabditis elegans",
    course: "AGST 7060: Topics in Aging Research I",
    host: agingProgram,
  },
  {
    year: 2024,
    title: "Artificial Intelligence at the Frontiers of Aging: Redefining Diagnostics and Drug Discovery",
    course: "AGST 7020: Interdisciplinary Seminar on Aging I (graduate seminar presentation)",
    host: agingProgram,
  },
  {
    year: 2024,
    title: "Exploring the Scope and Impact of AI in Higher Education Research",
    course: "Invited speaker",
    host: "AfriQAN, Association of African Universities, Accra, Ghana",
    date: "May 30, 2024",
  },
  {
    year: 2024,
    title: "Data Science-Driven Drug Discovery and Design for Treatment of Neurodegenerative Diseases",
    course: "Invited speaker",
    host: "20th Annual MCBIOS, Emory University, Atlanta, GA, USA",
    date: "March 2024",
  },
  {
    year: 2024,
    title: "Data Science-Driven Drug Discovery and Design to Target Diseases",
    course: "Invited speaker",
    host: "Bioinformatics Program, University of Arkansas for Medical Sciences and University of Arkansas at Little Rock, Little Rock, AR, USA",
    date: "March 8, 2024",
  },
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

/* ------------------------------------------- committees & advising */
/* Source: the CV's "Masters Committees", "Doctoral Committees",
   "Students Advised" and "Academic Advising" sections, in full. */

export type CommitteeEntry = {
  student: string;
  role: string;
  date: string;
  title: string;
  program?: string;
  note?: string;
};

export const mastersCommittees: { period: string; entries: CommitteeEntry[] }[] = [
  {
    period: "2025–2026",
    entries: [
      { student: "Taylor Franks", role: "Supervisor", date: "Spring 2026", title: "Utilizing Machine Learning Models to Predict Post-Partum Depression Diagnosis", program: "MS (Biostatistics), Tulane University" },
      { student: "Bailey P. Taylor", role: "Supervisor", date: "Spring 2026", title: "Identification of Predictive Comorbidity Patterns for Endometriosis Risk Stratification Using Explainable Artificial Intelligence and Electronic Health Record Data", program: "MS (Biostatistics), Tulane University" },
      { student: "Ema Darr", role: "Co-Supervisor", date: "Spring 2026", title: "Comparing Performance Measure Behavior Across Statistical and Machine Learning Classifiers for Sepsis Mortality Prediction: A Simulation Study", program: "MS (Biostatistics), Tulane University" },
      { student: "Chaudhry S. Farhana", role: "Supervisor", date: "Spring 2026", title: "Predicting Heart Failure Mortality: Integrating Baseline Risk Stratification with Temporal Risk Evolution for Enhanced Clinical Decision-Making", program: "Integrated Learning Experience, Partial Fulfillment of MSPH (Biostatistics), Tulane University" },
      { student: "Kervin Dery", role: "Co-Supervisor", date: "2026", title: "A Graph-Theoretic Model of Hepatitis B", program: "MPhil (Mathematics), University of Cape Coast, Ghana" },
      { student: "Muthaiah Subashini", role: "Supervisor", date: "Fall 2025", title: "Preventable Emergency Department Visits Analysis", program: "MSPH (Biostatistics), Tulane University" },
      { student: "Jingwen Li", role: "Supervisor", date: "2026", title: "Mental Well-Being and Curriculum Evaluation", program: "MSPH (Biostatistics), Tulane University" },
      { student: "Siyuan Luan", role: "Committee Member", date: "2025", title: "Comparative Analysis of Dimensionality Reduction Techniques for High-Dimensional Data", program: "MS (Biostatistics), Tulane University" },
      { student: "Hao Zhou and Zhengxiao Yang", role: "Chair", date: "Spring 2024–Spring 2025", title: "Optimizing Parkinson’s Disease Prediction", note: "Published: Data, 2025, 10(4)" },
      { student: "Han Liu", role: "Committee Member", date: "2025", title: "A Bayesian-Frequentist Hybrid Inference Framework for Optimizing Adaptive COVID-19 Vaccine Trials", note: "Supervisor: Jeffrey G. Shaffer" },
      { student: "Han Wenzheng and Edmund F. Agyemang", role: "Chair", date: "2024–2025", title: "AI-Enhanced Multi-Algorithm R Shiny App for Predictive Modeling and Analytics", note: "Published: JMIR Aging (DOI: 10.2196/70272)" },
    ],
  },
  {
    period: "2024",
    entries: [
      { student: "Jinjie Wang", role: "Committee Member", date: "2024", title: "Comparative Evaluation of Approaches for Simultaneous Handling of Missing Data and Measurement Error: A Simulation Study", note: "Supervisor: Jeffrey G. Shaffer" },
    ],
  },
  {
    period: "2023",
    entries: [
      { student: "Stephen D. McQueen", role: "Chair", date: "Fall 2023", title: "Optimization of Machine Learning Models for Predicting Deposit Term Subscriptions in Bank Marketing", program: "M.A. (Applied Mathematics), Eastern Kentucky University" },
    ],
  },
  {
    period: "2022",
    entries: [
      { student: "Kamala Krishna Buddharaju", role: "Chair", date: "Fall 2022", title: "Modeling Drug-Induced Liver Toxicity Using ML-Driven QSAR", program: "M.A. (Applied Mathematics), Eastern Kentucky University" },
      { student: "Samuel Christopher", role: "Co-Chair", date: "Fall 2022", title: "Optimizing Machine Learning Algorithms in an R Shiny App for Improved Predictions", program: "M.A. (Applied Mathematics), Eastern Kentucky University" },
    ],
  },
  {
    period: "2020–2021",
    entries: [
      { student: "Edem K. Netsey", role: "Co-Supervisor", date: "2021", title: "A Mathematical Graph-Theoretic Model of Single Point Mutations Associated with Sickle Cell Disease", program: "MPhil (Mathematics), University of Cape Coast, Ghana", note: "Published: Journal of Advances in Biotechnology" },
    ],
  },
];

export const doctoralCommittees: CommitteeEntry[] = [
  { student: "Edmund Fosu Agyemang", role: "Chair", date: "Fall 2025 – Present", title: "Design and Implementation of robust AI workflows for enhanced health outcomes", program: "PhD (Biostatistics), Tulane University" },
  { student: "Ema Akter", role: "Chair", date: "Fall 2025 – Present", title: "Transforming Public Health Outcomes with Robust Artificial Intelligence Workflow Design and Implementation", program: "PhD (Biostatistics), Tulane University" },
  { student: "Yuanhao Zu", role: "Member", date: "Fall 2025 – Present", title: "Cross evaluation between traditional formulas and modern imputation strategies for missing data in the context of acute respiratory distress syndrome severity", program: "PhD (Biostatistics), Tulane University" },
  { student: "Desmond Yemeh", role: "Chair", date: "Fall 2025 – Present", title: "AI-Assisted Drug Discovery and Design for Targeting Age-Associated Neurodegenerative Diseases", program: "PhD (Interdisciplinary PhD in Aging Studies), Tulane Center for Aging" },
  { student: "Mamadou D. Coulibaly", role: "Member", date: "2025 – Present", title: "Genomic and Epidemiologic Data for Integrative Modeling of Tuberculosis Drug Resistance Prediction", program: "PhD (Bioinformatics), University of Sciences, Techniques and Technologies of Bamako, Mali" },
  { student: "Md Ariful Islam", role: "Member", date: "2024 – Present", title: "Multi-omics and drug repurposing targeting complex age-related conditions", program: "PhD (Biomedical Sciences), Tulane School of Medicine", note: "Principal Advisor: Dr. Hong-Wen Deng" },
  { student: "Edem K. Netsey", role: "Chair", date: "2025 – Present", title: "Spectral Stability Analysis of Protein Mutation Networks: Mutation-Induced Spectral Perturbation Theory (MISPT) and Applications to Protein Engineering", program: "University of Cape Coast, Cape Coast, Ghana" },
];

export const studentsAdvised = [
  { year: "2026", count: 8 },
  { year: "2025", count: 6 },
  { year: "2024", count: 6 },
  { year: "2023", count: 2 },
  { year: "2022", count: 3 },
  { year: "2021", count: 1 },
];

export const academicAdvising = {
  intro:
    "As an academic advisor for graduate students, he provides guidance on course selection, degree requirements, academic planning, and related services to help them achieve their educational goals.",
  advisees: [
    "Samuel Assefa – MS (Biostatistics), (2026–Present), Tulane University",
    "Adeshola Lawal – MS (Biostatistics), (2026–Present), Tulane University",
    "Edmund F. Agyemang (2025–Present) – PhD (Biostatistics), Tulane University",
    "Ema Akter (2025–Present) – PhD (Biostatistics), Tulane University",
    "Muthaiah Subashini (2024) – MSPH (Biostatistics), Tulane University",
    "Taylor Franks (Fall 2024–2026) – M.S. (Biostatistics), Tulane University",
    "Jingwen Li (Fall 2024–Present) – MSPH (Biostatistics), Tulane University",
    "Bailey Taylor (Fall 2024–2026) – M.S. (Biostatistics), Tulane University",
  ],
};
