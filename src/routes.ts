import { Router } from "express";

import Weather from "./controllers/Weather";
import Spotify from "./controllers/Spotify";

const router = Router()

const weather = new Weather()
const spotify = new Spotify()

router.get('/sugestions', weather.index)

router.get('/recommendation', spotify.index)

export { router }