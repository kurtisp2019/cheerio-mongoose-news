/**
 * 
 *      article-controller
 *   
 */

var article = require("../models/article");
var noteCtrl = require("../controllers/note-controller");

module.exports = {
    createNewArticle: function (_newArticleObj) {

        // check for duplicates
        noteCtrl.createNote({ title: "", body: "" }, function (_newNote) { 
                
            article.create({
                title: _newArticleObj.title,
                link: _newArticleObj.link,
                note: _newNote._id
            }).then(function (_newArticle) {

                console.log("article created");
            }).catch((_err) => { if (_err) console.log("error: " + _err) });
        });

    },
    getArticleById: function (_id, _callback) { 

        article.findById(_id).then(_article => { 
            _callback(_article);
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    },
    getArticleAndNoteById: function (_id, _callback) { 

        article.findById(_id).populate("note").then(_article => { 
            _callback(_article);
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    },
    getAllArticles: function (_callback) { 

        article.find({}).then(_articles => { 
            _callback(_articles);
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    },
    getAllArticlesAndNotes: function (_callback) { 
        article.find({}).populate("note").then(_articles => { 
            _callback(_articles);
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    },
    clearAllNotesFromArticles: function () { 
        article.find({}).then(_articles => { 
            _articles.forEach(article => { 
                note.deleteOne({ _id: article._id }).then(_note => { 
                    console.log("note deleted");
                } ).catch((_err) => { if (_err) console.log("error: " + _err) });
            });
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    },
    deleteAllArticles: function () {

        noteCtrl.deleteAllNotes();
        article.deleteMany({}).then(function (_data) { 

            console.log("all articles deleted");
        }).catch(_err => { if(_err) console.log(_err) });
    },

    deleteArticle: function (_id) {

        // find associated note
        article.findById(_id).then(_article => { 
            note.findByIdAndDelete(_article.note).then(_response => { 

                console.log("note deleted");
            }).catch((_err) => { if (_err) console.log("error: " + _err) });
        }).catch((_err) => { if (_err) console.log("error: " + _err) });

        article.deleteOne({ _id: _id }).then(function (_data) {

            console.log("article deleted.");
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    },
    updateArticleNote: function (_articleId, _newNoteObj) { 

        article.findById(_articleId).then(_article => { 
            noteCtrl.updateNote(_article.note, _newNoteObj); 
        }).catch((_err) => { if (_err) console.log("error: " + _err) });
    }
}