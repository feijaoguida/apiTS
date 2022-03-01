import { converterGraus } from './converterGraus'

describe("Convert Kelvin in Celses", () => {
  it("Deve ser possivel converter 300 para 26,85", () => {
    expect(converterGraus(300)).toBe("26.85");

  })
})