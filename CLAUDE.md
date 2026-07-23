# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Single-page personal portfolio for José Andrés Cisternas Zurita. Vite 6 + React 18 + TypeScript (strict). Live at https://josecisternas.space, hosted on AWS Amplify.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # tsc -b && vite build  →  dist/   (typecheck is part of the build)
npm run preview  # serve the production build locally
```

There is no test suite and no linter config — `npm run build` is the only verification gate. It runs `tsc -b` first, and TypeScript is strict with `noUnusedLocals` + `noUnusedParameters`, so an unused import or variable **fails the build**. Always run `npm run build` after changes.

## Content vs. UI copy — two separate stores

All user-facing text is bilingual (ES/EN) and lives in one of two places. Never hardcode Spanish/English strings inside a component.

- **`src/data.ts`** — structured CV content (skills, projects, competitions, experience, certs). Every collection is a `Record<Lang, T>`, e.g. `experience.es` / `experience.en`. Components read the active slice with `certs[lang]`. This is the file to edit to add a project, a job, a certification, etc.
- **`src/i18n.tsx`** — the i18n engine **and** all incidental UI copy (nav labels, headings, button text, the ticker string, spec-strip labels). Copy lives in the `strings` object as `{ es, en }`.

### The translation-completeness invariant

In `i18n.tsx`, `en` is declared `const en: typeof es = {…}`. This means **`en` must have exactly the same shape as `es`** — a missing or misspelled key in either language is a compile error caught by `npm run build`. When you add a new string, add it to `es` first, then to `en`; the build enforces you didn't forget one.

## How language switching works

- `main.tsx` wraps `<App>` in `<LanguageProvider>` (from `i18n.tsx`).
- Components consume two hooks: `useLang()` returns `{ lang, setLang, toggle }` (use `lang` to index into `data.ts` records); `useT()` returns the `strings` object for the current language.
- The chosen language persists to `localStorage` under `portfolio-lang` and is mirrored onto `document.documentElement.lang` (matters for SEO/accessibility). Default is `'es'`.
- The `ES | EN` toggle is the `LangToggle` component inside `Header.tsx`.

## Styling conventions

No CSS framework and no CSS modules. Styling is **inline CSS-in-JS** driven by CSS custom properties.

- Theme variables are defined in `src/index.css` `:root`: `--paper`, `--ink`, `--muted`, `--line`, `--accent`, `--grid`. Reference these (e.g. `color: 'var(--accent)'`) instead of hardcoding hex values so the "paper/ink" identity stays consistent.
- Shared style tokens (`mono`, `serif`, `maxWidth`) live in `src/tokens.ts`.
- Hover/motion **utility classes** live in `index.css` (`.hover-card`, `.btn`, `.chip`, `.contact-tile`, `.nav-link`, `.lang-seg`) and are applied via `className`. A `prefers-reduced-motion` media query there neutralizes all animation globally — don't add motion that bypasses it.
- Keyframes `marquee` (Ticker) and `blink` (status dots) are in `index.css`.

## Scroll animation

`src/components/Reveal.tsx` is the single animation primitive: an IntersectionObserver-based fade-up wrapper. Wrap a section or card in `<Reveal>`; pass `delay={n}` (ms) to stagger siblings (e.g. `delay={i * 90}` when mapping a list). Reduced-motion is handled by the global CSS rule, not in the component.

## Layout

`App.tsx` stacks the sections in fixed order: Header → Hero → Ticker → About → Featured → Projects → ExperienceSection → Certifications → Contact. `SectionLabel` renders the numbered `01 · …` dividers. Full-bleed dark bands (Featured, Contact) and tinted bands (Experience, Certifications) set their own background; the default is the paper background from `App.tsx`.

## SEO — keep these in sync

The site's Google visibility depends on several static artifacts. If you change the person's name, add routes, or restructure:

- `index.html` holds the `<title>`, meta description, Open Graph/Twitter tags, canonical URL, and a **Person JSON-LD** block (`sameAs` links to LinkedIn/GitHub). Keep the JSON-LD name/URLs accurate.
- `public/robots.txt` and `public/sitemap.xml` reference `https://josecisternas.space`. Update `sitemap.xml` `lastmod` on meaningful content changes.

## Deploy

AWS Amplify Hosting via `amplify.yml` (`npm ci` → `npm run build`, artifacts in `dist/`). A push to the connected branch triggers an automatic build + deploy — so only push when you intend to ship.
