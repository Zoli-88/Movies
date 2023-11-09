import { renderSearchForm } from "../shared/form.js";
import { renderMenuNav } from "../shared/menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { initMovieInfoModal } from "../shared/movie-info.modal.js";
import { renderWatchlistMovies } from "./watchlist-movies.js";
import { initWatchlistDialogModals } from "../shared/watchlist-dialog-modal.js";

let watchlist = "watchlist";

function initWatchlistPage() {
    renderMenuNav();
    renderCopyright();
    renderWatchlistMovies();
    renderSearchForm();
    initMovieInfoModal();
    initWatchlistDialogModals(watchlist);
}

export { initWatchlistPage }