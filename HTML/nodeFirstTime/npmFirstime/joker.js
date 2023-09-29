const joks = require('give-me-a-joke')
const colors = require('colors')
const cow = require('cowsay')

joks.getRandomDadJoke (function(joke) {
   console.log(joke.black.bgWhite);
});

console.log(cow.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}).rainbow.bgYellow);
// To get a random Chuck Norris joke
