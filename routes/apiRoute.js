const fs = require("fs");
const db = require("../db/db.json");
const router = require("express").Router();
const uuid = require("uuid");

const { notes } = require("../db/db");

const { noteCreateNewNote, noteDeleteNote } = require("../routes/notes");

router.get("/notes", (req, res) => {
  let saved = notes;
  res.json(saved);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let note = noteCreateNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  noteDeleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;

// router.get("/api/notes", (req, res) => {
//   fs.readFile("./db/db.json", (err, data) => {
//     if (err) throw err;
//     console.log(JSON.parse(data));

//     res.send(data);
//   });
// });

// router.post("/api/notes", (req, res) => {
//   let newNote = {
//     id: uuid(),
//     title: req.body.title,
//     text: req.body.text,
//   };

//   fs.readFile("./db/db.json", (err, data) => {
//     if (err) throw err;

//     let newData = JSON.parse(data);

//     newData.push(newNote);
//     console.log(newData);

//     fs.writeFile("./db/db.json", JSON.stringify(newData), (err) => {
//       if (err) throw err;

//       res.send("successfully added");
//     });
//   });
// });

// module.exports = router;
