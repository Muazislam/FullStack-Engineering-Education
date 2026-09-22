// Smart function parameters

// We pass object to function

// let option = {
//   title: "I will succeed before december",
//   items: ["item1", "item2"],
// };

// ---- and it immediately expands it to variables

// function showMenu({
//   title = "Untitled",
//   width /*: w*/ = 100,
//   height /*: h */ = 200,
//   items = [],
// }) {
//   // title, items -- taken  from options
//   // width, heeight -- default used

//   alert(`${title} ${width} ${height}`);
//   // alert(`${title} ${w} ${h}`);
//   alert(items);
// }

// // showMenu(option);

// // If we want to pass the default values then
// showMenu({});

let option = {
  title: "I will succeed before december",
  items: ["item1", "item2"],
};

function showMenu({ title = "Muaz", width = 100, height = 200 } = {}) {
  alert(`${title}, ${width}, ${height}`);
}
showMenu();
