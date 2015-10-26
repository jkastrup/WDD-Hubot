// Description:
//   Gives a response to "Go Clemson Tigers!"
//
// Dependencies:
//   none
//
// Commands:
//   Go Tigers! 
//
// Author:
//   Julie Lucas


module.exports = function (robot) {
    return robot.hear(/Go Tigers!/i, function (res) {
        
        res.send('C - L - E - M - S - OOOOOOOOO - N!!');

    });
};