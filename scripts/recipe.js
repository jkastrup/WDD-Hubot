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
