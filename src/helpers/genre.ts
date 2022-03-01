export function validaGenre(grausCelcios: number) {
  let genre: string
    
  switch (true) {
    case grausCelcios < 10:
      genre = "classical"
      break;
    case grausCelcios < 15:
      genre = "rock"
      break;
    case grausCelcios < 30:
      genre = "pop"
      break;
    default:
      genre = "party"
      break;
  }

  return genre
}