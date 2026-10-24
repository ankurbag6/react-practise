# react-practise

A sandbox for practising React concepts, built with [React 19](https://react.dev) and [Vite](https://vite.dev).

## Exercises

Each exercise is a timed drill. Where there is a written brief (and usually an implementation plan listing state, derived values and events), it sits in a comment at the top of the component file.

### Drills

| Drill | Component | What it covers | Tests |
| --- | --- | --- | --- |
| 1 | [Counter](src/components/Counter.jsx) | `useState`, functional state updates, controlled inputs. Increment/decrement by a configurable step; the count never goes below 0 and the step is at least 1. | [Counter.test.jsx](src/components/Counter.test.jsx) |
| 2 | [Details](src/components/Details.jsx) | Show/hide toggle driven by one piece of state. Conditional rendering vs. CSS `display: none`, `aria-expanded` and `aria-controls`. | [Details.test.jsx](src/components/Details.test.jsx) |
| 3 | [ProductList](src/components/ProductList.jsx) | Rendering a list from an array prop with stable keys, currency formatting, an "Out of stock" badge, an empty state and a product count. | [ProductList.test.jsx](src/components/ProductList.test.jsx) |
| 4 | [NameCard](src/components/NameCard.jsx) | Controlled text input with a live "Hello, {name}!" preview, whitespace trimming in the preview only, a 20-character limit with a counter, and a connected label. | [NameCard.test.jsx](src/components/NameCard.test.jsx) |

### More exercises

| Component | What it covers | Tests |
| --- | --- | --- |
| [EventsDemo](src/components/EventsDemo.jsx) | Event handlers: `onClick`, `onChange` for text, checkbox and select, and `onKeyDown` for the Enter key. | — |
| [Calculator](src/components/Calculator.jsx) | Two number inputs and `+ - * /` buttons. Division by zero, an empty-input message, the selected operator, an operation history with a count, and a reset. | [Calculator.test.jsx](src/components/Calculator.test.jsx) |
| [PlayerPicker](src/components/PlayerPicker.jsx) + [PlayerCard](src/components/PlayerCard.jsx) | Lifting state up: the parent owns the selected players and passes `onAdd`/`onRemove` callbacks to each card. Prevents duplicates. | — |
| [Tic-tac-toe](src/components/tic-tac-toe/Board.jsx) | The React tutorial game: immutable array updates, alternating turns, winner detection, and a board built from rows × columns. | — |
| [Grid](src/components/grid-light/Grid.jsx) | Rendering a 3×3 CSS grid from nested loops, with `index = row * cols + col`. | — |
| [GridGenerator](src/components/grid-generator/GridGenerator.jsx) | Builds an N×N grid (1–10) from user input with validation. Clicking a cell fills it with the next highest value; the highest value is derived, not stored. | — |
| [TabsList](src/components/TabsList/TabsList.jsx) | Reusable tabs: first tab selected by default, a highlighted active tab, `role="tab"`/`aria-selected`. | — |
| [TodoList](src/components/TodoList/TodoList.jsx) | Add, check off (strike-through) and delete todos, ignore blank input, and show an "X of Y done" count. | — |
| [FAQComponent](src/components/FAQ/FAQComponent.jsx) | Accordion: one panel open at a time, click again to close (`null` = nothing open), `aria-expanded`/`aria-controls`. | — |
| [Users](src/components/Users/Users.jsx) | Data fetching in `useEffect` from JSONPlaceholder, with loading, error + Retry and empty states, a case-insensitive name filter as derived state, and `AbortController` cleanup on unmount. | — |
| [AdminPanel](src/components/AdminPanel/AdminPanel.jsx) | Agent table with Suspend/Activate toggles, greyed-out suspended rows, a live "active · suspended" summary, and an All/Active/Suspended filter. Expects an `agents` prop of `{ id, name, owner, status }`. | — |

[src/components/index.html](src/components/index.html) is a standalone flexbox layout experiment. It isn't part of the React app; open it directly in a browser.

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
├── components/       # One component (and optional test) per exercise; larger ones get their own folder
├── utils/            # Shared helpers
└── assets/           # Images and icons
```

`App.jsx` renders one exercise at a time. To switch exercises, comment out the current one and uncomment the one you want.

To add a new exercise, create a component in `src/components/` (or a folder like `src/components/MyExercise/` for multi-file exercises), with the drill brief as a comment at the top, render it from `App.jsx`, and add a `*.test.jsx` file next to it if it has tests.

## Testing

Tests use [Vitest](https://vitest.dev) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and `user-event`, running in jsdom. Test files sit next to the component they cover and are named `*.test.jsx` (or `*.test.js` for plain helpers).
