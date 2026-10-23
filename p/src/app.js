// // creates the server
// import express from "express";
//
// const app = express();
//
//
// app.use(express.json())
//
// const notes = []
//
// // creating API  /POST/notes 
// app.post("/notes", (req,res) => {
//   notes.push(req.body);
//   res.status(201).json({
//     message: "note created successfully"
//   })
// })
//
// // notes/Get API
//
// app.get("/notes", (req, res) => {
//   res.status(200).json({
//       message: "notes fetched successfully",
//       notes: notes
//   })
// })
//
// // delete API notes/index 
// app.delete("/notes/:index", (req, res) => {
//   const index = req.params.index 
//   delete notes [ index ]
//   res.status(200).json({
//     message: "note deleted successfully"
//   })
// })
//
// // Patch API notes/index 
//
// app.patch("/notes/:index", (req, res) => {
//   const index = req.params.index
//   const title = req.body.title
//   const description = req.body.description
//
//   notes [ index ].description = description
//   notes [ index ].title = title
//
//   res.status(200).json({
//     message: "note updated successfully"
//   })
// })
//
// export default app;
