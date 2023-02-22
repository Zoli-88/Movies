const BASE_URL = "http://www.omdbapi.com/?apikey=4c8a6d5d&s=thor";

async function listMovies() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data
}
listMovies();