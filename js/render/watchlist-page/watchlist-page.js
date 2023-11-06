import {renderSearchForm } from "../shared/form.js";
import { renderMenuNav } from "../shared/menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderMovieInfoModal } from "../shared/movie-info.modal.js";
import { renderWatchlistMovies } from "./watchlist-movies.js";

function initWatchlistPage() {
    renderMenuNav();
    renderCopyright();
    renderWatchlistMovies();
    renderSearchForm();
    renderMovieInfoModal();
}

export { initWatchlistPage }