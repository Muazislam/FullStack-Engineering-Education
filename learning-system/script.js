// result = a !== null && a !== undefined ? a : b;

// let user = "John";

// console.log(user ?? "Anonymous");

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// console.log(firstName || lastName || nickName || "Anonymous");
//

// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

// || returns the first truthy value
// ?? returns the first defined value.
//

// precendence of ?? operator is the same as ||. They both equal 3.
// just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but
// after most other operations, such as +,*.

// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 50);
// console.log(area);
//

// let area = height ?? 100 * width ?? 50;

let area2 = height ?? 100 * width ?? 50;
