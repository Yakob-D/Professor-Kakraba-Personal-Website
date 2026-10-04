import type { Metadata } from "next";

import { Hero } from "../components/home/Hero";
import { Intro } from "../components/home/Intro";
import { AtAGlance } from "../components/home/AtAGlance";
import { ResearchAreas } from "../components/home/ResearchAreas";
import { FeaturedWork } from "../components/home/FeaturedWork";
import { SelectedPublications } from "../components/home/SelectedPublications";
import { RecentNews } from "../components/home/RecentNews";
import { Affiliations } from "../components/home/Affiliations";
import { CTABand } from "../components/ui/CTABand";
import { profile, siteMeta } from "../data/site";

export const metadata: Metadata = {
  // The root layout's `default` title is already the full form; keep it.
  title: {
    absolute: `${siteMeta.title} — ${profile.titles[0]}`,
  },
  description: siteMeta.description,
  alternates: { canonical: "/" },
};

/** Homepage. Sections follow §3 of the plan, top to bottom. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <AtAGlance />
      <ResearchAreas />
      <FeaturedWork />
      <SelectedPublications />
      <RecentNews />
      <Affiliations />
      <CTABand />
    </>
  );
}
