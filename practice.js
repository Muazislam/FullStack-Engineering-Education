// Destructing, Renaming and Default

// let options = {
//   title: "menu",
//   width: 100,
//   height: 200,
// };

// let { title, width, height } = options;

// alert(title);
// alert(width);
// alert(height);

//================================================================

// Renaming the distructing object

//================================================================

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// // { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;

// // weight -> w
// // height --> h
// // title -> title

// alert(title);
// alert(w);
// alert(h);

//================================================================

// Giving default values or introducing missing
// properties to destructing object

//================================================================

// let options = {
//   title: "Tommorrow is in Gods hands",
// };

// let { width = 1, height = 2, title } = options;

// alert(width);
// alert(height);
// alert(title);

//================================================================

// Asking/prompting the user to give the values for the objects
// User gives the value himself

//================================================================

// let options = {
//   title: "Muaz will succeed to make more than a lakh before December",
// };

// let { width = prompt("Width?"), height = prompt("Height?"), title } = options;

// alert(title);
// alert(width);
// alert(height);

//================================================================

// Nested destructing of arrays

//================================================================

// let goals = {
//   archLinux: {
//     fileManagment: "needs to complete",
//     manPage: "utilizing it and becoming familiar to it",
//     networking: "needs to be worked on",
//   },
//   fullStackDev: {
//     frontEnd: "80% done",
//     backEnd: "0 out of 100 since not started yet",
//     database: "needs to be worked on",
//   },
// };

// let {
//   archLinux: {
//     fileManagment: fileManagmentProgress,
//     manPage: manPageProgress,
//     networking: networkingProgress,
//   },
//   fullStackDev: {
//     frontEnd: frontEndProgress,
//     backEnd: backEndProgress,
//     database: databaseProgress,
//   },
// } = goals;

// alert(fileManagmentProgress);
// alert(manPageProgress);
// alert(networkingProgress);
// alert(frontEndProgress);
// alert(backEndProgress);
// alert(databaseProgress);
