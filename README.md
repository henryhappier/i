# henryhappier.github.io/i

Personal portfolio website for Henry Ma — Director of Engineering.

## Tech Stack

- React 19 + TypeScript
- Vite
- Framer Motion (scroll animations)
- React Icons
- CSS Modules

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

**Live site:** [henryhappier.github.io/i](https://henryhappier.github.io/i/)

## Customizing Content

All content is defined in `src/data/`:

| File | What it controls |
|------|-----------------|
| `skills.ts` | Skills grid |
| `experience.ts` | Work experience timeline |
| `projects.ts` | Project cards |
| `blog.ts` | Blog post list |

Edit these files to update your portfolio without touching any component code.

To add your photo, replace the placeholder in the About section with an `<img>` tag pointing to a file in `public/`.

To add your resume, place a `resume.pdf` in the `public/` folder.
