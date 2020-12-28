 const axios = require('axios')
 require('dotenv').config()
 var album1 = "2Y9IRtehByVkegoD7TcLfi";
 var album2 = "4nKfZbCALT9H9LfedtDwnZ";

module.exports = async function() {
  try {
    const response = await axios.get(`https://api.spotify.com/v1/albums?ids=${album1}`,
    
    {
      headers: {
        'Content-Type': `application/json`,
        'Authorization': `Bearer ${process.env.SPOTIFY_API_KEY}`
      }
    }
    
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }

};



