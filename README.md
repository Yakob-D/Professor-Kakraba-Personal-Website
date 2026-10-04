# Samuel Kakraba, Ph.D. — Personal Website

Dr. Samuel Kakraba's personal portfolio site: a Next.js (App Router) build covering Home, About,
Research, Publications, Software & Tools, Teaching, Engagement and Contact. Built against
`plan/kakraba-website-plan.md`; content was then rebuilt to strictly match
`plan/kakraba-website-informations.txt` (a research-backed website blueprint), with lab/mentorship
content kept on the separate Kakraba Research Group site by direction.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in CONTACT_API_URL once a backend exists
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

## Contact form backend

`ContactForm` (`app/components/contact/ContactForm.tsx`) POSTs to this app's own
`/api/contact` route (`app/api/contact/route.ts`), never to a backend directly. That route
validates the payload, then forwards it as JSON to whatever `CONTACT_API_URL` points at and
relays the response back unchanged. Until `CONTACT_API_URL` is set, it correctly returns 503
("the contact backend isn't connected yet") instead of faking success — see that file's
header comment for the full request/response contract and how to wire in the real backend
when it exists. If the backend ends up living inside this Next.js app instead of as a separate
service, replace the forwarding call in that one file with the real logic directly.

## Notes for the next pass

- Real photography replaces the `src: null` placeholders in each `data.tsx` (speaking, teaching,
  Ghana visits — the headshot itself is already a real photo, self-hosted in
  `public/images/headshots/`) — drop files into `public/images/*` and update the paths.
- His email (`app/data/site.tsx`) is inferred from Tulane's standard faculty convention, not
  confirmed — verify it. Google Scholar, ORCID, LinkedIn, ResearchGate and GitHub (KakrabaLab)
  are his real profile links; a personal GitHub (as opposed to the lab org) isn't set.
- SMART-Pred's live demo link (`app/research/data.tsx`) is still a placeholder URL.
