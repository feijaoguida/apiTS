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
exports.validarSpotify = void 0;
const api_1 = require("../service/api");
const authorizationSpotify_1 = require("../service/authorizationSpotify");
function validarSpotify(seed_genres, limit = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield (0, authorizationSpotify_1.generateToken)();
        const recommendations = yield api_1.apiSpotify.get("", {
            headers: { Authorization: "Bearer " + token },
            params: { seed_genres: seed_genres, limit: limit }
        })
            .then((response) => response.data)
            .catch((error) => {
            return error;
        });
        return recommendations;
    });
}
exports.validarSpotify = validarSpotify;
