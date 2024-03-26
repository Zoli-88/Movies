// On load
import { renderLoading, clearLoading } from "../shared/loading.js";
import { renderMovies } from "./movies.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderMenuNav } from "../shared/menu-nav.js";
import { intentionalDelay } from "../../utils/utils.js";
import { 
    showDialogModal, 
    hideDialogModal, 
    setDialogModalMessage, 
    setDialogModalType, 
    getConfirmationModalStatus, 
    setConfirmationModalStatus,
} from "../shared/dialog-modal.js";
import { initWatchlistDialogModals } from "../shared/watchlist-dialog-modal.js";
import { renderSearchForm } from "../shared/form.js";
import { initMovieInfoModal } from "../shared/movie-info.modal.js";

async function initMovieListPage() {
    const $container = document.querySelector("#container");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchResult = urlSearchParams.get("search");
    const shouldShowConfirmationDialog = getConfirmationModalStatus();

    renderLoading();
    renderMenuNav();
    renderSearchForm();
    initMovieInfoModal();
    renderCopyright();
    initWatchlistDialogModals();
    
    if (searchResult) {
        await renderMovies(searchResult, $container);
    } else {
        await renderMovies();
    }

    if (shouldShowConfirmationDialog) {
        const confirmationMessage = setDialogModalMessage("You have been successfully signed out");
        const modalType = setDialogModalType("confirmation-modal");
        setConfirmationModalStatus(false);
        intentionalDelay(() => {
            clearLoading();
            showDialogModal(confirmationMessage, modalType);
            const $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
            const $dialogModalConfirmButton = document.querySelector(`[data-dialog-confirmation-message-modal-btn="confirm"]`);
            $dialogModalConfirmButton.addEventListener("click", () => {
                hideDialogModal($dialogModalComponent);
            });
        });
    } else {
        intentionalDelay(clearLoading);
    }
}

  export { initMovieListPage };