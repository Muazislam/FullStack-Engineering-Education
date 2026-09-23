# JavaScript to React Learning Plan

This is now a merged JavaScript + React plan. The durable version lives in
`learning-system/`:

- `learning-system/INSTRUCTOR_PROMPT.md`
- `learning-system/CURRICULUM.md`
- `learning-system/progress/PROGRESS.md`
- `learning-system/progress/SESSIONS.md`

Use the instructor prompt for every session. The AI should make the learner
solve problems, share their thinking before receiving help, build meaningful
project features, and update progress/session files at the end.

## How Every Session Works

1. Read `learning-system/INSTRUCTOR_PROMPT.md`.
2. Read `learning-system/CURRICULUM.md`.
3. Read `learning-system/progress/PROGRESS.md`.
4. Read `learning-system/progress/SESSIONS.md`.
5. Continue from the current module.
6. Give a problem or project task.
7. Require the learner to explain their thinking and approach.
8. Give hints, feedback, and corrections.
9. Update progress, session logs, metrics, and charts.

## Main Project

The main project is `ShelfLife`, a personal reading and learning library. It
starts as plain JavaScript data manipulation and grows into a real React app
with API search, persistence, state architecture, routing, forms, tests, and
deployment.

This avoids relying on obsolete toy projects as the main learning path.

## Phase 0 - JavaScript Foundations

Start smaller than the original React-only plan. React depends heavily on
arrays, objects, functions as values, immutable updates, and async data.

### Day A - Arrays

Learn arrays with worked examples first:

- create arrays,
- read by index,
- use `.length`,
- add with `.push()`,
- remove with `.pop()`,
- loop with `for`,
- loop with `for...of`.

Exercise:

Make an array of 3 numbers. Add a 4th with `.push()`. Loop through it with
`for...of` and print each number doubled.

ShelfLife task:

Create an array of books and print each title.

### Day B - Objects

Learn:

- object literals,
- dot access,
- bracket access,
- adding/changing/deleting properties,
- methods,
- `this`.

Exercise:

Make a book object with `title`, `author`, and `read`. Add a `toggleRead`
method that flips `read`. Call it twice and log `read` after each call.

ShelfLife task:

Represent one book with title, author, status, rating, and notes.

### Day C - Functions as Values

Learn:

- function expressions,
- arrow functions,
- passing functions as arguments,
- how filtering works before using `.filter()`.

Exercise:

Write `describe(numbers, testFn)` from scratch. Use it with a function that
checks whether a number is negative.

ShelfLife task:

Write `keepBooksIf(books, testFn)` and use it to find unread books.

### Days D-G - React-Ready JavaScript

Continue with:

- destructuring,
- optional chaining,
- nullish coalescing,
- spread/rest,
- immutable updates,
- `map`,
- `filter`,
- `reduce`,
- closures,
- modules,
- promises,
- `async`/`await`.

Phase 0 capstone:

Build a plain JavaScript ShelfLife engine with pure functions:

- `addBook(state, book)`
- `deleteBook(state, id)`
- `markRead(state, id)`
- `rateBook(state, id, rating)`
- `filterBooks(state, filters)`
- `getStats(state)`

Checkpoint:

Explain immutable updates, array transformations, functions as values, and how
the engine prepares you for React state.

## Phase 1 - Describing the UI

Read react.dev Quick Start, Tic-Tac-Toe, Thinking in React, and Describing the
UI.

Build ShelfLife v1:

- static book collection,
- `BookCard`,
- `BookList`,
- conditional badges,
- empty state,
- stable keys.

Checkpoint:

Explain JSX, components, props, conditional rendering, lists, keys, and pure
components.

## Phase 2 - Adding Interactivity

Read react.dev Adding Interactivity.

Build ShelfLife v2:

- add-book form,
- search filter,
- status filter,
- star rating,
- mark as read,
- delete book,
- immutable state updates.

Checkpoint:

Explain state as a snapshot, render and commit, event handlers, queued updates,
and why mutation causes React bugs.

Recall session:

Review everything from Phase 0 through Phase 2 before moving on.

## Phase 3 - Managing State

Read react.dev Managing State.

Build ShelfLife v3:

- convert book actions to `useReducer`,
- lift shared filter state,
- add theme context,
- add library context,
- preserve/reset state intentionally.

Checkpoint:

Justify where each state value lives and when `useReducer` beats `useState`.

## Phase 4 - Escape Hatches

Read react.dev Escape Hatches, especially "You Might Not Need an Effect".

Build ShelfLife v4:

- Open Library API search,
- loading and error states,
- debounced search,
- `useBookSearch`,
- `useLocalStorage`,
- `useRef` auto-focus,
- cleanup logic.

Checkpoint:

For every effect, explain what it synchronizes with and why it is not better as
an event handler or derived value.

## Phase 5 - Performance and Modern React

Read react.dev reference pages for `memo`, `useMemo`, `useCallback`, `useId`,
`useTransition`, `useDeferredValue`, `Suspense`, `lazy`, error boundaries, and
React 19 form features.

Build ShelfLife v5:

- profile slow filtering,
- optimize measured bottlenecks,
- lazy-load details,
- add error boundary,
- use transitions where useful.

Checkpoint:

Explain when memoization helps and when it is just overhead.

## Phase 6 - Frontend Ecosystem

Read each tool's docs:

- React Router,
- TanStack Query,
- React Hook Form,
- TypeScript with React,
- Vitest,
- React Testing Library,
- accessibility basics.

Build ShelfLife v6:

- routes,
- query caching,
- validated forms,
- incremental TypeScript,
- reducer tests,
- component tests,
- accessible keyboard behavior.

Checkpoint:

Walk through data flow from search input to rendered result, including loading,
error, cache, and UI states.

## Phase 7 - Capstone

Deploy ShelfLife or a comparable project.

Requirements:

- useful product problem,
- real routing,
- server or API data,
- forms,
- state architecture,
- tests,
- README,
- deployment,
- architecture explanation.

## Progress Tracking

Progress is tracked in `learning-system/progress/PROGRESS.md` with:

- time spent,
- cumulative hours,
- active days,
- module completion,
- docs read,
- examples typed,
- problems attempted,
- independent solves,
- hint-assisted solves,
- checkpoint status,
- recall score,
- project features,
- tests,
- bugs resolved,
- refactors,
- confidence rating,
- stuck points.

The progress file includes Mermaid line charts, Mermaid pie charts, and an HTML
table heatmap for daily work.
