import { Request, Response } from 'express'

import { apiSpotify } from '../service/api'
import { generateToken } from '../service/authorizationSpotify' 

class Spotify { 
  
  async index(request: Request, response: Response) {
    
    const { seed_genres, limit } = request.query

    const token = await generateToken()
    
    const recommendations = await apiSpotify.get("", {
      headers: { Authorization: "Bearer " + token },
      params: {seed_genres: seed_genres, limit: limit}
    })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    }) 

    return response.json(recommendations) 

  }
}
 
export default Spotify 
  