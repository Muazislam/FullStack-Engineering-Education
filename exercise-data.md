I read through your project. It's a posts API with image upload: Express, Multer, ImageKit, and MongoDB through Mongoose. The structure is clean: `server.js` starts things, `app.js` has the routes, and `db`, `models`, and `services` each have one job.

Do these in order. For each one, write your answer or code first, then send it to me for review. Don't look up full solutions. Test with Postman, using **form-data** for the POST route (key `image` as type File, key `caption` as Text).

## Level 1: Read and explain (no coding)

1. Trace `POST /create-post` step by step, from the request arriving to the response leaving. Name each file it passes through.
2. Why does Multer use `memoryStorage()`, and what is `req.file.buffer`? Why does `storage.service.js` call `.toString("base64")`?
3. In `server.js`, why is `await connectDB()` before `app.listen`? Why is a top-level `await` allowed in this file? (Hint: look at `package.json`.)
4. What does `postModel.find()` return when called with no arguments? What would change if you passed `{ caption: "hello" }`?

## Level 2: Find and fix problems in your own code

5. `GET /posts` sends status `201`. Is that correct? Fix it and explain why.
6. Send `POST /create-post` with **no image** and read the error in your terminal. What exactly crashes? Make it return `400` with a clear message.
7. Send a post with **no caption**. It saves anyway. Change the schema so a caption is required, then make the route return `400` instead of crashing when validation fails.
8. In `storage.service.js`, the `fileName` is the same hardcoded string for every upload. Why is this a problem? Make the file name come from the uploaded file instead.
9. `dotenv` is loaded in both `server.js` and `db.js`. Is it needed twice? Remove the unnecessary one and confirm the app still works.

## Level 3: Add features

10. `GET /posts/:id`: return one post. Handle both a missing post (`404`) and an invalid id format. What does Mongoose do with an invalid id?
11. `DELETE /posts/:id`: delete a post, and return `404` if it doesn't exist.
12. `PATCH /posts/:id`: update only the caption. Reuse the idea you learned in the Notes API about updating only the fields that were sent.
13. Add limits to Multer: a maximum file size of 5 MB, and only image types allowed. What status code should a rejected upload return?
14. Return posts newest first. Add `timestamps: true` to the schema, then support `GET /posts?page=1&limit=5`.
15. Write a global error-handling middleware (a function with four parameters: `err, req, res, next`) that returns JSON errors instead of a stack trace. Check what Express 5 does with errors thrown inside `async` handlers.

## Level 4: Challenges

16. Move the routes out of `app.js` into `src/routes/post.routes.js` using `express.Router()`, and the handler logic into a `controllers` file. Keep the behavior identical.
17. Add a `User` model with signup and login (hash passwords with `bcrypt`, issue a JWT). Link each post to its owner, and allow only the owner to delete it.
18. When a post is deleted, also delete the image from ImageKit. What do you need to store in the database to make that possible?
19. At startup, check that `MONGO_URI` and `IMAGEKIT_PRIVATE_KEY` exist. If one is missing, stop with a clear error message instead of failing later in a confusing way.

## How to work through them

- Do Level 1 in writing first. If you can't explain the existing code, new code will be guesswork.
- After each fix, test a failing case, not just the happy path.
- Keep a short comment log of your mistakes, as you did with the Notes API. It's useful for review later.

I can also save this as a checklist file you can tick off. Want that, or shall we start with question 1?



---

## Your filtered list

**Do these in order:**

1. **#5:** Fix the `GET /posts` status code (about 2 minutes)
2. **#6:** Missing image returns `400` with a clear message
3. **#7:** Make the caption required in the schema, and return `400` instead of crashing when it's missing
4. **#10:** `GET /posts/:id` returns one post, with `404` for a missing post and a plan for an invalid ID
5. **#11:** `DELETE /posts/:id`, with `404` if it doesn't exist
6. **#12:** `PATCH /posts/:id` updates only the caption

**Then move forward:**

7. **#17:** Users with signup, login (bcrypt and JWT), and owner-only delete. This is your next big topic.

## Quick check before you start (5 minutes)

Trace `POST /create-post` out loud: request → Multer → ImageKit upload → save to MongoDB → response. If you get stuck on a step, practice that step before the exercises.

## Skipped for now

#8, #9, #13, #14, #15, #16, #18, and #19. You can come back when a real project needs them, and I can give you those later if you ask.

## How to work

- Test every exercise with a failing case as well as a working one.
- Send me your code after #7, then again after #12, and I'll review it before you start auth.

Start with #5 and #6. Send me your attempt when ready.
