// // We have an array with a name and surname
// let arr = ["John", "Smith"];

// // destructing assignment
// // set's firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = arr;

// alert(firstName);
// alert(surname);

// -------------------------------------
// -------------------------------------

// let [firstName, surname] = "John Smith".split(" ");
// alert(firstName);
// alert(surname);

// -------------------------------------
// -------------------------------------

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let [key, value] of Object.entries(user)) {
//   // The Object.entries first converts the object
//   // into array. meaning,,
//   // [["name", "John"], ["age", 30]].
//   // because for...of doesn't work on object.
//   // it works on arrays. So, smartly, we first convert the object
//   // into the array and then we make the output.

//   alert(`${key}: ${value}`);
// }

// -------------------------------------
// -------------------------------------

// let guest = "Jane";
// let admin = "Pete";

// [guest, admin] = [admin, guest];

// alert(`${guest} ${admin}`);

// -------------------------------------
// -------------------------------------

// let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert(name1);
// alert(name2);
// Further items aren't assigned anywhere

// -------------------------------------
// -------------------------------------

// let [name1, name2, ...rest] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// alert(name1);
// alert(name2);
// alert(rest[0]);
// alert(rest[1]);
// alert(rest.length);

// let [name1, name2, ...titles] = ["Julius", "Caesar", "Counsul", "of the Roman Republic"];

// -------------------------------------
// -------------------------------------

// let [firstName, surname] = [];

// alert(firstName);
// alert(surname);

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name);
// alert(surname);

// -------------------------------------
// -------------------------------------

// let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

// alert(name);
// alert(surname);

// -------------------------------------
// -------------------------------------

// let {var1, var2} = {var1:..., var2:...}

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title, width, height } = options;

// alert(title);
// alert(width);
// alert(height);

// -------------------------------------
// -------------------------------------

// let {height, width, title} = { title: "Menu", height: 200, width: 100};

// -------------------------------------
// -------------------------------------

// let options = {
//   name: "Muaz",
//   height: 5.9,
//   age: 23,
// };

// let { name: n, height: h, age: a } = options;

// console.log(n);
// console.log(h);
// console.log(a);

// -------------------------------------
// -------------------------------------

// let options = {
//   name: "Muaz",

//   age: 22,
//   height: 5.9,
// };

// let { name, surname = "Islam Babar", age, height } = options;

// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(height);

// -------------------------------------
// -------------------------------------

// let options = {
//   title: "Menu",
// };

// let { width = prompt("width?"), title = prompt("title?") } = options;

// console.log(title);
// console.log(width);

// -------------------------------------
// -------------------------------------

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title } = options;

// console.log(title);

// -------------------------------------
// -------------------------------------

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
// };

// let { title, ...rest } = options;

// console.log(rest.height);
// console.log(rest.width);

// -------------------------------------
// -------------------------------------

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item1, item2],

// } = options;

// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);

// -------------------------------------
// -------------------------------------

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };

// function showMenu({
//   title = "Untitled",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   console.log(`${title} ${width} ${height}`);
//   console.log(items);
// }

// showMenu(options);

// -------------------------------------
// -------------------------------------

