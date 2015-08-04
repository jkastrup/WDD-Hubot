// Description:
//  Gives a friendly message from the great Jerry Seinfeld
//
// Commands:
//  Hubot coffee - displays a quote and an image
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
    // Hubot returns a message and an image from Jerry Seinfeld
    return robot.respond(/coffee/i,function(msg){
        //Sends a quote
        msg.send('"We want to do a lot of stuff; we’re not in great shape. We didn’t get a good night’s sleep. We’re a little depressed. Coffee solves all these problems in one delightful little cup." - Jerry Seinfeld');
        //Sends an images of Jerry
        msg.send('http://1.bp.blogspot.com/-AGdMdfvtPbQ/Vae-YAhtnVI/AAAAAAAAFRg/OPKwgGBVzTA/s1600/coffee-and-breakfast1.png');
    });
};