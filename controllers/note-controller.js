/**
 * 
 *      note-controller.js
 * 
 */

var note = require("../models/note");
module.exports = {
    createNote: function (_newNoteObj, _callback) {

        note.create({ title: "", body: "" }).then(function (_newNote) {

            console.log("note was created");
            _callback(_newNote);
        });

    },
    updateNote: function (_id, _newNoteObj) {

        note.findByIdAndUpdate(_id, _newNoteObj).then(function (_updatedNote) {

            console.log("note updated");
        }).catch((_err) => { if (_err) console.log("error: " + _err) });

    },
    deleteAllNotes: function () { 
        note.deleteMany({}).then(function (_data) { 

            console.log("all notes deleted");
        }).catch(_err => { if(_err) console.log(_err) });
    }
};



