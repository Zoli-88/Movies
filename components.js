const IMDB_PLACEHOLDER = "<IMDB_ID>";
const IMDB_URL = `https://www.imdb.com/title/${IMDB_PLACEHOLDER}/?ref_=fn_al_tt_1`;

function cardComponent(movie) {
  return `
    <div class="card">
    <div class="poster-container">
      <a href=/movie.html?imdbID=${movie.imdbID} class="poster-link">      
        <img src="${movie.Poster}" alt="">
      </a>
    </div>
      <div class="information">
        <div class="content">
          <a href=/movie.html?imdbID=${movie.imdbID} class="title">
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
    </div>
  `
}

function movieComponent(movie) {
  return `
    <div>
      <div>
        <h1>${movie.Title}</h1>
        <span>${movie.Year}</span>
        <span>${movie.Rated}</span>
        <span>${movie.Runtime}</span>
      </div>
      <div>
        <div>
          <span>${movie.Ratings[0].Source}</span>
          <br>
          <i class="fa-solid fa-star"></i>
          <span>${movie.Ratings[0].Value}</span>
        </div>
        <div>
          <span>${movie.Ratings[1].Source}</span>
          <br>
          <i class="fa-solid fa-star"></i>
          <span>${movie.Ratings[1].Value}</span>
        </div>
        <div>
          <span>${movie.Ratings[2].Source}</span>
          <br>
          <i class="fa-solid fa-star"></i>
          <span>${movie.Ratings[2].Value}</span>
        </div>
      </div>
    </div>
    <img src="${movie.Poster}" alt="${movie.Title} movie poster">
    <p>${movie.Plot}</p>
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

