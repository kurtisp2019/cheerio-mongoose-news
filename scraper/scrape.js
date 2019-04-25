/**
 * 
 *      scrape.js
 * 
 */

var cheerio = require("cheerio");
var axios = require("axios");

module.exports = {

    scrape: function (_website, _callback) {
        
        // Making a request via axios for reddit's "webdev" board. We are sure to use old.reddit due to changes in HTML structure for the new reddit. The page's Response is passed as our promise argument.
        axios.get(_website).then(function (response) {

            // axios.get(_website).then(_data => { 

            //     var i = 0;
            //     var titles = [];
            //     $ = cheerio.load(_data);

            //     $("a.search-title.may-blank").each(i, function (_element) { 

            //         console.log($(_element).text());
            //         titles.push({ title: _element });
            //     });

            //     console.log(titles.length);
            //     _callback(titles);
            // });

                 // Then, we load that into cheerio and save it to $ for a shorthand selector
                var $ = cheerio.load(response.data);
            var results = [];
            
                // Now, we grab every h2 within an article tag, and do the following:
                $("article h2").each(function(i, element) {
                  // Save an empty result object
                    var result = {};
                    
            
                  // Add the text and href of every link, and save them as properties of the result object
                  result.title = $(this)
                    .children("a")
                    .text();
                  result.link = $(this)
                    .children("a")
                    .attr("href");

                // Save these results in an object that we'll push into the results array we defined earlier
                results.push(result);
            });
            _callback(results);
        });
    }
};