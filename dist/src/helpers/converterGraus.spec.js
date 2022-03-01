"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converterGraus_1 = require("./converterGraus");
describe("Convert Kelvin in Celses", () => {
    it("Deve ser possivel converter 300 para 26,85", () => {
        expect((0, converterGraus_1.converterGraus)(300)).toBe("26.85");
    });
});
