// const x = "x";
// const y = "y";
// console.log(x, y);

// Format specifier
// console.log("My %s has %d ears", "cat", 2);
// console.log("%i", 42.9);
// console.log("%o", Number);

// console.clear() clears the terminal.

// console.count() and countReset()

//
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// apples.forEach((fruit) => {
//   console.count(fruit);
// });
//
// // console.countReset("orange");
//
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
//
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });

// =====================================================================
// CONSOLE.COUNT() AND CONSOLE.COUNTRESET() - MY NOTES
// =====================================================================

// ---------------------------------------------------------------------
// console.clear()
// ---------------------------------------------------------------------
// - `console.clear()` clears the terminal.

// ---------------------------------------------------------------------
// console.count(label)
// ---------------------------------------------------------------------
// - `console.count(label)` prints the label followed by a number,
//   for example `orange: 1`.
// - Every call with the SAME label increases that label's number by 1.
//   It does not get stuck, it keeps increasing.
// - The count belongs to the LABEL (the string), not to the array.
// - Each label has its own separate counter.
//   `"orange"` and `"just one apple"` are counted separately.

// ---------------------------------------------------------------------
// console.countReset(label)
// ---------------------------------------------------------------------
// - `console.countReset(label)` sets ONLY that label's counter back to
//   zero.
// - The next `console.count(label)` then prints 1 again (not 0).
// - It does NOT touch the counters of other labels.
// - The label passed to `countReset` must EXACTLY match the label used
//   in `console.count`, otherwise nothing is reset.

// ---------------------------------------------------------------------
// THE EXAMPLE
// ---------------------------------------------------------------------
// Two arrays of strings. The "orange" string appears twice in `oranges`.
// const oranges = ["orange", "orange"];
// const apples = ["just one apple"];

// `forEach` runs the arrow function ONCE FOR EACH item in the array.
// `fruit` is the current item. Here the item is used as the label.
// Output: `orange: 1` then `orange: 2`
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });

// `"just one apple"` has its own counter.
// Output: `just one apple: 1`
// apples.forEach((fruit) => {
//   console.count(fruit);
// });

// Resets ONLY the "orange" counter back to zero.
// The "just one apple" counter is not touched.
// console.countReset("orange");

// The "orange" counter starts again from 1.
// Output: `orange: 1` then `orange: 2`
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });

// ---------------------------------------------------------------------
// FULL OUTPUT
// ---------------------------------------------------------------------
// orange: 1
// orange: 2
// just one apple: 1
// orange: 1
// orange: 2

// --------------------------------------------
// 4.5 console.trace() (see how you get here)
// --------------------------------------------

// const function2 = () => console.trace();
// const function1 = () => function2();
// function1();

// --------------------------------------------
// 4.6 Measure time
// --------------------------------------------

// // const dosomething = () => console.log("test");
// // const measuredoingsomething = () => {
// //   console.time("dosomething()");
// //   dosomething();
// //   console.timeend("dosomething()");
// // };
// // measuredoingsomething();
//
// console.log("normal output");
// console.error("error output");
//

// import { styleText } from "node:util";
//
// console.log(
//   styleText(["red"], "This is red text") +
//     styleText(["green", "bold"], "and this is green bold text") +
//     "this is normal text",
// );
