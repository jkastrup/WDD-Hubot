//Description:
// Hubot displays a picture of my dog.
//
//Dependencies
// None
//
//Commands
// Hubot have you seen my dog - Displays a gif of petfinder.com.
//
// Author
// Julie Lucas
// julieclucas@att.net
//
//Contributors
// Julie Lucas


// Listens for the phrase have you seen my dog and calls the function to display the link
module.exports = function (robot) {
    return robot.respond(/have you seen my dog/i, function (msg){
        
        msg.send('https://www.petfinder.com/pet-adoption/dog-adoption/');
    });
};