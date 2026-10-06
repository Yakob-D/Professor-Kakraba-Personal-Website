/* =============================================================================
   ABOUT PAGE DATA
   Source: Kakraba-Website-Informations.docx. Every fact below traces to that
   document; see app/data/site.tsx for the general sourcing note. Privacy and
   funding-disclosure rules from the document's "Caveats" section are applied
   throughout — see inline notes.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

/* --------------------------------------------------------------- the bios */

export type Bio = {
  id: "short" | "long";
  label: string;
  /** Roughly how long it is, shown to event organisers. */
  wordCountLabel: string;
  paragraphs: string[];
};

export const bios: Bio[] = [
  {
    id: "short",
    label: "Short bio",
    wordCountLabel: "~100 words",
    paragraphs: [
      "Samuel Kakraba, Ph.D., is an Assistant Professor of Biostatistics and Data Science at the Tulane University School of Public Health and Tropical Medicine and Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science (CAIDS). He develops explainable, open machine-learning tools that turn complex health data into earlier, fairer decisions — most visibly SMART-Pred, built with the Louisiana Department of Health, which reached 91% test accuracy in a JMIR Aging case study. His record includes 17+ peer-reviewed publications, 3 patents or applications, and 59 presentations. He trained as a mathematics teacher in Ghana before earning his Ph.D. in bioinformatics, and he now serves as Tulane's University Liaison for Global Engagement with KNUST, the University of Ghana, the University of Cape Coast and Ensign Global University.",
    ],
  },
  {
    id: "long",
    label: "Full bio",
    wordCountLabel: "~350 words",
    paragraphs: [
      "Samuel Kakraba, Ph.D., develops explainable, open machine-learning tools that turn complex health data into earlier, fairer decisions across surveillance, aging and drug discovery, and builds the people and partnerships, especially across Africa, to make public health AI responsible and globally shared. He is an Assistant Professor of Biostatistics and Data Science at the Tulane University School of Public Health and Tropical Medicine, an Assistant Professor (tertiary) at the Tulane Center for Aging, and — since July 2026 — Senior Advisor for Health Data Science Engagement at the Connolly Alexander Institute for Data Science.",
      "His flagship project is SMART-Pred, an explainable AI platform for public health surveillance developed with the Louisiana Department of Health. It currently runs 10 machine-learning algorithms, with a roadmap toward more than 20, and its top model reached 91% test accuracy in a JMIR Aging case study. As he has put it, \"SMART-pred represents a new model for public health… AI-driven, explainable, affordable and accessible to everyone.\" He is Principal Investigator on a WSPH–CAIDS AI Seed Grant (2026–2027) supporting the platform's next phase.",
      "His research record runs from graph-theoretic analyses of protein structure (CFTR, sickle-cell haemoglobin, the SARS-CoV-2 spike, Hepatitis B) to AI-driven drug discovery for aging and neurodegeneration (AI-QSAR, TDZD analogs, quinoline-based inhibitors) to explainable and responsible AI more broadly — including a paper on cognitive sovereignty and decolonial public health in Frontiers in Public Health. His CV lists 17+ peer-reviewed publications, 328+ citations, an h-index of 10, 3 patents or patent applications, 59 presentations, and 47 ORCID-verified peer reviews across 16 journals. He serves as Associate Editor at JMIR Aging and Scientific Reports.",
      "He trained as a mathematics teacher at the University of Cape Coast (B.Ed. Mathematics, 2011) and taught mathematics in Ghana, including at Wesley Girls' High School (2009–2013), before moving to the United States for an M.S. in Mathematical Sciences at East Tennessee State University (2015, advised by Debra Knisley) and a Ph.D. in Bioinformatics at the University of Arkansas at Little Rock and the University of Arkansas for Medical Sciences (2021, GPA 4.0, advised by Robert J. Shmookler Reis). He joined the faculty at Eastern Kentucky University in 2021 before moving to Tulane in January 2024.",
      "Across Ghana and Africa he serves as Tulane's University Liaison for Global Engagement with KNUST, Ensign Global University, the University of Cape Coast and the University of Ghana, and was part of the Tulane delegation behind the Tulane–KNUST memorandum of understanding signed in 2025. He speaks English, Fante and Twi.",
    ],
  },
];

/* --------------------------------------------------- his story / timeline */

export type TimelineStop = {
  id: string;
  /** Short place label used on the map. */
  place: string;
  region: string;
  /** e.g. "2007–2011" */
  period: string;
  role: string;
  institution: string;
  description: string;
  /** Percentage position on the stylised world map (0–100). */
  map: { x: number; y: number };
  icon: string;
};

/** The signature visual of the site: Ghana → Tennessee → Arkansas → Kentucky → New Orleans. */
export const journey: TimelineStop[] = [
  {
    id: "ghana",
    place: "Cape Coast",
    region: "Ghana",
    period: "2009–2013",
    role: "Mathematics teacher; B.Ed. Mathematics, UCC (2011)",
    institution: "University of Cape Coast · Wesley Girls' High School",
    description:
      "Trained as a mathematics teacher at the University of Cape Coast and taught mathematics in Ghana, including at Wesley Girls' High School — the start of a career that has kept teaching at its centre.",
    map: { x: 46.5, y: 54 },
    icon: "graduation-cap",
  },
  {
    id: "tennessee",
    place: "Johnson City",
    region: "Tennessee",
    period: "2015",
    role: "M.S. Mathematical Sciences",
    institution: "East Tennessee State University",
    description:
      "Completed an M.S. in Mathematical Sciences, advised by Debra Knisley. Thesis: \"A Hierarchical Graph for Nucleotide Binding Domain 2\" — the first step from teaching mathematics to using it on biological structure.",
    map: { x: 23.5, y: 39 },
    icon: "compass",
  },
  {
    id: "arkansas",
    place: "Little Rock",
    region: "Arkansas",
    period: "2015–2021",
    role: "Ph.D. Bioinformatics",
    institution: "University of Arkansas at Little Rock & UAMS",
    description:
      "Completed a Ph.D. in Bioinformatics (GPA 4.0), advised by Robert J. Shmookler Reis. Dissertation: \"Drugs that Protect Against Protein Aggregation in Neurodegenerative Diseases.\" Supported as a graduate research assistant on NIH/NIA P01, VA and Arkansas INBRE-funded research.",
    map: { x: 20, y: 40.5 },
    icon: "network",
  },
  {
    id: "kentucky",
    place: "Richmond",
    region: "Kentucky",
    period: "2021–2023",
    role: "Assistant Professor of Statistics & Data Science",
    institution: "Eastern Kentucky University",
    description:
      "First faculty appointment: taught R and Data Mining, Regression, Applied Statistics, Statistical ML in R and Multivariate Analysis, and directed the university's Statistical Consulting Center.",
    map: { x: 23, y: 36.5 },
    icon: "book",
  },
  {
    id: "new-orleans",
    place: "New Orleans",
    region: "Louisiana",
    period: "2024–present",
    role: "Assistant Professor of Biostatistics & Data Science",
    institution: "Tulane University",
    description:
      "Leads an independent research programme in explainable AI for public health, directs SMART-Pred with the Louisiana Department of Health, and serves as Tulane's University Liaison for Global Engagement with partner institutions across Ghana.",
    map: { x: 20.5, y: 42.5 },
    icon: "map-pin",
  },
];

export const storyParagraphs = [
  "He trained as a mathematics teacher at the University of Cape Coast (B.Ed. Mathematics, 2011) and taught mathematics in Ghana, including at Wesley Girls' High School (2009–2013) and earlier schools. That start matters to how he works now: the first audience for any model he builds is a person who has to act on it.",
  "From Cape Coast he moved to East Tennessee State University for an M.S. in Mathematical Sciences (2015, advised by Debra Knisley, thesis on a hierarchical graph for Nucleotide Binding Domain 2), then to Little Rock for a Ph.D. in Bioinformatics shared between the University of Arkansas at Little Rock and the University of Arkansas for Medical Sciences (2021, advised by Robert J. Shmookler Reis). There, the mathematics turned biological: proteins became graphs, and the question became which parts of a structure carry the most weight.",
  "A first faculty post at Eastern Kentucky University followed in 2021, and in January 2024 he joined Tulane — where the work widened from molecules and patients out to whole populations, and where the Ghana partnerships became a formal part of the job as Tulane's University Liaison for Global Engagement.",
];

/* ------------------------------------------------------------- positions */

export type Position = {
  title: string;
  organisation: string;
  /** e.g. "Jan 2024 – present" */
  period: string;
  /** Used to group current vs. previous. */
  current: boolean;
  description?: string;
  href?: string;
  /** Set when the role belongs to the lab site rather than this one. */
  external?: boolean;
};

/** Every entry under "Professional Experience" on the CV, in CV order. */
export const positions: Position[] = [
  {
    title: "Assistant Professor of Biostatistics and Data Science (full-time position)",
    organisation: "Department of Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA",
    period: "Jan 2024 – Present",
    current: true,
    href: "https://sph.tulane.edu/bios/samuel-kakraba",
  },
  {
    // The CV's Personal Information lists CAIDS as his secondary affiliation,
    // and CAIDS announced the appointment; the CV's Professional Experience
    // line places it under the Tulane Center for Aging.
    title: "Senior Advisor for Health Data Science Engagement (Secondary Affiliation)",
    organisation: "Connolly Alexander Institute for Data Science (CAIDS), Tulane University, New Orleans, LA, USA",
    period: "July 2026 – Present",
    current: true,
    href: "https://datainstitute.tulane.edu/tulane-people/samuel-kakraba-phd",
  },
  {
    title: "Assistant Professor (Tertiary Affiliation)",
    organisation: "Tulane Center for Aging, School of Medicine, Tulane University, New Orleans, LA, USA",
    period: "Jan 2024 – Present",
    current: true,
    href: "https://medicine.tulane.edu/departments/tulane-center-aging-tulane-cancer-center/faculty/samuel-kakraba-phd",
  },
  {
    title: "Director",
    organisation: "Kakraba Research Group",
    period: "2024 – Present",
    current: true,
    description: "People, projects and open positions all live on the lab's own site.",
    href: "https://kakraba-research-group.vercel.app",
    external: true,
  },
  {
    title: "Assistant Professor of Statistics and Data Science (Tenure track, full-time position)",
    organisation: "Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA",
    period: "Aug 2021 – Dec 2023",
    current: false,
  },
  {
    title: "Graduate Research Assistant (Full-time position)",
    organisation: "Department of Information Science, UALR & UAMS; NIH Program Project Grant AG012411-17A1, Little Rock, AR, USA",
    period: "Aug 2015 – July 2021",
    current: false,
  },
  {
    title: "Graduate Teaching Associate (Full-time position)",
    organisation: "Department of Mathematics and Statistics, East Tennessee State University, Johnson City, TN, USA",
    period: "2014 – 2015",
    current: false,
  },
  {
    title: "Graduate Teaching Assistant (Full-time position)",
    organisation: "Department of Mathematics and Statistics, East Tennessee State University, Johnson City, TN, USA",
    period: "2013 – 2014",
    current: false,
  },
  {
    title: "Instructor (Full-time position)",
    organisation: "Wesley Girls’ High School, Cape Coast, Central Region, Ghana",
    period: "2011 – 2013",
    current: false,
  },
  {
    title: "Instructor (Full-time position)",
    organisation: "Wesley Girls’ High School, Cape Coast, Central Region, Ghana",
    period: "2009 – 2011",
    current: false,
  },
  {
    title: "Instructor (Full-time position)",
    organisation: "Montessori Primary School, Pedu, Cape Coast, Central Region, Ghana",
    period: "2006 – 2007",
    current: false,
  },
  {
    title: "Instructor (Full-time position)",
    organisation: "Cherish International School, Pedu, Cape Coast, Central Region, Ghana",
    period: "2004 – 2006",
    current: false,
  },
];

/* ------------------------------------------------------------- education */

export type Degree = {
  degree: string;
  field: string;
  institution: string;
  /** Second institution for joint programmes. */
  secondInstitution?: string;
  year: number;
  location: string;
  /** e.g. "GPA 4.0/4.0" */
  note?: string;
  thesis?: { title: string; advisor?: string };
};

/** "Education" on the CV, in full. */
export const education: Degree[] = [
  {
    degree: "Ph.D.",
    field: "Bioinformatics",
    institution: "University of Arkansas at Little Rock (UALR)",
    secondInstitution: "University of Arkansas for Medical Sciences (UAMS)",
    year: 2021,
    location: "Little Rock, AR, USA",
    note: "GPA: 4.0/4.0",
    thesis: {
      title: "Drugs that Protect Against Protein Aggregation in Neurodegenerative Diseases",
      advisor: "Advisor: Robert J.S. Reis, Ph.D.",
    },
  },
  {
    degree: "M.S.",
    field: "Mathematical Sciences",
    institution: "East Tennessee State University (ETSU)",
    year: 2015,
    location: "Johnson City, TN, USA",
    note: "GPA: 3.56/4.0",
    thesis: {
      title: "A Hierarchical Graph for Nucleotide Binding Domain 2",
      advisor: "Advisor: Debra J. Knisley, Ph.D.",
    },
  },
  {
    degree: "B.Ed.",
    field: "Mathematics",
    institution: "University of Cape Coast",
    year: 2011,
    location: "Cape Coast, Central Region, Ghana",
    thesis: {
      title: "The Relationship Between Students’ Perception of Mathematics and their Mathematics Achievements",
      advisor: "Advisor: Benjamin Y. Sokpe, M.Phil.",
    },
  },
];

/* ---------------------------------------------------------------- honours */

export type Honor = {
  title: string;
  organisation: string;
  year: string;
  note?: string;
};

/** Every entry under "Honors and Awards" on the CV, in CV order. */
export const honors: Honor[] = [
  {
    title: "Bibliometrics",
    organisation: "",
    year: "2026",
    note: "17+ peer-reviewed publications; 15+ manuscripts under review; 328+ citations; h-index of 10 (vs. ~3–5 typical for assistant professors in biostatistics and data science); i10-index of 12; 3 patents/patent applications, 7+ robust, fully reproducible, publicly available machine learning workflows spanning multiple state-of-the-art algorithms.",
  },
  {
    title: "Earned a Ph.D. with a perfect 4.0/4.0 cumulative GPA, graduating as the top-ranked student in the College of STEM",
    organisation: "University of Arkansas at Little Rock & UAMS",
    year: "2021",
  },
  {
    title: "Outstanding College Doctoral Candidate",
    organisation: "Donaghey College of Science, Technology, Engineering and Mathematics, University of Arkansas at Little Rock & UAMS, Little Rock, AR, USA",
    year: "2020 – 2021",
  },
  {
    title: "Outstanding Departmental Doctoral Candidate",
    organisation: "Department of Information Sciences, University of Arkansas at Little Rock, Little Rock, AR, USA",
    year: "2020 – 2021",
  },
  {
    title: "Outstanding Oral Presentation (Third Place)",
    organisation: "Drug Discovery & Development Colloquium, University of Arkansas for Medical Sciences, Little Rock, AR, USA",
    year: "2019 – 2020",
  },
  {
    title: "Graduate Research Assistant Award (Full tuition waiver, stipend, and health insurance)",
    organisation: "NIH Program Project Grant AG012411-17A1, Department of Information Science, UALR & UAMS, Little Rock, AR, USA",
    year: "2016 – 2021",
  },
  {
    title: "Graduate Research Assistant Award (Full tuition waiver, stipend, and health insurance)",
    organisation: "Department of Information Sciences, University of Arkansas at Little Rock, Little Rock, AR, USA",
    year: "2015 – 2016",
  },
  {
    title: "Faculty Award: Outstanding Graduate Student",
    organisation: "Department of Mathematics and Statistics, East Tennessee State University, Johnson City, TN, USA",
    year: "2014 – 2015",
  },
  {
    title: "Graduate Teaching Associate Award (Full tuition waiver and stipend)",
    organisation: "Department of Mathematics and Statistics, East Tennessee State University, Johnson City, TN, USA",
    year: "2014 – 2015",
  },
  {
    title: "Graduate Teaching Assistant Award (Full tuition waiver and stipend)",
    organisation: "Department of Mathematics and Statistics, East Tennessee State University, Johnson City, TN, USA",
    year: "2013 – 2014",
  },
];

/* ----------------------------------------------------------------- skills */

export type SkillGroup = {
  label: string;
  icon: string;
  items: string[];
};

/** "Computational Programming and Software Skills" on the CV, in full. */
export const skillGroups: SkillGroup[] = [
  {
    label: "Statistical & Data Science Software",
    icon: "code",
    items: ["R Statistical Software", "SAS", "Python", "Graph Pad Prism", "Minitab", "Hadoop", "Apache", "Bash scripting", "SPSS"],
  },
  {
    label: "Molecular Modeling & Simulation",
    icon: "flask",
    items: ["Gromacs", "Discovery Studio", "Maestro Schrödinger", "AutoDock Vina", "Raccoon", "Modeler", "Chimera", "Cytoscape", "Sybyl"],
  },
  {
    label: "Operating Systems & Applications",
    icon: "layers",
    items: ["Linux/Ubuntu", "LaTeX", "Windows", "Android", "Microsoft Office (Word, Excel, PowerPoint)"],
  },
];

/** "Professional Memberships and Offices" on the CV, in full. */
export const memberships = [
  "2024 – Present · Member, Delta Omega National Honorary Society in Public Health–Eta Chapter, LA, USA",
  "2023 – Present · Member, International Society for Computational Biology",
  "2023 – Present · Member, American Statistical Association, USA",
  "2023 – Present · Member, American Mathematical Association, USA",
  "2021 – Present · Member, American Association of University Professors, USA",
  "2019 – Present · Member, American Association of Pharmaceutical Scientists–UAMS Chapter, AR, USA",
  "2016 – Present · Member, Drug Discovery and Colloquium/MALTO, AR, USA",
  "2016 – 2017 · Co-chair, Next Generation Sequence Section, MCBIOS Conference, Memphis, TN, USA",
  "Vice President, UALR & UAMS Bioinformatics Club–Chapter of the MCBIOS, AR, USA",
  "2015 – Present · Member, Midsouth Computational Biology and Bioinformatics Society, USA",
  "2015 · Member, Kappa Mu Epsilon (KME) Tennessee Beta Chapter, TN, USA",
  "2014 – 2015 · Member, American Mathematical Society, USA",
  "2002 – 2004 · Founder and President, Wildlife Conservation Club, University Practice Senior High School, Cape Coast, Central Region, Ghana. Founded ecology and conservation club, organized workshops, mentored future leaders.",
  "2003 – 2004 · Pra House Prefect, University Practice Senior High School, Cape Coast, Central Region, Ghana",
  "2003 – 2004 · Board Member, Students Representative Council (SRC), University Practice Senior High School, Cape Coast, Central Region, Ghana",
  "1999 – 2001 · Library Prefect, Tuwohofo Holly International School, Akotokyir, Cape Coast, Central Region, Ghana",
];

/* ------------------------------------------------ coursework & training */

/** "Selected Graduate Level Coursework" on the CV, in full. */
export const graduateCoursework = [
  {
    label: "Data Science (AI and ML) & Statistics & Biostatistics",
    items: [
      "Artificial Intelligence for Biomedical and Public Health Applications",
      "Introduction to Methods in Data Science",
      "Programming in R",
      "Programming in Python",
      "Introduction to Data Science and Technologies",
      "Data and Information Visualization",
      "Data Management and Data Mining",
      "Probability and Statistics",
      "Regression Analysis",
      "Advanced Statistical Analysis",
      "Multivariate Statistics",
      "Biostatistics I & II",
      "Machine Learning and Applications/Statistical Learning",
      "Deep Learning",
      "Data Science and Technologies",
      "Big Data and Data Analytics",
      "Data Mining and Visualization",
      "Predictive Modeling and Analytics",
      "Artificial Intelligence",
      "Business Analytics and Business Intelligence",
      "Categorical Data Analysis",
      "Statistical Methods I & II",
      "Statistical Consulting",
      "Mathematical Statistics I & II",
      "Statistical Inference",
      "Probability & Statistics & Applied Statistics",
    ],
  },
  {
    label: "Computational Biology & Bioinformatics & Drug Discovery & Mathematics",
    items: [
      "Molecular Modeling and Simulation",
      "Bioinformatics: Theory and Applications",
      "Discrete Models of Proteins",
      "Complex Network and Systems Biology",
      "Drug Discovery and Design",
      "Biology of Aging",
      "Molecular Biology",
      "Graph Theory I & II",
      "Calculus I–III",
      "College Algebra",
      "Real Analysis",
      "Linear Algebra",
      "Differential Geometry",
      "Complex Analysis",
      "Graph-Theoretic Modeling",
      "Modern Algebra",
      "Ordinary Differential Equations",
    ],
  },
];

/** "Professional Development" and "Licenses and Certifications" on the CV. */
export const professionalDevelopment = [
  {
    label: "Tulane University, New Orleans, LA, USA (Fall 2024)",
    items: [
      "Office of Research Faculty Orientation, Tulane University, New Orleans, LA, USA",
      "New Faculty Orientation, Tulane University, New Orleans, LA, USA",
    ],
  },
  {
    label: "CITI Training Certifications – Tulane University",
    items: [
      "Human Research – Group 2: Social and Behavioral Research (Completed: October 22, 2024)",
      "Responsible Conduct of Research – Social and Behavioral Research Course (Completed: October 21, 2024)",
      "Conflict of Interest Mini-Course (Completed: October 21, 2024)",
      "COVID-19 Public Training Series (All completed: October 21, 2024)",
      "Research Security Training (Combined) (Completed: December 10, 2025)",
    ],
  },
  {
    label: "Eastern Kentucky University, Richmond, KY, USA (2021–2023)",
    items: [
      "Junior Faculty Mentorship Program, College of STEM",
      "New Faculty Orientation (August 2021)",
      "Professional Development Session on Classroom Technology (2021)",
      "STA 270 Workshop (Fall 2021)",
      "WebAssign Training (Fall 2021)",
      "Junior Faculty Mentoring Program Orientation (Fall 2021–Spring 2022)",
      "Workshops on Mentorship and Teaching Effectiveness (2022)",
      "Faculty Center for Teaching and Learning Workshop: “Integrating Learning Targets” (Fall 2023)",
    ],
  },
  {
    label: "Licenses and Certifications",
    items: [
      "R Programming (2016) – Johns Hopkins University, Coursera",
      "The Data Scientist’s Toolbox (2016) – Johns Hopkins University, Coursera",
      "Drug Discovery (2016) – University of California, San Diego, Coursera",
    ],
  },
];

/** "Co-Curricular Achievements" on the CV: track and field results. */
export const coCurricular = [
  {
    label: "University Practice Senior High School, Cape Coast, Central Region, Ghana",
    items: [
      "5000 Meters (5K), Boys' Division — First Place (20:34.4) – 2001/2002",
      "5000 Meters (5K), Boys' Division — Second Place (17:41.55) – 2002/2003",
      "5000 Meters (5K), Boys' Division — Third Place (19:17.14) – 2003/2004",
    ],
  },
  {
    label: "Circuit 4, Basic Schools Sports Festival, Cape Coast, Central Region, Ghana",
    items: [
      "1500 Meters (1.5K), Boys' Division — First Place (5:14:40) – 1998/1999",
      "3000 Meters (3K), Boys' Division — Third Place (11:09.39) – 1998/1999",
    ],
  },
];

/* ------------------------------------------------------------ beyond work */

export const beyondWork = {
  intro:
    "Outside the department he competed in track and field (wins at 5K, 1500m and 3000m), and he moves between English, Fante and Twi depending on who is in the room.",
  items: [
    { label: "Track & field — 5K, 1500m, 3000m", icon: "activity" },
    { label: "English · Fante · Twi", icon: "globe" },
  ],
};

/* -------------------------------------------------------------- media kit */

export type MediaKitAsset = {
  label: string;
  description: string;
  icon: string;
  /** Null until the asset is uploaded. */
  href: string | null;
  meta?: string;
};

export const mediaKit = {
  intro:
    "For event programmes, press and introductions. Photographs are free to use with credit.",
  terms: "Free to use with credit: “Photo courtesy of Samuel Kakraba.”",
  // Exact four speaking topics given in the source document.
  speakingTopics: [
    "Explainable AI for public health practice",
    "Responsible AI governance",
    "AI and decolonial global health",
    "From handwriting to health: AI for early Alzheimer's screening",
  ],
  assets: [
    {
      label: "Hi-res headshot",
      description: "Colour, neutral background.",
      icon: "users",
      href: "/images/headshots/samuel-kakraba-headshot.jpg",
      meta: "JPEG",
    },
    {
      label: "Speaking photograph",
      description: "On stage, landscape crop suitable for programme covers.",
      icon: "mic",
      href: null,
      meta: "JPEG",
    },
    {
      label: "Curriculum vitae",
      description: "The full CV, including the complete talks and teaching record.",
      icon: "file-text",
      href: "/cv/samuel-kakraba-cv.pdf",
      meta: "PDF",
    },
  ] satisfies MediaKitAsset[],
};

/* ------------------------------------------------------------- page images */

export const aboutImages: Record<string, ImageRef> = {
  teaching: {
    src: null,
    alt: "Dr. Kakraba teaching a biostatistics class at Tulane",
    caption: "Teaching at the Tulane University School of Public Health & Tropical Medicine.",
  },
  ghana: {
    src: null,
    alt: "Dr. Kakraba with colleagues during a university visit in Ghana",
    caption: "University partnership visit, Ghana.",
  },
  speaking: {
    src: null,
    alt: "Dr. Kakraba delivering a keynote address",
    caption: "Keynote, KNUST 11th Biennial Scientific Conference, 2025.",
  },
};
