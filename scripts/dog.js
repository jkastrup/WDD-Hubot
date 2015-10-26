//Description:
// Hubot displays a picture of my dog.
//
//Dependencies
// None
//
//Commands
// have you seen my dog
//
// Author
// Julie Lucas
// julieclucas@att.net


module.exports = function (robot) {
    return robot.respond(/have you seen my dog/i, function (msg){
        
        msg.send('https://www.petfinder.com/pet-adoption/dog-adoption/');
    });
};