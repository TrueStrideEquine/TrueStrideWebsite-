# TrueStride Equine

Single-page TrueStride Equine brand website built with Next.js App Router. The homepage contains the full scrolling experience; legacy section URLs redirect to their matching homepage anchor.

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

- `src/app/`: Homepage route, legacy section redirects, root layout, metadata, and global CSS.
- `src/components/`: Shared layout and accessible media placeholder components.
- `src/features/home/`: Homepage section composition and copy.
- `src/features/contact/`: Contact form fields and local validation feedback.
- `src/hooks/`, `src/lib/`, `src/config/`, `src/constants/`, `src/types/`, `src/data/`, and `src/styles/`: Reserved for shared hooks, utilities, configuration, constants, types, content data, and additional styles.
- `public/`: Static assets organized by purpose.
- `tests/`: Reserved for future tests.

## Single-page sections

`/` includes Hero, Our World, TS-01, The Journey, Philosophy, Contact, and the footer. Header and footer links use section anchors.

`/our-world`, `/ts-01`, `/journey`, `/philosophy`, and `/contact` redirect to their corresponding section on `/`.

Set `SITE_URL` to the deployed canonical origin to populate the sitemap and robots sitemap reference. The contact form validates fields in the browser but does not transmit or store enquiries until a delivery service is configured.
