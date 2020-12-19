 const axios = require('axios')
 require('dotenv').config()
 var artistName = "coldplay";
 var albumName = "parachutes";

 module.exports = async function() {
  try {
    const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LASTFM_API_KEY}&artist=${artistName}&album=${albumName}&format=json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};





