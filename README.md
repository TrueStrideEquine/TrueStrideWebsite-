# TrueStride Equine

Foundational project setup for the TrueStride Equine website. The planned routes are minimal entry points and do not yet contain website designs or features.

## Stack

- Next.js App Router and React
- TypeScript with strict checking
- Tailwind CSS
- ESLint and Prettier
- npm

## Prerequisites

- Node.js 22 or later
- npm 10 or later

## Install and run

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the application.

## Quality checks and production

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run start
```

Use `npm run format` to apply Prettier formatting.

## Source directories

- `src/app/`: Routes, root layout, metadata, and global CSS.
- `src/components/`: Reserved for shared UI, layout, and section components.
- `src/features/`: Reserved for page-specific modules.
- `src/hooks/`, `src/lib/`, `src/config/`, `src/constants/`, `src/types/`, `src/data/`, and `src/styles/`: Reserved for shared hooks, utilities, configuration, constants, types, content data, and additional styles.
- `public/`: Static assets organized by purpose.
- `tests/`: Reserved for future tests.

## Planned routes

`/`, `/our-world`, `/ts-01`, `/journey`, `/philosophy`, and `/contact`.
