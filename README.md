# Developer Portfolio

A responsive, single-page portfolio with experience, technology stack, education,
certifications, contact links, and a downloadable CV.

The site helps recruiters, hiring managers, and potential clients assess
professional experience and skills and find the relevant contact information.

## Stack

React, TypeScript, Vite, Tailwind CSS, shadcn/ui, and Framer Motion.

## Requirements

Node.js 22 (at least 22.12) and npm. `.nvmrc` selects the Node 22 line for
local version managers and CI; use a current patch release.

## Local development

```sh
npm ci
npm run dev
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Type-check the site, tools and tests; build the site into `dist/`. |
| `npm run lint` | Run ESLint. |
| `npm run preview` | Preview the production build locally. |
| `npm run test:e2e` | Run Chromium tests against an existing production build. |

## Verification

Install the test browser once after `npm ci` (repeat after Playwright upgrades):

```sh
npx playwright install chromium
```

Run checks in this order:

```sh
npm run lint
npm run build
npm run test:e2e
```

The tests start their own preview server on port 4173. Keep that port free.
Four tests check page loading, runtime errors and horizontal overflow at
320 and 1440px, plus PDF download and desktop section navigation once each.
These smoke tests do not replace visual, keyboard or PDF rendering checks in
[DESIGN.md](DESIGN.md). Reports and failure traces are ignored by Git;
open the latest report with `npx playwright show-report`.

GitHub Actions runs these checks on pushes to `main` and pull requests.

## Project structure

- `src/content.ts` contains portfolio text and links.
- `src/components/` contains page sections, layout, and shared UI components.
- `src/index.css` and `DESIGN.md` define styles and design conventions.
- `public/` contains static assets, including the downloadable CV.
- `cv/` contains the standalone HTML source of the CV.
- `tests/` and `playwright.config.ts` define browser tests, type-checked through
  the existing `tsconfig.node.json` without bundling them into the site.
- `.github/workflows/ci.yml` defines CI checks.

## Working with Codex

Project instructions are maintained in [AGENTS.md](AGENTS.md).
Start a new Codex session in the repository root after updating these instructions.
Read [DESIGN.md](DESIGN.md) before visual changes; [BACKLOG.md](BACKLOG.md)
contains ideas rather than approved implementation work.

This repository does not override Codex permissions or model settings.
Use the existing Codex environment configuration for those settings.

For a first code review, ask Codex to review the current project rather than only
the latest diff. Request findings with file locations, severity, reproduction
scenarios, and suggested fixes, without editing files. Report unavailable checks
explicitly; lint and build alone do not verify the UI.

## Updating the CV

Portfolio content in `src/content.ts`, the CV HTML, and the PDF are maintained
separately and do not synchronize automatically. When changing professional
information, check the affected facts for consistency across these sources;
only edit sources within the requested scope and report any remaining discrepancies.

Edit the HTML file in `cv/`, open it in a browser, and use Print / Save as PDF.
Use A4 paper, 100% scale, no margins or browser headers/footers, and enable
background graphics. Check the print preview for clipping before exporting.
Replace the existing CV PDF in `public/`; its download link is configured in
`src/content.ts`. PDF export is manual and is not part of the Vite build.

## Deployment

Run `npm run build` and deploy `dist/` to a static hosting service.
For Vercel, use the Vite framework preset, `npm run build` as the build command,
and `dist` as the output directory.
