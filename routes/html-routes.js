/**
 * 
 *      html-routes.js
 * 
 */
var articleCtrl = require("../controllers/article-controller");

module.exports = function (app) { 


    app.get("/", function (_req, _res) {

        articleCtrl.getAllArticles(function (_articles) {
            console.log(_articles);
            if (_articles.length === 0){
                _res.render("home");
            return;
        }
            
            _res.render("home", { articles: _articles });
        });
    });

    app.get("/test", function (_req, _res) { 

        articleCtrl.getAllArticles(function (_articles) { 
            _res.render("test");
        });
        
    });
}