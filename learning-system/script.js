// -
// -
// -
const user = {
  name: "Muaz",

  regularGreet: function () {
    return "Hello, " + this.name;
  },
  arrowGreet: () => {
    return "Hello, " + this.name;
  },
};
console.log(user.regularGreet());
console.log(user.arrowGreet());

/*
1. What will each console.log output?
```
console.log(user.regularGreet()); will output 'Hello Muaz'
console.log(user.arrowGreet()); will output undefined error. Because this can not be passed in arrow funciton.

```
2. Why are the outputs different?
```
The normal function can can work with this but arrow function cannot, for the arrow
function, the this comes from the surroundinf scope rather than object.
So, both output are different. A normal person may think that both will
be the same but they are not
```

3.Rewrite arrowGreet so it works correctly with user.name.
```
const user = {
  name: "Muaz",

  regularGreet: function () {
    return "Hello, " + this.name;
  },
  arrowGreet: () => {
    return "Hello, " + user.name;
  },
};
console.log(user.regularGreet());
console.log(user.arrowGreet());

```

4. Explain why passing an object to a function is different from using this.
```
When we pass an object to a function, the object value can change because
the mutating the object inside the function
changes the orignal object.

this is determind by how a regular function is called
such as user.regularGreet().

this is not the object being passed as parameter.
```
*/
