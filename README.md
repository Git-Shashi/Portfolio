# Portfolio (React + Vite)

This repository is a personal portfolio site built with React and Vite. The project already includes Tailwind CSS utilities and some ESLint configuration. The goal of this README update is to make it easy to navigate the codebase in the future.

## Quick project map

- Purpose: Personal portfolio site (single-page app with sections: Home, About, Skills, Experience, Projects, Achievements, Contact).
- Frameworks: React (v19), Vite, Tailwind CSS, Lucide icons.
- Entry point: `src/main.jsx` → `src/App.jsx`.

## Quick start (run locally)

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

## Where to look (navigation guide)

- `index.html` — static HTML shell where the React app mounts (`<div id="root">`).
- `src/main.jsx` — application bootstrap; imports global styles and mounts `<App />`.
- `src/App.jsx` — the entire single-page portfolio UI. Sections are defined using `<section id="...">` (e.g., `home`, `about`, `skills`, `experience`, `projects`, `achievements`, `contact`). Use `scrollToSection` to navigate programmatically.
- `src/index.css` & `src/App.css` — global and component-level styling. Tailwind utility classes are used widely.
- `src/assets/` — images and other static assets used by the site.
- `public/` — files served as-is (favicon, robots, etc.).
- `vite.config.js` — Vite configuration.

## Component & file map

For a more detailed file map, see `docs/FILE_MAP.md` (added to the `docs/` folder).

## Editing guidance

- To add or modify a section, edit `src/App.jsx`. Each major content block is wrapped in a `<section id="...">` element — copy the structure to add a new section.
- For styles, prefer Tailwind utility classes in JSX. For global or custom CSS animations you'll find inline `<style>` tags in `src/App.jsx` and `src/App.css`.
- Icons come from `lucide-react`. Install or update icons via npm if needed.

## Scripts (from `package.json`)

- `npm run dev` — run Vite dev server (hot reload)
- `npm run build` — build production bundle
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint

## Helpful tips

- The navigation highlights the active section by matching window scroll position to section `offsetTop` — you can adjust the scroll offset calculation in `src/App.jsx` (see `handleScroll`).
- IntersectionObserver is used to reveal sections on scroll (look for `IntersectionObserver` in `src/App.jsx`).

## Docs added

- `docs/FILE_MAP.md` — file-by-file quick map to speed future navigation.

---

If you want I can also split `src/App.jsx` into smaller components and add per-component docs, or add inline JSDoc comments for exported utilities. For now I added a high-level navigation guide and a file map under `docs/`.
