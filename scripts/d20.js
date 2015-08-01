module.exports = function (robot) {

    return robot.respond(/roll d20/i, function (res) {
    
        res.send(Math.floor(Math.random() * 20 ) + 1);
        
    });
};