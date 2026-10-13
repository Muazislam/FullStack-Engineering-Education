const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
  console.log("Request recieved");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// =====================================================================
// NODE.JS BASIC HTTP SERVER - MY NOTES
// =====================================================================

// ---------------------------------------------------------------------
// 1. IMPORTING (require)
// ---------------------------------------------------------------------
// `const { createServer } = require("node:http");`
//
// - The curly braces are called DESTRUCTURING. They pull one named thing
//   (createServer) out of a module.
// - It is the same idea as React: `import { Component } from "react";`
// - `require` is Node's older way of importing. The modern equivalent is:
//   `import { createServer } from "node:http";`
// - `node:http` is NOT an npm package. It is a module built into Node
//   that contains the tools for making a web server.
// - `createServer` is a FUNCTION that comes from that module.
//   It is NOT a method of the server object. It BUILDS the server object.
const { createServer } = require("node:http");

// ---------------------------------------------------------------------
// 2. HOSTNAME AND PORT
// ---------------------------------------------------------------------
// - hostname is a STRING because "127.0.0.1" contains dots, so it can't
//   be a number. This address means "this computer" (localhost).
// - port is a NUMBER. It is like a door number on the computer.
// - The final URL is `http://127.0.0.1:3000/`
//   (a COLON before the port, not a slash).
const hostname = "127.0.0.1";
const port = 3000;

// ---------------------------------------------------------------------
// 3. CREATING THE SERVER
// ---------------------------------------------------------------------
// WHAT IS A FUNCTION AS AN ARGUMENT?
// - In JavaScript a function is a value, just like a number or a string,
//   so it can be passed into another function.
// - Normally we pass DATA: `add(2, 3)`.
//   Here we pass INSTRUCTIONS: `createServer(handleRequest)`.
// - We are telling Node: "I don't know when a request will arrive, so
//   here is what to do whenever one does."
// - No parentheses after `handleRequest`, because we hand over the
//   function itself. We do NOT run it. Node runs it later.
//
// WHAT IS A CALLBACK FUNCTION?
// - A function that you give to another function so that it can be
//   called LATER, when something happens.
// - Both of my arrow functions in this file are callbacks.
//
// req = REQUEST  -> what the browser sends TO the server
// res = RESPONSE -> what the server sends BACK to the browser
//
// - The handler function below is the one that deals with request and
//   response. `createServer` itself does NOT deal with them.
// - It does NOT run when the server is created. It runs EVERY TIME a
//   request arrives (every time the URL is opened or refreshed).
// - `req` is unused here because this server sends the same reply to
//   everyone, no matter what they ask for.
// - The browser may also ask for `/favicon.ico`, so the handler can
//   sometimes run twice per refresh.
//
// HOW TO WRITE THE HANDLER STEP BY STEP:
//   Step 1: write the function:
//           `function handleRequest(req, res) { }`
//   Step 2: set the status code:
//           `res.statusCode = 200;`
//   Step 3: set the content type:
//           `res.setHeader("Content-Type", "text/plain");`
//   Step 4: send the body and finish the response:
//           `res.end("Hello World");`
//   Step 5: give the function to createServer and save the result:
//           `const server = createServer(handleRequest);`
//   Step 6 (optional): write the function inline as an arrow function,
//           which is what this file does.
//
// ORDER INSIDE THE HANDLER: status -> headers -> body (res.end).
// Headers must be set BEFORE `res.end`, because once the response is
// finished it can't be changed.
//
// WHAT EACH LINE MEANS:
// - `res.statusCode = 200;` -> 200 means "OK"
//   (others: 404 = not found, 500 = server error).
// - `res.setHeader("Content-Type", "text/plain");` -> tells the browser
//   what kind of content is coming. Can be changed to "text/html" to
//   send HTML instead.
// - `res.end("Hello World");` -> sends the text AND finishes the
//   response. Finishing the response is its main job.
//
// WHAT DOES createServer RETURN? WHY SAVE IT IN `server`?
// - Many functions give back a value when they finish. This is called
//   RETURNING.
// - `createServer(...)` returns the SERVER OBJECT itself. It does NOT
//   return any request or response data.
// - The `server` variable is just a name for that object. The variable
//   and the object are the same thing.
// - We save it so that we can call `server.listen(...)` afterwards.
//   Without a name, we couldn't start it.
// - `server` is not true or false. It is an object.
// - Car comparison:
//     `createServer(handler)` -> builds the car and gives it its
//                                instructions
//     `const server = ...`    -> keeps the car in my hands
//     `server.listen(...)`    -> turns the key
// - When createServer is called, Node stores my handler inside the
//   server object. Later, when a request arrives, the server object
//   calls that stored handler and gives it `req` and `res`.
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

// ---------------------------------------------------------------------
// 4. STARTING THE SERVER (listen)
// ---------------------------------------------------------------------
// - `listen` is a METHOD that the server object already has. I did not
//   create it. I only call it. (TV remote comparison: the power button
//   is already built in.)
// - `server.listen(port, hostname, callback)` is the line that actually
//   STARTS the server. The method name itself does the starting. No
//   separate "start" line is needed.
// - The port and hostname come from my variables above, not from the
//   handler function.
// - It is NOT chaining. It is simply "call the listen method on the
//   server object."
// - The arrow function is a CALLBACK. It runs ONCE, right after the
//   server has started, and prints a message in the terminal. It does
//   NOT run when a browser request arrives.
// - After `listen`, the server stays alive and keeps waiting. The
//   terminal stays busy until I stop it with `Ctrl + C`.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// ---------------------------------------------------------------------
// 5. TWO FUNCTIONS, TWO DIFFERENT TIMES
// ---------------------------------------------------------------------
// - The listen callback (with console.log) runs ONCE, when the server
//   starts.
// - The request handler (with res.end) runs EVERY TIME a request comes
//   in.
// - To see the difference, add `console.log("request received");` inside
//   the handler. "Server running" prints once at startup, and "request
//   received" prints on every browser refresh.

// ---------------------------------------------------------------------
// 6. WHY IS IT WRITTEN IN TWO STEPS?
// ---------------------------------------------------------------------
// The simplest mental model:
//   `const server = createServer(handleRequest);` -> 1. build the server
//                                                    and give it its job
//   `server.listen(3000);`                        -> 2. turn it on
//
// - Without step 1, there would be nothing to run when a request
//   arrives.
// - Without step 2, no request would ever arrive.
// - Everything else in the file is extras: the address variables and the
//   console message.
// - A server can't know in advance when visitors will come. Writing
//   "when X happens, run this function" is how Node handles anything
//   that happens at an unknown time.
// - React's `onClick` uses the same idea.

// ---------------------------------------------------------------------
// 7. ORDER OF EVENTS WHEN I RUN THIS FILE
// ---------------------------------------------------------------------
// 1. The server object is created and Node remembers the handler
//    function.
// 2. `listen` starts the server.
// 3. The console message prints (once).
// 4. Each time I open or refresh the URL in the browser, the handler
//    runs.
