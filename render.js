// DOM elements
const $body = document.body;
const $container = document.querySelector("#container");
const $moviePage = document.querySelector("#movie-page");
const $relatedMovies = document.querySelector("#related-movies");

// On load
async function initMovieListPage() {
  renderLoading();
  await renderMovies();
  clearLoading();
}

async function initMoviePage() {
  renderLoading();
  await renderMovie();
  await renderRelatedMovies();
  clearLoading();
}

async function renderMovie() {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const queryImdbID = searchParams.get("imdbID");
  const querySearchPhrase = searchParams.get("searchPhrase");
  
  try {
    const movie = await listMovie(queryImdbID);
    $moviePage.innerHTML = movieComponent(movie, querySearchPhrase);
  } catch (error) {
    renderError(error);
  }
}

async function renderRelatedMovies() {
  try {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const querySearchPhrase = searchParams.get("searchPhrase");
    
    const data = await listMovies(querySearchPhrase);
    const movies = data.Search;
    $relatedMovies.insertAdjacentHTML("beforeend", swiperComponent(movies))
    activateSwiper();
  } catch (error) {
    renderError(error);
  }
}

async function renderMovies() {
  try {
    const data = await listMovies(randomSearchPhrase);
    const movies = data.Search;

    movies.forEach(movie => {
      $container.innerHTML += cardComponent(movie, randomSearchPhrase);
    });
    
  } catch (error) {
    renderError(error);
  }
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
