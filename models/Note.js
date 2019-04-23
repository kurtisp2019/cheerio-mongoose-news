/**
 *  
 *      Note.js
 * 
 */

var mongoose = require("mongoose");

var NoteSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    }
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;