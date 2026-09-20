# Design conventions

The portfolio uses a light, text-focused layout with monospaced typography,
sharp corners, subtle borders, and a green accent for links and interactive states.

## Source of truth

`src/index.css` defines the project's color, typography, and radius tokens.
Use its semantic Tailwind utilities rather than duplicating token values here.
Tailwind classes in components define spacing and layout;
`src/App.tsx` defines the page grid.

## Typography and color

- JetBrains Mono Variable is bundled through `@fontsource-variable/jetbrains-mono`.
- Navigation and section labels use lowercase text.
- Use `text-foreground` for primary text and `text-muted-foreground` for secondary text.
- Use `bg-background` for the canvas, `bg-card` for cards, and `border-border` for borders.
- Use `text-primary` and related primary utilities for emphasis and interactive states.
- Typography utilities include `text-headline-xl`, `text-headline-lg`,
  `text-headline-md`, `text-body-lg`, `text-body-md`, and `text-label-sm`.
- The site has no dark-mode toggle. UI primitives retain their generated dark variants.

## Layout

- The header stays at the top and contains the CV download link.
- Below Tailwind's `lg` breakpoint, content appears in a single column.
- At `lg` and above, the main area uses two columns within `max-w-7xl`.
- The left column is sticky on desktop and contains the introduction, navigation,
  and contact links. The right column contains the portfolio sections.
- Side navigation is hidden below `lg`; section anchors account for the sticky header.
- The footer follows the main content.

## Components and interaction

- `src/components/layout` contains the page header, footer, and side navigation.
- `src/components/sections` contains the portfolio sections.
- `src/components/shared/EntryCard.tsx` presents both experience and education entries.
- `src/components/ui` contains the shared shadcn primitives used by the page.
- Cards use flat surfaces and subtle outlines; links and hover states use the accent.
- Framer Motion provides entrance animations and card hover movement.
  Reusable animation variants live in `src/lib/animations.ts`.
- Preserve semantic headings and accessible link labels.

## UI verification

For UI changes, perform the following checks and report any that were unavailable:

- Check viewport widths of 320, 768, 1024, and 1440px, including the transition
  to two columns.
- Long titles, links, and technology tags must wrap without clipping or horizontal
  page scrolling.
- Keyboard focus must remain visible on every interactive element.
- Section navigation must reach the intended section without hiding its heading
  behind the sticky header.
- Verify that the CV link downloads the intended PDF, that the document opens
  correctly, and that its filename remains independent of the button label.
- Use the current application as the visual baseline unless a redesign is requested.
