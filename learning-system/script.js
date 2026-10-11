//
// ## Task 4: Optional Chaining
// Predict the output before running:
//
// ```js
// const book = {
//   title: "The Pragmatic Programmer",
//   metadata: {}
// };
//
// console.log(book.metadata?.subtitle);
// console.log(book.metadata?.subtitle ?? "No subtitle");
// console.log(book.author?.name);
// ```
//
// Then explain why this would cause an error:
//
// ```js
// console.log(book.metadata.subtitle.text);
// ```
//
// Rewrite it safely using optional chaining.

const book = {
  title: "The Pragmatic Programmer",
  metadata: {},
};

console.log(book.metadata?.subtitle);
console.log(book.metadata?.subtitle ?? "No subtitle");
console.log(book.author?.name);
