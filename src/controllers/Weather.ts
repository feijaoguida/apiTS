import { Request, Response } from 'express'
import 'dotenv/config'

import { apiOpenWeather } from '../service/api'
import { validarSpotify } from '../service/validarSpotify'
import { converterGraus, validaGenre } from '../helpers'

class Weather {
  
  async index(request: Request, response: Response) {

    const apikey = process.env.WEATHER_API_KEY 

    const { long, lat, city } = request.query

    const grausKelvin: any = await apiOpenWeather.get(`?q=${city}&appid=${apikey}`)
      .then((response) => response.data )
      .catch((err) => {
        response.status(400).json("Ops! Ocorreu um Erro " + err);
      })
    
    const grausCelcios = parseFloat(converterGraus(grausKelvin.main.temp))

    let genre = validaGenre(grausCelcios)
    
    let listSuggestion = await validarSpotify(genre, 15)
    
    return response.json(listSuggestion)
  };
}

export default Weather;
