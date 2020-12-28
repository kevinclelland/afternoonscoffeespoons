 const axios = require('axios')
 require('dotenv').config()
 var artistName1 = "The Offspring";
 var albumName1 = "Smash";

 module.exports = async function() {
  try {
    const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LASTFM_API_KEY}&artist=${artistName1}&album=${albumName1}&format=json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};

