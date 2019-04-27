// /**
//  * 
//  *      app.js
//  * 
//  */

// var articleCntl = require("../../controllers/article-controller");

// function loadArticles() { 

//     articleCntl.getAllArticles(function (_articles) { 
//         for (let i = 0; i < _articles.length; ++i) {
            
//             var divArticleContainer = $("<div>").attr("articleId", _articles[i]._id);
//             var pArticleTitle = $("<p>").text(_articles[i].title);
//             var aLink = $("<a>").text(_articles[i].link);
            
//             divArticleContainer.append(pArticleTitle);
//             divArticleContainer.append(aLink);
//             $("#articleDisplay").append(divArticleContainer);
//         }
//     });
   
// }