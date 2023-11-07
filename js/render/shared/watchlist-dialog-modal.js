import { listMovie } from "../../api/api.js";
import { addToWatchList, removeFromWatchList } from "../../db/db.js";
import { renderLoading, clearLoading, setLoadingMessage } from "./loading.js";
import { renderError } from "./error.js";
import { renderWatchlistMovies } from "../watchlist-page/watchlist-movies.js";
import { setDialogModalMessage, setDialogModalType, renderDialogModal, clearDialogModal } from "./dialog-modal.js";
import { intentionalDelay } from "../../utils/utils.js";

function initWatchlistDialogModals(watchlist) {
    let $container = document.querySelector("#container");
    if (watchlist) $container = document.querySelector(`[data-el="watchlist"]`);
    const $relatedMoviesContainer = document.querySelector("#related-movies");

    if ($container) $container.addEventListener("click", handleWatchlistModalButtonClicks);
    if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", handleWatchlistModalButtonClicks);

    async function handleWatchlistModalButtonClicks(e) {
        const openWatchListModalButton = e.target.closest("[data-watchlist-modal-btn-id]");
        if (openWatchListModalButton) {
            try {
                const imdbID = openWatchListModalButton.dataset.watchlistModalBtnId;
                const movie = await listMovie(imdbID);
                const movieTitle = movie.Title;
                const isTitleAdded = openWatchListModalButton.hasAttribute("data-title-added");
                const addedClass = "added";
                const loadingMessage = setLoadingMessage("Please wait...");
                const question = isTitleAdded
                    ? setDialogModalMessage(`The title <span class="highlight">${movieTitle}</span> is already in your watchlist. Would you like to remove it?`)
                    : setDialogModalMessage(`Add <span class="highlight">${movieTitle}</span> to your watchlist?`);
                const modalType = setDialogModalType("watchlist-modal");
                renderDialogModal(question, modalType);
                const $dialogModalComponent = document.querySelector("[data-dialog-modal]");
                const $dialogModalButtons = document.querySelectorAll("[data-watchlist-dialog-modal-btn]");

                $dialogModalButtons.forEach(button => {
                    const action = button.dataset.watchlistDialogModalBtn;

                    if (action === "confirm") button.addEventListener("click", () => {
                        openWatchListModalButton.toggleAttribute("data-title-added");
                        openWatchListModalButton.classList.toggle(addedClass);
                        renderLoading(loadingMessage);
                        intentionalDelay(() => handleWatchlistConfirm(movie, isTitleAdded, imdbID));
                    });

                    if (action === "cancel") {
                        button.addEventListener("click", () => {
                            clearDialogModal($dialogModalComponent);
                        })
                    }
                });
            } catch (error) {
                renderError(error);
            }
        }
    }

    function handleWatchlistConfirm(movie, isTitleAdded, imdbID) {
        clearLoading();
        let $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
        clearDialogModal($dialogModalComponent);
        const movieTitle = movie.Title;
        const confirmationMessage = isTitleAdded ? 
            setDialogModalMessage(`<span class="highlight">${movieTitle}</span> has been removed from your <a href="/watchlist.html">watchlist</a>`) :
            setDialogModalMessage(`<span class="highlight">${movieTitle}</span> has been added to your <a href="/watchlist.html">watchlist</a>`);
        const modalType = setDialogModalType("confirmation-modal");
        renderDialogModal(confirmationMessage, modalType);
        $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
        const $dialogModalConfirmButton = document.querySelector(`[data-dialog-confirmation-message-modal-btn="confirm"]`);
        $dialogModalConfirmButton.addEventListener("click", () => {
            isTitleAdded ? removeFromWatchList(imdbID) : addToWatchList(movie);
            clearDialogModal($dialogModalComponent);
            if (watchlist) renderWatchlistMovies();
        });
    }
}

export { initWatchlistDialogModals }