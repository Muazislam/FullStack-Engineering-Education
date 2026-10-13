# Day 1 Curriculum

## Goal

Practise Node.js, npm, Express routing, middleware, HTTP methods, JSON request bodies, status codes, and API testing by building a small in-memory Notes API.

## Exercises

Complete these one at a time:

1. Start the server and return JSON from `GET /health`.
2. Add `GET /notes` and `GET /notes/:id` using an in-memory array.
3. Add filtering with `req.query`, such as `GET /notes?tag=work`.
4. Add `POST /notes` and practise `express.json()` and `req.body`.
5. Add update and delete routes.
6. Handle missing IDs with appropriate status codes.
7. Test every route with `curl` or an API client.
8. Deliberately break a couple of things and observe the behaviour.
9. Use the official documentation for each part as you reach it.

## Node.js practice

)

- [Node.js Asynchronous Work](https://nodejs.org/learn/asynchronous-work)
- [Node.js HTTP](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [Node.js Packages](https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager)
- [npm init](https://docs.npmjs.com/cli/v11/commands/npm-init)
- [npm install](https://docs.npmjs.com/cli/v11/commands/npm-install)
- [package.json scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts)

#

For each topic:

1. Read one small section.
2. Type and run the example yourself.
3. Change one thing and predict what will happen.
4. Run it and compare the result with your prediction.
5. Write one sentence explaining what you learned.

Practise the following Node.js topics:

- Run a JavaScript file with Node.
- Make a tiny HTTP server with Node's built-in `http` module.
- Use JavaScript and built-in modules in Node.js.
- Use the Node REPL and compare it with running a script file.
- Read a value from `process.env`.
- Practise a Promise and `async`/`await`.
- Create `package.json` with npm.
- Install Express with npm.
- Add and run an npm start script.
- Inspect the changes made to `package.json`.

The built-in HTTP server only needs a brief practice session because Express will provide the more convenient routing layer for the Notes API.

## Express practice

Practise:

- Creating an Express application.
- Starting the server with `app.listen()`.
- Defining routes with `app.get()`, `app.post()`, `app.put()`, `app.patch()`, and `app.delete()`.
- Reading route parameters with `req.params`.
- Reading query strings with `req.query`.
- Parsing JSON bodies with `express.json()`.
- Reading submitted data with `req.body`.
- Sending JSON with `res.json()`.
- Setting status codes with `res.status()`.
- Handling missing resources and errors.

## HTTP and testing practice

Understand:

- The structure of an HTTP request and response.
- The purpose of `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.
- Status codes `200`, `201`, `204`, `400`, `404`, and `500`.
- Query strings such as `?tag=work`.
- Sending headers and JSON request bodies with `curl`.

## End-of-day project

Build an in-memory Notes API with:

- `GET /health`
- `GET /notes`
- `GET /notes/:id`
- `GET /notes?tag=work`
- `POST /notes`
- An update route
- A delete route
- Appropriate responses for successful requests, invalid input, and missing IDs

The data can remain in memory. A database is not required for Day 1.

## Completion check

Day 1 is complete when you can explain:

- How Node runs the server.
- How npm and `package.json` start the application.
- How Express matches a method and path to a handler.
- The difference between `req.params`, `req.query`, and `req.body`.
- Why `express.json()` is needed for JSON request bodies.
- Why different HTTP status codes are returned.
- How to test each route from the terminal.
