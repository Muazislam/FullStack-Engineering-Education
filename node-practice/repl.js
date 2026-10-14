import repl from "node:repl";

const local = repl.start("$");

local.on("exit", () => {
  console.log("exiting repl");
  process.exit();
});

// =====================================================================
// NODE.JS REPL EXAMPLE - MY NOTES
// =====================================================================
// REPL = Read, Evaluate, Print, Loop.
// It is an interactive session where I type JavaScript and Node runs it
// line by line.

// ---------------------------------------------------------------------
// 1. IMPORTING THE MODULE
// ---------------------------------------------------------------------
// `import repl from "node:repl";`
//
// - This is the modern `import` syntax (not `require`).
// - There are NO curly braces, so I am importing the WHOLE module and
//   giving it the name `repl`.
// - `node:repl` is built into Node. It is not an npm package.
// - `repl` is the MODULE (the toolbox). It contains functions such as
//   `start`. It does NOT contain `on`.
import repl from "node:repl";

// ---------------------------------------------------------------------
// 2. STARTING A REPL SESSION
// ---------------------------------------------------------------------
// `const local = repl.start("$");`
//
// - `start` is a function that lives inside the `repl` module, so I
//   call it with `repl.start(...)`.
// - "$" is a string that sets the PROMPT, the symbol shown where I type.
//   I can change it to anything, such as "> " or "node> ".
//
// WHAT DOES "RETURN" MEAN?
// - When a function finishes, it can hand a value back to whoever
//   called it. This is called RETURNING.
// - `repl.start(...)` builds a new REPL SESSION and returns it.
// - `const local = ...` saves that session under the name `local`.
// - So `local` IS the session object. Everything the session needs to
//   work is inside it, including the method `on`.
//
// TWO DIFFERENT OBJECTS (important):
// - `repl`  = the MODULE (toolbox). It has `start`, but NOT `on`.
// - `local` = the SESSION that `start` built. It HAS `on`.
// - That is why I write `local.on(...)` and not `repl.on(...)`.
// - Same idea as the HTTP server: the `http` module is the toolbox,
//   and `server` is what `createServer` built.
const local = repl.start("$");

// ---------------------------------------------------------------------
// 3. LISTENING FOR THE "exit" EVENT
// ---------------------------------------------------------------------
// `local.on("exit", () => { ... });`
//
// WHAT IS `on`?
// - `on` is a METHOD of the session object (`local`).
// - It does NOT exit the REPL. It LISTENS for an event and says:
//   "when this event happens, run this function."
// - It takes TWO arguments:
//     1. the event NAME ("exit") -> a string, because it is just a name
//     2. the function to run     -> a callback (an arrow function)
// - `on` stores them as a pair. Later, when the event happens, the
//   session finds the function saved under that name and calls it.
// - The function does not need to know the name. The session does the
//   matching.
//
// WHAT HAPPENS WHEN I TYPE `.exit`?
// 1. `.exit` is a built-in REPL command that closes the REPL.
// 2. Closing the REPL triggers the "exit" EVENT.
// 3. The session calls my callback.
// 4. The callback prints "exiting repl" and then calls
//    `process.exit()`.
//
// WHY DOES THE FUNCTION HAVE NO ARGUMENTS?
// - The code that triggers the callback decides what to hand to it.
// - In the HTTP server, Node handed over `req` and `res` because I
//   needed them to read and reply.
// - The "exit" event has nothing to hand over, so my function takes
//   none.
//
// WHAT IS `process`?
// - `process` is a GLOBAL object that Node makes available everywhere
//   without importing it, the same way `console` is.
// - It is NOT a property of `on` or of the REPL, and it is not passed
//   as an argument. It is already available.
// - `process.exit()` ends the whole Node program.
local.on("exit", () => {
  console.log("exiting repl");
  process.exit();
});

// ---------------------------------------------------------------------
// 4. THE LOGIC OF THE WHOLE FILE
// ---------------------------------------------------------------------
// 1. Import the REPL module.
// 2. Call `repl.start("$")` to create a session, and save the session
//    in `local`.
// 3. Use `local.on("exit", callback)` to say: "when the REPL closes,
//    run this function."
// 4. When I type `.exit`, the REPL closes, the "exit" event happens,
//    my callback runs, and `process.exit()` ends the program.
//
// SAME PATTERN AS THE HTTP SERVER:
//   `createServer(handler)` -> handler runs when a REQUEST arrives
//   `local.on("exit", fn)`  -> fn runs when the EXIT event happens
// In both cases I give Node a function now, and Node calls it later.
