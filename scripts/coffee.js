// Description:
//   Hubot will make your coffee for you or respond as Dr. McCoy
//
// Dependencies:
//   none
//
// Configuration:
//	 
//
// Commands:
//   hubot make me <drink order>  - Hubot makes your drink (Use 'coffee', 'latte', 'americano', or 'cappuccino' in your request)
//   ex) hubot make me an americano with some vanilla and cream - responds: I've made you an americano with some vanilla and cream. Enjoy!
//
// Notes:
//   It would be nice to find an API that randomly returns a coffee drink for extra functionality (i.e. Hubot make me some coffee! - responds with a random coffee 
//
// Author:
//   jkastrup

// Listens for the phrase "" 
module.exports = function (robot) {
    robot.respond(/make me (.*)/i, function(res){    
		// Initialize variables
		// Store user input
		var input = res.match[1];
		
		// img stores image link
		var img = "";
		// response stores hubot reply
		var reply = "I've made you " + input + ". Enjoy!";
		
		// Make response lower case for easier check
		var inpLower = input.toLowerCase();
		
		// Locate drink terms (coffee, latte, americano, cappuccino)
		if(inpLower.indexOf("coffee") > 0) {
			// Regular coffee image
			img = "http://www.meghantelpner.com/wp-content/uploads/2014/09/shutterstock_111999368.jpg"
		}else if(inpLower.indexOf("latte") > 0){
			// latte
			img = "http://silvestregustolatino.com/magento/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/a/latte.jpg";
		}else if(inpLower.indexOf("americano") > 0){
			// americano
			img = "http://coolbeanscoffeeroasters.com/dev/wp-content/uploads/2014/07/Caffe-Americano2.jpg";
		}else if(inpLower.indexOf("cappuccino") > 0){
			// cappuccino
			img = "http://ecig-club.fr/wp-content/uploads/2012/05/Cappuccino.jpg";
		} else {
			// Not a coffee drink
			responses = [
				"What am I, a barista or a moon-shuttle conductor?",
				"I'm a barista, not a bricklayer!",
				"I'm a barista, not a psychiatrist.",
				"Look, I'm a barista, not an escalator.",
				"I'm a barista, not a mechanic.",
				"I'm a barista, not an engineer.",
				"I'm not a magician, I'm a barista.",
				"I'm a barista, Spock... a barista!! Get us beamed aboard!"
			];
			reply = res.random(responses);
		}
		
		// Output reply and image
		res.send(reply);
		// If image link exists
		if(img != ""){
			res.send(img);
		}
    });
};  

