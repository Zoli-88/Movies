const BASE_URL = "https://www.omdbapi.com/?apikey=4c8a6d5d";

const LIST_MOVIES = [
  "love",
  "river",
  "action",
  "spider",
  "ant",
  "thor",
  "you",
  "iron",
  "steel",
  "wind"
]

let randomSearchPhrase;
function getRandomFromList(list) {
  let randomIndexInList = Math.floor(Math.random() * list.length);
  randomSearchPhrase = list[randomIndexInList];
}

getRandomFromList(LIST_MOVIES);

async function listMovies(queryMovieTitle) {
  const response = await fetch(`${BASE_URL}&s=${queryMovieTitle}`);
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
