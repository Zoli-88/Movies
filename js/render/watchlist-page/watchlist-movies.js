import { getWatchList } from "../../db/db.js";
import { cardComponent } from "../../components/_card.js";
import { noWatchlistTitlesComponent } from "../../components/_no-watchlist-titles.js";
import { renderLoading, clearLoading, setLoadingMessage } from "../shared/loading.js"; 
import { intentionalDelay, checkNumberOfChildren , goBackToPreviousPage, redirectUserToTheHomePage} from "../../utils/utils.js";
import { getLoggedInStatus } from "../../auth/auth.js";

const $watchlistContainer = document.querySelector(`[data-el="watchlist"]`);
const $noTitlesInWatchlistContainer = document.querySelector(`[data-el="no-titles-in-watchlist"]`);
const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
const loadingMessage = setLoadingMessage("Loading your watchlist, please wait...");
let numberOfWatchlistMovies;
const idealNumberOfMoviesPerRow = 4;

function renderWatchlistMovies() {

    const isLoggedIn = getLoggedInStatus();
    if (!isLoggedIn) redirectUserToTheHomePage();

    renderLoading(loadingMessage);
    if ($backToPreviousPageButton) $backToPreviousPageButton.addEventListener("click", goBackToPreviousPage);
    const watchlist = getWatchList();
    $watchlistContainer.innerHTML = "";
    watchlist.forEach(movie => {
        $watchlistContainer.innerHTML += cardComponent(movie);
    });
    numberOfWatchlistMovies = checkNumberOfChildren($watchlistContainer);
    if (!numberOfWatchlistMovies) {
        $noTitlesInWatchlistContainer.innerHTML += noWatchlistTitlesComponent();
        $watchlistContainer.remove();
    } else {
        $noTitlesInWatchlistContainer.remove();
    }
    handleWatchlistMoviesLayout(numberOfWatchlistMovies);
    intentionalDelay(clearLoading);

    function handleWatchlistMoviesLayout(numberOfWatchlistMovies) {
        if (numberOfWatchlistMovies >= idealNumberOfMoviesPerRow) return;
        $watchlistContainer.classList.remove ("grid-list");
        $watchlistContainer.classList.add("watch-list-flex");
    }
}

export { renderWatchlistMovies }