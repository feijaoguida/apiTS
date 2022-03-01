"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaGenre = void 0;
function validaGenre(grausCelcios) {
    let genre;
    switch (true) {
        case grausCelcios < 10:
            genre = "classical";
            break;
        case grausCelcios < 15:
            genre = "rock";
            break;
        case grausCelcios < 30:
            genre = "pop";
            break;
        default:
            genre = "party";
            break;
    }
    return genre;
}
exports.validaGenre = validaGenre;
