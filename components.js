const IMDB_PLACEHOLDER = "<IMDB_ID>";
const IMDB_URL = `https://www.imdb.com/title/${IMDB_PLACEHOLDER}/?ref_=fn_al_tt_1`;

const ICONS_MAP = new Map();
ICONS_MAP.set("IMDB", "fa-solid fa-star")
ICONS_MAP.set("Internet Movie Database", "fa-solid fa-database")
ICONS_MAP.set("Rotten Tomatoes", "fa-solid fa-apple-whole")
ICONS_MAP.set("Metacritic", "fa-solid fa-pen-nib")

function cardComponent(movie, randomSearchPhrase) {
  const {
    imdbID,
    Poster,
    Title,
    Year,
  } = movie;
  
  return `
    <div class="card-component" id=${imdbID}>
      <div class="poster-wrapper">
        <a href=/movie.html?imdbID=${imdbID}&searchPhrase=${randomSearchPhrase} class="poster-link">      
          <img src="${Poster}" alt="${Title} poster">
        </a>
      </div>
      <div class="information">
        <div class="content">
        <i class="fa-regular fa-calendar calendar-icon"></i>
        <span class="year">${Year}</span>
        <br>
          <a href=/movie.html?imdbID=${imdbID}&searchPhrase=${randomSearchPhrase} class="card-title">
            <span>${Title}</span>
          </a>
        </div>
        <div class="details">
          <a href=${IMDB_URL.replace(IMDB_PLACEHOLDER, imdbID)} target="_blank">
            <i class="fa-brands fa-imdb logo-icon"></i>
          </a>
          <button class="primary-btn" onclick="renderModal(${imdbID})">
            <i class="fa-solid fa-circle-info"></i>
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
    <div class="ratings-component">
      ${ratingComponent({
        Source: "IMDB",
        Value: movie.imdbRating
      })}
      ${movie.Ratings.map(rating => {
        return ratingComponent(rating);
      }).join("")}
    </div>
    <div class="description-component">
      <img src="${Poster}" alt="${Title} movie poster" class="only-desktop">
      <div>
        <h1>${Title}</h1>
        <div class="subtitle">
          <span>${Year} &#x2022;</span>
          <span>${Rated === "N/A" ? "Unknown" : Rated} &#x2022;</span>
          <span>${Runtime}</span>
        </div>
        <br>
        <img src="${Poster}" alt="${Title} movie poster" class="only-mobile">
        <ul>
          <li><i class="fa-solid fa-video"></i> <b>Genre</b>: ${Genre ?? "Unknown"}</li>
          <li><i class="fa-solid fa-clapperboard"></i> <b>Director</b>: ${Director ?? "Unknown"}</li>
          <li><i class="fa-solid fa-pen-to-square"></i> <b>Writers</b>: ${Writer ?? "Unknown"}</li>
          <li><i class="fa-solid fa-masks-theater"></i> <b>Actors</b>: ${Actors ?? "Unknown"}</li>
          <li><i class="fa-solid fa-globe"></i> <b>Languages</b>: ${Language ?? "Unknown"}</li>
          <li><i class="fa-solid fa-flag"></i> <b>Countries</b>: ${Country ?? "Unknown"}</li>
          <li><i class="fa-solid fa-trophy"></i> <b>Awards</b>: ${Awards ?? "Unknown"}</li>
          <li><i class="fa-solid fa-compact-disc"></i> <b>Released on DVD</b>: ${DVD ?? "Unknown"}</li>
          <li><i class="fa-solid fa-sack-dollar"></i> <b>Box-office total</b>: ${BoxOffice ?? "Unknown"}</li>
        </ul>
        <br>
        <p class="plot">${Plot}</p>
      </div>
    </div>
  `
}

// onmouseleave="closeModal(${movie.imdbID})

function modalComponent(movie) {
  return `
    <div class="modal-component show-modal" id="modal-component">
      <h1 class="modal-title">${movie.Title}</h1>
      <div class="subtitle">
        <span>${movie.Year} &#x2022;</span>
        <span>${movie.Rated === "N/A" ? "Unknown" : movie.Rated} &#x2022;</span>
        <span>${movie.Runtime}</span>
        <br/>
        <span>${movie.Genre ?? "Unknown"}</span>
        <br/>
        <i class="fa-solid fa-star"></i> <span>${movie.imdbRating}/10</span>
      </div>
      <button class="primary-btn" onclick="closeModal(${movie.imdbID})">
        <i class="fa-solid fa-square-xmark"></i>
      </button>
    </div>
  `
}

function loadingComponent() {
  return `
    <div id="loading" class="status-component">
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
    <div id="error" class="status-component">
      <i class="fa-solid fa-circle-exclamation status-icon"></i>
      <br>
      <span class="status-text">Error, ${error}</span>
    </div>
  `
}

function relatedTitlesComponent(querySearchPhrase) {
  return `
    <h3 class="title">Titles related to <span class="highlight">${querySearchPhrase}</span></h3>
  `
}

function noRelatedTitlesComponent(querySearchPhrase) {
  return `
    <h3 class="title center">We couldn't find any related titles to <span class="highlight">${querySearchPhrase}</span></h3>
    `
}

function swiperComponent(movies) {
  // In the related movies component (swiper) we want to render all the movies present in the default search
  // except the one that is highlighted in the movie component
  
  // to do this, first we need to find a unique id for the movie we want to remove, this can be retrieved from the url
  // "http://127.0.0.1:5500/movie.html?imdbID=tt2654124"
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const querySearchPhrase = searchParams.get("searchPhrase");
  // then we need to create a new array that will contain all the movies in the default search 
  // except the one that is highlighted in the movie component
  // a non destructive method would be the filter method which returns a new array based on the condition we provide
  // in our case, the method below would translate to 
  // "return a new copy of the original "movies" array that contains all the objects (movies) in the default search
  // except the one that has the movie.imdbID value equal to the queryImdbID in the search URL"
  return `
    <div class="swiper swiper-component">
      <div class="swiper-wrapper">
        ${movies.map((movie) => {
          return `
            <div class="swiper-slide">
              ${cardComponent(movie, querySearchPhrase)}
            </div>
          `
        }).join("")}
      </div>
      <button class="swiper-button swiper-button-next primary-btn"></button>
      <button class="swiper-button swiper-button-prev primary-btn"></button>
    </div>
  `
}
