This curriculum is built around the official docs at **react.dev**, following the order of its "Learn" section. Every phase has the same loop: read the docs, do the docs' own challenges, build something small from scratch without copying, then check your approach with me. The timings assume steady daily study, so stretch or compress them as needed.

## The loop for every phase

1. **Read** the listed docs pages and complete the interactive challenges inside them.
2. **Build** the practice project from a blank Vite project (`npm create vite@latest`, React template). Don't copy code.
3. **Revisit** the docs when you get stuck, instead of trying to memorize.
4. **Checkpoint**: explain each concept out loud or in writing before moving on. If you can't, redo the project's weak part.

Keep a small "functional JS" habit alongside it, since React leans on `map`, `filter`, `reduce`, spread, destructuring, and immutable updates. If any of those feel shaky, drill them for 15 minutes before each session.

## Phase 0: JS readiness (2–3 days)

Make sure you're comfortable with these, since React code uses them constantly: arrow functions, destructuring, spread/rest, `map`/`filter`/`reduce`, ES modules (`import`/`export`), template literals, optional chaining, closures, and promises with `async/await`.

**Checkpoint:** you can transform an array of objects (filter, update one item, remove one item) without mutating it.

## Phase 1: Describing the UI (about 1 week)

- **Read:** Quick Start (including the Tic-Tac-Toe tutorial and "Thinking in React"), then the whole "Describing the UI" section. That covers components, JSX, props, conditional rendering, lists and keys, and keeping components pure.
- **Practice:** a static profile-card page, then a product list rendered from an array, with conditional badges such as "Sold out".
- **Checkpoint:** you can explain why `key` matters, what "pure component" means, and how props flow down.

## Phase 2: Adding interactivity (about 1 week)

- **Read:** the whole "Adding Interactivity" section: events, `useState`, render and commit, state as a snapshot, queueing updates, and updating objects and arrays in state.
- **Practice:** a counter, then a to-do list with add, toggle, and delete, then a "like" button list.
- **Checkpoint:** you can explain why `setCount(count + 1)` three times only adds 1, and why you must not mutate state.

## Phase 3: Managing state (1–1.5 weeks)

- **Read:** the "Managing State" section: reacting to input with state, choosing state structure, lifting state up, preserving and resetting state, `useReducer`, and Context.
- **Practice:** build a shopping cart in three passes. First use `useState` and lifted state, then refactor to `useReducer`, then add a theme toggle and cart access through Context.
- **Checkpoint:** you can decide where a piece of state should live and justify it, and you can say when `useReducer` beats `useState`.

## Phase 4: Escape hatches (1.5–2 weeks)

This is the hardest phase, so give it the most time.

- **Read:** the "Escape Hatches" section: refs, manipulating the DOM with refs, synchronizing with Effects, **"You Might Not Need an Effect"**, the lifecycle of reactive effects, and custom hooks.
- **Practice:** a stopwatch (effects with cleanup), an auto-focus form (refs), and a GitHub user search that calls a real API with loading and error states. Then extract the fetch logic into your own `useFetch` hook, and add a `useLocalStorage` hook.
- **Checkpoint:** for any `useEffect` you write, you can say what it synchronizes with and why it couldn't be an event handler or derived value instead.

## Phase 5: Performance and modern React (about 1 week)

- **Read** in the Reference section: `useMemo`, `useCallback`, `memo`, `useId`, `useTransition`, `useDeferredValue`, `Suspense`, `lazy`, and error boundaries. Then read the React 19 pieces: `use`, `useActionState`, `useOptimistic`, and form actions.
- **Practice:** take a deliberately slow list (5,000 items) and speed it up. Add lazy-loaded pages and an error boundary to an earlier project.
- **Checkpoint:** you can explain when memoization actually helps and when it's just noise, and you can profile with React DevTools.

## Phase 6: Frontend ecosystem (2 weeks)

React alone isn't enough for frontend jobs. Read each tool's own docs:

- **React Router:** real URLs, nested routes, and route params.
- **Data fetching:** TanStack Query, which handles caching, loading, and errors.
- **Forms:** controlled forms and validation (React Hook Form is a common choice).
- **TypeScript with React:** the "Using TypeScript" page on react.dev.
- **Testing:** Vitest plus React Testing Library.
- **Accessibility:** semantic HTML, labels, and keyboard navigation.

**Practice:** take your banking dashboard project and upgrade it. Replace the `activePage` switch with React Router, load the mock data through fake async calls with TanStack Query, persist transfers and card locks, and write tests for `TransferWizard`.

## Phase 7: Capstone (1–2 weeks)

Build one complete app from an empty folder, using routing, server data, forms, and state management. Deploy it (Vercel or Netlify) and write a README. Pick something you'd actually use, for example an expense tracker or a study planner.

**Checkpoint:** you built it without a tutorial, and you can explain every architectural decision in it.

## Optional next steps

After Phase 7, look at a framework like Next.js. The React docs themselves recommend frameworks for production apps, but they make much more sense once the fundamentals are solid.

If you'd like, I can turn this into a downloadable document, or expand any phase into a day-by-day plan with specific exercises.
