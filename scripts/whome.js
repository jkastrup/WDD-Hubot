//Description:
//Who Me?
//
//Dependencies:
//None
//
//Configuration:
//None
//
//Commands:
//Hubot stop it - Han Solo "Who, me?" gif
//
//Author:
//Ritchie Soricelli
//
//Contributor:
//None

module.exports = function (robot) {
    return robot.hear(/Stop it/i, function (res) {
        //Han Solo "Who? Me?" gif is returned
        res.send('http://i.imgur.com/IKB69pa.gif');

    });
};
