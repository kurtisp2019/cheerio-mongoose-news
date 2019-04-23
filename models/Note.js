/**
 *  
 *      Note.js
 * 
 */

var mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        //required: true
    },
    body: {
        type: String,
        trim: true,
        //required: true
    }
});

var note = mongoose.model("note", noteSchema);

module.exports = note;