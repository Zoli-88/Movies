// DOM elements
const $body = document.body;
const $container = document.querySelector("#container");
const $moviePage = document.querySelector("#movie-page");
const $relatedMovies = document.querySelector("#related-movies");

// On load
function initMovieListPage() {
  renderMovies();
}

function initMoviePage() {
  renderMovie();
  renderRelatedMovies();
}

async function renderMovie() {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const queryImdbID = searchParams.get("imdbID");
  renderLoading();
  
  try {
    const movie = await listMovie(queryImdbID);
    $moviePage.innerHTML = movieComponent(movie);
  } catch (error) {
    renderError(error);
  }

  clearLoading();
}

async function renderRelatedMovies() {
  try {
    const data = await listMovies();
    const movies = data.Search;
    $relatedMovies.insertAdjacentHTML("beforeend", swiperComponent(movies))
    activateSwiper();
  } catch (error) {
    renderError(error);
  }
}

async function renderMovies() {
  renderLoading();

  try {
    const data = await listMovies();
    const movies = data.Search;

    movies.forEach(movie => {
      $container.innerHTML += cardComponent(movie);
    });
    
  } catch (error) {
    renderError(error);
  }

  clearLoading();
}

function renderLoading() {
  $body.insertAdjacentHTML("beforeend", loadingComponent());
}

function clearLoading() {
  const $loading = document.querySelector("#loading");
  $loading.remove();
}

function renderError(error) {
  $body.insertAdjacentHTML("beforeend", errorComponent(error));
}

function clearError() {
  const $error = document.querySelector("#error");
  $error.remove();
}
