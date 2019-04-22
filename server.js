/**
 * 
 *      server.js
 * 
 */

var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use(express.static("public"));


// routes
require("./routes/html-routes")(app);


app.listen(PORT, function () { 
    console.log("listening on port: " + PORT);
});