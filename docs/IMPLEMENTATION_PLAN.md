# Implementation Plan

Work in small phases and review each before proceeding.

## Phase 0 — Foundation only

Inspect and preserve workspace; initialise/adapt Next.js App Router, strict TypeScript, Tailwind; create agreed folders and minimal valid route entries; configure ESLint, Prettier, scripts, `.gitignore`, `.env.example`, README; run lint/typecheck/build. **No real UI, imagery, animations, or design system.**

## Phase 1 — Design foundations

Implement fonts and tokens from `DESIGN.md`, responsive container, spacing, typography, colour, and button foundations.

## Phase 2 — Global shell

Responsive header, transparent-to-solid scroll state, mobile navigation, footer; verify keyboard and reduced motion.

## Phase 3 — Homepage

Hero; Our World; four pillars; horse + engineering reveal; TS-01 feature; Journey; Philosophy; Contact CTA; footer.

## Phase 4 — Single-page consolidation

Compose the homepage in this order: Hero, Our World, TS-01, Journey, Philosophy, Contact, Footer. Use fragment IDs for section destinations; legacy paths redirect to the matching fragment.

## Phase 5 — Interactions/forms

Wire links and CTAs; implement scroll and subtle motion; add form validation and honest states. Do not pretend a backend exists.

## Phase 6 — QA

Test 320, 390, 768, 1024, 1280, 1440px; check accessibility, keyboard, reduced motion, images, performance, SEO, layout shift; run lint/typecheck/build. Do not claim backend or deployment works unless configured and tested.
