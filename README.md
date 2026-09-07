# Shreya Reshamwala — Portfolio

My personal portfolio, designed after Bauhaus poster art: a deep blue backdrop, a cream card, Archivo Black display type, and hand-drawn SVG compositions in the [Bauhaus color palette](https://hueatlas.com/color-palettes/bauhaus-color-palette/). Originally built from scratch in 2023 with Create React App, revamped in 2026 with Claude and migrated to Vite. Hosted on Netlify.

## Stack

- **React 19** + **TypeScript**, bundled with **Vite 7**
- **React Router 7** for client-side routing
- **Vitest** + React Testing Library for tests
- Plain CSS with custom properties for the palette — no CSS framework

## Features

- **Interactive project gallery** — every project is a shape in a geometric composition; hover a title and its shape swells (and vice versa), click either to open the details
- **Custom cursor** — a Bauhaus-red dot that inflates into a ring over anything clickable (fine-pointer devices only)
- **Duotone portrait** — the About photo is blended into the cream paper with CSS filters, no image editing
- Fully responsive, keyboard-accessible shapes, custom SVG favicon

## Running locally

Node 20 (pinned in `.tool-versions` for asdf users).

```bash
npm install
npm start        # dev server at http://localhost:3000
```

Other scripts:

```bash
npm test         # Vitest watcher (CI: npx vitest run)
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Structure

```
src/
├── pages/          # one folder per route
│   ├── Home/
│   ├── AboutMe/
│   └── Projects/   # page + ProjectDetail/ProjectIndex + project data
├── modules/        # shared components: PageNav, Follow, Cursor
├── graphics/       # all custom SVG: GeoArt, ProjectsArt, icons
├── css/            # all stylesheets; theme.css holds the shared design + palette
└── types.ts        # shared types
```

To add a project, edit `src/pages/Projects/constants.ts` — and give it a shape in `src/graphics/ProjectsArt.tsx`.
