// Description:
//   Gives Random number Facts.
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot number <number> -  Returns a random fact back about the number you input. 
//
// Author:
//   Jason Woods
//
// Contributor:
//  

var request = require('request');


// Function to find the value of a currency.
function numberVal(msg) {

    var input = msg.match[1];
    var options = {
        url: "https://numbersapi.p.mashape.com/" + input + "/trivia?fragment=true&json=true¬found=floor",
        headers: {
            "X-Mashape-Key": "pn0XgML39Pmshmju3yspkVYxWrVdp1Sd4wHjsn7zYGIwfyILBD",
            "Accept": "text/plain"
        }
    };
    if (isNaN(input)) {
        msg.send('Please only enter numbers!');
    } else {
        request(options, function(error, response, body) {
            // Conditional to make sure the connection went successfully through.
            if (!error && response.statusCode < 300) {
                // Parse the json
                var json = JSON.parse(body),
                    text = json.text;
                msg.send(text);
            } else {
                msg.send("Sorry, an error has occurred.");
            };
        });
    }

};

// Listens for value entered and calls numberVal function.
module.exports = function(robot) {
    return robot.respond(/number (.*)/i, function(msg) {
        numberVal(msg);
    });
};