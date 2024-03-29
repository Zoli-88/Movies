import { isTitleInWatchlist } from "../db/db.js";
import { isValidUrl } from "../utils/utils.js";
import { IMDB_URL, IMDB_PLACEHOLDER } from "../constants/constants.js";
import { getLoggedInStatus } from "../auth/auth.js";

function cardComponent(movie, searchResult = "thor") {
    const {
        imdbID,
        Poster,
        Title,
        Year,
    } = movie;

    const isAdded = isTitleInWatchlist(imdbID);
    const dataTitleAdded = isAdded ? 'data-title-added' : "";
    const addedClass = isAdded ? 'added' : "";
    const isLoggedIn = getLoggedInStatus();

    const posterUrl = (Poster !== "N/A" && isValidUrl(Poster)) ? Poster : "https://fakeimg.pl/300x429/ff0000,128/000,255/?text=Cool Poster";
    return `
        <li class="card-component" data-card-component-id=${imdbID}>
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
                    ${isLoggedIn ?
                    `<button class="primary-btn watchlist-btn ${addedClass}" data-watchlist-modal-btn-id=${imdbID} ${dataTitleAdded}>
                        <i class="fa-solid fa-heart"></i>
                    </button>`
                    : ``}
                    <button data-modal-btn-open-id="${imdbID}" class="primary-btn">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                </div>
            </div>
        </li>
    `
}

export { cardComponent };