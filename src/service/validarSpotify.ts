import { apiSpotify } from '../service/api'
import { generateToken } from '../service/authorizationSpotify' 

  
export async function validarSpotify(seed_genres:string, limit=10) {
    const token = await generateToken()
    
    const recommendations = await apiSpotify.get("", {
      headers: { Authorization: "Bearer " + token },
      params: {seed_genres: seed_genres, limit: limit}
    })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    }) 
     
    return recommendations

  }
