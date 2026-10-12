function makeAsync(n) {
  return function (input, callback) {
    setTimeout(() => callback(input + " > " + n), 200);
  };
}

const async1 = makeAsync(1);
const async2 = makeAsync(2);
const async3 = makeAsync(3);
const async4 = makeAsync(4);
const async5 = makeAsync(5);

async1("start", function (r1) {
  async2(r1, function (r2) {
    async3(r2, function (r3) {
      async4(r3, function (r4) {
        async5(r4, function (output) {
          console.log(output);
        });
      });
    });
  });
});
