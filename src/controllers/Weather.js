"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const api_1 = require("../service/api");
const validarSpotify_1 = require("../service/validarSpotify");
const helpers_1 = require("../helpers");
class Weather {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const apikey = process.env.WEATHER_API_KEY;
            const { long, lat, city } = request.query;
            const grausKelvin = yield api_1.apiOpenWeather.get(`?q=${city}&appid=${apikey}`)
                .then((response) => response.data)
                .catch((err) => {
                response.status(400).json("Ops! Ocorreu um Erro " + err);
            });
            const grausCelcios = parseFloat((0, helpers_1.converterGraus)(grausKelvin.main.temp));
            let genre = (0, helpers_1.validaGenre)(grausCelcios);
            let listSuggestion = yield (0, validarSpotify_1.validarSpotify)(genre, 15);
            return response.json(listSuggestion);
        });
    }
    ;
}
exports.default = Weather;
