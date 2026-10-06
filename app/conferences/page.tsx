import type { Metadata } from "next";

import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { CTABand } from "../components/ui/CTABand";
import { PresentationList } from "../components/publications/PresentationList";
import { presentations } from "../publications/conferences";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Every conference presentation by Samuel Kakraba, Ph.D., 2015–2026: keynotes, invited talks, panels, workshops and mentored student posters.",
  alternates: { canonical: "/conferences" },
};

export default function ConferencesPage() {
  const years = presentations.map((p) => p.year);
  const stats = [
    { value: String(presentations.length), label: "Presentations" },
    {
      value: String(presentations.filter((p) => p.category !== "poster").length),
      label: "Talks, keynotes, panels & workshops",
    },
    { value: String(presentations.filter((p) => p.category === "poster").length), label: "Posters" },
    { value: `${Math.min(...years)}–${Math.max(...years)}`, label: "Years active" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Conferences"
        title="Conference"
        gradientWord="presentations."
        lede="Keynotes, invited talks, panels, workshops and the student posters he has mentored, from the CV's full presentation record."
      >
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-line bg-surface p-4">
              <dt className="mt-1 text-[0.8125rem] text-muted">{s.label}</dt>
              <dd className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <Section id="presentations" spacing="lg">
        <PresentationList presentations={presentations} filterable />
      </Section>

      <CTABand />
    </>
  );
}
