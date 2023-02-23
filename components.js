const IMDB_PLACEHOLDER = "<IMDB_ID>";
const IMDB_URL = `https://www.imdb.com/title/${IMDB_PLACEHOLDER}/?ref_=fn_al_tt_1`;

const ICONS_MAP = new Map();
ICONS_MAP.set("IMDB", "fa-solid fa-star")
ICONS_MAP.set("Internet Movie Database", "fa-solid fa-database")
ICONS_MAP.set("Rotten Tomatoes", "fa-solid fa-apple-whole")
ICONS_MAP.set("Metacritic", "fa-solid fa-pen-nib")

console.log(ICONS_MAP)

function cardComponent(movie) {
  const {
    imdbID,
    Poster,
    Title,
    Year,
  } = movie;

  return `
    <div class="card">
    <div class="poster-container">
      <a href=/movie.html?imdbID=${imdbID} class="poster-link">      
        <img src="${Poster}" alt="">
      </a>
    </div>
      <div class="information">
        <div class="content">
          <a href=/html?imdbID=${imdbID} class="title">
            <span>${Title}</span>
          </a>
          <br>
          <i class="fa-regular fa-calendar calendar-icon"></i>
          <span class="year">${Year}</span>
        </div>
        <div class="details">
          <a href=${IMDB_URL.replace(IMDB_PLACEHOLDER, imdbID)} target="_blank" class="external-link">
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

function ratingComponent(rating) {
  return `
    <div>
      <span>${rating.Source}</span>
      <br>
      <div>
      <i class="${ICONS_MAP.get(rating.Source)}"></i>
      <span>${rating.Value}</span>
      </div>
    </div>
  `
}

function movieComponent(movie) {
  const {
    Title,
    Year,
    Rated,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Poster,
    Plot,
  } = movie;

  console.log("movie.Ratings", movie.Ratings)

  return `
    <div class="ratings">
      ${ratingComponent({
        Source: "IMDB",
        Value: movie.imdbRating
      })}
      ${movie.Ratings.map(rating => {
        console.log(rating)
        return ratingComponent(rating);
      })}
    </div>
    <div class="description">
      <img src="${Poster}" alt="${Title} movie poster">
      <div>
        <h1>${Title}</h1>
        <div class="subtitle">
          <span>${Year} &#x2022;</span>
          <span>${Rated} &#x2022;</span>
          <span>${Runtime}</span>
        </div>
        <ul>
          <li><i class="fa-solid fa-video"></i> ${Genre}</li>
          <li><i class="fa-solid fa-clapperboard"></i> ${Director}</li>
          <li><i class="fa-solid fa-pen-to-square"></i> ${Writer}</li>
          <li><i class="fa-solid fa-masks-theater"></i> ${Actors}</li>
          <p class="plot">${Plot}</p>
        </ul>
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

