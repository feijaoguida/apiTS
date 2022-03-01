"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterGraus = void 0;
function converterGraus(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}
exports.converterGraus = converterGraus;
