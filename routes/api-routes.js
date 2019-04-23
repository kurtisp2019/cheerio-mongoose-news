/**
 * 
 *      api-routes.js
 * 
 */

var articleCtrl = require("../controllers/article-controller");
//var noteCtrl = require("../controllers/note-controller");

module.exports = function (app) { 

    app.post("/api/addArticle", function (_req, _res) { 

        articleCtrl.createNewArticle(_req.body);
        _res.status(200).end();
    });

    app.put("/api/updateArticleNote/:articleId", function (_req, _res) { 

        articleCtrl.updateArticleNote(_req.params.articleId, _req.body);
        
    });

    app.post("/api/deleteArticle/:id", function (_req, _res) { 

        articleCtrl.deleteArticle(_req.params.id);
    });

    app.post("/api/deleteArticles", function (_req, _res) { 

        articleCtrl.deleteAllArticles();
        _res.status(200).end();
    });

}