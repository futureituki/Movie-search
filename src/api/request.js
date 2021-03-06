export const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";
export const requestsTv = {
  feachTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ja-JP`,
  feachNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_networks=213`,
  feactTopRated: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP`,
  feactActionMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=28`,
  feactComedyMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=35`,
  feactHorrorMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=27`,
  feactRomanceMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=10749`,
  feactDocumentMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ja-JP&with_genres=99`,
  feactLatest: `${BASE_URL}/movie/550?api_key=${API_KEY}`,
};
export const requestsMovie = {
  MovieTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=ja-JP&language=en-us`,
  MovieNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP&with_networks=213`,
  MovieTopRated: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP`,
  MovieActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP&with_genres=28`,
  MovieComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP&with_genres=35`,
  MovieHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP&with_genres=27`,
  MovieRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP&with_genres=10749`,
  MovieDocumentMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ja-JP&with_genres=99`,
  MovieLatest: `${BASE_URL}/movie/?api_key=${API_KEY}&language=ja-JP&latest`,
};
