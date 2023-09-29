import {BASE_URL} from "../constants/constants.js";

async function listMovies(queryMovieTitle = "thor") {
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

export {listMovies, listMovie};
