# Engineering Standards

## Setup
Stable compatible Next.js/React/TypeScript/Tailwind versions; strict TypeScript; ESLint; Prettier; `@/*` alias to `src/*`. Keep `.env.example` secret-free and ignore real local env files. Preserve existing repository and package manager.

## Scripts
Provide working `dev`, `build`, `start`, `lint`, `typecheck`, `format`, and `format:check` scripts as appropriate.

## Quality
Avoid `any` unless justified. Prefer Server Components. Keep dependencies minimal. Use semantic accessible HTML. Avoid premature global state, services, and abstractions. Use Next metadata APIs and appropriate image/font features. Never claim checks passed unless run.

## Performance/SEO
Optimise image sizes; avoid unnecessary client JS; add accurate titles/metadata; create `robots.ts` and `sitemap.ts` for actual routes. Do not add analytics, CMS, APIs, authentication, database, or backend services without approval.

## Verification
Run lint, typecheck, and production build at each meaningful phase. Report commands that could not run and why.
