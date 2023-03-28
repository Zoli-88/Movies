// DOM elements
const $body = document.body;
const $container = document.querySelector("#container");
const $moviePage = document.querySelector("#movie-page");
const $relatedMovies = document.querySelector("#related-movies");
const $relatedMoviesTitle = document.querySelector("#related-movies-title");

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
    const queryImdbID = searchParams.get("imdbID");
    const querySearchPhrase = searchParams.get("searchPhrase");
    
    const data = await listMovies(querySearchPhrase);
    const movies = data.Search;

    const moviesWithoutCurrent = movies.filter((movie) => {
      return movie.imdbID !== queryImdbID
      // return null;
    });

    if (moviesWithoutCurrent.length === 0) {
      $relatedMoviesTitle.innerHTML = noRelatedTitlesComponent(querySearchPhrase);
    } else {
      $relatedMoviesTitle.innerHTML = relatedTitlesComponent(querySearchPhrase)
      $relatedMovies.insertAdjacentHTML("beforeend", swiperComponent(moviesWithoutCurrent))
      activateSwiper();
    }
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

function renderModal(imdbID) {
  console.log(imdbID);
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
