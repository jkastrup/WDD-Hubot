//Description:
//Safety Dance
//
//Dependencies:
//None
//
//Configuration:
//None
//
//Commands:
//safety - When the word safety is typed into Slack, Hubot will respond with the Safety Dance
//
//Author:
//Ritchie Soricelli
//
//Contributor:
//None

module.exports = function (robot) {
    return robot.hear(/safety/i, function (res) {
        //Safety dance gif is returned
        //You can leave your friends behind
        res.send('Safety?  You can dance if you want to...');
        res.send('http://cdn.yourepeat.com/media/gif/000/035/391/59c8864506531f7d8cdff497ecb6ef3d.gif');
    });
};