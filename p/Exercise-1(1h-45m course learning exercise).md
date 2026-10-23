These three build on what you've learned. Try them without looking up full solutions, then send me your code and I'll review it.

## Exercise 1: Get a single note (easy)

Add a route `GET /notes/:index` that returns just one note.

- If the note exists, respond with status `200` and the note.
- If the index doesn't exist, respond with `404` and a message like "note not found".

This practices `req.params` and status codes. Test it with `curl http://localhost:3000/notes/0`, then try an index that doesn't exist.
## Exercise 2: Validate and fix your existing routes (medium)

Your current routes work when everything goes right, but they break when things go wrong. Improve them:

1. **POST `/notes`:** Require both `title` and `description` in the body. If either is missing, respond with `400` and an error message.
2. **PATCH `/notes/:index`:** Right now, using an index that doesn't exist crashes the server. Make it return `404` instead.
3. **DELETE `/notes/:index`:** Test it. Create 3 notes, delete the middle one, then `GET /notes` and look closely at what comes back. You'll see a problem with how `delete` works on arrays. Find a better array method that removes the item properly.

This teaches defensive coding, which is a big part of backend work.

## Exercise 3: Build a new API from scratch (medium)

Make a new file or project for a **books** API, with each book having `title`, `author`, and `year`. Without copying your notes code line by line, build:

- `POST /books`: add a book
- `GET /books`: list all books
- `PATCH /books/:index`: update a book
- `DELETE /books/:index`: remove a book
- **Bonus:** `GET /books?author=someone` returns only books by that author (hint: look up `req.query`)

Keep the same structure you used: `server.js` starts the server and `src/app.js` has the routes.

## Tips

- Test every route with `curl`, Postman, or a similar tool, including the failing cases (wrong index, missing fields).
- Run the server with `node --watch server.js` so it restarts on every save.
- Write your plan in plain words first, like "if the index doesn't exist, return 404", then turn it into code.

Which one do you want to start with? Send your solution when you're done, even if it's partly working, and I'll give feedback.
