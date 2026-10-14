import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? `, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});

// Import the default export of Node's built-in "readline" module.
// No curly braces: a default export has no fixed name, so I can name
// the variable whatever I want (here, "readline").
// Curly braces would mean "import a named export", and the name would
// have to match exactly, e.g. import { createInterface } from "node:readline";
import readline from "node:readline";

// createInterface() creates an interface (a session) for reading and
// writing lines of text. I store it in the variable "rl", and it is an
// object with its own methods, like rl.question() and rl.close().
//
// The curly braces here are NOT an import. They are one object that I
// pass as an argument. "input" and "output" are property names (keys)
// that createInterface knows how to look for, and the Node docs list them.
//
// input: process.stdin   -> where the text comes from (the keyboard in the terminal)
// output: process.stdout -> where the text goes (the terminal screen)
//
// readline works with any stream, such as a file, so I have to say
// which one I want to use.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question() prints the question to the screen and waits for the user
// to type something and press Enter.
// The function (name) => { ... } is a callback. It does not run
// immediately. It runs later, when the user presses Enter, and "name"
// holds whatever they typed.
rl.question(`What's your name? `, (name) => {
  console.log(`Hi ${name}!`);

  // Close the session so the input stream stops listening.
  // Without this, the program stays open and never exits.
  rl.close();
});
