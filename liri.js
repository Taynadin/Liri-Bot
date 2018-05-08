
require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var request = require('request');

process.argv.shift();//skips node
process.argv.shift();// skips file
process.argv.shift(); // skips arg[2]
let commandData = process.argv.join(" ");
 
var client = new Twitter(keys.twitter);

var spotify = new Spotify(keys.spotify);

// process.argv will print out any command line arguments.
console.log(process.argv);
console.log("====================");
console.log("Welcome To Liri-Bot");
console.log("====================");

var params = {
  screen_name: 'wsj',
  count: 20
};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("My tweets:");
    console.log("------------------------------------------------------------------");

    fs.appendFile('log.txt',"\nMy tweets:");

    for (var i= 1; i < tweets.length; i++) {
    console.log(tweets[i].text);
    console.log('Tweeted: ', tweets[i].created_at);
    console.log("------------------------------------------------------------------");

    fs.appendFile('log.txt', '\n' + tweets[i].text);
    fs.appendFile('log.txt','Tweeted: ' + tweets[i].created_at);
    }

  }


// let getTweets = () => {
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     for (var i = 0; i < tweets.length; i ++){
//         console.log(JSON.stringify(tweets, null, 2));
//     }
//   }
// });
// };
// tweets();

// let spotifyIt = (commandData) => {
//   if(commandData){
//     var songName = commandData;
//   } else {
//     songName = "The Sign";
//   }
   
//   spotify.search({ type: 'track', query: songName }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
  
//     console.log(JSON.stringify(data, null, 2));
//   });
// }
// spotifyIt();

