Day D is marked complete in your learning files, and the tracker is now on Day E. I recorded that you reported the remaining Day D work complete; the `describeBook` problem was verified here, while the other explanations and recall were not submitted for review.

## Day E: Spread, Rest, and Immutable Updates

Read [javascript.info: Rest parameters and spread syntax](https://javascript.info/rest-parameters-spread), focusing on **Rest parameters `...`**, **Spread syntax**, and **Copy an array/object**. Rest gathers remaining function arguments into an array; spread expands iterable values or copies array/object contents. [javascript.info](https://javascript.info/rest-parameters-spread)

Type these examples yourself, predict the results first, then run them:

```js
const book = { title: "Clean Code", rating: 0 };
const ratedBook = { ...book, rating: 4 };

console.log(book.rating);
console.log(ratedBook.rating);
console.log(book === ratedBook);
```

```js
const shelf = ["Clean Code", "Deep Work"];
const largerShelf = [...shelf, "The Pragmatic Programmer"];

console.log(shelf);
console.log(largerShelf);
```

Then try rest parameters:

```js
function makeBook(title, ...tags) {
  return { title, tags };
}

console.log(makeBook("Clean Code", "software", "craft"));
```

### Main Problem: Update a Book Without Mutating the Shelf

Write `markBookRead(books, targetId)`. It should return a **new array** where the matching book has `read: true`. Keep every other book field. Do not change the original array or any original book.

```js
const books = [
  { id: 1, title: "Clean Code", read: false, rating: 4.5 },
  { id: 2, title: "Deep Work", read: false, rating: 0 },
  { id: 3, title: "The Pragmatic Programmer", read: true, rating: 5 },
];

// Write markBookRead(books, targetId) here.
```

Test it with an existing ID and an ID that isn’t present. Before coding, write your pseudocode and predict:

- Which book changes in the returned array?
- What should remain unchanged in `books`?
- Are the returned array and original array the same array?

Send your function, predictions, actual output, and explanation of where you used spread. I’ve recorded Day D and moved the learning tracker to Day E in the [curriculum](/home/muazislambabar/Documents/Claude-Projects/notes/S---React/learning-system/CURRICULUM.md), [progress dashboard](/home/muazislambabar/Documents/Claude-Projects/notes/S---React/learning-system/progress/PROGRESS.md), and [session log](/home/muazislambabar/Documents/Claude-Projects/notes/S---React/learning-system/progress/SESSIONS.md).Day D is marked complete in your learning files, and the tracker is now on Day E. I recorded that you reported the remaining Day D work complete; the `describeBook` problem was verified here, while the other explanations and recall were not submitted for review.
