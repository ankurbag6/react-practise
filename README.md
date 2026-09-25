# react-practise

A sandbox for practising React concepts, built with [React 19](https://react.dev) and [Vite](https://vite.dev).

## Exercises

| Component | What it covers |
| --- | --- |
| [Counter](src/components/Counter.jsx) | `useState`, functional state updates, controlled inputs. Increment/decrement by a configurable step; the count never goes below 0 and the step is at least 1. |

## Getting started

Requires Node.js 20.19+ or 22.12+ (Vite 8).

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot module replacement |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Vitest in watch mode |

## Project structure

```
src/
├── main.jsx          # Entry point
├── App.jsx           # Root component; renders the current exercise
├── components/       # One component per exercise
└── assets/           # Images and icons
```

To add a new exercise, create a component in `src/components/` and render it from `App.jsx`.
