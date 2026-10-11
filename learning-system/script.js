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

function describeBook(book) {
  const {
    title: t,
    author: a = "Unknown author",
    metadata: { subtitle: s } = {},
    rating: r = "No rating",
  } = book;

  return `Title: ${t}, Author: ${a}, Subtitle: ${s ?? "No subtitle"}, Rating: ${r ?? "No rating"}`;
}

for (let info of books) {
  console.log(describeBook(info));
}
