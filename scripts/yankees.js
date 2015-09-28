// Description:
//   Answers the question of who will win the world series
//
// Dependencies:
//   none
//
// Commands:
//   Who will win the world the world series.
//
// Author:
//   John Russo

module.exports = function (robot) {
    return robot.hear(/Who will win the world series?/i, function (res) {
        
        res.send('THE YANKEES OF COURSE');

    });
};