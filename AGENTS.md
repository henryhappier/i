# AGENTS.md

## Cursor Cloud specific instructions

This is a static React 19 + TypeScript portfolio website built with Vite 7. There are no backend services, databases, or external API dependencies.

### Running the app

Standard commands from `package.json`:

- **Dev server**: `npm run dev` (Vite, default port 5173, serves at `/i/`)
- **Build**: `npm run build` (runs `tsc -b && vite build`, output in `dist/`)
- **Lint**: `npm run lint` (ESLint)
- **Preview**: `npm run preview` (serves production build)

### Known lint issues

`npm run lint` reports 3 pre-existing errors (in `LanguageContext.tsx`, `ThemeContext.tsx`, and `Hero.tsx`) related to `react-refresh/only-export-components` and `react-hooks/set-state-in-effect`. These are pre-existing and not regressions.

### Content editing

All portfolio content lives in `src/data/` (skills, experience, projects, blog). Internationalization strings are in `src/i18n/`.
