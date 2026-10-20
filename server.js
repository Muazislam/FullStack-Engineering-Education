// import express from 'express';
//
// const app = express();
//
// app.get("/", (req, res) => {
//   res.send("Hello WOrld");
// })
//
// app.get("/about", (req, res) => {
//   res.send("about page")
// })
// app.listen(3000);

import app from "./src/app.js"

app.listen(3000, () => {
  console.log("Server is running at port 3000.")
});


