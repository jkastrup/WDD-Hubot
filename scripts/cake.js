//Description: show cake picture
//Command: Hubot cake
//Athor: Ednalda Fakira



module.exports = function (){
	return cake.respond(/cake/1, function (show){
      show.send('http://www.picgifs.com/glitter-gifs/c/cake/picgifs-cake-8115127.gif');
	});
};