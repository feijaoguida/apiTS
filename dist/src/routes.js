"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Weather_1 = __importDefault(require("./controllers/Weather"));
const Spotify_1 = __importDefault(require("./controllers/Spotify"));
const router = (0, express_1.Router)();
exports.router = router;
const weather = new Weather_1.default();
const spotify = new Spotify_1.default();
router.get('/sugestions', weather.index);
router.get('/recommendation', spotify.index);
