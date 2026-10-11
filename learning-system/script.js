// ## Day D Main Problem
//
// Write this function:
//
// ```js
// function describeBook(book) {
//   // your code
// }
// ```
//
// It must return a sentence containing:
//
// - the title,
// - the author or `"Unknown author"`,
// - the subtitle or `"No subtitle"`,
// - the rating or `"No rating"`.
//
// Use:
//
// - object destructuring,
// - a renamed destructured property,
// - a default value,
// - optional chaining,
// - `??`.
//
// Test it with:
//

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 4.5,
    metadata: {
      subtitle: "A Handbook of Agile Software Craftsmanship",
    },
  },
  {
    title: "Deep Work",
    rating: 0,
    metadata: {},
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    rating: null,
  },
];
// function describeBook(book) {
//   const { title, author, rating, metadata: { subtitle } = {} } = book;
//
//   console.log(title);
//   console.log(author ?? "Unknown Author");
//   console.log(subtitle ?? "No subtitle");
//   console.log(rating ?? "No rating");
// }
//
// books.forEach(describeBook);
//

function describeBook(book) {
  const {
    title,
    author = "No author",
    rating = "No rating",
    metadata: { subtitle } = {},
  } = book;

  console.log(title);
  console.log(author);
  console.log(rating ?? "No rating");
  console.log(subtitle ?? "No subtitle");
}

books.forEach(describeBook);

/*
  OPTIMIZING describeBook() WITH DEFAULT VALUES AND ??

  Problem 1: subtitle still printed undefined
  - I tried replacing the default {} (after metadata: { subtitle })
    with a string, but it did not change anything. The output was
    still undefined.
  - Reason: that default belongs to metadata, not to subtitle. It is
    used only when metadata itself is missing, and it must be an
    object so that subtitle can be destructured from it.
  - Fix: I used ?? in the console.log instead:
      console.log(subtitle ?? "No subtitle");
    If subtitle is undefined, ?? falls back to "No subtitle".

  Problem 2: rating printed null for "The Pragmatic Programmer"
  - That book has rating: null. A default value in destructuring
    (rating = "No rating") only works for undefined, not for null,
    so null was still printed.
  - The requirement: show the rating as a number, or show "No rating".
  - Fix: I used ?? in the console.log:
      console.log(rating ?? "No rating");
    Because the rating is null, ?? falls back to the string "No rating".
  - Deep Work has rating: 0. ?? keeps 0 because it is a real value
    (it is not null or undefined), so 0 is printed correctly.

  Summary
  - Default values in destructuring (= ...) apply only to undefined.
  - ?? applies to both null and undefined.
*/
