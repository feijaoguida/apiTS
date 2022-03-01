"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genre_1 = require("./genre");
describe("validates genre according to degrees", () => {
    it("Deve retornar classical", () => {
        expect((0, genre_1.validaGenre)(0)).toBe("classical");
    }),
        it("Deve retornar rock", () => {
            expect((0, genre_1.validaGenre)(14)).toBe("rock");
        }),
        it("Deve retornar pop", () => {
            expect((0, genre_1.validaGenre)(29)).toBe("pop");
        }),
        it("Deve retornar party", () => {
            expect((0, genre_1.validaGenre)(35)).toBe("party");
        });
});
