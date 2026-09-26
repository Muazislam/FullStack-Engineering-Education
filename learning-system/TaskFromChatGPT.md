Good. I’m your instructor now, and we’re starting from **Module 0: JavaScript Foundations**.

Current state: **Module 0, Day A-C area**  
Checkpoint status: **not passed yet**  
Today’s target: **Arrays first**, because React depends on arrays constantly: rendering lists, filtering data, updating state, and building components from data.

Before we begin: how much time do you have for this session? 30 min, 60 min, or more?

**Study Sources For Today**
Use these in this order:

1. [javascript.info - Arrays](https://javascript.info/array)  
   Read only the parts about creating arrays, accessing items, `.length`, `push`, `pop`, and loops.

2. [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
   Use this as a reference, not as your main tutorial.

3. Later, after today: [javascript.info - Array methods](https://javascript.info/array-methods)  
   Do not start this yet. This is for `map`, `filter`, and `reduce`.

**What To Do Now**
Open your `practice.js` file or browser console and type this manually. Do not copy-paste:

```js
let books = ["Atomic Habits", "Deep Work", "The Pragmatic Programmer"];

console.log(books[0]);
console.log(books.length);

books.push("Clean Code");
console.log(books);

books.pop();
console.log(books);

for (const book of books) {
  console.log(book);
}
```

Then change it:

1. Replace the book names with 3 books or courses you actually care about.
2. Add a 4th item using `.push()`.
3. Remove the last item using `.pop()`.
4. Loop through the array and print each title in uppercase.

**Your First Problem**
After that, solve this without looking at my solution:

```text
Make an array of 3 numbers.
Add a 4th number with .push().
Loop through the array with for...of.
Print each number doubled.
```

When you reply, send me:

1. How much time you have today.
2. Your code.
3. Your thinking:
   - What is the array storing?
   - What does `.push()` do?
   - What does `for...of` give you each time?
   - Where did you double the number?

I’ll check your reasoning first, then the code.