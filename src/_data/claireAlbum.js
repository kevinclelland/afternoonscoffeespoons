const axios = require('axios')
require('dotenv').config()

var artistName1 = "The Offspring";
var albumName1 = "Smash";

let one = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LASTFM_API_KEY}&artist=${artistName1}&album=${albumName1}&format=json`
let two = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LASTFM_API_KEY}&artist=${artistName1}&album=${albumName1}&format=json`
let three = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LASTFM_API_KEY}&artist=${artistName1}&album=${albumName1}&format=json`

module.exports = async function() {

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]
  const responesThree = responses[2]
  // use/access the results 
})).catch(errors => {
  // react on errors.
})

};
