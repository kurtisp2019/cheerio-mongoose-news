/**
 * 
 *      Article.js
 * 
 */

var mongoose = require("mongoose");

var articleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    link: {
        type: String,
        trim: true,
        required: true
    },
    note: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "note"
    }
});

var article = mongoose.model("article", articleSchema);

module.exports = article;