 //Description: cake picture
 //Command: Hubot cake
 //Author: Ednalda Fakira ednaldafakira@yahoo.com



 module.exports = function (robot) {
    return robot.respond(/cake/i, function (msg) {
        msg.send('http://www.picgifs.com/glitter-gifs/c/cake/picgifs-cake-8115127.gif');
    });
};
