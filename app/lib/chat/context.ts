/* =============================================================================
   CHAT CONTEXT
   -----------------------------------------------------------------------------
   Builds the plain-text knowledge base the chat assistant is grounded in,
   assembled once at module load from the same data.tsx files every page
   renders from — so the assistant can never know more (or less) than the
   site itself says. Each formatX() covers one logical section of one data
   file, skips fields that are undefined, and never emits "undefined" or
   "[object Object]". Icons, ImageRefs, CSS classes and other layout-only
   fields are never included — they carry no information relevant to a
   question about Dr. Kakraba.

   The actual mailto: links for contact routing live in prompt.ts, not here
   (they're an instruction for the assistant to use, not background
   knowledge) — see that file.
   ========================================================================== */

import { profile, headlineMetrics, socialLinks, labSite } from "@/app/data/site";
import {
  crossCuttingLens,
  recentNews,
  affiliations,
  recruitingCta,
  heroMeta,
} from "@/app/(home)/data";
import {
  bios,
  storyParagraphs,
  positions,
  education,
  honors,
  skillGroups,
  memberships,
  beyondWork,
  mediaKit,
} from "@/app/about/data";
import {
  researchAreas,
  smartPred,
  patents,
  patentsCount,
  patentsNote,
  funding,
  fundingNote,
  researchVision,
} from "@/app/research/data";
import { publications, publicationVenues, publicationRecordNote, theses } from "@/app/publications/data";
import { softwareProjects, githubOrg, reproducibilityStatement } from "@/app/software/data";
import {
  courses,
  teachingStat,
  philosophy as teachingPhilosophy,
  guestLectures,
  studentResources,
  evaluationsNote,
  evaluations,
  courseHistory,
  mentoring,
} from "@/app/teaching/data";
import {
  talks,
  talksStat,
  newsMedia,
  globalEngagement,
  philanthropy,
  internationalMentorship,
  editorialRoles,
  editorialService,
  leadershipRoles,
} from "@/app/engagement/data";
import { studentNote } from "@/app/contact/data";

/* ---------------------------------------------------------- site.tsx --- */

function formatProfile(): string {
  const lines = [
    `${profile.displayName}, ${profile.credential}`,
    ...profile.titles,
    profile.institution,
    `Tagline: ${profile.tagline}`,
    profile.pronouns ? `Pronouns: ${profile.pronouns}` : undefined,
    `Languages: ${profile.languages.join(", ")}`,
    `Office: ${profile.office.building}, ${profile.office.street}, ${profile.office.city}`,
    `CV: ${profile.cv.href} (last updated ${profile.cv.updated})`,
    `The research group (Kakraba Research Group, ${labSite.href}) is a separate site covering lab people, alumni and "Join the Lab" — link out to it rather than describing lab members.`,
  ].filter((line): line is string => Boolean(line));
  return `## PROFILE\n${lines.join("\n")}`;
}

function formatMetrics(): string {
  const lines = headlineMetrics.map((m) => {
    const value = `${m.prefix ?? ""}${m.value}${m.suffix ?? ""}`;
    const note = m.note ? ` (${m.note})` : "";
    return `- ${m.label}: ${value}${note} — as of ${m.asOf}`;
  });
  return `## METRICS AT A GLANCE\n${lines.join("\n")}`;
}

function formatSocialLinks(): string {
  const lines = socialLinks.map((s) => `- ${s.label}: ${s.href}`);
  return `## PROFILE & SOCIAL LINKS\n${lines.join("\n")}`;
}

/* ---------------------------------------------------------- home data --- */

function formatHomeHighlights(): string {
  const lines = [
    `Cross-cutting theme — ${crossCuttingLens.title}: ${crossCuttingLens.body}`,
    "",
    "Recent news:",
    ...recentNews.map((n) => `- ${n.date}: ${n.title} — ${n.excerpt}`),
    "",
    "Affiliations:",
    ...affiliations.map((a) => `- ${a.name}`),
    "",
    `Recruiting: ${recruitingCta.text} See ${recruitingCta.href}`,
    `Availability line: ${heroMeta.availability}`,
  ];
  return `## HOMEPAGE HIGHLIGHTS\n${lines.join("\n")}`;
}

/* --------------------------------------------------------- about data --- */

function formatBio(): string {
  // Only the long bio, per the brief.
  const longBio = bios.find((b) => b.id === "long");
  const text = longBio ? longBio.paragraphs.join("\n\n") : "";
  return `## BIOGRAPHY\n${text}`;
}

function formatStory(): string {
  return `## CAREER STORY\n${storyParagraphs.join("\n\n")}`;
}

function formatPositions(): string {
  const lines = positions.map((p) => {
    const status = p.current ? "current" : "previous";
    const desc = p.description ? ` — ${p.description}` : "";
    return `- ${p.title}, ${p.organisation} (${p.period}, ${status})${desc}`;
  });
  return `## POSITIONS\n${lines.join("\n")}`;
}

function formatEducation(): string {
  const lines = education.map((d) => {
    const institutions = [d.institution, d.secondInstitution].filter(Boolean).join(" & ");
    const note = d.note ? `, ${d.note}` : "";
    const thesis = d.thesis
      ? ` Thesis/Dissertation: "${d.thesis.title}"${d.thesis.advisor ? `, advised by ${d.thesis.advisor}` : ""}.`
      : "";
    return `- ${d.degree} in ${d.field}, ${institutions}, ${d.year}${note}.${thesis}`;
  });
  return `## EDUCATION\n${lines.join("\n")}`;
}

function formatHonors(): string {
  const lines = honors.map((h) => {
    const note = h.note ? ` — ${h.note}` : "";
    return `- ${h.title}, ${h.organisation} (${h.year})${note}`;
  });
  return `## HONORS & AWARDS\n${lines.join("\n")}`;
}

function formatSkills(): string {
  const skillLines = skillGroups.map((g) => `- ${g.label}: ${g.items.join(", ")}`);
  const membershipLine = `Memberships: ${memberships.join(", ")}`;
  return `## SKILLS & MEMBERSHIPS\n${skillLines.join("\n")}\n${membershipLine}`;
}

function formatBeyondWork(): string {
  return `## BEYOND WORK\n${beyondWork.intro}`;
}

function formatMediaKit(): string {
  const lines = [
    mediaKit.intro,
    mediaKit.terms,
    "Speaking topics:",
    ...mediaKit.speakingTopics.map((t) => `- ${t}`),
  ];
  return `## MEDIA KIT\n${lines.join("\n")}`;
}

/* ------------------------------------------------------ research data --- */

function formatResearchAreas(): string {
  const blocks = researchAreas.map((a) => {
    const outputs = a.keyOutputs
      .map((o) => `${o.label}${o.kind === "in-review" ? " (in review, unpublished)" : ""}`)
      .join("; ");
    return [
      `### ${a.number}. ${a.title}`,
      a.summary,
      `Problem: ${a.problem}`,
      `Approach: ${a.approach}`,
      `Key outputs: ${outputs}`,
      `What's next: ${a.whatsNext}`,
      `Topics: ${a.topics.join(", ")}`,
    ].join("\n");
  });
  return `## RESEARCH AREAS\n${blocks.join("\n\n")}`;
}

function formatSmartPred(): string {
  const lines = [
    `${smartPred.name} — ${smartPred.tagline}`,
    smartPred.description,
    `Quote from Dr. Kakraba: "${smartPred.quote.text}"`,
    `Result: ${smartPred.result.value} ${smartPred.result.label}`,
    `Partner: ${smartPred.partner.name} — ${smartPred.partner.description}`,
    `Collaborators: ${smartPred.collaborators.join(", ")}`,
    `Page: /research/smart-pred`,
  ];
  return `## SMART-PRED\n${lines.join("\n")}`;
}

function formatPatents(): string {
  const lines = patents.map(
    (p) => `- ${p.title} (${p.status}, ${p.filingBody}, ref: ${p.number}): ${p.description}`,
  );
  return `## PATENTS\nHeadline count: ${patentsCount}. ${patentsNote}\n${lines.join("\n")}`;
}

function formatFunding(): string {
  const lines = funding.map((f) => {
    const who = [f.role, f.pi, f.sponsor].filter(Boolean).join(", ");
    return `- [${f.status}] ${f.title} — ${who} (${f.period}): ${f.description}`;
  });
  return `## FUNDING\n${lines.join("\n")}\n${fundingNote}`;
}

function formatResearchVision(): string {
  return `## RESEARCH VISION\n${researchVision.paragraphs.join("\n\n")}`;
}

/* -------------------------------------------------- publications data --- */

function formatPublications(): string {
  const lines = publications.map(
    (p) => `- "${p.title}" — ${p.journal}, ${p.year}. Why it matters: ${p.whyItMatters} (/publications#${p.id})`,
  );
  return `## FEATURED PUBLICATIONS\n${lines.join("\n")}`;
}

function formatPublicationVenues(): string {
  const lines = publicationVenues.map((v) => {
    const note = v.note ? ` — ${v.note}` : "";
    return `- ${v.journal}${note}`;
  });
  return `## OTHER PUBLICATION VENUES\n${publicationRecordNote}\n${lines.join("\n")}`;
}

function formatTheses(): string {
  const lines = theses.map(
    (t) => `- "${t.title}" — ${t.degree}, ${t.institution}, ${t.year}${t.advisor ? `, advised by ${t.advisor}` : ""}`,
  );
  return `## THESES\n${lines.join("\n")}`;
}

/* ----------------------------------------------------- software data --- */

function formatSoftware(): string {
  const lines = softwareProjects.map((p) => `- ${p.name}: ${p.description}`);
  return `## SOFTWARE & TOOLS\nGitHub organisation: ${githubOrg.name} (${githubOrg.href})\n${reproducibilityStatement}\n${lines.join("\n")}\nPage: /software`;
}

/* ----------------------------------------------------- teaching data --- */

function formatTeaching(): string {
  const current = courses.filter((c) => c.status === "current");
  const inDevelopment = courses.filter((c) => c.status === "in-development");
  const history = courses.filter((c) => c.status === "history");
  const line = (c: (typeof courses)[number]) =>
    `- ${c.code ? `${c.code}: ` : ""}${c.title} (${c.institution}, ${c.level})`;
  return [
    `## TEACHING`,
    teachingStat,
    "Current courses:",
    ...current.map(line),
    inDevelopment.length ? "New courses in development:" : undefined,
    ...inDevelopment.map(line),
    "Previously taught:",
    ...history.map(line),
  ]
    .filter((l): l is string => Boolean(l))
    .join("\n");
}

function formatTeachingPhilosophy(): string {
  return `## TEACHING PHILOSOPHY\n${teachingPhilosophy.paragraphs.join("\n\n")}`;
}

function formatGuestLectures(): string {
  const lines = guestLectures.map((g) => {
    const venue = g.venue ? `, ${g.venue}` : "";
    const date = g.date ? ` (${g.date})` : "";
    return `- ${g.title}${venue}${date}`;
  });
  return `## GUEST LECTURES\n${lines.join("\n")}`;
}

function formatMentoring(): string {
  return `## MENTORING & STUDENT RESOURCES\n${mentoring.paragraph}\n${studentResources.intro}`;
}

function formatCourseHistory(): string {
  const blocks = courseHistory.map((h) => {
    const lines = h.rows.map((r) => `- ${r.semester} ${r.year}: ${r.code} ${r.title} (${r.level}, ${r.credits} cr)`);
    return `${h.institution} (${h.period}):\n${lines.join("\n")}`;
  });
  return `## COURSES TAUGHT\n${blocks.join("\n\n")}`;
}

function formatEvaluations(): string {
  const blocks = evaluations.map((t) => {
    const lines = t.rows.map(
      (r) => `- ${r.code} ${r.title}, ${r.semester}: ${r.percent}%${r.score ? ` (${r.score})` : ""}`,
    );
    return `${t.institution} — ${t.instrument}; ${t.measure}:\n${lines.join("\n")}`;
  });
  return `## STUDENT EVALUATIONS\n${evaluationsNote}\n${blocks.join("\n\n")}`;
}

function formatPhilanthropyAndMentorship(): string {
  const highlights = philanthropy.highlights.map((h) => `- ${h.value}: ${h.label} (${h.detail})`);
  const placements = internationalMentorship.placements.map(
    (m) => `- ${m.year}: ${m.program}, ${m.institution}`,
  );
  return [
    "## PHILANTHROPY",
    ...philanthropy.paragraphs,
    ...highlights,
    "Sponsored students and beneficiaries are not named publicly.",
    "",
    "## INTERNATIONAL MENTORSHIP",
    ...internationalMentorship.paragraphs,
    internationalMentorship.placementsIntro,
    ...placements,
  ].join("\n");
}

/* --------------------------------------------------- engagement data --- */

function formatTalks(): string {
  const lines = talks.map((t) => {
    const date = t.date ? ` (${t.date})` : "";
    return `- ${t.type}: ${t.title}, ${t.venue}${date}`;
  });
  return `## TALKS & KEYNOTES\n${talksStat}\n${lines.join("\n")}`;
}

function formatNews(): string {
  const lines = newsMedia.map((n) => `- ${n.outlet}, ${n.date}: ${n.headline} — ${n.excerpt}`);
  return `## NEWS & MEDIA\n${lines.join("\n")}`;
}

function formatGlobalEngagement(): string {
  const lines = [
    `Role: ${globalEngagement.role}`,
    globalEngagement.intro,
    `Partner institutions: ${globalEngagement.partners.map((p) => p.name).join(", ")}`,
    `${globalEngagement.mou.title} (${globalEngagement.mou.date}): ${globalEngagement.mou.description}`,
    globalEngagement.philanthropyNote,
  ];
  return `## GLOBAL ENGAGEMENT (GHANA & AFRICA)\n${lines.join("\n")}`;
}

function formatEditorialService(): string {
  const roleLines = editorialRoles.map((r) => `- ${r.role}, ${r.organisation} (${r.period})`);
  const leadershipLines = leadershipRoles.map(
    (r) => `- ${r.role}, ${r.organisation}${r.current ? "" : " (previous)"}`,
  );
  return [
    "## EDITORIAL & SERVICE",
    roleLines.join("\n"),
    `${editorialService.reviewCount} ${editorialService.reviewLabel}`,
    "Leadership & committee roles:",
    leadershipLines.join("\n"),
  ].join("\n");
}

/* ------------------------------------------------------- contact data --- */

function formatContact(): string {
  return `## CONTACT NOTES\nDirect email: ${profile.email}\nFor prospective students: ${studentNote}`;
}

/* ============================================================== build === */

export const siteContext: string = [
  formatProfile(),
  formatMetrics(),
  formatSocialLinks(),
  formatHomeHighlights(),
  formatBio(),
  formatStory(),
  formatPositions(),
  formatEducation(),
  formatHonors(),
  formatSkills(),
  formatBeyondWork(),
  formatMediaKit(),
  formatResearchVision(),
  formatResearchAreas(),
  formatSmartPred(),
  formatPatents(),
  formatFunding(),
  formatPublications(),
  formatPublicationVenues(),
  formatTheses(),
  formatSoftware(),
  formatTeaching(),
  formatTeachingPhilosophy(),
  formatGuestLectures(),
  formatMentoring(),
  formatCourseHistory(),
  formatEvaluations(),
  formatPhilanthropyAndMentorship(),
  formatTalks(),
  formatNews(),
  formatGlobalEngagement(),
  formatEditorialService(),
  formatContact(),
].join("\n\n");
