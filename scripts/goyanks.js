// Description:
//   Gives a response to the popular "Go Yanks" chant
//
// Dependencies:
//   none
//
// Commands:
//   Go Yankees! 
//
// Author:
//   John Russo


module.exports = function (robot) {
    return robot.hear(/Go Yankees!/i, function (res) {
        
        res.send('AND YOU KNOW THIS.....MAN!!!');

    });
};