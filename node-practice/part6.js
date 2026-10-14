// console.log(process.env.USER_ID);
// console.log(process.env.USER_KEY);

const { loadEnvFile } = require("node:process");

loadEnvFile("./env");
console.log(process.env.PORT);
