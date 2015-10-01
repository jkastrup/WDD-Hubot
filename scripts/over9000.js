//Description:
// Hubot display a video of Vegeta stating that Goku's powerlevel is over 9000.
//
//Dependencies
// None
//
//Commands
// Hubot it's over 9000!
//
// Author
// James Stanbridge
// jstanbridge@fullsail.edu
// Github: jstanbridge

module.exports = function (robot) {
    return robot.respond(/it's over 9000!/i, function (msg){
        
        msg.send('https://youtu.be/SiMHTK15Pik');
    });
};