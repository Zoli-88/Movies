const IMDB_PLACEHOLDER = "<IMDB_ID>";
const IMDB_URL = `https://www.imdb.com/title/${IMDB_PLACEHOLDER}/?ref_=fn_al_tt_1`;

function cardComponent(movie) {
  return `
    <div class="card">
    <div class="poster-container">
      <a href=${IMDB_URL.replace(IMDB_PLACEHOLDER, movie.imdbID)} target="_blank" class="poster-link">      
        <img src="${movie.Poster}" alt="">
      </a>
    </div>
      <div class="content">
        <a href=${IMDB_URL.replace(IMDB_PLACEHOLDER, movie.imdbID)} target="_blank" class="title">
          <span>${movie.Title}</span>
        </a>
        <br>
        <i class="fa-regular fa-calendar calendar-icon"></i>
        <span class="year">${movie.Year}</span>
      </div>
      <div class="details">
        <a href=${IMDB_URL.replace(IMDB_PLACEHOLDER, movie.imdbID)} target="_blank" class="external-link">
          <i class="fa-brands fa-imdb logo-icon"></i>
        </a>
        <button class="info-button">
          <i class="fa-solid fa-circle-info "></i>
        </button>
      </div>
    </div>
  `
}

function loadingComponent() {
  return `
    <div id="loading" class="status">
      <i class="fa-solid fa-spinner fa-spin status-icon"></i>
      <br>
      <span class="status-text">Loading, please wait...</span>
    </div>
  `
}

function errorComponent(error) {
  return `
    <div id="error" class="status">
      <i class="fa-solid fa-circle-exclamation status-icon"></i>
      <br>
      <span class="status-text">Error, ${error}</span>
    </div>
  `
}