# AGENTS.md

DJ Buba EPK — a single-page electronic press kit for DJ Buba (Koh Samui).

## Layout

- `src/` — TanStack Start app: React 19, Tailwind v4, file-based routing (`src/routes/`, conventions in `src/routes/README.md`). `src/server.ts` wraps the SSR handler so thrown errors render a real error page instead of a bare 500.
- `public/epk/` — the standalone static EPK page (`index.html` + `images/`). This is what GitHub Pages publishes.
- `.github/workflows/pages.yml` — republishes `public/epk` to GitHub Pages on every push to `main`.

## Commands

- `npm install` — install dependencies (Node 22+; `bun install` also works)
- `npm run dev` — dev server on http://localhost:8080
- `npm run build` — production build; Nitro emits a self-contained server bundle in `.output/`
- `npm run lint` / `npm run format`

Prefer editing the static page and pushing — GitHub Pages rebuilds itself, no local build needed.
