//John Russo Yankees script
// Ask who will win the world series

module.exports = function (robot) {
    return robot.hear(/Who will win the world series?/i, function (res) {
        
        res.send('THE YANKEES OF COURSE');

    });
};