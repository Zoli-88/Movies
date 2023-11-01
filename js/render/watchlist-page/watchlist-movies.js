import { getWatchList } from "../../db/db.js";
import { cardComponent } from "../../components/_card.js";
import { renderLoading, clearLoading, setLoadingMessage } from "../shared/loading.js"; 
import { intentionalDelay, checkNumberOfChildren } from "../../utils/utils.js";

const $container = document.querySelector("#container");
const loadingMessage = setLoadingMessage("Loading your watchlist, please wait...");
let numberOfWatchlistMovies;
const idealNumberOfMoviesPerRow = 4;

function renderWatchlistMovies() {
    renderLoading(loadingMessage);
    const watchlist = getWatchList();
    $container.innerHTML = "";
    watchlist.forEach(movie => {
        $container.innerHTML += cardComponent(movie);
    });
    numberOfWatchlistMovies = checkNumberOfChildren($container);
    handleWatchlistMoviesLayout(numberOfWatchlistMovies);
    intentionalDelay(clearLoading);
}

function handleWatchlistMoviesLayout(numberOfWatchlistMovies) {
    if (numberOfWatchlistMovies >= idealNumberOfMoviesPerRow) return;
    $container.classList.remove ("grid-list");
    $container.classList.add("watch-list-flex");
}

export { renderWatchlistMovies }