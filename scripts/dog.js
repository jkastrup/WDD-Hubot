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


module.exports = (robot) ->
    robot.hear /have you seen my dog/i, (res) ->        
        res.send "https://www.petfinder.com/pet-adoption/dog-adoption/"
