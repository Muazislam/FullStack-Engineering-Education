Here are sources for each Day 1 exercise, in the order I'd use them. **javascript.info** is the best fit for a beginner, because it explains each idea step by step with small examples. **MDN** is the reference to check afterward, and it's terse.

## Which source for which exercise

| Exercise | Read this on javascript.info | What to focus on |
|---|---|---|
| 1. Destructuring, rename, default | **"Destructuring assignment"** (javascript.info/destructuring-assignment) | The sections on object destructuring, renaming with `:`, default values with `=`, and nested destructuring |
| 2. Destructuring in function parameters | Same page, the **"Smart function parameters"** section | How a function takes `{ name, age = 18 }` directly |
| 3. `?.` and `??` | **"Optional chaining '?.'"** and **"Nullish coalescing operator '??'"** (javascript.info/optional-chaining, javascript.info/nullish-coalescing-operator) | What each does when a value is `undefined` or `null`, and the `??` vs `||` comparison |
| 4. Merging with spread | **"Rest parameters and spread syntax"** (javascript.info/rest-parameters-spread) | Spreading arrays and objects, and what happens when keys collide |

## How to learn from them

1. **Read one section at a time.** Don't read the whole page at once.
2. **Type every example yourself** into the browser console (F12, Console tab) or a `practice.js` file. Don't copy and paste. Then change the example and predict what will happen before you run it.
3. **Do the exercise right after the matching reading**, not after all the reading. It's easier to remember while it's fresh.
4. **If the docs don't click, try a second source.** Look up the same topic on MDN. Search for "Destructuring", "Spread syntax", "Optional chaining", and "Nullish coalescing operator" on MDN Web Docs. Or watch a short video by searching "JavaScript destructuring tutorial". Channels like Web Dev Simplified and Traversy Media usually cover these in about 10–15 minutes each.

## Suggested order and time

- Destructuring, including function parameters: 30–40 minutes, then exercises 1 and 2
- Optional chaining and nullish coalescing: 20 minutes, then exercise 3
- Rest and spread: 20–30 minutes, then exercise 4

A tip for the `||` vs `??` part: try `0 || 10` and `0 ?? 10` in the console and compare them. That difference shows up in real React code, for example when a counter is `0`.

Try the exercises yourself first. If you get stuck on a specific one, paste what you wrote and tell me where it breaks, and I'll help you find the mistake without just handing you the answer.