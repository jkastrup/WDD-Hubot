//Description:
// Hubot displays a random quote from the Lord of the Rings trilogy.
//
//Dependencies
// None
//
//Commands
// Hubot I simply walked there.
//
// Author
// James Stanbridge
// jstanbridge@fullsail.edu
// Github: jstanbridge

var lotrQuote;

lotrQuote = [
    'There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power. – Gandalf',
    'That there’s some good in this world, Mr. Frodo… and it’s worth fighting for. – Sam',
    'Even the smallest person can change the course of the future. – Galadriel',
    'The time of the Elves… is over. Do we leave Middle-Earth to its fate? Do we let them stand alone? – Lady of the Wood',
    'We swears, to serve the master of the Precious. We will swear on… on the Precious! – Gollum',
    'I am Gandalf the White. And I come back to you now… at the turn of the tide. – Gandalf',
    'Oh, it’s quite simple. If you are a friend, you speak the password, and the doors will open. – Gandalf',
    'Well, what can I tell you? Life in the wide world goes on much as it has this past Age, full of its own comings and goings, scarcely aware of the existence of Hobbits, for which I am very thankful. – Gandalf',
    'For the time will soon come when Hobbits will shape the fortunes of all. – Galadriel',
    'There is no curse in Elvish, Entish, or the tongues of Men for this treachery. – Treebeard',
    'I would rather share one lifetime with you than face all the Ages of this world alone. – Arwen',
    'A day may come when the courage of men fails… but it is not THIS day. – Aragorn',
    'The Ring has awoken, it’s heard its masters call. – Gandalf',
    'Your time will come. You will face the same Evil, and you will defeat it. – Arwen',
    'The board is set, the pieces are moving. We come to it at last, the great battle of our time. – Gandalf',
    'But the fat Hobbit, he knows. Eyes always watching. – Gollum',
    'Mordor. The one place in Middle-Earth we don’t want to see any closer. And it’s the one place we’re trying to get to. It’s just where we can’t get. Let’s face it, Mr. Frodo, we’re lost. – Sam',
    'I thought up an ending for my book. And he lives happily ever after, till the end of his days. – Bilbo',
    'You are the luckiest, the canniest, and the most reckless man I ever knew. Bless you, laddie. – Gimli',
    'I’m glad to be with you, Samwise Gamgee…here at the end of all things. – Frodo'
];

module.exports = function (robot) {
  return robot.hear(/one ring to rule them all/, function (msg) {
    return msg.send(msg.random(lotrQuote));
  });
};

