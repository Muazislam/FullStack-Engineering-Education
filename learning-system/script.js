// let user = {};

// console.log(user.address.street);

// document.querySelector('.elem') is null if there's no element.
// let html = document.querySelector("elem").innerHTML; // error if it's null

// let user = {};

// console.log(user.address ? user.address.street : undefined);  // THis is not correct either.

// let user = {};

// console.log(user.address && user.address.street && user.address.street.name);

// Anything before ?. that is undefined or null make the code stop.

// let user = {};

// console.log(user?.address?.street);

// let html = document.querySelector("elem")?.innerHTML;

// let user = null;

// console.log(user?.address);
// console.log(user?.address.street);

// let user = null;
// let x = 0;

// user?.sayHi(x++);

// console.log(x);

// let userAdmin = {
//   admin() {
//     console.log("I am admin");
//   },
// };

// let userGuest = {};

// userAdmin.admin?.();
// userGuest.admin?.();

// let key = "firstName";

// let user1 = {
//   firstName: "John",
// };

// let user2 = null;

// console.log(user1?.[key]);
// console.log(user2?.[key]);
//
//
//

//let key = "firstName";

//let user1 = {
//  firstName: "John",
//};

//let user2 = null;

//console.log(user1?.[key]);
//console.log(user2?.[key]);

let user = null;

user?.name = "John";
