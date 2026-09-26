Yes, you already demonstrated the required Day B concepts. You correctly understood the missing syntax after reviewing the documentation, so we will move on. I will mark Day B as complete.

## Day C: Functions as values

Today’s goal is to understand that functions can be:

- stored in variables;
- passed into other functions;
- returned from other functions.

Read only these sections:

1. [MDN: Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions)

   Read the sections:

   - “Function declarations”
   - “Function expressions”

2. [MDN: Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

   Read:

   - “Description”
   - “Arrow functions used as methods”
   - the first basic examples

Start with this familiar function:

```js
function add(a, b) {
  return a + b;
}
```

The same behavior can be stored in a variable:

```js
const add = function (a, b) {
  return a + b;
};
```

It can also be written as an arrow function:

```js
const add = (a, b) => {
  return a + b;
};
```

For a one-expression function, the `return` can be implicit:

```js
const add = (a, b) => a + b;
```

Your first task:

```text
Create a normal function called multiply.
It accepts two numbers and returns their product.

Then create the same behavior using:
- a function expression;
- an arrow function.

Call all three versions and print their results.
```

Use different names, such as:

```js
multiplyDeclaration
multiplyExpression
multiplyArrow
```

Before running the code, predict the result of calling each function with `4` and `5`.

Send me:

- your code;
- your predicted output;
- your explanation of the difference between the three forms;
- your confidence from 1 to 5.