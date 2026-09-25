## Day B: Objects

Today you will learn how to store related information together using an object.

An object contains **properties**. Each property has a **key** and a **value**:

```js
const book = {
  title: "Deep Work",
  author: "Cal Newport",
  read: false
};
```

Here:

- `title`, `author`, and `read` are keys.
- `"Deep Work"`, `"Cal Newport"`, and `false` are values.
- The object represents one book.

Study these sources first:

- [JavaScript.info: Objects](https://javascript.info/object)
- [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

Type the examples yourself. Do not copy and paste them.

### Part 1: Reading properties

You can read a property using dot notation:

```js
console.log(book.title);
console.log(book.author);
```

You can also use bracket notation:

```js
console.log(book["title"]);
```

Your task:

```text
Create an object called person with:
- name
- age
- city

Print the name using dot notation.
Print the city using bracket notation.
```

Before running it, predict what each `console.log` will print.

### Part 2: Changing a property

Objects can be changed after creation:

```js
book.read = true;
console.log(book.read);
```

Your task:

```text
Create a movie object with:
- title
- watched set to false

Change watched to true.
Print watched before and after changing it.
```

Think carefully about the difference between:

```js
movie.watched = false;
movie.watched = true;
```

The first assigns a value. The second replaces it.

### Part 3: Adding and deleting properties

You can add a new property:

```js
book.rating = 5;
```

You can delete a property:

```js
delete book.rating;
```

Your task:

```text
Create a laptop object with:
- brand
- model

Add a price property.
Print the object.
Delete the model property.
Print the object again.
```

### Part 4: Methods

A function stored inside an object is called a method:

```js
const user = {
  name: "Ali",

  greet: function() {
    return "Hello, " + this.name;
  }
};

console.log(user.greet());
```

`this.name` means “the `name` property belonging to this object.”

Your task:

```text
Create a book object with:
- title
- read set to false
- a method called toggleRead

toggleRead should change read from false to true,
or from true to false.
```

Hint:

```js
this.read = !this.read;
```

Call the method twice:

```text
Print read.
Call toggleRead.
Print read.
Call toggleRead again.
Print read.
```

Expected pattern:

```text
false
true
false
```

## Day B checkpoint

Complete this final problem without looking at the examples:

```text
Create a `libraryBook` object with:
- title
- author
- read set to false
- pages
- a `toggleRead` method

Then:

1. Print the title using dot notation.
2. Print the author using bracket notation.
3. Add a `rating` property.
4. Call `toggleRead`.
5. Print the complete object.
6. Explain what changed.
```

Send me your code, predicted output, and explanation. Also tell me where you felt uncertain.