// Description:
//   Gives a response to the popular "Go Sox" chant
//
// Dependencies:
//   none
//
// Commands:
//   hubot Go Sox! 
//
// Author:
//   John Russo


module.exports = function (robot) {
    return robot.hear(/Go Sox!/i, function (res) {
        
        res.send('Go Yanks!!!');

    });
};