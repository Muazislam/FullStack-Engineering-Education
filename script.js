// -
// -
// ========================================================

// Instructor's code

// ========================================================
// const book = {
//   title: "Deep work",
//   author: "Cal Newport",
//   read: false,
// };

// book.read = true;
// book.rating = 5; // Adds a proprty.
// delete book.rating;
// console.log(book.rating);

// ========================================================

// Muaz's practice code

//=========================================================

// const person = {
//   name: "Muaz",
//   age: 22,
//   city: "Multan",
// };

// console.log(person.name); // This will print the name 'Muaz'
// console.log(person["city"]); // This will print the city 'Multan'
/*
 I always create the mistake to  write object like this -> title: 'Deep Work'; instead of title: 'Deep Work',
*/
// ==================  Change a property
// const movie = {
//   title: "Spirited away",
//   watched: false,
// };

// movie.watched = true;

// console.log(movie.watched);
// Before movie.watched = true; it shows an output of false.
// After movie.watched = true; it shows an output of true.

// ================= Adding and deleting properties

// const laptop = {
//   brand: "Asus",
//   model: "M-5",
// };

// laptop.price = 260000;
// delete laptop.price;
// console.log(laptop.price);

/*
Here, i can see that a property is added. But normally, when we are adding a property to 
the object, we call the oject with it's name and assign a new property through dot notation
and give it a value.
But what is new or just giving me a little bit of backlash is that,
when we are assigning a value to the object, like this, we are using '=' sign
to assign a value.

But that is normally not the case. In creating object.
*/

// =================== Methods in objects

// Example code:

// const user = {
//   name: "Ali",

//   greet: function () {
//     return "Hello, " + this.name; // Honestly, i don't know what is 'this keyword'
// But from what i can see in the output, the this keyword was able to access
// a propery of the object. The function is inside the object under the property
// greet. And i can use the this keyword to access that property from outside
// the function.
//   },
// };

// console.log(user.greet());

/*
const book = {
  title: "The pragmetic programmer",
  read: false,
  toggleRead: function () {
    this.read = !this.read; // Honestly, i do not know what return is  doing here.
    // I guess, it just makes the output of the function become accessible to the outside of the code.
    // But since the console.log is meant to give code outside on the console of the
    // browser, we have return to just output the code within the code project.
  },
};
console.log(book.read);
console.log(book.toggleRead()); // When i have called the toggleread function,
// it has changed the read property. I can see that, a method needs to be called
// first to make the changes appear.
console.log(book.read);
book.toggleRead();
// console.log(book.toggleRead()); If i write it like this, the method is implemented but it says an output of undefined in thr browser console.
console.log(book.read);

*/

// =============== Day B Checkpoint

let libraryBook = {
  title: "The pragmatic programmer",
  author: "Thomas",
  read: false,
  pages: 374,
  toggleRead: function () {
    this.read = !this.read;
  },
};

console.log(libraryBook.title);
console.log(libraryBook["author"]);
// Adding a rating property
libraryBook.rating = 9.8;
// Calling toggle read method
libraryBook.toggleRead();

console.log(libraryBook);

/*

What happened is that i created an object with a method. The
method can access the read property of the object.

After creating an object, i call the object property title using
dot notation.

Then i use the bracket notation to call the author property.

Although,calling it with either dot notation or chaning method doesn't
make a difference. Then i introduce another property name rating.

Then, i call the method named toggleRead. The toggleRead method
is changing the read property from false to true.

Then we print the whole object with all informaiton.


--------------------

From what i can think is that, in proffessional coding,
i would need to create if wlse statments maybe that
if reader opens a ebook, then togglerEAD is called otherwise not called.

SOmehow like this, that the each book will have its own obeject and 

the object will be called like this.

------------------------

I honestly think that this will not be much use in react since
react is functional programming
but i do hope that it will have great help to me in leetcode.

if classes is not in curriculum, then i would love to understand them not right now
but later.
 */
