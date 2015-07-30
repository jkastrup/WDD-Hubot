// Description:
// Hubot gives you a random color palette.
//
// Dependencies:
// Request
//
// Configuration:
// None
//
// Commands:
// Hubot palette - Returns a random color palette
//
// Author:
// Devin Metivier

var request = require('request');

var apiUrl = 'http://www.colourlovers.com/api/palettes/random?format=json';

function getPallete(msg){
    //Make request to API
    request(apiUrl, function (error, response, body) {

        if (!error && response.statusCode < 300){
            //Parse JSON
            var json = JSON.parse(body);

            msg.send("Title: " + json[0].title);
            msg.send("Colors: " + json[0].colors);
            msg.send("Direct Link: " + json[0].url);
            msg.send(json.imageUrl);
        }else{
            msg.send("Something went wrong.");
        }

    });//end request
}//close function

module.exports = function (robot) {
    return robot.respond(/palette/i, function(msg){
        getPallete(msg);
    })
};
