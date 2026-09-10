# Portfolio agent instructions

Follow the workspace guidance in `../AGENTS.md` when available. This repository is the deployable Vite + React + TypeScript portfolio.

- Keep all visible content bilingual: structured CV data in `src/data.ts`, interface copy in `src/i18n.tsx`.
- Preserve the existing paper/ink design language, CSS variables, inline-style conventions, and reduced-motion behavior.
- CV download files live in `public/` and must retain the exact `CV-Jose-Andres-Cisternas-Zurita-{ES,EN}.pdf` names.
- Run `npm run build` before committing. TypeScript strictness is part of the build.
- `main` is connected to AWS Amplify, so pushing publishes the site.
- Do not commit secrets, local environment files, LaTeX auxiliaries, or generated inspection files.
