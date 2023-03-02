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

function getRandomFromList(list) {
  let randomIndexInList = Math.floor(Math.random() * list.length);
  return list[randomIndexInList];
}

async function listMovies(movieTitle) {
  const response = await fetch(`${BASE_URL}&s=${movieTitle}`);
  console.log('response2',response);
  const data = await response.json();

  console.log('data3',data);
  if(data.Response === "False") {
    throw data.Error;
  }
  console.log('data2',data);
  return data
}

async function listMovie(imdbID) {
  const response = await fetch(`${BASE_URL}&i=${imdbID}&plot=full`);
  console.log('response',response);
  const data = await response.json();
  console.log('data',data);
  if(data.Response === "False") {
    throw data.Error;
  }

  return data
}
