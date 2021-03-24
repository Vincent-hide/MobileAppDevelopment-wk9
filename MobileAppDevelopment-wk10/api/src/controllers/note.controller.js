let NoteModel = require("../model/Note");

const note_findAll = (req, res) => {
  NoteModel.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const note_add = (req, res) => {
  const note = new NoteModel(req.body);
  note
    .save()
    .then(res.redirect("/note"))
    .catch((err) => console.log(err));
};

const note_findById = (req, res) => {
  const id = req.params.id;

  NoteModel.findById(id)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

// const note_updateById = (req, res) => {
//   const id = req.params.id;
//   const editedNote = new NoteModel(req.body);

//   NoteModel.findByIdAndUpdate(id, { note: editedNote })
//     .then(res.redirect("/note"))
//     .catch((err) => console.log(err));
// };

const note_deleteById = (req, res) => {
  const id = req.params.id;

  NoteModel.findByIdAndDelete(id)
    .then(res.redirect("/note"))
    .catch((err) => console.log(err));
};

module.exports = {
  note_findAll,
  note_add,
  note_findById,
  note_deleteById,
};
