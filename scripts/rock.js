/*adding link for stone with 'rock me' */
module.exports = function (robot) {
    return robot.respond(/stone me/i, function (msg){
        /*returns image link*/
        msg.send('https://www.facebook.com/FortuneOpal/photos/a.595456520533664.1073741827.595454610533855/897357000343613/?type=3&theater');
    });
};
/* this is a link for the text bling me, will return an image*/
module.exports = function (robot) {
    return robot.respond(/bling me/i, function (msg){
        /*returns image link*/
        msg.send('https://www.facebook.com/hajcz.bizuteria.artystyczna/photos/pb.1430745793812984.-2207520000.1443402043./1716708861883341/?type=3&theater');
    });
};