const fs = require("fs");
const db = require("../db/db.json");
const router = require("express").Router();
const uuid = require("uuid");

const { notes } = require("../db/db");

const { createNote, deleteNote } = require("../routes/notes");

router.get("/notes", (req, res) => {
  let saved = notes;
  res.json(saved);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let note = createNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
