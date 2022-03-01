import SpotifyWebApi from 'spotify-web-api-node'
import 'dotenv/config'

export async function generateToken() {

const spotifyAPi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

let token = await spotifyAPi.clientCredentialsGrant().then(
  function(data) {
    // Save the access token so that it's used in future calls
    spotifyAPi.setAccessToken(data.body['access_token']);
    return data.body['access_token']
  },
  function(err) {
    console.log(
      'Alguma coisa deu errado enquando recebia o access token',
      err.message
    );
  }
);
  return token
  
}