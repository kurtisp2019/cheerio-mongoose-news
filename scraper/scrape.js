/**
 * 
 *      scrape.js
 * 
 */

var cheerio = require("cheerio");
var axios = require("axios");

module.exports = {

  scrape: function (_website, _callback) {

    axios.get(_website).then(function (response) {

      var $ = cheerio.load(response.data);
      var results = [];
      var descriptions = [];
      var links = [];
      //console.log($("dl").children().text());
      $("dt").children().each(function (i, element) {
        
        //console.log($(this).text());
        links.push($(this).text());
      });
      $("dd").each(function (i, element) {
        
        console.log($(this).text());
        descriptions.push($(this).text());
      });

      for (let i = 0; i < links.length; ++i) { 
        results.push({
          title: descriptions[i],
          link: links[i]
        });
      }
      _callback(results);
    });
  }
};