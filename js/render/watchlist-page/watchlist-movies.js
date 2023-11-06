import { getWatchList } from "../../db/db.js";
import { cardComponent } from "../../components/_card.js";
import { noWatchlistTitlesComponent } from "../../components/_no-watchlist-titles.js";
import { renderLoading, clearLoading, setLoadingMessage } from "../shared/loading.js"; 
import { intentionalDelay, checkNumberOfChildren , goBackToPreviousPage} from "../../utils/utils.js";

const $container = document.querySelector("#container");
const $noTitlesInWatchlistContainer = document.querySelector("[data-no-titles-in-watchlist]");
const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
const loadingMessage = setLoadingMessage("Loading your watchlist, please wait...");
let numberOfWatchlistMovies;
const idealNumberOfMoviesPerRow = 4;

function renderWatchlistMovies() {
    renderLoading(loadingMessage);
    if ($backToPreviousPageButton) $backToPreviousPageButton.addEventListener("click", goBackToPreviousPage);
    const watchlist = getWatchList();
    $container.innerHTML = "";
    watchlist.forEach(movie => {
        $container.innerHTML += cardComponent(movie);
    });
    numberOfWatchlistMovies = checkNumberOfChildren($container);
    if (!numberOfWatchlistMovies) {
        $noTitlesInWatchlistContainer.innerHTML += noWatchlistTitlesComponent();
        $container.remove();
    } else {
        $noTitlesInWatchlistContainer.remove();
    }
    handleWatchlistMoviesLayout(numberOfWatchlistMovies);
    intentionalDelay(clearLoading);
}

function handleWatchlistMoviesLayout(numberOfWatchlistMovies) {
    if (numberOfWatchlistMovies >= idealNumberOfMoviesPerRow) return;
    $container.classList.remove ("grid-list");
    $container.classList.add("watch-list-flex");
}

export { renderWatchlistMovies }