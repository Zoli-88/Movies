import { menuNavComponent } from "../../components/_menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderWatchlistMovies } from "./watchlist-movies.js";

function initWatchlistPage() {
    menuNavComponent();
    renderCopyright();
    renderWatchlistMovies();    
}

export { initWatchlistPage }