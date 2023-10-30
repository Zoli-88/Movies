import { getWatchList } from "../../db/db.js";
import { cardComponent } from "../../components/_card.js";
import { renderLoading, clearLoading, setLoadingMessage } from "../shared/loading.js"; 
import { intentionalDelay } from "../../utils/utils.js";

function renderWatchlistMovies() {
    const loadingMessage = setLoadingMessage("Loading your watchlist, please wait..."); 
    renderLoading(loadingMessage);
    const watchlist = getWatchList();
    const $container = document.querySelector("#container");
    $container.innerHTML = "";
    watchlist.forEach(movie => {
        $container.innerHTML += cardComponent(movie);
    });
    intentionalDelay(clearLoading);
}

export { renderWatchlistMovies }