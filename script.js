const books = [
  {
    title: "Clean Code",
    read: false,
  },
  {
    title: "Deep Work",
    read: true,
  },
];
books.obj3 = { title: "THe pragmatic programmer", read: false };
/*
This is the output on console.log
Array [ {…}, {…} ]
​
0: Object { title: "Clean Code", read: false }
​
1: Object { title: "Deep Work", read: true }
​
length: 2
​
obj3: Object { title: "THe pragmatic programmer", read: false }
​
<prototype>: Array []
script.js:14:9


*/
// books.'0'.rating = 8.09; // i am not able to access the first object. i don't know the syntax.
console.log(books);

// for (let book of books) {
//   console.log(book); // but it is not showing the third object i createdd
// }
