const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// ---------------------------------------------------------------
// LINE 1: Importing
// ---------------------------------------------------------------
// The curly braces are destructuring: we pull one named thing
// (createServer) out of a module. Same idea as React's
// `import { Component } from "react"`.
// `require` is Node's older way of importing. It is equivalent to:
//   import { createServer } from "node:http";
// `node:http` is NOT an npm package. It is a module built into Node
// that contains the tools for making a web server.
// const { createServer } = require("node:http");

// ---------------------------------------------------------------
// LINES 2-3: Address of the server
// ---------------------------------------------------------------
// hostname is a string because 127.0.0.1 has dots, so it can't be a
// number. This address means "this computer" (localhost).
// const hostname = "127.0.0.1";

// port is like a door number on that computer.
// The final URL is http://127.0.0.1:3000/ (a colon before the port,
// not a slash).
// const port = 3000;

// ---------------------------------------------------------------
// Creating the server
// ---------------------------------------------------------------
// createServer takes a function as its argument. This is an ARROW
// function (not an "error" function).
// Node calls this function EVERY TIME someone visits the server.
// It does NOT run when the server is created.
//
// req = request  -> what the browser sends to us
// res = response -> what we send back to the browser
//
// req is unused here because this server sends the same reply to
// everyone, no matter what they asked for.
//
// `server` is not true/false. It is an object (the server itself)
// that createServer returns.
// const server = createServer((req, res) => {
// 200 is the HTTP status code meaning "OK"
// (others: 404 = not found, 500 = server error)
// res.statusCode = 200;

// Tells the browser what kind of content is coming.
// Can be changed to "text/html" to send HTML instead.
// res.setHeader("Content-Type", "text/plain");

// Sends the text and finishes the response.
// res.end("Hello World");
// });

// ---------------------------------------------------------------
// Starting the server
// ---------------------------------------------------------------
// `listen` is a method that the server object has, so this simply
// means "call the listen method on the server" (it is not chaining).
// It actually starts the server on the given port and hostname.
// The values come from the variables above, not from the function
// inside createServer.
//
// The arrow function is a callback. It runs once, right after the
// server has started, and prints a message in the terminal.
// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`);
// });

// ---------------------------------------------------------------
// ORDER OF EVENTS WHEN YOU RUN THIS FILE
// ---------------------------------------------------------------
// 1. The server object is created and Node remembers the request
//    function.
// 2. listen() starts the server.
// 3. The console message prints.
// 4. Each time you open the URL in the browser, the request
//    function runs.
//
// Why functions? Servers work on the pattern "when something
// happens, run this code":
//   - first function  = when a request comes in, do this
//   - second function = when the server has started, do this
