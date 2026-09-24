// let books = ["Atomic Habits", "Deep Work", "The Pragmatic Programmer"];

// console.log(books[0]);
// console.log(books.length);

// books.push("Clean Code");
// console.log(books);

// books.pop();
// console.log(books);

// for (const book of books) {
//   console.log(book);
// }

//=========================================================================

// Practicing through Javascrrpt info docs.
// This is same to same code practice to learn syntax

//=========================================================================
// This is the syntax to create empty array
// let arr = new Array(); // I don't know how i would use this
// let arr = []; // Maybe i would use this for array creation only!
//=========================================================================

//=========================================================================
// S-2: Array elements are numbered.
// And they can be accessed by the index number assigned to them
// let fruits = ["Apple", "Orange", "Plum"];

// alert(fruits[0]); // Apple
// alert(fruits[1]); // Orange
// alert(fruits[2]); // Plum
//=========================================================================

//=========================================================================
// Replacing an element
// fruits[2] = "Pear"; // now["Apple", "Orange", "Pear"]
// Add new element to an array

// fruits[3] = "Lemon"; // now["Apple", "Orange", "Pear", "Lemon"]
//=========================================================================

//=========================================================================
// mix of values
// let arr = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () {
//     alert("Hello");
//   },
// ];

// // get the object at index 1 and then show it's name
// alert(arr[1].name); //John

// // get the function at index 3 and run it
// arr[3]();
//=========================================================================

//=========================================================================
// let fruits = ["Apple", "Orange", "Pear"];

//-TO extract the last element of an array we use pop()
// alert(fruits.pop()); // remove 'Pear' and alert it
// alert(fruits); // Apple, Orange, Pear

//-TO extract the first element of an array we use shift()
// let fruito1 = ["Apple", "Orange", "Pear"];
// alert(fruito1.shift());
// alert(fruito1);

//-TO push the elements at the end of an array
// let fruito2 = ["Apple", "Orange", "Pear"];
// fruito2.push("share", "success");
// alert(fruito2);

//-To push elements at the beginning of an array
// let fruito3 = ["Apple", "Orange", "Pear"];
// fruito3.unshift("her", "help");
// alert(fruito3);
//=========================================================================

//=========================================================================
// let arr = ["Apple", "Orange", "Pear"];
// for (let i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }

// let company = ["blackroxk", "commandcode", "perplexity"];

// for (let i = 0; i < company.length; i++) {
//   alert(company[i]);
// }

// Using for...of in array

// let company = ["blackrock", "commandcode", "per[lexity"];

// for (let state of company) {
//   alert(state);
// }
//=========================================================================

//=========================================================================
// using 'length'

// let fruits = [];
// fruits[123] = "Apple";
// // This shows that fruits['we give a index number ourselves here']
// alert(fruits.length); // 124

let arr = [1, 2, 3, 4, 5];

arr.length = 2;
alert(arr);

arr.length = 5;
alert(arr);
