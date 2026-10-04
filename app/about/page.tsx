import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Paragraphs } from "../components/ui/Prose";
import { Button } from "../components/ui/Button";
import { Figure } from "../components/ui/Figure";
import { CTABand } from "../components/ui/CTABand";
import { BioCard } from "../components/about/BioCard";
import { JourneyMap } from "../components/about/JourneyMap";
import { PositionsList } from "../components/about/PositionsList";
import { EducationList } from "../components/about/EducationList";
import { HonorsList } from "../components/about/HonorsList";
import { SkillsToolkit } from "../components/about/SkillsToolkit";
import { BeyondWork } from "../components/about/BeyondWork";
import { MediaKit } from "../components/about/MediaKit";
import { storyParagraphs, aboutImages } from "./data";
import { profile } from "../data/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story, career and training behind ${profile.displayName}'s work in explainable AI for public health.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="From a Ghanaian classroom to"
        gradientWord="Tulane."
        lede="The story, in his own training: mathematics teacher, graduate researcher, and now a professor who still treats explainability as a teaching problem."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={profile.cv.href} icon="download">
            Download CV
          </Button>
          <Button href="#media-kit" variant="secondary" leadingIcon="users">
            Media kit
          </Button>
        </div>
      </PageHeader>

      {/* ----------------------------------------------------------- bio */}
      <Section id="bio" spacing="lg">
        <SectionHeading eyebrow="Bio" title="In his own" gradientWord="words." />
        <Reveal delay={100} className="mt-10">
          <BioCard />
        </Reveal>
      </Section>

      {/* --------------------------------------------------- his story */}
      <Section id="story" tone="tint" className="border-y border-line">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="His story" title="Teacher first,"
              gradientWord="always." />
            <Reveal delay={100} className="mt-8">
              <Paragraphs items={storyParagraphs} />
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Figure
              image={aboutImages.teaching}
              aspect="4/5"
              placeholderIcon="graduation-cap"
            />
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------ timeline */}
      <Section id="timeline" spacing="lg">
        <SectionHeading
          eyebrow="Career timeline"
          title="Ghana to New Orleans,"
          gradientWord="one stop at a time."
          lede="Select a stop to see what happened there. This is the same route the research took — from mathematics, through biology, to public health."
        />
        <Reveal delay={120} className="mt-12">
          <JourneyMap />
        </Reveal>
      </Section>

      {/* ------------------------------------------------------ positions */}
      <Section id="positions" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Positions" title="What he does," gradientWord="where." />
        <div className="mt-10">
          <PositionsList />
        </div>
      </Section>

      {/* ------------------------------------------------------ education */}
      <Section id="education" spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Education" title="The" gradientWord="training." />
            <Reveal delay={100} className="mt-8">
              <p className="text-[0.9375rem] leading-relaxed text-muted">
                Three degrees across two countries, each one turning the mathematics a
                little further toward biology and public health.
              </p>
            </Reveal>
          </div>
          <div className="mt-2">
            <EducationList />
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- honors */}
      <Section id="honors" tone="tint" className="border-y border-line">
        <SectionHeading eyebrow="Honors & awards" title="Recognition," gradientWord="briefly." />
        <div className="mt-10">
          <HonorsList />
        </div>
      </Section>

      {/* -------------------------------------------------------- skills */}
      <Section id="skills" spacing="lg">
        <SectionHeading eyebrow="Toolkit" title="How the work gets" gradientWord="made." />
        <div className="mt-10">
          <SkillsToolkit />
        </div>
      </Section>

      {/* --------------------------------------------------- beyond work */}
      <Section id="beyond-work" tone="tint" className="border-y border-line" spacing="md">
        <SectionHeading eyebrow="Beyond work" title="Off the" gradientWord="clock." />
        <div className="mt-8">
          <BeyondWork />
        </div>
      </Section>

      {/* ------------------------------------------------------ media kit */}
      <Section id="media-kit" spacing="lg">
        <SectionHeading
          eyebrow="Media kit"
          title="For event organisers &"
          gradientWord="press."
        />
        <div className="mt-10">
          <MediaKit />
        </div>
      </Section>

      <CTABand
        title="Looking for the research group instead?"
        lede="Students, lab projects and open positions all live on the Kakraba Lab site."
        primary={{ label: "Visit the lab", href: "https://kakrabalab.org" }}
        secondary={{ label: "Contact Dr. Kakraba", href: "/contact" }}
        showLabLink={false}
      />
    </>
  );
}
