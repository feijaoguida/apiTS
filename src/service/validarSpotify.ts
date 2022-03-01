import { apiSpotify } from "../service/api";
import { generateToken } from "../service/authorizationSpotify";

export async function validarSpotify(seed_genres: string, limit = 30) {
  const token = await generateToken();

  const recommendations = await apiSpotify
    .get("", {
      headers: { Authorization: "Bearer " + token },
      params: { seed_genres: seed_genres, limit: limit },
    })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });

  interface tracks {
    album: { artists: { name: any }[] };
  }

  const names = recommendations.tracks.map(
    (r: tracks) => r.album.artists[0].name
  );

  return names;
}
