function final(someInput, callback) {
  callback(`${someInput} and terminated by executing callback`);
}

function middleware(someInput, callback) {
  return middleware2(`${someInput} touched by second middleware`, callback);
}

function middleware2(someInput, callback) {
  return final(`${someInput} touched by middleware`, callback);
}

function initiate() {
  const someInput = "hello this is a function";
  middleware(someInput, function (result) {
    console.log(result);
  });
}

initiate();
