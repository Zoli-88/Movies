import { formComponent } from "../../components/_form.js";
import { menuNavComponent } from "../../components/_menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderMovieInfoModal } from "../shared/movie-info.modal.js";
import { renderWatchlistMovies } from "./watchlist-movies.js";

function initWatchlistPage() {
    menuNavComponent();
    renderCopyright();
    renderWatchlistMovies();
    formComponent();
    renderMovieInfoModal();
}

export { initWatchlistPage }