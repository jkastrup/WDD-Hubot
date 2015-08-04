// Description:
//  Dispenses money for whomever asks for it
//
// Commands:
//  Hubot make me some money
//
// Dependencies:
//  None
//
// Author:
//  Steve Dolan | stevedolan@fullsail.edu
//
// Date:
//  August 4, 2015


// Robot Function
module.exports = function(robot){
    // Hubot returns an animated GIF
    return robot.respond(/make me some money/i,function(msg){
        //Sends a gif animation of money
        msg.send("http://i.giphy.com/ADgfsbHcS62Jy.gif");
    });
};