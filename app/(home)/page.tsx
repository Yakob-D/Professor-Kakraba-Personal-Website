import type { Metadata } from "next";

import { Hero } from "../components/home/Hero";
import { AtAGlance } from "../components/home/AtAGlance";
import { ResearchAreas } from "../components/home/ResearchAreas";
import { CrossCuttingBanner } from "../components/home/CrossCuttingBanner";
import { FeaturedWork } from "../components/home/FeaturedWork";
import { RecentNews } from "../components/home/RecentNews";
import { SelectedPublications } from "../components/home/SelectedPublications";
import { Affiliations } from "../components/home/Affiliations";
import { RecruitingCta } from "../components/home/RecruitingCta";
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

/**
 * Homepage. Section order follows the source document's "Homepage Design"
 * spec exactly: Hero, impact metrics, research pillars, the cross-cutting
 * banner, the flagship tool, latest news, featured publications, "where we
 * work," the recruiting CTA, then the site-wide closing band and footer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <ResearchAreas />
      <CrossCuttingBanner />
      <FeaturedWork />
      <RecentNews />
      <SelectedPublications />
      <Affiliations />
      <RecruitingCta />
      <CTABand />
    </>
  );
}
