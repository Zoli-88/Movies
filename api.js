const BASE_URL = "http://www.omdbapi.com/?apikey=4c8a6d5d&s=iron man";

async function listMovies() {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  if(data.Response === "False") {
    throw data.Error;
  }

  return data
}
