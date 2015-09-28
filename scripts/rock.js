
module.exports = function (robot) {
    return robot.respond(/rock me/i, function (msg){
        
        msg.send('https://en.wikipedia.org/wiki/Malachite');
    });
};

module.exports = function (robot) {
    return robot.respond(/bling me/i, function (msg){
        
        msg.send('https://www.facebook.com/hajcz.bizuteria.artystyczna/photos/pb.1430745793812984.-2207520000.1443402043./1716708861883341/?type=3&theater');
    });
};