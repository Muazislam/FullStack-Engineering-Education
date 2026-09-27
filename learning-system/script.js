// -
// -
// -
function add3(a, b) {
  return a + b;
}

const add4 = function (a, b) {
  return a + b;
};

// console.log(add(2, 3)); // I passed arguments to the function
// parameters. THe parameters (a,b) are passed with arguments
// add(2,3).

const add = (a, b) => {
  // I don't understand that i make declare a function
  // name with a const. Then, i = (a,b). I feel like i have assigned it with parameters.
  // Then i say => arrow and lead it to the code block. THis is what i understand from the
  // code by watcing it. What can you tell me. Is this right?
  return a + b;
};
console.log(add(2, 3));

// For one expression function:

const add2 = (a, b) => a + b;
console.log(add2(2, 3));

// >>>>>>>>>>>===============<<<<<<<<<<<<<

// MDN: Defining functions
// declaration documentation

// >>>>>>>>>>>===============<<<<<<<<<<<<<

// $$$$$ Function declaration $$$$$$

function square(number /*, parameter 2, parameter 3, parameter 4, ... */) {
  /*
    A function is defined or declared by writing the function keyword.
    Then writing the function name. Then we write paranthesis in which
    we declare parameters. ANd after writing parameters, we write curly brakcets.
    In the curly brackets, we write the code so, it is also called code block.

*/

  return number * number;
}

/*
This function working is that...
Function 'square' takes only one parameter the function consists of only one
statment the...
 return statment
The return statment multiplies the variable or parameter number by itself two
times which is
 number * number

*/
let meow = square(3);
console.log(meow);

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); //'Honda'
myFunc(myCar);
console.log(myCar.make); // 'Toyota'

/*
When we pass an object as a parameter, if the function changes the objects
properties, that change is visible outside the function.

We first call the function `myCar.make`.
We obtain the output 'Honda'.
But when we pass the object to the function as parameter,
It changes a property of the function. What's peculiar is that, 
even though the object was passed as a parameter, the value of the
object property `myCar.make` should have been passed 'as if given to the function'.
But since, here the function has already declared a method in itself, 
and a value is But since the function has already declared an object, 
the object.make = "Toyota", and that object has a property of 
make.make, so when we pass another object from outside the 
function as a parameter, I think that myCar, the object that is 
being passed from outside, is going to act like this keyword because 
this keyword is always replaced with the function, sorry, not 
function, but the object property, so it is going to maybe work 
like that. And the object is going to be replaced with myCar, 
due to which the myCar.make property will be accessed and Toyota 
will be the word Toyota is going to take effect on the object myCar. 
Therefore, instead of having any changes inside the function's 
values, when the value is already declared inside the function, 
the values, the changes are reflected on outside the parameters 
that were being sent. But I want to understand that if this is only 
happening to the object that are passed from outside the function or
 to any to simple values as well.
*/

function myFunc1(theArr) {
  theArr[0] = 30;
}
const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

/*
When I pass the array as a parameter, the changes of the array are
reflected outside the function. It's like the `arr[0] = 30` is absolute
solid and the `arr=[45]` is golibul.

In this code, I have declared a function which takes a parameter, 
the array, the arr. And inside the code block of the function, I 
have the arr. You can just say that I have a statement in which I 
have declared an array and specifically at index zero, I assign it 
a value of 30. So when I pass an array from outside the function as 
a parameter by calling it, what it does is that the array data inside 
the function remains like an absolute wall that cannot be changed, 
but its changes are reflected on every single thing that touches it.
Similarly, when I pass the array from outside the function, even 
though that array comes with its own values, which is 45, that value
is changed with 30. So the inside of the function array has no 
changes on it, but the outside array that was being passed as a 
parameter changes its value. Changes are reflected on it. So this 
is how arrays are working with the function. But this is just about
passing parameters to the function and the effects that are 
provided if there is a value that has already been declared within 
the function.
*/

// I don't get any of this right now. And honestly, i forgot declaring array's/
// I feel so bad right now. I did array and object yestardy and after
// getting up, i feel bad that i forgot them,

function addsquares(a, b) {
  function square(x) {
    // I just made a function inside the function's code block
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addsquares(3, 4)); // If i comment this line, the nested function is still called
// and it still takes values from the call function
console.log(square(6));

// >>>>>>>>>>>===============<<<<<<<<<<<<<

// MDN: Defining functions
// expression documentation

// >>>>>>>>>>>===============<<<<<<<<<<<<<

const square2 = function (number) {
  return number * number;
};

console.log(square2(4)); // 16

// ----

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

// ----

// function can be defined with a condition.
let num = 0;
let myFunc2;
if (num === 0) {
  myFunc2 = function (theObject) {
    theObject.make = "Toyota";
  };
}

/*
From what I can understand from this this kind of declaration of 
function, sorry, expression of function, we first declared a variable
 and then we create an if statement in which if the number is the 
 same as zero, we use the triple equal to sign. I think it not the 
 triple equal to is meant to not only check if the data is equivalent 
 but also to check whether the location is equivalent as well. So we 
 use triple equal to, maybe double equal to doesn't work. I will also
  try that and see and how the changes work out, but we use triple 
  equal to here and within that if statement we have a function. We 
  use the variable name and first of all, instead of declaring the 
  function keyword, we use the variable name and then we assign the 
  equal to and then we write the function keyword and within the 
  parentheses we pass the parameter. Within the code block we write 
  the d object dot make equal to Toyota. We write object inside the 
  function and when the number is equivalent to zero, the function 
  will be called. If the number is not equivalent to zero, then the 
  function will not be called.
*/
// I think not all examples should be tried and studied. Just  first 1 or 2 in
// mdn documentation are enough

// >>>>>>>>>>>===============<<<<<<<<<<<<<

// MDN: Arrow function expression
// expression documentation

// >>>>>>>>>>>===============<<<<<<<<<<<<<

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and
// opening bofy trace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" - the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
(a) => a + 100;
/*
The parantheses can be omitted if the function has a single simple parameter. If
it has multiple parameters, no parameters, or default, destructed,
or rest parameters, the paranthesis around the parameter list are required.
*/

// With double parameters

// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no paramters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;

// arrow function cannot be used in methods

// >>>>>>>>>>>===============<<<<<<<<<<<<<

// Task of day C

// >>>>>>>>>>>===============<<<<<<<<<<<<<

/*
Create a normal function called multiply.
It accepts two numbers and returns their product.

Then create the same behavior using:
- a function expression;
- an arrow function.

Call all three versions and print their results.
*/

function multiply1(num1, num2) {
  // normal function
  return num1 * num2;
}

const multiply2 = function (num1, num2) {
  // function expression
  return num1 * num2;
};
// i think in function expression, we just assign a data type
// to the function name and then give it paramters. and write it
// but does it give such a massive difference

const multiply3 = (num1, num2) => {
  return num1 * num2;
};

console.log(multiply1(2, 3));
console.log(multiply2(3, 3));
console.log(multiply3(4, 3));
