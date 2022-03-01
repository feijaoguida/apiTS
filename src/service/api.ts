import axios from 'axios';

export const apiOpenWeather = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather`
})

export const apiSpotify = axios.create({
  baseURL: `https://api.spotify.com/v1/recommendations`
})