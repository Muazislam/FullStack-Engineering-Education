# Merged JavaScript to React Curriculum

This plan merges the beginner JavaScript worked-example path with the React
learning plan. The flow is:

1. Learn a small idea from docs or a worked example.
2. Type the example manually.
3. Make a tiny change.
4. Solve a problem.
5. Explain the thinking to the instructor.
6. Add the idea to `ShelfLife`, the main project.
7. Pass a checkpoint and recall session before moving on.

Status legend: `[ ]` not started, `[~]` in progress, `[x]` complete.

## Main Project: ShelfLife

`ShelfLife` is a personal book and learning library. It starts as plain
JavaScript data manipulation and grows into a production-shaped React app with
search, state architecture, API data, persistence, routes, forms, tests, and
deployment.

The project is intentionally better than a basic to-do list. It has real data,
edge cases, UI states, and architecture decisions.

## Module 0 - JavaScript Foundations

**Status:** `[~]` in progress

**Docs:** javascript.info and MDN for arrays, objects, function expressions,
arrow functions, destructuring, optional chaining, nullish coalescing, spread,
rest, array methods, closures, modules, promises, and async/await.

### Day A - Arrays

Learn:

- array creation,
- index access,
- `.length`,
- `.push()`,
- `.pop()`,
- `for` loops,
- `for...of` loops.

Worked example:

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("mango");
fruits.pop();

for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}
```

Problem:

Make an array of 3 numbers. Add a 4th with `.push()`. Loop through it with
`for...of` and print each number doubled.

ShelfLife connection:

Create an array of books and print each title.

### Day B - Objects

Learn:

- object literals,
- dot access,
- bracket access,
- changing properties,
- deleting properties,
- methods,
- `this`.

Worked example:

```js
let person = {
  name: "Ali",
  greet: function() {
    return "Hi, I'm " + this.name;
  }
};

console.log(person.name);
console.log(person["name"]);
console.log(person.greet());
```

Problem:

Make a book object with `title`, `author`, and `read`. Add a `toggleRead`
method that flips `read`. Call it twice and log the value after each call.

ShelfLife connection:

Represent one book as an object with title, author, status, rating, and notes.

### Day C - Functions as Values

Learn:

- function expressions,
- arrow functions,
- passing functions into other functions,
- how `filter` works internally.

Worked example:

```js
function keepIf(numbers, testFn) {
  let result = [];

  for (const n of numbers) {
    if (testFn(n)) {
      result.push(n);
    }
  }

  return result;
}

const isEven = (n) => n % 2 === 0;
console.log(keepIf([1, 2, 3, 4, 5, 6], isEven));
```

Problem:

Write `describe(numbers, testFn)` from scratch. Use it with a function that
checks whether a number is negative.

ShelfLife connection:

Write `keepBooksIf(books, testFn)` and use it to find unread books.

### Day D - Destructuring, Defaults, Optional Chaining

Learn:

- object destructuring,
- array destructuring,
- renaming,
- default values,
- destructuring function parameters,
- `?.`,
- `??`,
- the difference between `??` and `||`.

Problem:

Write a function that takes a book object and returns a display title. If
`book.metadata.subtitle` is missing, use `"No subtitle"`. If rating is `0`, it
must still display `0`, not a fallback value.

### Day E - Spread, Rest, and Immutable Updates

Learn:

- spreading arrays,
- spreading objects,
- rest parameters,
- copying before changing,
- updating one item in an array without mutation.

Problem:

Given an array of book objects, return a new array where only one book has
`read: true`. The original array must remain unchanged.

### Day F - `map`, `filter`, and `reduce`

Learn:

- transform with `map`,
- select with `filter`,
- summarize with `reduce`,
- when each method fits.

Problem:

From a list of books, return:

- all unread books,
- a list of display titles,
- the average rating,
- a grouped count by genre.

### Day G - Closures, Modules, Promises, `async`/`await`

Learn:

- closures,
- named exports,
- default exports,
- promises,
- `async`/`await`,
- fetch behavior,
- why a 404 response is not automatically a thrown error.

Problem:

Create a tiny module that exports book utilities. Then write an async function
that fetches Open Library search results and returns a cleaned list of titles.

### Module 0 Capstone - ShelfLife Engine

Build a plain JavaScript engine with pure functions:

- `addBook(state, book)`
- `deleteBook(state, id)`
- `markRead(state, id)`
- `rateBook(state, id, rating)`
- `filterBooks(state, filters)`
- `getStats(state)`

Checkpoint:

Explain immutable updates, array transformations, functions as values, and how
the engine prepares you for React state.

Recall session:

Arrays, objects, functions as values, destructuring, optional chaining, spread,
array methods, modules, and async basics.

## Module 1 - Describing the UI

**Docs:** react.dev Quick Start, Tic-Tac-Toe tutorial, Thinking in React, and
the "Describing the UI" section.

Build `ShelfLife v1`:

- static book collection,
- `BookCard`,
- `BookList`,
- genre badges,
- currently-reading badge,
- conditional empty state,
- stable keys.

Checkpoint:

Explain JSX, components, props, conditional rendering, lists, keys, and pure
components.

## Module 2 - Adding Interactivity

**Docs:** react.dev "Adding Interactivity".

Build `ShelfLife v2`:

- add-book form,
- search filter,
- status filter,
- star rating,
- mark as read,
- delete book,
- all state updates immutable.

Checkpoint:

Explain state as a snapshot, render and commit, event handlers, queued updates,
and why mutation causes React bugs.

Recall session:

Everything from Module 0 through Module 2.

## Module 3 - Managing State

**Docs:** react.dev "Managing State".

Build `ShelfLife v3`:

- refactor book actions to `useReducer`,
- lift shared filter state,
- add `ThemeContext`,
- add `LibraryContext`,
- preserve/reset state intentionally.

Checkpoint:

Justify where each state value lives and when `useReducer` is better than
`useState`.

Recall session:

All previous modules.

## Module 4 - Escape Hatches

**Docs:** react.dev "Escape Hatches", especially "You Might Not Need an
Effect".

Build `ShelfLife v4`:

- search Open Library API,
- loading state,
- error state,
- debounced search,
- `useBookSearch`,
- `useLocalStorage`,
- focus search input with `useRef`,
- clean up effects.

Checkpoint:

For every effect, explain what external system it synchronizes with and why it
is not better as an event handler or derived value.

Recall session:

All previous modules.

## Module 5 - Performance and Modern React

**Docs:** react.dev reference for `memo`, `useMemo`, `useCallback`, `useId`,
`useTransition`, `useDeferredValue`, `Suspense`, `lazy`, and error boundaries.
Then study React 19 form actions, `useActionState`, and `useOptimistic`.

Build `ShelfLife v5`:

- profile slow filtering,
- optimize only measured bottlenecks,
- lazy-load book details,
- add error boundary,
- use transitions for expensive search states where appropriate.

Checkpoint:

Explain when memoization helps and when it is noise.

Recall session:

All previous modules.

## Module 6 - Frontend Ecosystem

**Docs:** React Router, TanStack Query, React Hook Form, react.dev TypeScript,
Vitest, React Testing Library, and accessibility references.

Build `ShelfLife v6`:

- routes: `/library`, `/book/:id`, `/stats`,
- TanStack Query for Open Library data,
- React Hook Form validation,
- incremental TypeScript,
- reducer tests,
- component tests,
- accessible labels and keyboard behavior.

Checkpoint:

Walk through data flow from search input to rendered result, including loading,
error, cache, and UI states.

Recall session:

Everything.

## Module 7 - Capstone

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

Checkpoint:

Defend every major decision without notes.
