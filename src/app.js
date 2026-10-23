import express from "express"
import noteModel from "./models/note.model.js"

const app = express()
app.use(express.json())


// ---------------------------------------------------
//
// POST 
//
// ---------------------------------------------------

app.post("/notes", async (req,res) => {
  
  const data = req.body;
  await noteModel.create({
      title: data.title,
      description: data.description,
  })

  res.status(201).json({
    message: "Note Created"
  })
})


// ---------------------------------------------------
//
// GET 
//
// ---------------------------------------------------

app.get("/notes", async (req, res) => {

  const notes = await noteModel.find();

  /*
   * This method is used to fetch only one object in array.
   *
   * const notes = await noteModel.fineOne({
   *    title: "My dress up darling",
   * })
    */
  
  res.status(200).json({
    message: "Note's fetched successfully",
    notes: notes,
  })
})

// ---------------------------------------------------
//
// DELETE
//
// ---------------------------------------------------

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
        _id:id
  })

  res.status(200).json({
    message: "Note deleted successfully"
  })
})

// ---------------------------------------------------
//
// PATCH
//
// ---------------------------------------------------

app.patch("/notes/:id", async (req, res) => {

  const id = req.params.id
  const description = req.body.description

  await noteModel.findOneAndUpdate({_id:id}, {description:description})

  res.status(200).json({
    message: "Data updated successfully"
  })
})

export default app;
