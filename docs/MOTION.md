# Motion and Interaction

## Feel
Subtle, precise, calm, Apple-like refinement. Motion supports the story and never competes with horse photography.

## Use
Gentle hero image reveal; short opacity/transform reveals; restrained image movement on hover; smooth anchor scroll; transparent-to-solid header transition; understated button/link states; quick, clear mobile menu transition.

## Timing
Interface transitions generally 180–450ms. Use natural easing; avoid bouncy or springy movement. Larger image reveals may be slower if still subtle.

## Required behaviour
“Enter Our World” scrolls to the next section. “Discover TS-01” navigates to TS-01 or the explicitly defined TS-01 section. Header begins transparent over hero and becomes solid after scrolling past the hero threshold. Reveals never delay reading or hide content.

## Avoid
Aggressive parallax, large zooms, bounce/spin, constant movement, long blocking transitions, layout shifts, scroll hijacking, autoplay sound, or hiding information behind animation.

## Accessibility/performance
Respect `prefers-reduced-motion`; site must work without animation. Prefer CSS for simple effects. Add animation libraries only when justified.
