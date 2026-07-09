---
version: alpha
name: "Studio Moire"
colors:
  paper: "#FAF7F0"
  paper-warm: "#FFFFFF"
  ink: "#161616"
  ink-soft: "#33302B"
  mute: "#55524D"
  rule: "#3A5A40"
  accent: "#DDA15E"
  cream: "#FFF8EA"
  error: "#B3261E"
typography:
  display: { fontFamily: "Cormorant Garamond" }
  body: { fontFamily: "Albert Sans" }
rounded:
  sm: "0px"
  md: "2px"
  lg: "4px"
containers:
  prose: "42rem"
  md: "48rem"
  3xl: "72rem"
  6xl: "90rem"
googleFontsHref: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Albert+Sans:wght@400;500;600&display=swap"
---
# Studio Moire — design tokens

The YAML frontmatter above is the canonical, machine-read design spec
(format: `references/shared/DESIGN_MD.md`). This body is documentation only
and is never parsed.

## Intent

Studio Moire is a Casablanca fashion-photography studio whose signature is that
every garment is photographed beside its fabric swatch before the model steps
in. The visual language is **civic brutalist, warm documentary**: warm off-white
surfaces, strong typographic hierarchy, an asymmetric desktop grid built around
one oversized documentary image, and a strict single-column stack on mobile.
No gradients, no gloss — textured, lively, calm, bold.

## Palette mapping (approved hexes → wix roles)

- `paper` `#FAF7F0` — the warm off-white primary surface (Uniform Light: light paper, dark ink), used throughout.
- `paper-warm` `#FFFFFF` — pure-white secondary surface for cards, swatch plates, and gallery frames.
- `ink` `#161616` — primary text and dark-section fills (the approved `dark #171717` is the same near-black, served by `ink`).
- `ink-soft` `#33302B` — softened heading/secondary ink, a warm dark-neutral derived within the `mute` hue family (darker than `mute`, softer than `ink`).
- `mute` `#55524D` — muted body text and captions (approved `text-muted`).
- `rule` `#3A5A40` — **forest green**, the signature structural color: rules, hairlines, and dividers (the brand's defining detail).
- `accent` `#DDA15E` — **sand**, reserved strictly for small action highlights (links, active states, the focus ring) — never large fills.
- `cream` `#FFF8EA` — light text on the near-black dark sections (approved `on-dark`).
- `error` `#B3261E` — a warm brick red, tuned to the documentary palette and ≥4.5:1 on `paper`.

## Typography

- Display: **Cormorant Garamond** — compressed, high-impact serif for headlines (heaviest supported weight is 700).
- Body: **Albert Sans** — 400–500 for generous, readable mobile body text.

## Accessibility

Text contrast ≥4.5:1 and UI contrast ≥3:1 across the palette; the visible focus
ring uses `accent` (`#DDA15E`); motion honors `prefers-reduced-motion`. These are
rendering concerns owned downstream — recorded here for intent only.
