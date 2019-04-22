/**
 * 
 *      html-routes.js
 * 
 */


module.exports = function (app) { 


    app.get("/", function (_req, _res) { 

        _res.render("home");
    });
}