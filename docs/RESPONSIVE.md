# Responsive Design

## Principle
Design intentionally for each viewport; do not merely shrink desktop layouts. Preserve hierarchy and premium restraint while simplifying composition.

## Targets
320–374px small mobile; 375–767px mobile; 768–1023px tablet; 1024–1439px desktop; 1440px+ wide desktop. Use Tailwind breakpoints but test intermediate widths.

## Rules
- Mobile: compact accessible menu; horse-first hero; readable text; never cover horse’s face; stack split layouts deliberately; comfortable line lengths; touch targets ideally ≥44×44px; vertical journey steps; no horizontal overflow; simple labelled forms.
- Tablet: reflow layouts before columns feel cramped; preserve image crop and whitespace.
- Desktop: cinematic imagery and editorial splits; max-width text containers; avoid disconnected oversized gaps.
- Images: responsive sizing, deliberate crops/object-position, reserved aspect ratios to prevent layout shift.
- Respect reduced-motion preferences.

## Validate
Test 320, 390, 768, 1024, 1280, and 1440px widths. Check navigation, wrapping, image crop, CTA reachability, forms, overflow, and reduced motion.
