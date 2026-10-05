# Node.js Debugging Practice in VS Code

Everything here runs locally on your machine, so it's safe. VS Code has a built-in Node debugger, so you don't need Chrome DevTools at all.

## Setup: a practice app

Create a folder, run `npm init -y` and `npm install express`, then make `app.js`:

```js
const express = require("express");
const app = express();

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.json({ sum });
});

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  const message = "Hello, " + name;
  res.send(message);
});

app.listen(3000, () => console.log("Running on 3000"));
```

Open the folder in VS Code (`File → Open Folder`).

## Exercise 1: Run with the debugger and a breakpoint

1. Open `app.js` and click in the gutter (left of the line number) next to `const sum = a + b;`. A red dot appears. That's a **breakpoint**.
2. Open the **Run and Debug** panel (`Ctrl+Shift+D`).
3. Click **Run and Debug** and choose **Node.js**. The app starts with the debugger attached.
4. In your browser, visit `http://localhost:3000/add?a=2&b=3`.
5. VS Code pauses on your breakpoint. Look at the **Variables** panel on the left to see `a`, `b` and `req`.

## Exercise 2: Step through code

While paused, use the toolbar at the top:

| Button    | Shortcut        | What it does                           |
| --------- | --------------- | -------------------------------------- |
| Continue  | `F5`            | Run until the next breakpoint          |
| Step Over | `F10`           | Run the current line, move to the next |
| Step Into | `F11`           | Go inside a function being called      |
| Step Out  | `Shift+F11`     | Finish the current function            |
| Restart   | `Ctrl+Shift+F5` | Restart the app                        |
| Stop      | `Shift+F5`      | Stop debugging                         |

Press `F10` a few times and watch `sum` get its value.

**Bonus:** visit `/add?a=hello&b=3`. You'll see `a` become `NaN`. This is the real value of debugging: seeing the actual data.

## Exercise 3: Watch and Debug Console

While paused:

1. In the **Watch** panel, click `+` and type `a + b`. It updates as you step.
2. Open the **Debug Console** (bottom panel) and type `typeof a` or `req.query`. You can run any JavaScript against the paused state.
3. Hover over a variable in the editor to see its value.

## Exercise 4: Conditional breakpoint

1. Right-click your red dot and choose **Edit Breakpoint → Expression**.
2. Enter `a > 10`.
3. Visit `/add?a=2&b=3` (doesn't pause), then `/add?a=20&b=3` (pauses).

This is very useful in loops or routes that run many times.

## Exercise 5: Logpoint (console.log without editing code)

1. Right-click the gutter next to `const message = ...` and choose **Add Logpoint**.
2. Enter: `name is {name}`
3. Visit `/greet/Ali`. The Debug Console prints the message, and the code never changes or pauses.

## Exercise 6: Create `launch.json`

1. In **Run and Debug**, click **create a launch.json file** and choose **Node.js**.
2. VS Code creates `.vscode/launch.json`. A simple config looks like:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch app",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

3. Pick **Launch app** from the dropdown and press `F5`.

## Exercise 7: Attach to a running process (`--inspect`)

This connects the docs' `--inspect` flag to VS Code.

1. In a terminal, run `node --inspect app.js`.
2. In `launch.json`, add this configuration:

```json
{
  "type": "node",
  "request": "attach",
  "name": "Attach to 9229",
  "port": 9229
}
```

3. Select **Attach to 9229** and press `F5`.
4. Set a breakpoint and hit the route.

Try `node --inspect-brk app.js` as well. It pauses before your first line until you attach.

## Exercise 8: JavaScript Debug Terminal (easiest way)

1. Open the Command Palette (`Ctrl+Shift+P`) and run **Debug: JavaScript Debug Terminal**.
2. In that terminal, just run `node app.js` (or `npm start`). The debugger attaches automatically.

This works for any command, including `npm run dev` in a project later.

## Exercise 9: The `debugger;` statement

Add this in the `/greet` route:

```js
const message = "Hello, " + name;
debugger;
```

Run from the Debug Terminal and hit the route. It pauses there automatically.

## Exercise 10: Find a real bug

Change the `/add` route to this deliberately broken version:

```js
app.get("/add", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const sum = a + b;
  res.json({ sum });
});
```

Visit `/add?a=2&b=3` and you get `"23"` instead of `5`. Use a breakpoint and the Variables panel to find the cause (values are strings, so `+` joins them). Then fix it.

## What NOT to practice

- Don't use `--inspect=0.0.0.0` or a public IP. That lets anyone who can reach the port run code on your process.
- Don't leave `--inspect` running on a deployed server.
- Only try remote debugging through the `ssh -L` tunnel from the docs, on a machine you own.

## Suggested order

Do 1, 2 and 3 first (about 15 minutes). They cover most daily debugging. Then 4, 5 and 8. Do 7 when you want to connect the `--inspect` flag from the docs to what you've learned.

Want me to make a practice bug in your MERN backend project next, so you can find it with the debugger?
