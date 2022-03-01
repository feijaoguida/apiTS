"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSpotify = exports.apiOpenWeather = void 0;
const axios_1 = __importDefault(require("axios"));
exports.apiOpenWeather = axios_1.default.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather`
});
exports.apiSpotify = axios_1.default.create({
    baseURL: `https://api.spotify.com/v1/recommendations`
});
