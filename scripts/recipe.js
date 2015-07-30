//Description
//Script to have Hubot generate a dinner recipe
//
//Dependencies
//Request
//
//Commands
//Hubot dinner - displays a dinner recipe
//
//Author
//Nicole Snow

var request = require('request');
var key = process.env.RECIPE_KEY;

function recipe(msg){

    //Variable for the api url
    var apiURL = 'http://api.campbellskitchen.com/brandservice.svc/api/search?keywords=chicken&format=json&app_id=8ca03727&app_key=' + key;
    // API request
    request(apiURL, function (error, response, body) {
    if (!error && response.statusCode < 300){
        //parse the json
        var json = JSON.parse(response.body);
        // finds a random recipe from the api and brings back the name, url and image 
        var recipe = "Recipe Name: "+json.data.recipes.name +"\n\n"+"Link: "+json.data.recipes.recipelink+"\n\n"+"Description: "+json.data.recipes.thumbimg;
                
            msg.send(recipe);//displays the random recipe 
                
        }else{
            //sends an error message if something goes wrong
            msg.send("We are having some technical difficulties server side...");
        } 
    });

}

//Listens for the dinner string and executes the function
module.exports = function(robot) {
  return robot.respond(/dinner$/i, function(msg) {
     recipe(msg);
  });
}