//
// ## Exercise 1: Get a single note (easy)
//
// Add a route `GET /notes/:index` that returns just one note.
//
// - If the note exists, respond with status `200` and the note.
// - If the index doesn't exist, respond with `404` and a message like "note not found".
//
// This practices `req.params` and status codes. Test it with `curl http://localhost:3000/notes/0`, then try an index that doesn't exist.
//


import express from "express"

const exercise1 = express();

exercise1.use(express.json());

const notes = [];
// creaitng API POST to send data to the user

exercise1.post("/notes", (req,res) => {
    notes.push(req.body);
    res.status(201).json({
    message: "Notes submitted successfully",
  })
})

// fetching the data

exercise1.get("/notes/:index", (req,res) => {

  const index = req.params.index;
  if(notes[index]) {
    res.status(200).json({
      message: "Response fetched",
      note: notes[index],
    })
  } else {
    res.status(404).json({
      message: "note not found",
    })
  }
})

export default exercise1;
