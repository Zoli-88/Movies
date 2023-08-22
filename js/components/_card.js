import { isValidUrl } from "../utils/utils.js";

function cardComponent(movie, searchResult = "thor") {
  const {
    imdbID,
    Poster,
    Title,
    Year,
  } = movie;

  const posterUrl = (Poster !== "N/A" && isValidUrl(Poster)) ? Poster : "https://fakeimg.pl/300x429/ff0000,128/000,255/?text=Cool Poster";
  
  return `
    <div class="card-component" id=${imdbID}>
      <div class="poster-wrapper">
        <a href=/movie.html?imdbID=${imdbID}&searchPhrase=${searchResult} class="poster-link">      
          <img src="${posterUrl}" alt="${Title} poster">
        </a>
      </div>
      <div class="information">
        <div class="content">
        <i class="fa-regular fa-calendar calendar-icon"></i>
        <span class="year">${Year}</span>
        <br>
          <a href=/movie.html?imdbID=${imdbID}&searchPhrase=${searchResult} class="card-title">
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

export {cardComponent};