# Day 1 Documentation Todo List

Read a small section, type the example, change one thing, run it, and write down what you learned.

## 1. Node.js and npm

- [x] Read [Node.js Learn](https://nodejs.org/learn)
- [x] Read [Introduction to Node.js](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [x] Practise [JavaScript in Node.js](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [x] Practise the [Node.js Command Line](https://nodejs.org/learn/command-line)
- [x] Practise [Node.js environment variables](https://nodejs.org/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [x] Read [Node.js asynchronous work](https://nodejs.org/learn/asynchronous-work)
- [x] Read about [Node.js HTTP](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [x] Read about [Node.js packages](https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager)
- [x] Practise [`npm init`](https://docs.npmjs.com/cli/v11/commands/npm-init)
- [x] Practise [`npm install`](https://docs.npmjs.com/cli/v11/commands/npm-install)
- [x] Read about [package.json scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts)

## 2. Express server and routes

- [ ] Follow the [Express Hello World example](https://expressjs.com/en/starter/hello-world.html)
- [ ] Practise [Express basic routing](https://expressjs.com/en/starter/basic-routing.html)
- [ ] Read the [Express routing guide](https://expressjs.com/en/guide/routing.html)
- [ ] Practise [Express middleware](https://expressjs.com/en/guide/using-middleware.html)
- [ ] Use the [Express API reference](https://expressjs.com/en/4x/api.html)
- [ ] Read the [Express Request API](https://expressjs.com/en/4x/api.html#req)
- [ ] Read the [Express Response API](https://expressjs.com/en/4x/api.html#res)
- [ ] Practise [`express.json()`](https://expressjs.com/en/4x/api.html#express.json)
- [ ] Read [Express error handling](https://expressjs.com/en/guide/error-handling.html)

### Express concepts to practise

- [ ] Practise `app.get()` and `app.post()`
- [ ] Practise `app.put()`, `app.patch()`, and `app.delete()`
- [ ] Practise `app.listen()`
- [ ] Read route parameters with `req.params`
- [ ] Read query strings with `req.query`
- [ ] Read JSON request data with `req.body`
- [ ] Return JSON with `res.json()`
- [ ] Set status codes with `res.status()`

## 3. HTTP basics

- [ ] Read the [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [ ] Read [MDN HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages)
- [ ] Study [MDN HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)
- [ ] Study [MDN HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- [ ] Practise query strings with [MDN URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [ ] Review `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`
- [ ] Review status codes `200`, `201`, `204`, `400`, `404`, and `500`

## 4. Test your routes

- [ ] Practise requests with the [curl manual](https://curl.se/docs/manpage.html)
- [ ] Optionally practise with [Postman: Send your first API request](https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request/)
- [ ] Optionally practise with [Thunder Client documentation](https://docs.thunderclient.com/)
- [ ] Send a GET request
- [ ] Send a request with a route parameter
- [ ] Send a request with a query string
- [ ] Send a POST request with a JSON body
- [ ] Test successful, invalid, and missing-resource responses

## 5. Final practice project

- [ ] Build `GET /health`
- [ ] Build `GET /notes`
- [ ] Build `GET /notes/:id`
- [ ] Build filtering with `GET /notes?tag=work`
- [ ] Build `POST /notes`
- [ ] Build an update route
- [ ] Build a delete route
- [ ] Handle invalid input and missing IDs
- [ ] Deliberately break two things and observe the behaviour
- [ ] Write one sentence about what you learned from each documentation section

## Suggested order

- [ ] Node.js Learn and Introduction to Node.js
- [ ] Command Line, environment variables, asynchronous work, and npm
- [ ] Express Hello World and basic routing
- [ ] Express middleware and `express.json()`
- [ ] HTTP methods and status codes
- [ ] Express request/response APIs
- [ ] curl
- [ ] Build and test the Notes API
