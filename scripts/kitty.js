// Description:
//   Hubot will display a picture of a kitty!
//
// Dependencies:
//   none
//
// Configuration:
//	 
//
// Commands:
//   kitty - displays an cute kitty!
//
//
// Author:
//   jkastrup

// Listens for 'kitty'
module.exports = function (robot) {
    robot.hear(/kitty/i, function(res){    
		// Displays randoml cat gif
		res.send("http://thecatapi.com/api/images/get?format=src&type=gif");
    });
};  