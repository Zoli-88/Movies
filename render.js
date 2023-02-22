// DOM elements
const $body = document.body;
const $container = document.querySelector("#container");

// On load
function init() {
  renderMovies();
}

init();

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

