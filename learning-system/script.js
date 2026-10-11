//
// ## Task 5: `??` versus `||`
//
// Predict every result:
//
// ```js
// console.log(0 ?? "fallback");
// console.log(0 || "fallback");
//
// console.log("" ?? "fallback");
// console.log("" || "fallback");
//
// console.log(null ?? "fallback");
// console.log(undefined ?? "fallback");
// ```
//
// Explain:
//
// - Which values cause `??` to use the fallback?
// - Which values cause `||` to use the fallback?
// - Why is `??` better for displaying a book rating of `0`?
//

console.log(0 ?? "fallback");
console.log(0 || "fallback");

console.log("" ?? "fallback");
console.log("" || "fallback");

console.log(null ?? "fallback");
console.log(undefined ?? "fallback");

/*
since the value "" causes the ?? to use fallback. Because ?? uses fallback only if
the value on left side is undefined or null. Since, empty paranthesis is
undefined value. So, it will move to "fallback".

For, ||, if the value is falsy, it moves to "fallback.". Here,
0, "" are falsy. Therefore, it will use fallback on all of them.

?? is better for displaying the book rating of 0.
Because ?? does not move to fallback unless the value is
undefined or null. This is why it is helpfull. And because it 
covers the problem of || which is that it moves
away if the value is falsy. So, even theoufh the value 0 can 
be useful output. It is still ignoreed. Therefore,
we use ??
  
}) 
);

*/
