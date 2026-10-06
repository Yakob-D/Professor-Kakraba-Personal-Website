/* =============================================================================
   ENGAGEMENT PAGE DATA
   Sources: the CV's "Conference Presentations", "Media Coverage & Public
   Engagement", "Philanthropic Sponsorships and Support" and "International
   Student Mentorship" sections, and its University Liaison service entry.
   Every link below is a URL printed on the CV.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";
import { presentations } from "@/app/publications/conferences";

/* ----------------------------------------------------------------- talks */

/** Every talk, keynote, panel and workshop on the CV. Posters live with the
 *  full conference record on the Publications page. */
export const talks = presentations.filter((p) => p.category !== "poster");

export const talksStat = `${talks.length} talks, keynotes, panels and workshops, 2015–2026, as listed on the CV. Student posters are listed with the full conference record on the Conferences page.`;

/* ------------------------------------------------------- media coverage */

export type MediaLink = { label: string; href: string };

export type MediaItem = {
  year: number;
  outlet: string;
  headline: string;
  /** Publication date where the CV gives one. */
  date?: string;
  description: string;
  links: MediaLink[];
};

export type MediaEntry = MediaItem & {
  /** Grouped coverage, as under "International academic partnership
   *  engagements" on the CV. */
  subItems?: MediaItem[];
};

/** The Ghana partnership coverage (CV media item 7, a–e). Reused by the
 *  Global engagement section. */
export const partnershipCoverage: Record<"overview" | "ensign" | "ug" | "knust" | "ucc", MediaItem> = {
  overview: {
    year: 2025,
    outlet: "Celia Scott Weatherhead School of Public Health and Tropical Medicine News, Tulane University",
    headline: "Celia Scott Weatherhead School develops academic relationships with schools in Ghana",
    description:
      "Featured as faculty liaison and member of the Tulane delegation building academic relationships with Ghanaian institutions (including Ensign Global College, University of Ghana, KNUST, and University of Cape Coast).",
    links: [
      {
        label: "Read on sph.tulane.edu",
        href: "https://sph.tulane.edu/celia-scott-weatherhead-school-develops-academic-relationships-schools-ghana",
      },
    ],
  },
  ensign: {
    year: 2025,
    outlet: "Graphic Communications Group Ltd. and Ghana Webbers",
    headline: "Ghana News: Ensign Global–Tulane University sign MoU",
    description: "Ensign Global University and Tulane University sign memorandum of understanding, featured in Graphic Communications Group Ltd. and Ghana Webbers.",
    links: [
      {
        label: "Read on graphic.com.gh",
        href: "https://www.graphic.com.gh/news/general-news/ghana-news-ensign-global-tulane-university-sign-mou.html",
      },
      {
        label: "Read on ghanawebbers.com",
        href: "https://www.ghanawebbers.com/GhanaHomePage/NewsArchive/Ensign-Global-Tulane-University-sign-MoU-2063578",
      },
    ],
  },
  ug: {
    year: 2025,
    outlet: "University of Ghana School of Public Health News",
    headline: "University of Ghana meets Tulane University",
    description: "University of Ghana and Tulane University partnership, featured in University of Ghana School of Public Health news.",
    links: [
      {
        label: "Read on publichealth.ug.edu.gh",
        href: "https://publichealth.ug.edu.gh/events/university-ghana-meets-tulane-university",
      },
    ],
  },
  knust: {
    year: 2025,
    outlet: "KNUST News",
    headline: "KNUST, Tulane University Sign MoU to Deepen Academic Collaboration",
    description:
      "Kwame Nkrumah University of Science and Technology (KNUST) and Tulane University memorandum of understanding, featured in KNUST News.",
    links: [
      {
        label: "Read on knust.edu.gh",
        href: "https://www.knust.edu.gh/news/news-items/knust-tulane-university-sign-mou-deepen-academic-collaboration",
      },
    ],
  },
  ucc: {
    year: 2025,
    outlet: "University of Cape Coast News",
    headline: "UCC, University of Cincinnati, and Tulane University meet to deepen academic and research partnerships",
    description: "University of Cape Coast and Tulane University partnership, featured in University of Cape Coast News.",
    links: [
      {
        label: "Read on ucc.edu.gh",
        href: "https://www.ucc.edu.gh/news/ucc-university-cincinnati-and-tulane-university-meet-deepen-academic-and-research-partnerships",
      },
    ],
  },
};

/** CV media item 6, shown in Press coverage and on the Ensign partner card. */
const ensignHealthcareAccess: MediaItem = {
  year: 2025,
  outlet: "Ensign Global University News",
  headline: "Ensign Global University reiterates commitment to deliver healthcare access to underserved communities",
  date: "2024",
  description:
    "Featured the university’s pledge to expand healthcare access through its Master of Public Health program and related initiatives targeting underserved populations.",
  links: [
    {
      label: "Read on ensign.edu.gh",
      href: "https://ensign.edu.gh/ensign-global-university-reiterates-commitment-to-deliver-healthcare-access-to-underserved-communities/",
    },
  ],
};

/** Every entry under "Media Coverage & Public Engagement" on the CV. */
export const mediaCoverage: MediaEntry[] = [
  {
    year: 2026,
    outlet: "Connolly Alexander Institute for Data Science News, Tulane University",
    headline: "Samuel Kakraba, PhD Named CAIDS Senior Advisor for Health Sciences Engagement",
    description:
      "Featured in recognition of leadership and expertise at the intersection of artificial intelligence, data science, biomedical research, and public health.",
    links: [
      { label: "Read on datainstitute.tulane.edu", href: "https://datainstitute.tulane.edu/tulane-news/senior-advisor-health-sciences" },
    ],
  },
  {
    year: 2026,
    outlet: "Eastern Kentucky University Spark Talks",
    headline: "Beyond the Algorithm: Building Trustworthy, Fair, and Useful AI in Health and Higher Education",
    description:
      "Hosted by the Office of Artificial Intelligence Strategies, Innovation, and Success (OAISIS), Eastern Kentucky University, Richmond, KY, USA.",
    links: [
      {
        label: "Watch on YouTube",
        href: "https://www.youtube.com/watch?v=eFluuNnTpdI&list=PL87KFqYs1CMITtqlPdVDdbjx-uA3sXRgr",
      },
    ],
  },
  {
    year: 2026,
    outlet: "Connolly Alexander Institute for Data Science News, Tulane University",
    headline: "Tulane University professor creates AI-driven SMART-pred platform that aims to transform public health surveillance",
    description:
      "Featured as principal investigator and lead developer of the SMART-Pred platform for AI-driven disease risk prediction and public health surveillance.",
    links: [{ label: "Read on datainstitute.tulane.edu", href: "https://datainstitute.tulane.edu/smart-pred-platform" }],
  },
  {
    year: 2026,
    outlet: "Celia Scott Weatherhead School of Public Health and Tropical Medicine News",
    headline: "Six seed grants fund AI and machine learning projects in public health",
    date: "February 23, 2026",
    description: "Featured as seed grant recipient and principal investigator for the SMART-pred project.",
    links: [
      {
        label: "Read on sph.tulane.edu",
        href: "https://sph.tulane.edu/six-seed-grants-fund-ai-and-machine-learning-projects-public-health",
      },
    ],
  },
  {
    year: 2025,
    outlet: "Celia Scott Weatherhead School of Public Health and Tropical Medicine News",
    headline: "How to become a leader in public health AI",
    date: "November 12, 2025",
    description:
      "Feature interview with Dr. Samuel Kakraba and Dr. Paul Hutchinson on leadership, training, and innovation in public health AI.",
    links: [{ label: "Read on sph.tulane.edu", href: "https://sph.tulane.edu/how-become-leader-public-health-ai" }],
  },
  ensignHealthcareAccess,
  {
    year: 2025,
    outlet: "International academic partnership engagements",
    headline: "Tulane delegation to Ghanaian partner institutions",
    description:
      "Featured as faculty liaison and member of the Tulane delegation supporting collaboration and partnership agreements with multiple Ghanaian institutions.",
    links: [],
    subItems: [
      partnershipCoverage.overview,
      partnershipCoverage.ensign,
      partnershipCoverage.ug,
      partnershipCoverage.knust,
      partnershipCoverage.ucc,
    ],
  },
  {
    year: 2025,
    outlet: "Celia Scott Weatherhead School of Public Health and Tropical Medicine",
    headline: "Demystifying AI in Public Health",
    date: "2025 (symposium held September 5, 2024; coverage published 2025)",
    description:
      "Faculty co-organizer, featured speaker and panel moderator, providing an overview of machine learning applications in public health, addressing ethical implementation and model bias reduction, and delivering a featured presentation on “Design and implementation of scalable and equitable AI/ML workflows for population-health measurement and disease diagnostics to improve public health outcomes in low-resource settings.”",
    links: [{ label: "Read on sph.tulane.edu", href: "https://sph.tulane.edu/demystifying-ai-public-health" }],
  },
  {
    year: 2024,
    outlet: "UAMS News",
    headline: "Two Research Conferences Converge at UAMS for Young Scientists",
    description:
      "Featured for leadership of a machine learning workshop at a University of Arkansas for Medical Sciences research conference.",
    links: [
      {
        label: "Read on news.uams.edu",
        href: "https://news.uams.edu/2024/07/09/two-research-conferences-converge-at-uams-for-young-scientists",
      },
    ],
  },
  {
    year: 2019,
    outlet: "UAMS School of Medicine",
    headline: "UAMS Researchers Receive $1.8 Million to Study Common Mechanisms Shared by Alzheimer’s, Other Diseases",
    description:
      "Featured as graduate research assistant on a 1.8 million USD NIH grant studying shared mechanisms in Alzheimer’s disease and related conditions.",
    links: [
      {
        label: "Read on medicine.uams.edu",
        href: "https://medicine.uams.edu/blog/uams-researchers-receive-1-8-million-to-study-common-mechanisms-shared-by-alzheimers-other-diseases",
      },
    ],
  },
  {
    year: 2016,
    outlet: "East Tennessee State University Graduate School",
    headline: "Illuminated Magazine (2016)",
    description: "Graduate School alumni spotlight highlighting alumni achievements and career updates, featuring Dr. Samuel Kakraba.",
    links: [{ label: "Read on dc.etsu.edu", href: "https://dc.etsu.edu/illuminated/3" }],
  },
  {
    year: 2016,
    outlet: "ETSU NSA REU Final Report",
    headline: "SMAaRT-Math: Strengthening Minorities Achievements via Research Training in Mathematics",
    description: "Program feature highlighting a research presentation on protein aggregation by Samuel Kakraba.",
    links: [
      {
        label: "Read the report (PDF)",
        href: "https://static1.squarespace.com/static/5e9b687d5c9c9e499bb04b9d/t/5ec1606eaa8738407dcaf72c/1589731446009/Report+ETSU+NSA+REU.pdf",
      },
    ],
  },
];

/* ---------------------------------------------------- global engagement */

export type PartnerInstitution = {
  name: string;
  coverage: MediaItem[];
};

export type InternationalCommittee = {
  student: string;
  role: string;
  period: string;
  title: string;
  degree: string;
  institution: string;
  note?: string;
};

export const globalEngagement = {
  role: "University Liaison and Coordinator for Global Engagement with four Ghanaian Institutions",
  // The CV's service entry, verbatim.
  intro:
    "University Liaison and Coordinator for Global Engagement with four Ghanaian Institutions (Kwame Nkrumah University of Science and Technology, Ensign Global University, University of Cape Coast, University of Ghana), Celia Scott Weatherhead School of Public Health and Tropical Medicine at Tulane University, New Orleans, LA, USA.",
  // CV media item 7, lead sentence.
  delegationNote:
    "Featured as faculty liaison and member of the Tulane delegation supporting collaboration and partnership agreements with multiple Ghanaian institutions.",
  overview: partnershipCoverage.overview,
  partners: [
    { name: "Kwame Nkrumah University of Science and Technology (KNUST)", coverage: [partnershipCoverage.knust] },
    { name: "Ensign Global University", coverage: [partnershipCoverage.ensign, ensignHealthcareAccess] },
    { name: "University of Cape Coast", coverage: [partnershipCoverage.ucc] },
    { name: "University of Ghana", coverage: [partnershipCoverage.ug] },
  ] satisfies PartnerInstitution[],
  /** Thesis and dissertation committees at Ghanaian and Malian
   *  universities, from the CV's Masters and Doctoral Committees lists. */
  internationalCommittees: [
    {
      student: "Edem K. Netsey",
      role: "Chair",
      period: "2025 – present",
      title: "Spectral Stability Analysis of Protein Mutation Networks: Mutation-Induced Spectral Perturbation Theory (MISPT) and Applications to Protein Engineering",
      degree: "PhD",
      institution: "University of Cape Coast, Cape Coast, Ghana",
    },
    {
      student: "Mamadou D. Coulibaly",
      role: "Member",
      period: "2025 – present",
      title: "Genomic and Epidemiologic Data for Integrative Modeling of Tuberculosis Drug Resistance Prediction",
      degree: "PhD (Bioinformatics)",
      institution: "University of Sciences, Techniques and Technologies of Bamako, Mali",
    },
    {
      student: "Kervin Dery",
      role: "Co-Supervisor",
      period: "2026",
      title: "A Graph-Theoretic Model of Hepatitis B",
      degree: "MPhil (Mathematics)",
      institution: "University of Cape Coast, Ghana",
    },
    {
      student: "Edem K. Netsey",
      role: "Co-Supervisor",
      period: "2021",
      title: "A Mathematical Graph-Theoretic Model of Single Point Mutations Associated with Sickle Cell Disease",
      degree: "MPhil (Mathematics)",
      institution: "University of Cape Coast, Ghana",
      note: "Published: Journal of Advances in Biotechnology",
    },
  ] satisfies InternationalCommittee[],
  galleryImages: [
    { src: null, alt: "University partnership visit in Ghana" },
    { src: null, alt: "Delegation visit marking the Tulane–KNUST memorandum of understanding" },
    { src: null, alt: "Delivering the keynote address at the KNUST 11th Biennial Scientific Conference" },
  ] satisfies ImageRef[],
};

/** Every CV talk given in Ghana: the conference presentations plus the
 *  AfriQAN invited talk (listed under Guest Lectures on the CV). */
export const ghanaTalks = [
  ...presentations.filter((p) => p.venue.includes("Ghana")),
  {
    year: 2024,
    date: "May 30, 2024",
    role: "Invited speaker",
    title: "Exploring the Scope and Impact of AI in Higher Education Research",
    venue: "AfriQAN, Association of African Universities, Accra, Ghana",
    links: undefined,
  },
];

/* ------------------------------------------- philanthropy & mentorship */
/* Source: CV, "Philanthropic Sponsorships and Support" and "International
   Student Mentorship", listed in full as on the CV. */

export type SponsoredScholar = {
  name: string;
  period: string;
  support: string;
  origin: string;
  note?: string;
};

export const philanthropy = {
  paragraphs: [
    "As part of his broader commitment to expanding access to education, he has engaged in philanthropic educational sponsorships aimed at supporting talented but underprivileged students. Through personal funding and collaborative support, he has helped remove financial barriers that often prevent capable individuals from pursuing higher education. These efforts reflect his belief that academic potential should not be limited by socioeconomic constraints, and that targeted investment in education can transform not only individual lives but also entire communities.",
    "Over the years, he has sponsored multiple students through their university education, covering tuition, fees, and in some cases living expenses, while also providing mentorship and guidance throughout their academic journey. These sponsorships have enabled recipients to access quality higher education and build pathways toward professional and personal advancement.",
  ],
  scholarsTitle: "Selected scholars supported through personal financial sponsorship",
  scholars: [
    {
      name: "Isaac Okyere",
      period: "2022–2023",
      support:
        "Full sponsorship supporting bachelor’s degree training, covering one year of university tuition and fees at the University of Cape Coast, Ghana.",
      origin: "Agona Swedru, Central Region, Ghana",
    },
    {
      name: "Dorothy Apreku",
      period: "2018–2022",
      support:
        "Full sponsorship supporting bachelor’s degree training, covering five years of university education including tuition and living expenses at the University of Cape Coast, Ghana.",
      origin: "Winneba, Central Region, Ghana",
    },
    {
      name: "Mawufemor Kpo",
      period: "2012–2015",
      support:
        "Full sponsorship supporting bachelor’s degree training, covering three years of university education including tuition and living expenses at the University of Cape Coast, Ghana.",
      origin: "Akotokyir, Cape Coast, Central Region, Ghana",
      note: "First-year tuition and fees were co-sponsored by Francis Jami (Cape Coast, Central Region, Ghana).",
    },
    {
      name: "Persis Blankson",
      period: "2013–2014",
      support: "Full sponsorship supporting bachelor’s degree training, covering one year of university tuition and fees.",
      origin: "Takoradi, Western Region, Ghana",
    },
  ] satisfies SponsoredScholar[],
  emergency: {
    title: "Emergency medical and humanitarian support",
    year: 2016,
    body: "Beyond educational sponsorship, he has mobilized emergency financial support for individuals facing life-threatening medical needs. In 2016, he organized and led a fundraising effort among friends and colleagues that raised approximately $4,000 USD for a critical, life-saving surgery for Alexander Yawson, a teenage girl in Ghana whose condition was life-threatening and who otherwise lacked the financial means to undergo the procedure. She survived and recovered following the surgery.",
  },
};

export type MenteePlacement = {
  name: string;
  year: number;
  program: string;
  institution: string;
};

export const internationalMentorship = {
  // The CV's two paragraphs, every sentence, changed only from first to third person.
  paragraphs: [
    "As an act of service to his community and a tribute to those who opened doors for him, he volunteers his time, networks, and expertise to help local and international students realize their academic dreams. To date, he has successfully mentored over 20 international students who have either completed their master’s or PhD degrees or are currently enrolled in doctoral programs. From securing admissions and graduate assistantships with full stipends to navigating visa processes and providing pre-departure support, he walks alongside students every step of the journey, ensuring that financial, logistical, or geographic barriers never stand between talent and opportunity at top universities in the USA, UK, Canada, and beyond.",
    "In addition to his international mentorship efforts, he actively mentors students from a wide range of backgrounds, including but not limited to underrepresented minorities within his local community. He has directly motivated and guided approximately 10 minorities of USA citizenship to pursue advanced degrees, many of whom have successfully transitioned into graduate programs and professional careers. At the same time, he continues to support and mentor a broader population of students, reflecting his commitment to inclusive excellence and equitable access to academic opportunities. Through sustained mentorship, career guidance, and academic support, he remains dedicated to nurturing the next generation of scholars and professionals, helping them build confidence, access opportunities, and achieve long term success.",
  ],
  stats: [
    { value: 20, suffix: "+", label: "International students mentored into MS/PhD programs" },
    { value: 10, suffix: "", label: "U.S. students from underrepresented groups guided toward advanced degrees", prefix: "~" },
  ],
  placementsTitle: "Selected recent mentees (2014–present)",
  placements: [
    { name: "Andrews Jacobs Bilson", year: 2026, program: "Interdisciplinary PhD in Aging Studies", institution: "Tulane University, New Orleans, LA, USA" },
    { name: "Desmond Yemeh", year: 2024, program: "Interdisciplinary PhD in Aging Studies", institution: "Tulane University, New Orleans, LA, USA" },
    { name: "Owusua Ampong", year: 2024, program: "M.S. Data Science and Analytics", institution: "Georgia State University, Atlanta, GA, USA" },
    { name: "Benjamin Amoah", year: 2023, program: "M.S. Plant Science and Agronomy", institution: "South Dakota State University, Brookings, SD, USA" },
    { name: "Shadrack Asante", year: 2022, program: "M.S. Mathematical Sciences", institution: "East Tennessee State University, Johnson City, TN, USA" },
    { name: "Wilberforce De-Graft", year: 2022, program: "MBA Accounting & Finance", institution: "Eastern Kentucky University, Richmond, KY, USA" },
    { name: "Matthew Quansah", year: 2022, program: "MPH Health Promotions", institution: "Eastern Kentucky University, Richmond, KY, USA" },
    { name: "Kuukua Egyinba Abraham", year: 2022, program: "M.S. Applied Statistics", institution: "Minnesota State University, Mankato, MN, USA" },
    { name: "Khadija Abdul-Samed", year: 2022, program: "M.A. Clinical Mental Health Counseling", institution: "East Tennessee State University, Johnson City, TN, USA" },
    { name: "Edmund Adorkor", year: 2021, program: "M.S. Agribusiness and Applied Economics", institution: "North Dakota State University, Fargo, ND, USA" },
    { name: "Bright Kweku Manu", year: 2021, program: "M.S. Mathematical Sciences", institution: "East Tennessee State University, Johnson City, TN, USA" },
    { name: "Matthew Quansah", year: 2021, program: "M.S. Civil and Environmental Engineering", institution: "South Dakota State University, Brookings, SD, USA" },
    { name: "Enoch Kwaku Larrey", year: 2021, program: "Ph.D. Bioinformatics", institution: "UALR & UAMS, Little Rock, AR, USA" },
    { name: "Joseph Asante Jnr.", year: 2020, program: "Ph.D. Bioinformatics", institution: "UALR & UAMS, Little Rock, AR, USA" },
    { name: "Nicholas Fiifi Hagan", year: 2019, program: "Ph.D. Business Information Systems", institution: "University of Memphis, Memphis, TN, USA" },
    { name: "Clement Aayire Yadem", year: 2017, program: "Ph.D. Applied Physics", institution: "University of Arkansas at Little Rock, Little Rock, AR, USA" },
    { name: "Evans Addo", year: 2016, program: "M.S. Mathematical Sciences", institution: "East Tennessee State University, Johnson City, TN, USA" },
    { name: "Theophilus Acquah", year: 2015, program: "M.S. Mathematical Sciences", institution: "East Tennessee State University, Johnson City, TN, USA" },
    { name: "Evelyn Fokou", year: 2015, program: "M.S. Mathematical Sciences", institution: "East Tennessee State University, Johnson City, TN, USA" },
    { name: "Thomas Torku", year: 2014, program: "M.S. Mathematical Sciences", institution: "East Tennessee State University, Johnson City, TN, USA" },
  ] satisfies MenteePlacement[],
};

/* --------------------------------------------- editorial & peer review */
/* Source: the CV's "Editorial and Peer-Review Activities" section. */

export type EditorialRole = {
  role: string;
  organisation: string;
  period: string;
};

export const editorialRoles: EditorialRole[] = [
  { role: "Associate Editor", organisation: "Journal of Medical Internet Research (JMIR Aging)", period: "2026 – Present" },
  { role: "Associate Editor", organisation: "Scientific Reports (Springer Nature)", period: "2026 – Present" },
];

/** "Refereed Journals" on the CV, grouped by the period printed there. */
export const refereedJournals: { period: string; journals: string[] }[] = [
  {
    period: "2026 – Present",
    journals: [
      "Journal of Medical Internet Research (JMIR Aging)",
      "PLOS Digital Health",
      "Information Processing & Management",
      "Journal of Medical Internet Research (JMIR eHealth/mHealth)",
    ],
  },
  {
    period: "2025 – Present",
    journals: [
      "Journal of Alzheimer’s Disease (JAD)",
      "Journal of Medical Internet Research (JMIR Medical Informatics)",
      "Journal of Medical Internet Research Public Health and Surveillance",
      "Advances in Medical Sciences (Elsevier)",
      "Sage Publications",
      "Frontiers in Public Health",
    ],
  },
  {
    period: "2024 – Present",
    journals: [
      "Age (GeroScience), Official Journal of the American Aging Association (Springer Nature)",
      "Journal of Clinical Medicine (JCM, MDPI)",
      "Computational Biology and Bioinformatics Journal",
    ],
  },
  { period: "2021 – Present", journals: ["Journal of Advances in Biotechnology"] },
];

export type OrcidReview = {
  journal: string;
  publisher: string;
  issn: string;
  reviews: number;
  years: string;
  notes: string;
};

/** The CV's "Verified Peer Review Activity" table (source: ORCID). */
export const orcidReviews = {
  orcid: "0000-0002-6362-5126",
  href: "https://orcid.org/0000-0002-6362-5126",
  summary: "47 verified reviews across 16 journals (2024–2026)",
  totalNote: "16 journals, all verified via ORCID",
  rows: [
    { journal: "Journal of Medical Internet Research", publisher: "JMIR Publications", issn: "1439-4456 / 1438-8871", reviews: 12, years: "2026", notes: "Leading eHealth/mHealth journal covering digital health, telemedicine, and medical informatics." },
    { journal: "JMIR Dermatology", publisher: "JMIR Publications", issn: "2562-0959", reviews: 1, years: "2026", notes: "Official journal of the International Society of Digital Health in Dermatology." },
    { journal: "GeroScience (formerly Age)", publisher: "Springer Nature", issn: "2509-2715 / 2509-2723", reviews: 5, years: "2024", notes: "Aging research and biogerontology." },
    { journal: "JMIR Aging", publisher: "JMIR Publications", issn: "2561-7605 (e)", reviews: 4, years: "2026", notes: "Aging, gerontology, and digital health in older adults." },
    { journal: "JMIR mHealth and uHealth", publisher: "JMIR Publications", issn: "2291-5222 (e)", reviews: 4, years: "2026", notes: "Mobile health, ubiquitous health, and connected care." },
    { journal: "JMIR Public Health and Surveillance", publisher: "JMIR Publications", issn: "2369-2960 (e)", reviews: 4, years: "2025–2026", notes: "Digital public health, surveillance systems, and epidemiology." },
    { journal: "JMIR Rehabilitation and Assistive Technologies", publisher: "JMIR Publications", issn: "2369-2529 (e)", reviews: 4, years: "2026", notes: "Digital rehabilitation, assistive technologies, and tele-rehab." },
    { journal: "Digital Health", publisher: "SAGE Publications", issn: "2055-2076 (e)", reviews: 2, years: "2026", notes: "Open-access journal on digital health technologies and implementation." },
    { journal: "JMIR AI", publisher: "JMIR Publications", issn: "2817-1705 (e)", reviews: 2, years: "2026", notes: "Artificial intelligence and machine learning in health and medicine." },
    { journal: "JMIR Medical Informatics", publisher: "JMIR Publications", issn: "2291-9694 (e)", reviews: 2, years: "2025", notes: "Clinical informatics, decision support, and health data science." },
    { journal: "PLOS Digital Health", publisher: "Public Library of Science", issn: "2767-3170 (e)", reviews: 2, years: "2026", notes: "Open-access journal on digital and computational technologies in health." },
    { journal: "Archives of Virology", publisher: "Springer Nature", issn: "0304-8608 / 1432-8798", reviews: 1, years: "2026", notes: "Virology and viral pathogenesis." },
    { journal: "Information Processing & Management", publisher: "Elsevier", issn: "0306-4573 / 1873-5371", reviews: 1, years: "2026", notes: "Information science, data science, and AI methods." },
    { journal: "Journal of Alzheimer's Disease", publisher: "SAGE Publications (formerly IOS Press)", issn: "1387-2877 / 1875-8908", reviews: 1, years: "2026", notes: "Alzheimer's disease and related dementias research." },
    { journal: "Journal of Clinical Medicine", publisher: "MDPI", issn: "2077-0383 (e)", reviews: 1, years: "2024", notes: "Multidisciplinary clinical medicine and healthcare research." },
    { journal: "Network Modeling Analysis in Health Informatics and Bioinformatics", publisher: "Springer Nature", issn: "2192-6662 / 2192-6670", reviews: 1, years: "2025", notes: "Network modeling in health informatics and bioinformatics." },
  ] satisfies OrcidReview[],
};

export const editorialService = {
  reviewCount: orcidReviews.rows.reduce((n, r) => n + r.reviews, 0),
  reviewLabel: "ORCID-verified reviews across 16 journals (2024–2026)",
};

/* ------------------------------------------------------------ committees */
/* Source: the CV's "University Committees/Advisory Boards" and
   "School/Department Committees" sections, in CV order. `period` is left
   unset where the CV prints none. */

export type CommitteeRole = {
  period?: string;
  role: string;
};

export const universityCommittees: CommitteeRole[] = [
  { period: "2026 – Present", role: "Senior Advisor for Health Data Science Engagement, Tulane University, New Orleans, LA, USA" },
  { period: "2025 – Present", role: "WSPH Representative, Artificial Intelligence Literacy committee, Tulane University, New Orleans, LA, USA" },
];

export const schoolCommittees: CommitteeRole[] = [
  { period: "2026", role: "Faculty lead, Biostatistics and Data Science Seminar Series, Department of Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA" },
  { role: "Judge, 2026 Annual Delta Omega (Eta Chapter) Poster Competition, Tulane University, New Orleans, LA, USA" },
  { role: "Member, International Applied Practical Experience (APE) Working Committee, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA" },
  { period: "2025 – Present", role: "Director, Areas of Specialization, Department of Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA" },
  { period: "2024 – Present", role: "Director, Graduate Biostatistics Certificate Program, Department of Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA" },
  { role: "University Liaison and Coordinator for Global Engagement with four Ghanaian Institutions (Kwame Nkrumah University of Science and Technology, Ensign Global University, University of Cape Coast, University of Ghana), Celia Scott Weatherhead School of Public Health and Tropical Medicine at Tulane University, New Orleans, LA, USA" },
  { role: "Member, Dean’s Research Committee (DRC), Celia Scott Weatherhead School of Public Health and Tropical Medicine at Tulane University, New Orleans, LA, USA" },
  { role: "Member, Curriculum Committee, Celia Scott Weatherhead School of Public Health and Tropical Medicine, New Orleans, LA, USA" },
  { role: "Member, International Health & Humanitarian Crises Committee, Celia Scott Weatherhead School of Public Health and Tropical Medicine, New Orleans, LA, USA" },
  { role: "Expert Member, Dean’s Data Science & Artificial Intelligence Initiative, Celia Scott Weatherhead School of Public Health and Tropical Medicine, New Orleans, LA, USA" },
  { role: "Member, Doctoral Admission Committee, Department of Biostatistics and Data Science, Celia Scott Weatherhead School of Public Health and Tropical Medicine, New Orleans, LA, USA" },
  { role: "Delta Omega Department Representative, Celia Scott Weatherhead School of Public Health and Tropical Medicine, Tulane University, New Orleans, LA, USA" },
  { role: "Departmental Representative, PMAC, Tulane University, New Orleans, LA, USA" },
  { period: "2023 – 2024", role: "Director, Statistical Consulting Center, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2023", role: "Member, University Academic Integrity Appeals Committee, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2023", role: "Elected Member, College of STEM Research & Faculty Development, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2023", role: "Chair, The Thirty-Fifth Annual Eastern Kentucky University Symposium in Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Ad-hoc Statistics Search Committee, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Graduate Committee, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Statistics Committee, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Publication, Recruitment, & Alumni Committee, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Endowment Committee, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Scholarship Committee, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2023", role: "Member, Wilson Endowment Review Committee, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2022 – 2023", role: "Chair, Symposium Committee, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2021 – 2022", role: "Symposium Committee Member, Department of Mathematics and Statistics, Eastern Kentucky University, Richmond, KY, USA" },
  { period: "2016 – 2017", role: "Co-chair, Next Generation Sequence Section, MCBIOS Conference, Memphis, TN, USA" },
  { period: "2016 – 2017", role: "Vice President, Midsouth Computational Biology and Bioinformatics Society, Little Rock Chapter, UAMS, AR, USA" },
];
