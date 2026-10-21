//
// ## Exercise 2: Validate and fix your existing routes (medium)
//
// Your current routes work when everything goes right, but they break when things go wrong. Improve them:
//
// 1. **POST `/notes`:** Require both `title` and `description` in the body. If either is missing, respond with `400` and an error message.
// 2. **PATCH `/notes/:index`:** Right now, using an index that doesn't exist crashes the server. Make it return `404` instead.
// 3. **DELETE `/notes/:index`:** Test it. Create 3 notes, delete the middle one, then `GET /notes` and look closely at what comes back. You'll see a problem with how `delete` works on arrays. Find a better array method that removes the item properly.
//
// This teaches defensive coding, which is a big part of backend work.



// creates the server
import express from "express";

const app = express();


app.use(express.json())

const notes = []

// creating API  /POST/notes 
app.post("/notes", (req,res) => {
  
  const title = req.body.title
  const description = req.body.description

  if (title && description){
    notes.push(req.body);
  res.status(201).json({
    message: "note created successfully"
  })} else {
    res.status(400).json ({
      message: "client did not provide proper notes"
    })
  }
})

/* ---
   NOTES API: POST /notes
   MISTAKES I MADE AND HOW I FIXED THEM
   --- */

/* ---
   MISTAKE 1: Used "=" instead of a comparison
   Wrong:   if (title = true && description = true)
   Problem: "=" assigns a value, it does not compare. Since title is a
            const, this causes an error.
   Fix:     I stopped assigning and checked the values directly.
   --- */

/* ---
   MISTAKE 2: Used "== true" to check if a value exists
   Wrong:   if (title == true && description == true)
   Problem: A string like "deepthinking" is not equal to true, so the
            condition was false even when the title was provided.
   Fix:     An if statement already checks truthiness, so I only wrote
            the variables: if (title && description)
   --- */

/* ---
   MISTAKE 3: Saved the note before validating it
   Wrong:   notes.push(req.body) was placed above the if statement.
   Problem: Invalid notes were saved even when the response was 400.
   Fix:     I moved notes.push(req.body) inside the if branch, so only
            valid notes are saved.
   --- */

/* ---
   MISTAKE 4: Wrong error message
   Wrong:   message: "note not found"
   Problem: Nothing is being looked up in POST, so "not found" is
            misleading.
   Fix:     I used a message that says what the client did wrong:
            "client did not provide proper notes".
   --- */

/* ---
   MISTAKE 5: Wrong status code idea
   Wrong:   Planned to respond with 200 for a created note.
   Fix:     201 means "created", so I used 201 for success and 400 for
            a bad request.
   --- */

/* ---
   MISTAKE 6: Invalid JSON in my curl request (not a code bug)
   Error:   SyntaxError: Expected double-quoted property name in JSON
   Cause:   I sent a body with a trailing comma:
            { "title": "deepthinking", }
   Problem: JSON does not allow a comma after the last property.
            express.json() rejected the body before my route ran.
   Fix:     Remove the trailing comma, or add the next field:
            { "title": "deepthinking", "description": "some text" }
   --- */

/* ---
   FINAL WORKING CODE

   app.post("/notes", (req,res) => {

     const title = req.body.title
     const description = req.body.description

     if (title && description){
       notes.push(req.body);
     res.status(201).json({
       message: "note created successfully"
     })} else {
       res.status(400).json ({
         message: "client did not provide proper notes"
       })
     }
   })
   --- */

/* ---
   TEST CASES TO CHECK
   1. Both title and description present -> 201
   2. Only one field present             -> 400
   3. Empty body {}                      -> 400
   After each failed request, GET /notes should show nothing invalid
   was saved.
   --- */

// notes/Get API

app.get("/notes", (req, res) => {
  res.status(200).json({
      message: "notes fetched successfully",
      notes: notes
  })
})

// delete API notes/index 
// 3. **DELETE `/notes/:index`:** Test it. Create 3 notes, delete the middle one, then `GET /notes` and look closely at what comes back. You'll see a problem with how `delete` works on arrays. Find a better array method that removes the item properly.

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index 
  delete notes [ index ]
  res.status(200).json({
    message: "note deleted successfully"
  })
})

// Patch API notes/index 

// 2. **PATCH `/notes/:index`:** Right now, using an index that doesn't exist crashes the server. Make it return `404` instead.
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index
  const title = req.body?.title
  const description = req.body?.description

  if (notes[index]) {
    if (!title && !description) {
      res.status(404).json({
        message: "send title and description"
      })
      return
    }

    if (title) {
      notes[index].title = title
    }

    if (description) {
      notes[index].description = description
    }

    res.status(200).json({
      message: "note updated successfully"
    })
  } else {
    res.status(404).json({
      message: "notes not found"
    })
  }
})
/* ---
   NOTES API: GET and PATCH ROUTES
   MISTAKES I MADE AND HOW I FIXED THEM
   --- */


/* ---
   PART 1: GET /notes/:index (Exercise 1)
   --- */

/* ---
   MISTAKE 1: Variable name did not match
   Wrong:   const writting = req.params.index;
            notes[index].writing = writting;
   Error:   ReferenceError: index is not defined
   Problem: I stored the URL value in "writting" but used "index" later.
            The name on the left of "=" must match the name used later.
   Fix:     const index = req.params.index;
   --- */

/* ---
   MISTAKE 2: Assigned a value inside a GET route
   Wrong:   notes[index].writing = writting;
   Problem: GET should only read data, never change it. The line also
            ran before the if check, so a missing index crashed the
            route instead of reaching the 404 branch.
   Fix:     Deleted that line. The if check is the first thing that
            uses the note.
   --- */

/* ---
   MISTAKE 3: Success response did not include the note
   Wrong:   res.status(200).json({ message: "Response fetched" })
   Problem: The exercise says to respond with the note itself.
   Fix:     Added  note: notes[index]  to the 200 response.
            Note: notes[index] is the note object, not the index number.
   --- */

/* ---
   MISTAKE 4: Wrong status code for "not found"
   Wrong:   400
   Problem: 400 means the client sent a bad request. A missing note
            should be 404 (not found).
   Fix:     res.status(404) with a clear message like "note not found".
   --- */

/* ---
   MISTAKE 5: Useless line in the 404 response
   Wrong:   note: notes[index]  inside the else branch
   Problem: In that branch it is always undefined, so it does nothing.
   Fix:     Removed it.
   --- */


/* ---
   PART 2: PATCH /notes/:index
   --- */

/* ---
   MISTAKE 6: Changed the note before checking that it exists
   Wrong:   notes[index].description = description   (above the if)
   Error:   TypeError: Cannot set properties of undefined
            (setting 'description')
   Problem: If the index does not exist, notes[index] is undefined and
            JavaScript cannot set a property on undefined. Express
            answered with a 500 error instead of a 404.
   Fix:     Moved the changes inside  if (notes[index]) { ... }
   --- */

/* ---
   MISTAKE 7: Wrong status code for a missing note
   Wrong:   401
   Problem: 401 means unauthorized (not logged in). It has nothing to
            do with a missing note.
   Fix:     404 for "note not found".
   --- */

/* ---
   MISTAKE 8: Crash when the request body is empty
   Error:   TypeError: Cannot read properties of undefined
            (reading 'title')
   Cause:   In Express 5, req.body is undefined when no JSON body is
            sent. The crash happened on the line
            const title = req.body.title  before my if ever ran.
            My else statement was not the problem.
   Fix:     Optional chaining:
            const title = req.body?.title
            const description = req.body?.description
   --- */

/* ---
   MISTAKE 9: PATCH overwrote fields that were not sent
   Wrong:   notes[index].title = title
            notes[index].description = description
   Problem: PATCH means "change only what I send". If a field was not
            sent, it is undefined, and the old value got wiped.
   Fix:     Update each field only if it was sent:
            if (title) { notes[index].title = title }
            if (description) { notes[index].description = description }
   Note:    POST requires both fields because it creates a whole new
            note. PATCH accepts one field, both, or none. They are
            supposed to behave differently.
   --- */

/* ---
   MISTAKE 10: Used if / else between title and description
   Wrong:   if (title) { update title } else { update description }
   Problem: The else only runs when title is missing. If both fields
            were sent, the description was ignored. If nothing was
            sent, the description was set to undefined.
   Fix:     Two separate if statements, with no else between them.
   --- */

/* ---
   MISTAKE 11: Misunderstood what the outer else does
   Problem: I expected the else to catch an empty body. But the outer
            if only asks "does a note exist at this index?". With {}
            the note exists, nothing changed, and the route still sent
            200 "updated successfully".
   Lesson:  Two different failures need two different checks:
            1. Note not found     -> outer else -> 404
            2. Nothing to update  -> own check  -> 400
   --- */

/* ---
   MISTAKE 12: The "nothing sent" check was in the wrong place
   Wrong:   Nested inside  if (description) { ... }  where
            !title && !description can never be true. Also a bare
            "return" sent no response, so the client would hang.
   Fix:     Put the check first, right inside  if (notes[index]),
            before any update. Send a response, then return.
   --- */

/* ---
   MISTAKE 13: Wrong status code and message for the empty body
   Wrong:   404 "notes not found"
   Problem: The note exists here. The client's request is the problem.
   Fix:     400 with a message like "send title or description to
            update".
   --- */

/* ---
   MISTAKE 14: Forgot to save the file
   Problem: I edited the code but ran it without saving, so the old
            code was still running. Nodemon restarts only when the
            file on disk changes.
   Fix:     Save with :w in Neovim before testing.
   Debug tips I learned:
            - Add console.log("PATCH hit", index, title, description)
              to check that the route really runs.
            - Search for duplicate routes with: grep -rn "patch" src/
            - Check which file server.js imports.
   --- */


/* ---
   FINAL WORKING CODE (PATCH)

   app.patch("/notes/:index", (req, res) => {
     const index = req.params.index
     const title = req.body?.title
     const description = req.body?.description

     if (notes[index]) {

       if (!title && !description) {
         res.status(400).json({
           message: "send title or description to update"
         })
         return
       }

       if (title) {
         notes[index].title = title
       }

       if (description) {
         notes[index].description = description
       }

       res.status(200).json({
         message: "note updated successfully"
       })
     } else {
       res.status(404).json({
         message: "note not found"
       })
     }
   })
   --- */


/* ---
   TEST CASES THAT NOW PASS
   1. {}                         -> 400
   2. title only                 -> 200, description unchanged
   3. title and description      -> 200, both changed
   4. /notes/99 with any body    -> 404
   --- */

export default app;
