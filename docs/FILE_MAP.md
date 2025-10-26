## File Map — quick reference

This document lists the main files and folders in the project with a short description so you can quickly find where to edit features.

- `index.html` — HTML shell. App mounts into `<div id="root">`.
- `package.json` — project metadata and npm scripts (`dev`, `build`, `preview`, `lint`).
- `vite.config.js` — Vite configuration for dev/build.
- `eslint.config.js` — ESLint configuration (rules and plugins).

src/
- `src/main.jsx` — application bootstrap: imports global CSS and renders `<App />`.
- `src/App.jsx` — main application component. Contains all page sections (home, about, skills, experience, projects, achievements, contact) and navigation logic.
- `src/index.css` — global css (tailwind base + utilities/custom styles).
- `src/App.css` — additional styles used by App.
- `src/assets/` — images and static assets used in the site.

public/
- `public/` — static files served as-is (favicons, robots, etc.).

Other
- `README.md` — project overview and navigation (this file has been updated to include a quick-start and where-to-look guide).
- `docs/FILE_MAP.md` — this file (project map for quick navigation).

Notes:
- The majority of edits will happen in `src/App.jsx`. If you plan to expand the project, consider splitting `App.jsx` into smaller components under `src/components/` and adding a `src/pages/` folder for page-level composition.
