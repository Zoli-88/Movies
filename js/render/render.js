// DOM elements
const $body = document.body;
const $container = document.querySelector("#container");
const $moviePage = document.querySelector("#movie-page");
const $description = document.querySelector("#description");
const $relatedMovies = document.querySelector("#related-movies");
const $relatedMoviesTitle = document.querySelector("#related-movies-title");

// On load
async function initMovieListPage() {
  renderLoading();

  const urlSearchParams = new URLSearchParams(window.location.search);
  const searchResult = urlSearchParams.get("find");

  if (searchResult) {
    await renderMovies(searchResult, $container);
  } else {
    await renderMovies();
  }
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
    $moviePage.innerHTML = ratingsComponent(movie, querySearchPhrase);
    $description.innerHTML = descriptionComponent(movie, querySearchPhrase);
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
    });

    if (moviesWithoutCurrent.length === 0) {
      $relatedMoviesTitle.innerHTML = noRelatedTitlesComponent(querySearchPhrase);
    } else {
      $relatedMoviesTitle.innerHTML = relatedTitlesComponent(querySearchPhrase)
      $relatedMovies.insertAdjacentHTML("beforeend", relatedMoviesComponent(moviesWithoutCurrent))
      activateSwiper();
    }
  } catch (error) {
    renderError(error);
  }
}

async function renderMovies(searchResult) {
  try {
    const data = await listMovies(searchResult);
    const movies = data.Search;

    $container.innerHTML = "";

    movies.forEach(movie => {
      $container.innerHTML += cardComponent(movie, searchResult);
    });
    
  } catch (error) {
    renderError(error);
  }
}

async function renderModal(imdbID) {
  try {
    const $cardComponent = document.querySelector(`#${imdbID.id}`);
    const movie = await listMovie(imdbID.id);
    console.log(movie);
    $cardComponent.insertAdjacentHTML("beforeend", modalComponent(movie));
  } catch (error) {
    renderError(error);
  }
}

function closeModal(imdbID) {
  const $modal = document.querySelector(`#${imdbID.id} > #modal-component`);
  const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
  $modal.classList.add("hide-modal")

  setTimeout(() => {
    $modal.remove();
  }, fadeOutMs)
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
