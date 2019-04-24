/**
 * 
 *      api-routes.js
 * 
 */

var articleCtrl = require("../controllers/article-controller");
//var noteCtrl = require("../controllers/note-controller");

module.exports = function (app) { 

    app.get("/api/allArticles", function (_req, _res) { 

      
        articleCtrl.getAllArticles(function (_articles) { 
            _res.json(_articles);
        });

    });
    app.get("/api/article/:id", function (_req, _res) { 

        articleCtrl.getArticleById(_req.params.id, function (_article) { 
            _res.json(_article);
        });
        
    });
    app.get("/api/articleNote/:id", function (_req, _res) { 

        articleCtrl.getArticleAndNoteById(_req.params.id, function (_article) { 
            _res.json(_article);
        });
    });
    app.get("/api/articlesNotes", function (_req, _res) { 

        articleCtrl.getAllArticlesAndNotes(function (_articles) { 
            _res.json(_articles);
        });
        
    });
    app.post("/api/addArticle", function (_req, _res) { 

        articleCtrl.createNewArticle(_req.body);
        _res.status(200).end();
    });

    app.put("/api/updateArticleNote/:articleId", function (_req, _res) { 

        articleCtrl.updateArticleNote(_req.params.articleId, _req.body);
        _res.status(200).end();
        
    });

    app.post("/api/deleteArticle/:id", function (_req, _res) { 

        articleCtrl.deleteArticle(_req.params.id);
        _res.status(200).end();
    });

    app.post("/api/deleteArticles", function (_req, _res) { 

        articleCtrl.deleteAllArticles();
        _res.status(200).end();
    });

}