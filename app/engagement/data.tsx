/* =============================================================================
   ENGAGEMENT PAGE DATA
   Source: Kakraba-Website-Informations.docx. Talk venues, news items,
   partnership facts, the philanthropy line and the service list are drawn
   from that document; see app/data/site.tsx for the general sourcing note.
   No video is embedded for the EKU Spark Talk because the source document
   names the talk but gives no video URL — inventing one would misrepresent
   it.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

export type TalkType = "Keynote" | "Invited talk" | "Grand rounds" | "Conference talk" | "Panel";

export type Talk = {
  title: string;
  venue: string;
  /** ISO date where the source document gives a year; omitted otherwise. */
  date?: string;
  type: TalkType;
  pinned?: boolean;
};

export const talks: Talk[] = [
  {
    title: "Keynote address",
    venue: "KNUST 11th Biennial Scientific Conference",
    date: "2025",
    type: "Keynote",
    pinned: true,
  },
  {
    title: "Keynote address",
    venue: "Louisiana Department of Health AI Symposium",
    date: "2026",
    type: "Keynote",
    pinned: true,
  },
  {
    title: "Medical Grand Rounds",
    venue: "Tulane University",
    date: "2024",
    type: "Grand rounds",
    pinned: true,
  },
  {
    title: "Invited talk",
    venue: "AfriQAN / Association of African Universities (AAU)",
    date: "2024",
    type: "Invited talk",
    pinned: true,
  },
  {
    title: "Beyond the Algorithm",
    venue: "EKU Spark Talk",
    type: "Invited talk",
    pinned: true,
  },
  {
    title: "Conference talk",
    venue: "MCBIOS Annual Conference",
    type: "Conference talk",
  },
  {
    title: "Panel talks",
    venue: "University of Ghana, University of Cape Coast, KNUST and Ensign Global University",
    type: "Panel",
  },
];

export const talksStat =
  "59 presentations overall (keynote, invited, panel, contributed and student poster).";

export type NewsMedia = {
  outlet: string;
  headline: string;
  date: string;
  excerpt: string;
};

export const newsMedia: NewsMedia[] = [
  {
    outlet: "Tulane / CAIDS",
    headline: "Tulane professor creates AI-driven SMART-pred platform that aims to transform public health surveillance",
    date: "2026-03",
    excerpt:
      "\"SMART-pred represents a new model for public health… AI-driven, explainable, affordable and accessible to everyone.\" Covers the Louisiana Department of Health collaboration and the platform's 91% test accuracy in a JMIR Aging case study.",
  },
  {
    outlet: "Tulane",
    headline: "How to become a leader in public health AI",
    date: "2025-11",
    excerpt: "Feature coverage of his approach to explainable, open AI for public health.",
  },
  {
    outlet: "Tulane",
    headline: "AI Research Symposium: Demystifying AI in Public Health",
    date: "2025-09-05",
    excerpt:
      "Coverage of the symposium he co-organized: 9 invited talks, 3 panel sessions, over 100 on-site attendees, 35+ virtual attendees and 18 student poster entrants.",
  },
  {
    outlet: "KNUST International Programmes Office",
    headline: "Partnerships and MOUs: Tulane–KNUST memorandum of understanding",
    date: "2025-07-09",
    excerpt:
      "Recorded after a Tulane delegation's visit to KNUST on July 9, 2025, supporting the Tulane–KNUST MoU signed in 2025.",
  },
];

export const globalEngagement = {
  intro:
    "He serves as Tulane's University Liaison for Global Engagement with KNUST, Ensign Global University, the University of Cape Coast and the University of Ghana.",
  role: "University Liaison for Global Engagement",
  partners: [
    { name: "Kwame Nkrumah University of Science and Technology (KNUST)" },
    { name: "Ensign Global University" },
    { name: "University of Cape Coast" },
    { name: "University of Ghana" },
  ],
  mou: {
    title: "Tulane–KNUST Memorandum of Understanding",
    date: "2025",
    description:
      "Signed after a Tulane delegation's visit to KNUST on July 9, 2025, recorded by KNUST's International Programmes Office.",
  },
  // Verbatim from the source document.
  philanthropyNote:
    "Committed to expanding access to higher education in Ghana, including personally supporting students' university studies and community health fundraising.",
  galleryImages: [
    { src: null, alt: "University partnership visit in Ghana" },
    { src: null, alt: "Delegation visit marking the Tulane–KNUST memorandum of understanding" },
    { src: null, alt: "Delivering the keynote address at the KNUST 11th Biennial Scientific Conference" },
  ] satisfies ImageRef[],
};

export type EditorialRole = {
  role: string;
  organisation: string;
  period: string;
};

export const editorialRoles: EditorialRole[] = [
  { role: "Associate Editor", organisation: "JMIR Aging", period: "2026 – present" },
  { role: "Associate Editor", organisation: "Scientific Reports", period: "2026 – present" },
];

export const editorialService = {
  reviewCount: 47,
  reviewLabel: "ORCID-verified reviews across 16 journals (2024–2026)",
};

export type LeadershipRole = {
  role: string;
  organisation: string;
  current: boolean;
};

export const leadershipRoles: LeadershipRole[] = [
  { role: "WSPH representative, AI Literacy committee", organisation: "Tulane University", current: true },
  { role: "Director, Areas of Specialization", organisation: "Tulane University", current: true },
  { role: "Director, Graduate Biostatistics Certificate Program", organisation: "Tulane University", current: true },
  { role: "University Liaison for Global Engagement", organisation: "Tulane University", current: true },
  { role: "Member, Dean's Research Committee", organisation: "Tulane University", current: true },
  { role: "Member, Curriculum Committee", organisation: "Tulane University", current: true },
  { role: "Expert member, Dean's Data Science & AI Initiative", organisation: "Tulane University", current: true },
  {
    role: "Faculty lead, Biostatistics & Data Science Seminar Series",
    organisation: "Tulane University",
    current: true,
  },
  {
    role: "Co-organizer, \"Demystifying AI in Public Health\" symposium",
    organisation: "Tulane University",
    current: true,
  },
  { role: "Director, Statistical Consulting Center", organisation: "Eastern Kentucky University", current: false },
  { role: "Chair, Math/Statistics Symposium", organisation: "Eastern Kentucky University", current: false },
];
