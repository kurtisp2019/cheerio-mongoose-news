/**
 * 
 *      Article.js
 * 
 */

var mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema({
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
        ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;