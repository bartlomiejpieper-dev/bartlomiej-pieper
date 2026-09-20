# Project

Static React + TypeScript portfolio built with Vite and Tailwind CSS.
Keep the architecture appropriate for a small single-page site.

# Sources of truth

- Website copy and links: `src/content.ts`; this does not generate the CV.
- Design tokens: `src/index.css`.
- Before visual changes, read `DESIGN.md`.
- Setup, commands, deployment and CV export: `README.md`.
- CV HTML source: `cv/`; downloadable PDF: `public/`.
  The Vite build does not regenerate the PDF. Follow the consistency checks in
  README.md when changing professional information.

# Implementation

- Use `@/` imports between source modules.
- Reuse existing components and semantic design tokens.
- Keep portfolio copy out of presentation components; keep it concise and omit empty sections.
- Do not invent professional claims, dates or credentials.
- Keep download labels independent of filenames. Changing button copy must not
  rename the downloadable asset.
- Keep documentation in English and free of personal working notes.
- Update relevant documentation when changing commands, structure, workflows
  or design conventions.
- Treat `BACKLOG.md` entries as ideas, not authorization to implement them.
- Before interrupting long work, save a brief handoff in ignored `tmp/` if needed:
  current scope, completed changes, checks and remaining work. Do not record secrets.

# Code review

- Review without editing unless fixes are requested.
- Prioritize reproducible bugs, regressions and accessibility problems.
- For each finding, give severity, file and line, impact, a triggering scenario
  and a suggested fix. Separate confirmed issues from hypotheses and optional refactors.
- Check active section navigation, CV download behavior and content visibility
  during animations, including keyboard use and reduced motion.
- Avoid formatting findings already covered by automated checks.

# Verification

- After code or dependency changes, run `npm run lint` and `npm run build`.
- For UI or browser-test changes, also run `npm run test:e2e` after building.
  See README.md for browser installation and test coverage.
- For UI changes, check mobile and desktop layouts, keyboard focus,
  section navigation and the CV download against `DESIGN.md`.
- For documentation-only changes, check links and `git diff --check`.
- Report checks performed and any verification that was unavailable.

# Git

- Preserve unrelated working-tree changes.
- Commit and push only when explicitly requested.
- Use Conventional Commits: `type(scope): description`.
- Keep the subject under 72 characters and use imperative English.
- Suggest a commit after completing a logical unit of work;
  split unrelated concerns into separate commits.
