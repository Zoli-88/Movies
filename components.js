const IMDB_PLACEHOLDER = "<IMDB_ID>";
const IMDB_URL = `https://www.imdb.com/title/${IMDB_PLACEHOLDER}/?ref_=fn_al_tt_1`;

const ICONS_MAP = new Map();
ICONS_MAP.set("IMDB", "fa-solid fa-star")
ICONS_MAP.set("Internet Movie Database", "fa-solid fa-database")
ICONS_MAP.set("Rotten Tomatoes", "fa-solid fa-apple-whole")
ICONS_MAP.set("Metacritic", "fa-solid fa-pen-nib")

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
        <img src="${Poster}" alt="${Title} poster">
      </a>
    </div>
      <div class="information">
        <div class="content">
        <i class="fa-regular fa-calendar calendar-icon"></i>
        <span class="year">${Year}</span>
        <br>
          <a href=/html?imdbID=${imdbID} class="title">
            <span>${Title}</span>
          </a>
        </div>
        <div class="details">
          <a href=${IMDB_URL.replace(IMDB_PLACEHOLDER, imdbID)} target="_blank" class="external-link">
            <i class="fa-brands fa-imdb logo-icon"></i>
          </a>
          <button class="primary-btn">
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
      <div>
        <span>${rating.Value}</span>
        <i class="${ICONS_MAP.get(rating.Source)}"></i>
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
    Language,
    Country,
    Awards,
    DVD,
    BoxOffice,
    Writer,
    Actors,
    Poster,
    Plot,
  } = movie;

  return `
    <div class="ratings">
      ${ratingComponent({
        Source: "IMDB",
        Value: movie.imdbRating
      })}
      ${movie.Ratings.map(rating => {
        return ratingComponent(rating);
      }).join("")}
    </div>
    <div class="description">
      <img src="${Poster}" alt="${Title} movie poster" class="only-desktop">
      <div>
        <h1>${Title}</h1>
        <div class="subtitle">
          <span>${Year} &#x2022;</span>
          <span>${Rated} &#x2022;</span>
          <span>${Runtime}</span>
        </div>
        <br>
        <img src="${Poster}" alt="${Title} movie poster" class="only-mobile">
        <ul>
          <li><i class="fa-solid fa-video"></i> ${Genre}</li>
          <li><i class="fa-solid fa-clapperboard"></i> ${Director}</li>
          <li><i class="fa-solid fa-pen-to-square"></i> ${Writer}</li>
          <li><i class="fa-solid fa-masks-theater"></i> ${Actors}</li>
          <li><i class="fa-solid fa-globe"></i> ${Language}</li>
          <li><i class="fa-solid fa-flag"></i> ${Country}</li>
          <li><i class="fa-solid fa-trophy"></i> Awards: ${Awards}</li>
          <li><i class="fa-solid fa-compact-disc"></i> Released on DVD: ${DVD}</li>
          <li><i class="fa-solid fa-sack-dollar"></i> Box-office total: ${BoxOffice}</li>
        </ul>
        <br>
        <p class="plot">${Plot}</p>
      </div>
    </div>
  `
}

function loadingComponent() {
  return `
    <div id="loading" class="status">
      <div>
        <i class="fa-solid fa-spinner fa-spin status-icon"></i>
        <br>
        <span class="status-text">Loading, please wait...</span>
      </div>
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

function swiperComponent(movies) {
  // In the related movies component we want to render all the movies present in the default search
  // except the one that is highlighted in the movie component
  
  // to do this, first we need to find a unique id for the movie we want to remove, this can be retrieved from the url
  // "http://127.0.0.1:5500/movie.html?imdbID=tt2654124"
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const queryImdbID = searchParams.get("imdbID");
  
  // then we need to create a new array that will contain all the movies in the default search 
  // except the one that is highlighted in the movie component
  // a non destructive method would be the filter method which returns a new array based on the condition we provide
  // in our case, the method below would translate to 
  // "return a new copy of the original "movies" array that contains all the objects (movies) in the default search
  // except the one that has the movie.imdbID value equal to the queryImdbID in the search URL"
  const moviesWithoutCurrent = movies.filter((movie) => {
    return movie.imdbID !== queryImdbID
  });

  return `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${moviesWithoutCurrent.map((movie) => {
          return `
            <div class="swiper-slide">
              ${cardComponent(movie)}
            </div>
          `
        }).join("")}
      </div>
      <button class="swiper-button swiper-button-next primary-btn"></button>
      <button class="swiper-button swiper-button-prev primary-btn"></button>
    </div>
  `
}
