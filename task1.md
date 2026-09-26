Yes, this is a good method for you, especially because you learn better by seeing a concept work before reading its full theory. It is often called a practice-first or example-first approach.

Keep using it, but add three steps so you do not only memorize patterns:

1. Read the documentation heading and one small example.
2. Predict what the code will do before running it.
3. Change one thing and observe the result.
4. Explain the behavior in your own words.
5. Solve a small problem without looking at the example.

For example, with arrays:

```js
books.push({
  title: "The Pragmatic Programmer",
  read: false
});
```

Do not stop at “this adds an object.” Also test:

- What does `books.push(...)` return?
- What happens to `books.length`?
- What index does the new object receive?
- What happens if you push two objects?
- Can you access the new object with `books[2]`?

That turns reading into understanding.

Because your time is limited, use focused sessions:

- 5 minutes: read one documentation section.
- 10 minutes: type and modify examples.
- 10 minutes: solve one problem from memory.
- 5 minutes: explain what you learned and record your confusion.

Do not read an entire documentation page from beginning to end every time. JavaScript documentation is a reference library, not always a beginner-friendly lesson. Read only the heading and subsection related to the problem, then return to the theory after experimenting.

Your current learning pattern is beneficial because you are:

- writing code yourself;
- making predictions;
- encountering genuine errors;
- asking why the code behaves that way;
- explaining your reasoning.

Those are strong signs of active learning. Continue with this approach. I will support it by giving you a relevant documentation section, a small worked example when necessary, and then a problem that you must solve independently.