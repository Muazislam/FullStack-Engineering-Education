Yes. We’ll use `javascript.info` for Day D because its explanations fit your learning style better.

## Day D Topic

Destructuring, default values, optional chaining, and nullish coalescing.

### Read these sections

1. [Destructuring assignment](https://javascript.info/destructuring-assignment)

Read:

- Array destructuring
- Ignore elements using commas
- Object destructuring
- The rest pattern
- Default values
- Smart function parameters

2. [Optional chaining `?.`](https://javascript.info/optional-chaining)

Read:

- The “non-existing property” problem
- Optional chaining
- Short-circuiting
- Other variants: `?.()` and `?.[]`
- Don’t overuse optional chaining

3. [Nullish coalescing operator `??`](https://javascript.info/nullish-coalescing-operator)

Read the complete page, especially:

- Using `??`
- The difference between `??` and `||`
- Combining `??` with other operators

## Task 1: Official Destructuring Task

Solve the JavaScript.info exercise:

[Destructuring assignment task](https://javascript.info/task/destruct-user)

Given:

```js
let user = {
  name: "John",
  years: 30
};
```

Create variables named:

- `name`
- `age`, taken from `years`
- `isAdmin`, with a default value of `false`

Do not open the solution until you have attempted it.

## Task 2: Practice Array Destructuring

Create this array:

```js
const shelf = ["Clean Code", "Deep Work", "The Pragmatic Programmer"];
```

Destructure it into:

```js
const firstBook = ...;
const secondBook = ...;
const thirdBook = ...;
```

Then create another destructuring statement that skips the second book.

Explain what the commas are doing.

## Task 3: Practice Default Values

Create these objects:

```js
const book1 = {
  title: "Clean Code",
  author: "Robert C. Martin"
};

const book2 = {
  title: "Deep Work",
  author: "Cal Newport",
  rating: 0
};
```

Destructure `rating` with a default value of `"Not rated"`.

Predict what happens for:

- `book1`
- `book2`

Pay special attention to whether the default replaces `0`.

## Task 4: Optional Chaining

Predict the output before running:

```js
const book = {
  title: "The Pragmatic Programmer",
  metadata: {}
};

console.log(book.metadata?.subtitle);
console.log(book.metadata?.subtitle ?? "No subtitle");
console.log(book.author?.name);
```

Then explain why this would cause an error:

```js
console.log(book.metadata.subtitle.text);
```

Rewrite it safely using optional chaining.

## Task 5: `??` versus `||`

Predict every result:

```js
console.log(0 ?? "fallback");
console.log(0 || "fallback");

console.log("" ?? "fallback");
console.log("" || "fallback");

console.log(null ?? "fallback");
console.log(undefined ?? "fallback");
```

Explain:

- Which values cause `??` to use the fallback?
- Which values cause `||` to use the fallback?
- Why is `??` better for displaying a book rating of `0`?

## Day D Main Problem

Write this function:

```js
function describeBook(book) {
  // your code
}
```

It must return a sentence containing:

- the title,
- the author or `"Unknown author"`,
- the subtitle or `"No subtitle"`,
- the rating or `"No rating"`.

Use:

- object destructuring,
- a renamed destructured property,
- a default value,
- optional chaining,
- `??`.

Test it with:

```js
const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 4.5,
    metadata: {
      subtitle: "A Handbook of Agile Software Craftsmanship"
    }
  },
  {
    title: "Deep Work",
    rating: 0,
    metadata: {}
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    rating: null
  }
];
```

Before running the code, write your expected output for all three books.

Send me:

1. Your answers to Tasks 1–5.
2. Your `describeBook` function.
3. Your predicted outputs.
4. Your actual outputs.
5. Your explanation of `??` versus `||`.

The official JavaScript.info material supports the concepts of destructuring, defaults, optional chaining, and preserving meaningful values such as `0` with `??`. ([Destructuring](https://javascript.info/destructuring-assignment), [optional chaining](https://javascript.info/optional-chaining), [nullish coalescing](https://javascript.info/nullish-coalescing-operator))