# Samuel Kakraba, Ph.D. — Personal Website

Dr. Samuel Kakraba's personal portfolio site: a Next.js (App Router) build covering Home, About,
Research, Publications, Teaching, Engagement and Contact. See `plan/kakraba-website-plan.md` for
the full brief this was built against.

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
on the site — a deep-green brand ramp and a warm-gold accent ramp, each with a light and dark
value. To re-skin the whole site, edit only the `--brand-*` / `--accent-*` values (and, if
needed, the semantic block that derives from them) at the top of that file; every component
reads from the same tokens via Tailwind's `@theme inline` mapping.

## Fonts

Typography uses Google's own type family — **Google Sans Flex** (body), **Google Sans**
(display/headings) and **Google Sans Code** (mono) — self-hosted via `next/font/local` from the
variable `.woff2` files in `app/fonts/`. They're loaded locally rather than through
`next/font/google` because this Next.js version's Turbopack build cannot resolve
`next/font/google`'s internal fetch module (reproduces even for the default Geist font); self-
hosting sidesteps the bug and removes the runtime network dependency entirely.

## Notes for the next pass

- Real photography replaces the `src: null` placeholders in each `data.tsx` (headshot, speaking,
  teaching, Ghana visits) — drop files into `public/images/*` and update the paths.
- `ContactForm` (`app/components/contact/ContactForm.tsx`) currently validates and simulates a
  submission; wire it to a real send path (server action, email API, or the future backend) when
  one exists.
- Several external links (Google Scholar, ORCID, GitHub, the CV PDF, the lab site) are
  placeholders — see `app/data/site.tsx` and `PLACEHOLDER` markers in the `data.tsx` files.
