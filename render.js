// DOM elements
const $container = document.querySelector("#container");

// On load
function init() {
  renderMovies();
}

init();

async function renderMovies() {
  const data = await listMovies();
  const movies = data.Search;
  console.log(movies);
  movies.forEach(movie => {
    $container.innerHTML += cardComponent(movie);
  });
}