require("dotenv").config();

var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "4b5d1dc211c442a9be7c23ab9a68cb50",
  secret: "4f9ffbb9a9dd413db2330af1de5033c7"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


// I could not for the life of me complete this assignment. It was too hard and I almost lost my mind trying to complete it. I am sorry.
// The app is incomplete I don't think i can complete it in its fullest.