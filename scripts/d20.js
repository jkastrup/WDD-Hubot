module.exports = function (robot) {

    return robot.repsond(/roll d20/i, function (res) {
    
        res.send(Math.floor(Math.random() * 20 ) + 1);
        
    });
};