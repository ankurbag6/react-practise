# react-practise

A sandbox for practising React concepts, built with [React 19](https://react.dev) and [Vite](https://vite.dev).

## Exercises

Each exercise is a timed drill. The drill brief sits in a comment at the top of its component file.

| Drill | Component | What it covers | Tests |
| --- | --- | --- | --- |
| 1 | [Counter](src/components/Counter.jsx) | `useState`, functional state updates, controlled inputs. Increment/decrement by a configurable step; the count never goes below 0 and the step is at least 1. | [Counter.test.jsx](src/components/Counter.test.jsx) |
| 2 | [Details](src/components/Details.jsx) | Show/hide toggle driven by one piece of state. Conditional rendering vs. CSS `display: none`, `aria-expanded` and `aria-controls`. | [Details.test.jsx](src/components/Details.test.jsx) |
| 3 | [ProductList](src/components/ProductList.jsx) | Rendering a list from an array prop with stable keys, currency formatting, an "Out of stock" badge, an empty state and a product count. | [ProductList.test.jsx](src/components/ProductList.test.jsx) |
| 4 | [NameCard](src/components/NameCard.jsx) | Controlled text input with a live "Hello, {name}!" preview, whitespace trimming in the preview only, a 20-character limit with a counter, and a connected label. | [NameCard.test.jsx](src/components/NameCard.test.jsx) |

Shared helpers live in [src/utils/helper.js](src/utils/helper.js):

- `formatPrice(value)` formats a number as USD, e.g. `19.5` → `$19.50`.
- `trimInput(value)` trims a string and collapses repeated whitespace, e.g. `"  Ankur   Bag "` → `"Ankur Bag"`.

Both are covered by [helper.test.js](src/utils/helper.test.js).

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
| `npm test -- --run` | Run the tests once and exit |

## Project structure

```
src/
├── main.jsx          # Entry point
├── App.jsx           # Root component; renders the current exercise
├── setupTests.js     # Vitest setup (jest-dom matchers, cleanup)
├── components/       # One component (and optional test) per exercise
├── utils/            # Shared helpers
└── assets/           # Images and icons
```

`App.jsx` renders one exercise at a time. To switch exercises, comment out the current one and uncomment the one you want.

To add a new exercise, create a component in `src/components/` (with the drill brief as a comment at the top), render it from `App.jsx`, and add a `*.test.jsx` file next to it if it has tests.

## Testing

Tests use [Vitest](https://vitest.dev) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and `user-event`, running in jsdom. Test files sit next to the component they cover and are named `*.test.jsx` (or `*.test.js` for plain helpers).
