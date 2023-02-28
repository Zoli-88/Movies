const BASE_URL = "https://www.omdbapi.com/?apikey=4c8a6d5d";
const DEFAULT_SEARCH = "s=iron man";

// const LIST_MOVIES = [
//   "movie1",
//   "movie2",
//   ...
//   "movien"
// ]

// function getRandomFromList(list) {
//   return randomItem;
// }

async function listMovies() {
  // const response = await fetch(`${BASE_URL}&s=${getRandomFromList(LIST_MOVIES)}`);
  const response = await fetch(`${BASE_URL}&${DEFAULT_SEARCH}`);
  const data = await response.json();

  if(data.Response === "False") {
    throw data.Error;
  }

  return data
}

async function listMovie(imdbID) {
  const response = await fetch(`${BASE_URL}&i=${imdbID}&plot=full`);
  const data = await response.json();

  if(data.Response === "False") {
    throw data.Error;
  }

  return data
}
