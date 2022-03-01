import { Request, Response } from 'express'

import { validarSpotify } from '../service/validarSpotify'

class Spotify { 
  
  async index(request: Request, response: Response) {
    
    const { seed_genres, limit } = request.query

    const recommendations = await validarSpotify(seed_genres, limit)

    return response.json(recommendations) 

  }
}
 
export default Spotify
  