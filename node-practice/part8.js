// function getSong() {
//   let _song = "";
//   let i = 100;
//   for (i; i > 0; i -= 1) {
//     setTimeout(function () {
//       _song += `${i} beers on the wall\n`;
//     });
//   }
//   return _song;
// }
//
// const song = getSong();
// console.log(`song is "${song}`);

// function getSong() {
//   let _song = "";
//   let i = 100;
//   for (i; i > 0; i -= 1) {
//     _song += `${i} beers on the wall\n`;
//   }
//   return _song;
// }
//
// const song = getSong();
// console.log(`song is "${song}"`);

// function getSong() {
//   let _song = "";
//   let i = 100;
//   for (i; i > 0; i -= 1) {
//     _song += `${i} beers on the wall\n`;
//   }
//   return _song;
// }
//
// const song = getSong();
// console.log(`song is "${song}`);

// function final(someInput, callback) {
//   callback(`${someInput} and terminated by executing callback `);
// }
//
// function middleware(someInput, callback) {
//   return final(`${someInput} touched by middleware `, callback);
// }
//
// function initiate() {
//   const someInput = 'hello this is a function ';
//   middleware(someInput, function (result) {
//     console.log(result);
//   });
// }
//
// initiate();
//
// const operations = {
//   { name: 'first', ms: 300},
// }

const operations = [
  { name: "first", ms: 300 },
  { name: "second", ms: 200 },
  { name: "third", ms: 100 },
];

function run(op, callback) {
  setTimeout(() => {
    console.log("done:", op.name);
    callback();
  }, op.ms);
}

function serial(ops) {
  const op = ops.shift();
  if (!op) return console.log("finished");
  run(op, () => serial(ops));
}

serial([...operations.forEach((op) => run(op, () => {}))]);
