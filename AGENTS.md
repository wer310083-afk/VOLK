# AGENTS.md

## Project overview
This repo is a small static landing page for an online Quran learning service. The app is served directly from HTML/CSS and does not use a framework, bundler, or application runtime.

## Key files
- `index.html` — the full landing page markup and embedded styles.
- `package.json` — currently only declares the `swagger-ui-express` dependency; there are no build or test scripts.
- `book/` — likely supporting content or assets; treat it as static content unless a specific need is identified.

## Working conventions
- Prefer small, direct edits to the existing HTML/CSS structure instead of introducing new tooling.
- Keep the current Russian-language marketing copy and brand tone unless the task explicitly requires a language or content change.
- Preserve the present styling patterns: sections, buttons, and spacing are already defined in the page stylesheet.
- Do not add React, Vite, TypeScript, or other project scaffolding unless the task specifically asks for it.
- Keep changes focused on the static page and avoid unrelated refactors.

## Local validation
Because this is a static website, there is no automated test suite or dev server script in the repo.

Typical ways to preview locally:
- `python -m http.server 8000`
- `npx serve .`

Then open the local URL in a browser to verify layout and content changes.

## When making edits
- Update markup and styles in `index.html` first; keep selectors and class names consistent with the existing page.
- If a visual adjustment is needed, prefer modifying the existing CSS rules rather than creating a brand-new styling system.
- Verify that links, buttons, and layout remain functional in a browser after changes.

## Constraints
- The repo is intentionally lightweight; do not assume a build pipeline exists.
- Avoid adding heavy dependencies or documentation that duplicates the app itself.
- Keep agent actions consistent with a simple static-site workflow.
