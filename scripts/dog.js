//Description:
// Hubot displays a picture of my dog.
//
//Dependencies
// None
//
//Commands
// Have you seen my dog
//
// Author
// Julie Lucas


module.exports = function (robot) {
    return robot.hear(/Have you seen my dog?/i, function (res) {
        
        res.send('No, I have not. Check on pet-finders.com');

    });
};