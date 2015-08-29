// Description:
//   Converts words into leet hacker speak. 
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot leetspeak <phrase> -  Returns your phrase converted into l33t speak.
//
// Author:
//   Jason Woods
//
// Contributor:
//  

var request = require('request');


// Function to to convert phrase into Leet speak.
function leetSpeakVal(msg){
  //get input
  var input = msg.match[1];
  //create call to pass into request.
  var options = {
    url: "https://montanaflynn-l33t-sp34k.p.mashape.com/encode?text="+input,
    headers: {
      "X-Mashape-Key": "pn0XgML39Pmshmju3yspkVYxWrVdp1Sd4wHjsn7zYGIwfyILBD",
      "Accept": "text/plain"
    }
  };
  //check if only nubers ( numbers don't leet speak well.)
  if(!isNaN(input)){
    msg.send('Please enter some words!');
  }else{
    //request using the options above to convert leet speak.
    request(options, function (error, response, body) {
        // Conditional to make sure the connection went successfully through.
        if (!error && response.statusCode < 300){
          // get body
          var text = body;
          msg.send(text);
         }else{
           msg.send("Sorry, an error has occurred.");
         };
    });
  }
    
};

// Listens for value entered and calls leetSpeakVal function.
module.exports = function(robot) {
  return robot.respond(/leetspeak (.*)/i, function(msg) {
    leetSpeakVal(msg);
  });
};
