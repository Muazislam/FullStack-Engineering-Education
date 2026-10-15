// const a = 1;
// const b = 2;
// const c = a + b;
//
// console.log(c);

// ------- A timer callback --------

// console.log("before");
//
// setTimeout(() => {
//   console.log("Waiting for 2 seconds");
// }, 2000);
//
// console.log("after");

// ---- **7.3 Error-first callbacks (Node's convention)  -----

// import fs from "node:fs";
//
// fs.readFile(
//   "/home/muazislambabar/Documents/Claude-Projects/notes/S---React/node-practice/hello.txt",
//   "utf8",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//   },
// );

// ---- **7.4 The problem: callback nesting** -----

setTimeout(() => {
  console.log("step 1");
  setTimeout(() => {
    console.log("step 2");
    setTimeout(() => {
      console.log("step 3");
    }, 500);
  }, 500);
}, 500);
