# Frontend Architecture

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS, ESLint, Prettier. Use npm unless the repository already uses another package manager. Follow official setup for the installed Tailwind major version; do not mix v3/v4 patterns.

## Structure

```text
public/
  images/{brand,horses,vehicles,lifestyle}/
  icons/
  fonts/
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    our-world/page.tsx # legacy fragment redirect
    ts-01/page.tsx # legacy fragment redirect
    journey/page.tsx # legacy fragment redirect
    philosophy/page.tsx # legacy fragment redirect
    contact/page.tsx # legacy fragment redirect
  components/
    ui/
    layout/
    sections/
    shared/
  features/
    home/ # single-page composition and hero
    our-world/ # Our World section
    ts-01/ # TS-01 section
    journey/ # Journey section
    philosophy/ # Philosophy section
    contact/ # Contact section and enquiry form
  hooks/
  lib/
  config/
  constants/
  types/
  data/
  styles/
tests/
```

## Responsibilities

- `app/`: routes, metadata, root layout, global stylesheet. Keep route files thin.
- `components/ui/`: generic primitives.
- `components/layout/`: header, navigation, mobile menu, footer, containers.
- `components/sections/`: reusable cross-page sections.
- `components/shared/`: reusable components not covered above.
- `features/<feature>/`: focused section components, content, and logic used by the homepage.
- `hooks/`: reusable React hooks.
- `lib/`: pure utilities and integration clients.
- `config/`: non-secret app configuration.
- `constants/`: stable constants.
- `types/`: shared TypeScript types.
- `data/`: structured content when useful; avoid needless abstraction.
- `styles/`: extra styles only when needed; global entry remains `app/globals.css`.
- `public/`: static assets, not TS/TSX components.
- `tests/`: tests and helpers when a test runner is chosen.

## Conventions

Use `@/*` for `src/*`. Prefer Server Components; use `"use client"` only for genuine interactivity/browser APIs. Keep components focused and route files composition-oriented. Avoid unnecessary barrel files, empty placeholder components, premature abstractions, global state, and dependencies.
