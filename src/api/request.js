const API_KEY = "515c08c892c53bed3e95145407cde7d8";
const BASE_URL = "https://api.themoviedb.org/3"
export const requests ={
  feachTrending:`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated:`${BASE_URL}/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`,
}