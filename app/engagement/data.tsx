/* =============================================================================
   ENGAGEMENT PAGE DATA
   Talks, news & media, global engagement (Ghana), editorial & service.
   ========================================================================== */

import type { ImageRef } from "@/app/data/site";

export type TalkType = "Keynote" | "Invited talk" | "Grand rounds" | "Conference talk" | "Panel";

export type Talk = {
  title: string;
  venue: string;
  date: string;
  type: TalkType;
  pinned?: boolean;
  videoUrl?: string;
};

export const talks: Talk[] = [
  {
    title: "Building Health Data Science Capacity in Ghana",
    venue: "KNUST, Kumasi",
    date: "2025-10-20",
    type: "Keynote",
    pinned: true,
  },
  {
    title: "SMART-Pred: Explainable AI for State Health Surveillance",
    venue: "Louisiana Department of Health AI Symposium",
    date: "2026-03-05",
    type: "Keynote",
    pinned: true,
  },
  {
    title: "Explainable AI in Clinical Risk Prediction",
    venue: "Tulane School of Medicine, Grand Rounds",
    date: "2024-09-12",
    type: "Grand rounds",
    pinned: true,
  },
  {
    title: "Bridging Data Science Across the Atlantic",
    venue: "AfriQAN / Association of African Universities (AAU)",
    date: "2024-11-08",
    type: "Invited talk",
    pinned: true,
  },
  {
    title: "Beyond the Algorithm: Trust in Clinical AI",
    venue: "Tulane CAIDS Seminar Series",
    date: "2025-02-14",
    type: "Invited talk",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Graph-Theoretic Methods in Structural Bioinformatics",
    venue: "MCBIOS Annual Conference",
    date: "2023-04-02",
    type: "Conference talk",
  },
  {
    title: "AI-QSAR for Aging-Related Drug Discovery",
    venue: "Gerontological Society of America Annual Meeting",
    date: "2025-11-15",
    type: "Conference talk",
  },
  {
    title: "Panel: Responsible AI in Global Health",
    venue: "ISCB Africa",
    date: "2025-07-22",
    type: "Panel",
  },
];

export type NewsMedia = {
  outlet: string;
  headline: string;
  date: string;
  excerpt: string;
  href?: string;
};

export const newsMedia: NewsMedia[] = [
  {
    outlet: "Tulane News",
    headline: "Kakraba named Senior Advisor at CAIDS",
    date: "2026-07-01",
    excerpt:
      "Dr. Samuel Kakraba will connect the institute's data science capacity with public health partners across Louisiana and abroad.",
  },
  {
    outlet: "Louisiana Department of Health",
    headline: "New AI tool aims to flag health risks earlier",
    date: "2026-03-05",
    excerpt:
      "SMART-Pred, developed with Tulane researchers, returns a risk score along with a plain explanation of what drove it.",
  },
  {
    outlet: "KNUST News",
    headline: "Tulane–KNUST partnership to expand health data science training",
    date: "2025-10-22",
    excerpt:
      "A new memorandum of understanding will support joint research and student exchange in biostatistics and bioinformatics.",
  },
];

export const globalEngagement = {
  intro:
    "A sizeable share of this work runs through Ghana — formal partnerships, training visits, and a role as a connector between data science programmes in the US and in West Africa.",
  partners: [
    { name: "Kwame Nkrumah University of Science and Technology (KNUST)", role: "Liaison & MoU partner" },
    { name: "University of Ghana", role: "Research partner" },
    { name: "University of Cape Coast", role: "Alma mater & research partner" },
    { name: "Ensign Global College", role: "Training partner" },
  ],
  mou: {
    title: "Tulane–KNUST Memorandum of Understanding",
    date: "2025-09-15",
    description:
      "A formal agreement supporting joint research projects, faculty exchange and graduate training in health data science.",
  },
  philanthropyNote:
    "He also supports students in Ghana directly, in ways kept private at their request.",
  galleryImages: [
    { src: null, alt: "University partnership visit in Ghana" },
    { src: null, alt: "Signing the Tulane–KNUST memorandum of understanding" },
    { src: null, alt: "Delivering the keynote address at KNUST" },
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
  reviewLabel: "Verified peer reviews completed",
  committees: [
    "Tulane SPHTM Data Science Curriculum Committee",
    "Tulane Center for Aging Seminar Committee",
  ],
  symposium: "Co-organizer, Tulane–KNUST Health Data Science Symposium (2025)",
};
