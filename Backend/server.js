const express = require("express");
const app = express();

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.json({ sum });
});
app.listen(300, () => console.log("Running on 3000"));

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  const message = "Hello, " + name;
  res.send(message);
});

app.listen(3000, () => console.log("Running on 3000"));
