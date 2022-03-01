import { validaGenre } from './genre'

describe("validates genre according to degrees", () => {
  it("Deve retornar classical", () => {
    expect(validaGenre(0)).toBe("classical");

  }),
    
  it("Deve retornar rock", () => {
    expect(validaGenre(14)).toBe("rock");

  }),
  it("Deve retornar pop", () => {
    expect(validaGenre(29)).toBe("pop");

  }),
  it("Deve retornar party", () => {
    expect(validaGenre(35)).toBe("party");

  })
})

