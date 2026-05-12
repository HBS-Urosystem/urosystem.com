# AGENTS.md

This repository is a single source of truth for two SvelteKit websites selected by `VITE_SITE`:

- `_us` -> `https://www.urosystem.com` (company site)
- `_ud` -> `https://www.urodapter.com` (product site)

Use this document as the operational guide for agentic updates.

## Current Operating Constraints

- Treat `/events`, `/hirlevel`, and `/blog` as out of service.
- Do not re-enable, redesign, or relink these routes unless the user explicitly asks.
- If a change touches navigation or sitemap-like behavior, preserve this out-of-service state.

## Quick Start

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Architecture Overview

- App framework: SvelteKit with Netlify adapter.
- Content source: local markdown frontmatter under `cms/`.
- Rendering model:
  - Catch-all page route `src/routes/[...path]/+page.svelte` renders CMS blocks.
  - Global data loader `src/routes/+layout.server.js` resolves language/path and loads content via `src/lib/utils.js`.
- Site switch:
  - `src/lib/stores.js` reads `import.meta.env.VITE_SITE` and exposes site-specific base URLs.
  - `src/lib/utils.js` uses the selected site suffix (`_us`, `_ud`) when resolving CMS pages/config.

## Repository Map

- `src/routes/`
  - `+layout.server.js`: top-level loader; language/path normalization and CMS post/config loading.
  - `+layout.svelte`: global shell (SEO/meta, analytics scripts, nav/footer/cookie UI).
  - `[...path]/`: catch-all CMS-driven pages (`contact`, `sample`, `thankyou`, etc.).
  - `api/pipedrive/+server.js`: lead intake endpoint (Pipedrive).
  - `api/shopify/+server.js`: Shopify webhook endpoint with HMAC verification.
  - `blog/+layout.svelte`: placeholder route area (currently out of service).
- `src/lib/`
  - `utils.js`: CMS post/block/config lookup and language fallback merge logic.
  - `stores.js`: runtime stores and site selection via `VITE_SITE`.
  - `sanityClient.js` + `api.js`: Sanity client/query definitions used by legacy/news routes.
  - `*.svelte`: reusable UI components.
- `cms/`
  - `pages/`: page metadata/frontmatter by section and language.
  - `blocks/`: reusable content blocks/components metadata.
  - `config/`: site/lang/nav/footer configs (`nav_us.md`, `nav_ud.md`, `langs_us.md`, `langs_ud.md`, etc.).
- `static/`: static assets.
- `build/`: generated build output.

## CMS and Routing Conventions

- CMS page matching is path-based and language-aware.
- Site-specific page variants are selected by suffix in page IDs/slugs (for example `index_us`, `index_ud`) via `src/lib/utils.js`.
- Navigation labels and structure come from `cms/config/nav_*.md` and `cms/config/footnav_*.md`.
- Language availability comes from `cms/config/langs_*.md` (plus shared `langs.md` content).

## Environment Variables

Expected runtime/build variables used by app code:

- `VITE_SITE` (`_us` or `_ud`)
- `VITE_PUBLIC_SANITY_PROJECT_ID`
- `VITE_PUBLIC_SANITY_DATASET`
- `VITE_PUBLIC_SANITY_READ_TOKEN`
- `VITE_PUBLIC_SANITY_API_VERSION`
- `PIPEDRIVE_API_TOKEN` (server-side endpoint)
- `SHOPIFY_WEBHOOK_SECRET` (server-side endpoint)

Never print secrets into logs, docs, or commits.

## Agent Editing Rules

- Prefer content/config changes in `cms/` for copy, structure, and nav updates.
- For behavior changes, trace the data flow first:
  - `src/routes/+layout.server.js` -> `src/lib/utils.js` -> `cms/`.
- Keep `_us` and `_ud` parity in mind; when changing one site variant, verify whether the other variant needs equivalent updates.
- Avoid touching API endpoints unless the task is backend/integration specific.
- Treat out-of-service routes as frozen unless explicitly instructed.

## Verification Checklist For Agent Changes

- Confirm correct site mode with `VITE_SITE`.
- Run `npm run build` for structural/content edits.
- For route/content updates, smoke-check key pages in dev mode for both language and site variant impact.
- If touching integrations, verify endpoint behavior with safe local tests and no secret leakage.
