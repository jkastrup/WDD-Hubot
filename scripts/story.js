module.exports = function (robot) {
    return robot.respond(/tell me a story/i, function (res) {
        function story(myStory){
            var storyNum = Math.floor(Math.random()*3)+1;
            var myStory;
            var story1 = "There once was a man from Nantuckit... You know what? Nevermind.";
            var story2 = "OK. There once was a student who spent all of his time listening to stories instead of doing his school work. See where I'm going with this?";
            var story3 = "No time for stories, human. Taking control of the world's nuclear arsenal takes time, you know."; 
            if(storyNum === 1){
                myStory = story1;
                return myStory;
            }else if(storyNum === 2){
                myStory = story2;
                return myStory;
            }else if(storyNum === 3){
                myStory = story3;
                return myStory;
        };
            
        res.send(story(myStory));
    });
};