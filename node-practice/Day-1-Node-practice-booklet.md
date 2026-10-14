# Node.js Practice Guide (Beginner, Step by Step)

Based on the official Node.js Learn pages and the npm docs.
How to use this file: read a step, type the code yourself (don't copy-paste, typing builds memory), run it, and compare with "You should see". Then change things and watch what happens. After finishing, practice on your own test questions.

Commands use a Linux/macOS shell. Everything is in plain English.

---

## Part 0: Setup

1. Check Node.js and npm are installed:

```bash
node -v
npm -v
```

You should see version numbers (for example `v22.x.x`). If you get "command not found", install Node.js first from nodejs.org.

2. Make a practice folder and move into it:

```bash
mkdir node-practice
cd node-practice
```

3. Every part below uses a new file inside this folder (`part1.js`, `part2.js`, ...).

---

## Part 1: What is Node.js?

**Idea in simple words**

- Node.js lets you run JavaScript **outside the browser**.
- It uses the V8 engine (the same engine inside Google Chrome).
- It runs your app in **a single process, without a new thread for every request**.
- When Node.js waits for slow things (network, database, files), it does **not freeze**. It continues with other work and comes back when the answer arrives. This is called **non-blocking I/O**.
- Benefit: one server can handle thousands of connections, and frontend developers can use JavaScript on the server too.

**Practice: your first web server**

Create `part1.js`:

```js
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
```

Run it:

```bash
node part1.js
```

You should see: `Server running at http://127.0.0.1:3000/`

Open `http://127.0.0.1:3000/` in your browser. You see **Hello World**.
Stop the server with `Ctrl + C` in the terminal.

**Line by line meaning**

| Code                     | Meaning                                                             |
| ------------------------ | ------------------------------------------------------------------- |
| `require('node:http')`   | Load Node's built-in HTTP module                                    |
| `createServer(...)`      | Makes a server. The function inside runs for every incoming request |
| `req`                    | Request object (details about what the client asked)                |
| `res`                    | Response object (used to send data back)                            |
| `res.statusCode = 200`   | 200 means "OK / success"                                            |
| `res.setHeader(...)`     | Tells the browser what type of data you send                        |
| `res.end('Hello World')` | Finishes the response with this content                             |
| `server.listen(...)`     | Starts the server on that port                                      |

**Things to experiment with**

- Change `'Hello World'` to your own text, restart the server, refresh the browser.
- Change the port to `4000`.
- Change `statusCode` to `404` and watch the browser/DevTools Network tab.
- Change `text/plain` to `text/html` and send `'<h1>Hi</h1>'`.

**CommonJS vs ES Modules (ESM)**

The docs show two styles. Both do the same thing:

```js
// CommonJS (what we used)  -> file: server.js
const { createServer } = require("node:http");

// ES Modules              -> file: server.mjs
import { createServer } from "node:http";
```

Use `.mjs` for the import style, or add `"type": "module"` in `package.json`.

---

## Part 2: Running scripts from the command line

**2.1 Basic run**

```bash
node part1.js
```

**2.2 Run a string of code with `-e`**

```bash
node -e "console.log(123)"
```

You should see `123`.

**2.3 Auto-restart on changes with `--watch`**

Create `part2.js`:

```js
console.log("Hello from part2");
```

Run:

```bash
node --watch part2.js
```

Now edit the message in `part2.js` and save. Node restarts automatically and prints the new message. Stop with `Ctrl + C`.

**2.4 Shebang (running a script like a program)**

Create `hello.js`:

```js
#!/usr/bin/env node
console.log("I ran without typing node!");
```

Give it permission and run it:

```bash
chmod u+x hello.js
./hello.js
```

Notes:

- The first line (`#!/usr/bin/env node`) tells the OS which program should run the file.
- `env node` is preferred over a fixed path like `/usr/bin/node` because node may live in different folders.

**2.5 Built-in task runner with `--run`**

Create `package.json` in your folder:

```json
{
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "test": "node --test"
  }
}
```

Create `app.js`:

```js
console.log("app running");
```

Run:

```bash
node --run start
```

Pass extra arguments after `--`:

```bash
node --run start -- --port 8080
```

This is the same as `node app.js --port 8080`. You can read these arguments in code with `process.argv`.

Good to know: the Node task runner is intentionally simple. It does **not** run `pre` and `post` scripts (npm does).

---

## Part 3: The REPL (interactive Node)

Type `node` with no file name:

```bash
node
```

You get a `>` prompt. Try these one at a time:

```js
> console.log('test')
> 5 === '5'
> 2 + 2
> _
```

What to notice:

- `console.log('test')` prints `test`, then shows `undefined` (that is the return value of `console.log`).
- `5 === '5'` just shows `false`, because it is an expression and the REPL prints expression results automatically.
- `_` prints the result of the last operation.
- Press the **Up arrow** to see old commands (history is kept across sessions).

**Multi-line code**

```js
> function generateRandom() {
... return Math.random()
... }
> generateRandom()
```

The `...` means Node knows your code is not finished yet.

**Dot commands**

| Command             | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `.help`             | Shows help                                      |
| `.editor`           | Multi-line editor mode (finish with `Ctrl + D`) |
| `.break` / `.clear` | Leave a multi-line block (same as `Ctrl + C`)   |
| `.save file.js`     | Save everything you typed to a file             |
| `.load file.js`     | Load a JS file into the session                 |
| `.exit`             | Quit (same as `Ctrl + C` twice)                 |

**Start a REPL from your own file**

Create `repl.js`:

```js
const repl = require("node:repl");

const local = repl.start("$ ");

local.on("exit", () => {
  console.log("exiting repl");
  process.exit();
});
```

Run `node repl.js`, type a few expressions, then `.exit`.

---

## Part 4: Output to the command line

Create `part4.js` and add one block at a time. Run after each block with `node part4.js`.

**4.1 console.log with several values**

```js
const x = "x";
const y = "y";
console.log(x, y);
```

**4.2 Format specifiers**

```js
console.log("My %s has %d ears", "cat", 2);
```

| Specifier | Formats as        |
| --------- | ----------------- |
| `%s`      | string            |
| `%d`      | number            |
| `%i`      | integer part only |
| `%o`      | object            |

Try `console.log('%i', 42.9)` and `console.log('%o', Number)`.

**4.3 console.clear()**

Clears the terminal (behaviour depends on your terminal).

**4.4 console.count() and countReset()**

```js
const oranges = ["orange", "orange"];
const apples = ["just one apple"];

oranges.forEach((fruit) => {
  console.count(fruit);
});
apples.forEach((fruit) => {
  console.count(fruit);
});

console.countReset("orange");

oranges.forEach((fruit) => {
  console.count(fruit);
});
```

You should see `orange: 1`, `orange: 2`, `just one apple: 1`, then after reset `orange: 1`, `orange: 2` again.

**4.5 console.trace() (see how you got here)**

```js
const function2 = () => console.trace();
const function1 = () => function2();
function1();
```

It prints the call stack: `function2` was called by `function1`, which was called from the main file.

**4.6 Measure time**

```js
const doSomething = () => console.log("test");
const measureDoingSomething = () => {
  console.time("doSomething()");
  doSomething();
  console.timeEnd("doSomething()");
};
measureDoingSomething();
```

**4.7 stdout and stderr**

```js
console.log("normal output"); // stdout
console.error("error output"); // stderr
```

Both show in the terminal, but they can be handled separately. Try this to see the difference:

```bash
node part4.js 2> errors.txt
```

Only error lines go into `errors.txt`.

**4.8 Colored output**

```js
import { styleText } from "node:util";

console.log(
  styleText(["red"], "This is red text ") +
    styleText(["green", "bold"], "and this is green bold text ") +
    "this is normal text",
);
```

Because this uses `import`, save it as `part4-color.mjs` and run `node part4-color.mjs`. (The docs note `styleText` was marked as "active development" in v22.11.)

---

## Part 5: Accept input from the command line

Create `part5.js`:

```js
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? `, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});
```

Run `node part5.js`, type your name, press Enter.

How it works:

- `process.stdin` is the keyboard input stream.
- `rl.question()` shows a question and waits.
- When you press Enter, the **callback function** runs with your text.
- `rl.close()` ends the input interface so the program can exit.

---

## Part 6: Environment variables

**6.1 Set variables on the command line**

Create `part6.js`:

```js
console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);
```

Run:

```bash
USER_ID=239482 USER_KEY=foobar node part6.js
```

You should see `239482` and `foobar`. (`process` is a global object. No import needed.)

**6.2 Using a `.env` file**

Create `.env`:

```
PORT=3000
```

Create `part6b.js`:

```js
console.log(process.env.PORT);
```

Run:

```bash
node --env-file=.env part6b.js
```

You should see `3000`.

Extra options from the docs:

- Several files: `node --env-file=.env --env-file=.development.env app.js` (later files override earlier ones).
- If a variable exists both in the real environment and in the file, the **environment value wins**.
- Do not crash if file is missing: `node --env-file-if-exists=.env app.js`.

**6.3 Load a `.env` file from inside code**

```js
const { loadEnvFile } = require("node:process");
loadEnvFile("./.env");
console.log(process.env.PORT);
```

Note: this loads after Node has started, so it cannot change startup settings like `NODE_OPTIONS`.

Security habit: never put secrets (passwords, keys) in files you upload to GitHub. Add `.env` to `.gitignore`.

---

## Part 7: Asynchronous programming and callbacks

**Key ideas**

- JavaScript is **synchronous and single threaded** by default: lines run one after another.
- Waiting tasks (timers, network, files, clicks) are handled by the **environment** (browser or Node.js), not by blocking your code.
- A **callback** is a function passed to another function, to be run later when something happens.

**7.1 Synchronous order**

```js
const a = 1;
const b = 2;
const c = a * b;
console.log(c);
```

**7.2 A timer callback**

```js
console.log("before");

setTimeout(() => {
  console.log("runs after 2 seconds");
}, 2000);

console.log("after");
```

You should see: `before`, `after`, then 2 seconds later `runs after 2 seconds`.
This is the most important behaviour to understand: Node did not wait at the timer.

**7.3 Error-first callbacks (Node's convention)**

The first parameter of a Node callback is the error (or `null` if no error).

```js
const fs = require("node:fs");

fs.readFile("/file.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
```

`/file.json` does not exist, so you see an error object. Now create a real file (for example `hello.txt` with some text), change the path, and watch the `data` part run (it prints a Buffer; add `'utf8'` as the second argument to get text).

**7.4 The problem: callback nesting**

```js
setTimeout(() => {
  console.log("step 1");
  setTimeout(() => {
    console.log("step 2");
    setTimeout(() => {
      console.log("step 3");
    }, 500);
  }, 500);
}, 500);
```

It works, but every step adds another level. With many steps the code becomes hard to read ("callback hell"). Promises and async/await (Part 9) solve this.

---

## Part 8: Asynchronous flow control

**8.1 Why a loop with `setTimeout` does not work as expected**

```js
function getSong() {
  let _song = "";
  let i = 100;
  for (i; i > 0; i -= 1) {
    setTimeout(function () {
      _song += `${i} beers on the wall\n`;
    }, 0);
  }
  return _song;
}

const song = getSong();
console.log(`song is: "${song}"`);
```

You should see an empty string. Reason: `getSong()` returns **before** the timeouts run. Data that arrives later (files, network) cannot be returned like normal values. That is why callbacks (or promises) are used.

**8.2 Initiator, middleware, terminator**

```js
function final(someInput, callback) {
  callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
  return final(`${someInput} touched by middleware `, callback);
}

function initiate() {
  const someInput = "hello this is a function ";
  middleware(someInput, function (result) {
    console.log(result);
  });
}

initiate();
```

Flow: `initiate` (start) -> `middleware` (change/process) -> `final` (calls your callback).

**8.3 Three flow patterns (concept only)**

| Pattern           | Meaning                           | Use when                  |
| ----------------- | --------------------------------- | ------------------------- |
| In series         | One after another, strict order   | Order matters             |
| Limited in series | In order, but stops after a limit | You only need N successes |
| Full parallel     | All start at once, no order       | Order does not matter     |

A small series example you can run and study:

```js
const operations = [
  { name: "first", ms: 300 },
  { name: "second", ms: 200 },
  { name: "third", ms: 100 },
];

function run(op, callback) {
  setTimeout(() => {
    console.log("done:", op.name);
    callback();
  }, op.ms);
}

function serial(ops) {
  const op = ops.shift();
  if (!op) return console.log("finished");
  run(op, () => serial(ops));
}

serial([...operations]);
```

Output order is `first`, `second`, `third` (in series). Now run them in parallel and compare:

```js
operations.forEach((op) => run(op, () => {}));
```

Output order becomes `third`, `second`, `first` (shortest time finishes first).

**State tip from the docs:** avoid global variables for state. Pass values into functions instead.

---

## Part 9: Promises and async/await

**9.1 What is a Promise?**

A Promise represents a value that is not ready yet but will be later (like ordering a pizza). It has three states:

| State     | Meaning               |
| --------- | --------------------- |
| Pending   | Still working         |
| Fulfilled | Finished successfully |
| Rejected  | Failed with a reason  |

When it is fulfilled or rejected it is called **settled**.

**9.2 Create a promise**

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Something went wrong.");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("The promise has completed"));
```

Run it, then set `success = false` and run again to see `.catch` work.

| Method       | Runs when              |
| ------------ | ---------------------- |
| `.then()`    | Promise fulfilled      |
| `.catch()`   | Promise rejected       |
| `.finally()` | Always, after settling |

**9.3 Chaining**

```js
const { setTimeout: delay } = require("node:timers/promises");

delay(1000)
  .then(() => {
    console.log("First task completed");
    return delay(1000).then(() => "Second task completed");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));
```

Each `.then()` waits for the one before it.

**9.4 async / await**

```js
const { setTimeout: delay } = require("node:timers/promises");

const promise1 = delay(1000).then(() => "First task completed");
const promise2 = delay(1000).then(() => "Second task completed");

async function performTasks() {
  try {
    const result1 = await promise1;
    console.log(result1);

    const result2 = await promise2;
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
}

performTasks();
```

- `async` marks a function that returns a Promise.
- `await` pauses **inside that function** until the promise settles.
- Use `try/catch` for errors.

**9.5 Top-level await (ES Modules only)**

Save as `top.mjs`:

```js
import { setTimeout as delay } from "node:timers/promises";

await delay(1000);
console.log("waited 1 second");
```

**9.6 Promise-based file system**

```js
const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("hello.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFile();
```

Compare this with the callback version in Part 7.3. Same job, much cleaner.

**9.7 Running several promises**

```js
const { setTimeout: delay } = require("node:timers/promises");

const a = delay(1000).then(() => "Data from API 1");
const b = delay(2000).then(() => "Data from API 2");

Promise.all([a, b]).then((results) => console.log(results));
```

| Method                     | Behaviour                                                       |
| -------------------------- | --------------------------------------------------------------- |
| `Promise.all`              | Waits for all. Rejects immediately if any fails                 |
| `Promise.allSettled`       | Waits for all. Gives status of each, never short-circuits       |
| `Promise.race`             | Result of the first one to settle (success or failure)          |
| `Promise.any`              | First one to succeed. Fails only if all fail (`AggregateError`) |
| `Promise.resolve / reject` | Make an already resolved/rejected promise                       |
| `Promise.try`              | Runs a function (sync or async) and wraps result in a promise   |
| `Promise.withResolvers`    | Gives `{ promise, resolve, reject }` to settle from outside     |

Try each one with small delays (like 1000, 1500, 2000 ms) and print the results. Change a promise to `Promise.reject('Failed')` and see how each method reacts.

**9.8 Scheduling order: sync, microtask, nextTick, setImmediate**

```js
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
queueMicrotask(() => console.log("microtask"));
console.log("synchronous");
```

Run it several times and study the order. Synchronous code always comes first. Then read the "When to use each" notes from the docs:

- `queueMicrotask()`: right after current script, before I/O and timers.
- `process.nextTick()`: before I/O events.
- `setImmediate()`: after the poll phase (after most I/O callbacks).

Warning from the docs: errors inside these callbacks are **not** caught by a surrounding `try/catch`.

---

## Part 10: Anatomy of an HTTP transaction

**10.1 Create the server and look at the request**

```js
const http = require("node:http");

http
  .createServer((request, response) => {
    const { method, url, headers } = request;
    console.log(method, url);
    console.log(headers["user-agent"]);
    response.end("ok");
  })
  .listen(8080);
```

Run it and open `http://localhost:8080/hello` in the browser. In the terminal you see the method (`GET`), the url (`/hello`) and the browser's user-agent.

Notes:

- `url` is everything after the host and port.
- All header names are **lowercase** in Node.
- `rawHeaders` exists if you need the original format.

**10.2 Reading the request body**

The request is a **stream**. Data comes in chunks, so you collect them:

```js
const http = require("node:http");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => console.error(err))
      .on("data", (chunk) => body.push(chunk))
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.end("got it");
      });
  })
  .listen(8080);
```

Send a POST request from another terminal:

```bash
curl -X POST -d "hello body" http://localhost:8080/
```

**10.3 Sending a response**

| Task                      | Code                                                               |
| ------------------------- | ------------------------------------------------------------------ |
| Status code               | `response.statusCode = 404;`                                       |
| Header                    | `response.setHeader('Content-Type', 'application/json');`          |
| Status + headers together | `response.writeHead(200, { 'Content-Type': 'application/json' });` |
| Write body                | `response.write('text'); response.end();`                          |
| Write and finish          | `response.end('text');`                                            |

Rule: set status and headers **before** writing the body. If you never set a status, it is `200`.

**10.4 Send everything back as JSON**

```js
const http = require("node:http");

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on("error", (err) => console.error(err))
      .on("data", (chunk) => body.push(chunk))
      .on("end", () => {
        body = Buffer.concat(body).toString();

        response.on("error", (err) => console.error(err));

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");

        const responseBody = { headers, method, url, body };
        response.end(JSON.stringify(responseBody));
      });
  })
  .listen(8080);
```

Test: `curl -X POST -d "hi" http://localhost:8080/test`

**10.5 Echo server with simple routing**

```js
const http = require("node:http");

http
  .createServer((request, response) => {
    if (request.method === "POST" && request.url === "/echo") {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);
```

Test both cases:

```bash
curl -X POST -d "repeat me" http://localhost:8080/echo
curl -i http://localhost:8080/other
```

Ideas to understand:

- `request` is a readable stream, `response` is a writable stream, so `pipe` connects them.
- Checking method and url is a basic form of **routing**. Frameworks like Express do this for you later.

**10.5b Handle errors**

```js
const http = require("node:http");

http
  .createServer((request, response) => {
    request.on("error", (err) => {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });
    response.on("error", (err) => {
      console.error(err);
    });
    if (request.method === "POST" && request.url === "/echo") {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);
```

Rule: if a stream emits `'error'` and nobody listens, Node can crash. Always attach error listeners.

---

## Part 11: npm basics

npm is Node's package manager. Packages are pre-built pieces of code (libraries) that your project uses.

**11.1 Create a project**

```bash
mkdir npm-practice
cd npm-practice
npm init -y
```

`npm init` normally asks you questions and writes `package.json`. The `-y` flag accepts all defaults. Open `package.json` and read it.

Other things from the docs:

- `npm init <name>` runs a `create-<name>` package, for example `npm init react-app ./my-app` (same as `npm exec create-react-app`).
- Defaults you can change: `init-author-name`, `init-license` (default `ISC`), `init-version` (default `1.0.0`), `init-type` (default `commonjs`).

**11.2 Install a package**

```bash
npm install lodash
```

Look at what changed:

- A `node_modules` folder appeared (the code lives there).
- `package.json` now has a `dependencies` section.
- `package-lock.json` was created (it records the exact versions installed).

Use it, create `use-lodash.js`:

```js
const _ = require("lodash");
console.log(_.capitalize("hello world"));
```

**11.3 Install flags**

```bash
npm install nodemon --save-dev
npm install lodash --no-save
npm install lodash@4.17.21
npm install lodash --save-exact
```

| Flag              | Short | Effect                                                                         |
| ----------------- | ----- | ------------------------------------------------------------------------------ |
| `--save`          | `-S`  | Add to `dependencies` (default since npm 5)                                    |
| `--save-dev`      | `-D`  | Add to `devDependencies` (tools used only in development, like test libraries) |
| `--save-optional` | `-O`  | Add to `optionalDependencies` (install failure will not break everything)      |
| `--no-save`       |       | Install but do not write to `package.json`                                     |
| `--save-exact`    | `-E`  | Save the exact version, not a range                                            |

After each command, open `package.json` and see how it changed.

**11.4 Install everything for an existing project**

Delete the `node_modules` folder, then:

```bash
npm install
```

npm reads `package.json` (and `package-lock.json`) and rebuilds `node_modules`.

How the lock file works:

- If the lock file's versions satisfy the ranges in `package.json`, npm uses the lock file versions (same result everywhere).
- If they don't match, `package.json` wins and the lock file is updated.
- `npm ci` installs strictly from the lock file and is meant for clean, repeatable installs.

**11.5 Update**

```bash
npm update
npm update lodash
```

It checks for newer versions that still satisfy your version rules.

**11.6 Versions (semver)**

Versions look like `MAJOR.MINOR.PATCH` (for example `4.17.21`).

| In `package.json` | Meaning                                       |
| ----------------- | --------------------------------------------- |
| `"4.17.21"`       | Exactly this version                          |
| `"^4.17.21"`      | Same major version, newer minor/patch allowed |
| `"~4.17.21"`      | Only newer patch versions allowed             |

Install a specific version or range:

```bash
npm install lodash@4.17.20
npm install lodash@">=4.0.0 <5.0.0"
```

(Quote ranges so the shell treats them as one argument.)

**11.7 Other install sources (read and recognise)**

```bash
npm install sax@latest
npm install @myorg/privatepackage
npm install githubname/reponame
npm install ./package.tgz
```

`npm install --dry-run` shows what would happen without changing anything.

**11.8 Global installs**

```bash
npm install -g <package-name>
```

Installs into a global location so you can use its command anywhere.

**11.9 Production installs**

`npm install --omit=dev` (or `NODE_ENV=production`) skips `devDependencies`.

---

## Part 12: npm scripts

**12.1 Add scripts**

In `package.json`:

```json
{
  "scripts": {
    "start": "node app.js",
    "hello": "echo hello from npm",
    "dev": "node --watch app.js"
  }
}
```

Create `app.js`:

```js
console.log("app started");
```

Run:

```bash
npm start
npm run hello
npm run dev
```

`start` and `test` are special and can be run as `npm start` and `npm test`. Other names need `npm run <name>`.

**12.2 Pre and post scripts**

```json
{
  "scripts": {
    "prehello": "echo BEFORE",
    "hello": "echo hello",
    "posthello": "echo AFTER"
  }
}
```

Run `npm run hello`. You see BEFORE, hello, AFTER. Matching names with `pre` and `post` run automatically.

**12.3 Lifecycle scripts to recognise**

| Script                 | When it runs                                                                 |
| ---------------------- | ---------------------------------------------------------------------------- |
| `prepare`              | Before packing/publishing, and after a local `npm install` with no arguments |
| `prepublishOnly`       | Only on `npm publish`                                                        |
| `prepack` / `postpack` | Before / after the tarball is created                                        |
| `postinstall`          | After a package is installed                                                 |

Operation order examples from the docs:

- `npm test` runs `pretest`, `test`, `posttest`.
- `npm start` runs `prestart`, `start`, `poststart`. If you have `server.js` and no `start` script, npm uses `node server.js`.

**12.4 Useful environment variables inside scripts**

Create `show-env.js`:

```js
console.log(process.env.npm_package_name);
console.log(process.env.npm_package_version);
console.log(process.env.npm_lifecycle_event);
```

Add `"env": "node show-env.js"` to scripts and run `npm run env`.

**12.5 Good habits from the docs**

- Scripts always run from the **root of the package folder**.
- A script that exits with a non-zero code stops the process, so only do that for real failures.
- Don't put `sudo` inside scripts.
- Prefer `prepare` for build tasks (compiling TypeScript, minifying).

---

## Part 13: ECMAScript (ES6+) features in Node.js

Node.js uses modern V8, so new JavaScript features arrive over time.

- **Shipping features**: stable, on by default, no flag.
- **Staged features**: almost done, need `--harmony`.
- **In progress features**: unstable, only for testing, can change without warning.

Commands to try:

```bash
node -p process.versions.v8
node --v8-options | grep "in progress"
```

The first prints the V8 version in your Node. The second lists unfinished features. For production, avoid `--harmony` unless you accept that upgrades may break behaviour. The website `node.green` shows which features each Node version supports.

---

## Part 14: Enterprise network configuration (read, try later)

This is mostly for company networks, so just understand it for now.

**Proxy settings**

Companies may force internet traffic through a proxy. Node reads proxy variables when enabled:

```bash
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080
export NO_PROXY=localhost,127.0.0.1,.company.com
node --use-env-proxy app.js
```

Alternative: set `NODE_USE_ENV_PROXY=1`. `NO_PROXY` lists hosts that skip the proxy. Do not commit usernames and passwords inside proxy URLs.

**Certificate authorities (CA)**

By default Node trusts Mozilla's bundled CAs, not your operating system's. If you see `self signed certificate in certificate chain`, a company CA may be missing:

```bash
node --use-system-ca app.js
NODE_EXTRA_CA_CERTS=/path/to/company-ca-bundle.pem node app.js
```

Version notes from the docs: `--use-system-ca` needs Node v22.19.0 / v24.6.0 or newer, and `--use-env-proxy` needs v22.21.0 / v24.5.0 or newer.

---

## Quick reference

| Task                             | Command / code                 |
| -------------------------------- | ------------------------------ |
| Run a file                       | `node file.js`                 |
| Auto-restart                     | `node --watch file.js`         |
| Run a package.json script (Node) | `node --run name`              |
| Run a package.json script (npm)  | `npm run name`                 |
| Open REPL                        | `node`                         |
| Run inline code                  | `node -e "code"`               |
| Load env file                    | `node --env-file=.env file.js` |
| Read an env var                  | `process.env.NAME`             |
| Create package.json              | `npm init -y`                  |
| Install all                      | `npm install`                  |
| Install one                      | `npm install name`             |
| Dev-only install                 | `npm install name -D`          |
| Update                           | `npm update`                   |

---

## Progress checklist

- [ ] Part 0: Setup
- [ ] Part 1: Hello World server
- [ ] Part 2: Running scripts
- [ ] Part 3: REPL
- [ ] Part 4: Output
- [ ] Part 5: Input
- [ ] Part 6: Environment variables
- [ ] Part 7: Callbacks
- [ ] Part 8: Flow control
- [ ] Part 9: Promises and async/await
- [ ] Part 10: HTTP transaction
- [ ] Part 11: npm basics
- [ ] Part 12: npm scripts
- [ ] Part 13: ES6+ features
- [ ] Part 14: Enterprise network config

## My own notes and practice area

(Write your own test questions and solutions here after finishing the parts above.)
