const express = require("express");
const noteRoute = express.Router();
const noteController = require("../controllers/note.controller")

noteRoute.get("/", noteController.note_findAll);
noteRoute.post("/add", noteController.note_add);
noteRoute.get("/:id", noteController.note_findById);
// noteRoute.put("/:id", noteController.note_updateById);
noteRoute.delete("/:id", noteController.note_deleteById);

module.exports = noteRoute;
