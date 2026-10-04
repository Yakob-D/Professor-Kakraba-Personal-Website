# Samuel Kakraba, Ph.D. — Personal Website

Dr. Samuel Kakraba's personal portfolio site: a Next.js (App Router) build covering Home, About,
Research, Publications, Software & Tools, Teaching, Engagement and Contact. Built against
`plan/kakraba-website-plan.md`; content was then rebuilt to strictly match
`plan/kakraba-website-informations.txt` (a research-backed website blueprint), with lab/mentorship
content kept on the separate Kakraba Research Group site by direction.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- Every route is its own folder under `app/` (`app/about/page.tsx`, `app/research/page.tsx`, …).
  The homepage lives in the `app/(home)/` route group so it still resolves to `/`.
- Each page folder has a sibling `data.tsx` holding every piece of copy and every typed object
  that page renders — titles, bios, publications, talks, etc. Nothing is hard-coded in JSX.
- Shared, site-wide data (nav, profile, footer links, headline metrics) lives in `app/data/site.tsx`.
- Reusable UI lives in `app/components/ui/`; page-specific components live in
  `app/components/<section>/`.

### Backend-readiness

Every `data.tsx` export is a plain, JSON-serialisable value with an exported TypeScript type.
When the CMS backend exists, each `export const x = [...]` becomes `export async function
getX()` returning the same shape — no component should need to change. Images go through
`ImageRef` (`app/data/site.tsx`) and the `<Figure>` / `<Portrait>` components: set `src: null`
and a designed placeholder renders instead of a broken image, so content can ship before photos
do.

## Design system

One set of CSS custom properties in `app/globals.css` drives every colour, gradient and shadow
on the site — currently a true black-and-white palette (`--brand-*` and `--accent-*` are both
neutral grayscale ramps, R=G=B at every stop, no hue anywhere), with filled buttons rendered as
flat solid `bg-ink`/`text-bg` rather than a gradient. To re-skin the whole site, edit only the
`--brand-*` / `--accent-*` values (and, if needed, the semantic block that derives from them) at
the top of that file; every component reads from the same tokens via Tailwind's `@theme inline`
mapping.

## Fonts

Typography uses Google's own type family — **Google Sans Flex** (body), **Google Sans**
(display/headings) and **Google Sans Code** (mono) — self-hosted via `next/font/local` from the
variable `.woff2` files in `app/fonts/`. They're loaded locally rather than through
`next/font/google` because this Next.js version's Turbopack build cannot resolve
`next/font/google`'s internal fetch module (reproduces even for the default Geist font); self-
hosting sidesteps the bug and removes the runtime network dependency entirely.

## Contact page

There is deliberately no contact form or backend. `/contact` (`app/contact/page.tsx`) shows his
email directly, plus a row of `mailto:` buttons per inquiry type (`app/contact/data.tsx`) that
pre-fill the subject line (e.g. "Speaking invitation" → subject "Speaking Invitation") — zero
infrastructure, and the message always lands straight in his real inbox rather than depending on
an email-sending service, a verified domain, or a backend that doesn't exist yet. If a real form
is wanted later, `mailtoHref()` in `app/lib/utils.ts` and the `contactReasons` data are the
pieces to build on, not replace.

## Notes for the next pass

- Real photography replaces the `src: null` placeholders in each `data.tsx` (speaking, teaching,
  Ghana visits — the headshot itself is already a real photo, self-hosted in
  `public/images/headshots/`) — drop files into `public/images/*` and update the paths.
- Google Scholar, ORCID, LinkedIn, ResearchGate and GitHub (KakrabaLab) are his real profile
  links; a personal GitHub (as opposed to the lab org) isn't set.
- SMART-Pred's live demo link (`app/research/data.tsx`) is still a placeholder URL.
