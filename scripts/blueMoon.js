//Description: Picture of a Blue Moon
//Author: Ednalda Fakira ednaldafakira@yahoo.com
//Command: bluemoon

module.exports = funtion(robot){
	return robot.respond(/bluemoon/i, function (msg){
	//hubot returns a blue moon picture
	   msg.send('http://apod.nasa.gov/apod/image/1507/STACKED-COLOUR-ISS-ODonnell.jpg');
	});
};