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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
require("dotenv/config");
function generateToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const spotifyAPi = new spotify_web_api_node_1.default({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        });
        let token = yield spotifyAPi.clientCredentialsGrant().then(function (data) {
            // Save the access token so that it's used in future calls
            spotifyAPi.setAccessToken(data.body['access_token']);
            return data.body['access_token'];
        }, function (err) {
            console.log('Something went wrong when retrieving an access token', err.message);
        });
        return token;
    });
}
exports.generateToken = generateToken;
