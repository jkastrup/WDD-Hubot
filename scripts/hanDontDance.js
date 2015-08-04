//Description:
//Han Dont Dance
//
//Dependencies:
//None
//
//Configuration:
//None
//
//Commands:
//What is it - Returns a gif of Han Solo shooting Psy
//
//Author:
//Ritchie Soricelli
//
//Contributor:
//None

module.exports = function (robot) {
    return robot.hear(/what is it/i, function (res) {
        //returns gif
        res.send('https://i.chzbgr.com/maxW500/6601373440/h83C5B2A7/');

    });
};