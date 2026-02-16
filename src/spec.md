# Specification

## Summary
**Goal:** Refine the existing Home page visuals and motion into a cohesive dark luxury look, without changing layout/structure, component hierarchy, routing, or any text/content, and without affecting non-Home pages.

**Planned changes:**
- Apply Home-route-only styling so only the Home page receives the new dark luxury theme and motion refinements.
- Replace all light/white Home backgrounds with a smooth layered deep-navy background blend across sections (#0b1622 → #0f1f2f → #0b1622) with no hard transitions.
- Enhance the Hero for readability while keeping the existing hero image: add a dark overlay (rgba(0,0,0,0.55)), set headline color to #f5f2ea with subtle shadow, and add very subtle parallax that respects prefers-reduced-motion.
- Tune Hero entrance animations: headline fade + slight rise (900ms ease-out), subtext delayed 150ms, buttons delayed 300ms; disable animations under prefers-reduced-motion.
- Refine the Crafting Quality section: keep dark blended background, constrain text container to 680px, increase vertical padding, add a thin centered gold divider line with subtle width animation, and add scroll-reveal (fade + ~30px rise), respecting prefers-reduced-motion (optional subtle radial glow behind heading).
- Update Feature Cards to premium glass styling: rgba(20,30,45,0.65) background, 12px backdrop blur, 1px border rgba(212,175,55,0.15); hover lift (-6px), stronger gold border, subtle glow shadow; stagger entrance by 0.15s per card and respect prefers-reduced-motion.
- Improve the divider between Feature Cards and CTA and the CTA styling: add a very thin, low-opacity centered gold glow line; keep CTA background dark; add subtle warm radial glow behind CTA heading; set CTA button gold to #c9a14a with hover glow + scale ~1.03 and smooth 250ms transition (motion minimized/disabled under prefers-reduced-motion as needed).
- Make the Home footer fully dark luxury (Home-only): background #08121a, top border 1px solid rgba(212,175,55,0.15), body text #b8b8b8, headings soft gold; ensure non-Home footer remains unchanged.

**User-visible outcome:** The Home page looks and feels more premium and readable with a cohesive deep-navy layered background, subtle luxury motion, glass feature cards, refined CTA, and a fully dark footer—while all content, layout, and non-Home pages remain unchanged.
