// On load
import { renderLoading, clearLoading } from "../shared/loading.js";
import { renderMovies } from "./movies.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderMenuNav } from "../shared/menu-nav.js";
import { intentionalDelay } from "../../utils/utils.js";
import { 
    renderDialogModal, 
    clearDialogModal, 
    setDialogModalMessage, 
    setDialogModalType, 
    getConfirmationDialogModalStatusFromLocalStorage, 
    setConfirmationDialogModalStatusInLocalStorage,
    initWatchlistDialogModals
} from "../shared/dialog-modal.js";
import { renderSearchForm } from "../shared/form.js";
import { renderMovieInfoModal } from "../shared/movie-info.modal.js";

async function initMovieListPage() {
    const $container = document.querySelector("#container");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchResult = urlSearchParams.get("search");
    const shouldShowConfirmationDialog = getConfirmationDialogModalStatusFromLocalStorage();

    renderLoading();
    renderMenuNav();
    renderSearchForm();
    renderMovieInfoModal();
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
        setConfirmationDialogModalStatusInLocalStorage(false);
        intentionalDelay(() => {
            clearLoading();
            renderDialogModal(confirmationMessage, modalType);
            const $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
            const $dialogModalConfirmButton = document.querySelector(`[data-dialog-confirmation-message-modal-btn="confirm"]`);
            $dialogModalConfirmButton.addEventListener("click", () => {
                clearDialogModal($dialogModalComponent);
            });
        });
    } else {
        intentionalDelay(clearLoading);
    }
}

  export { initMovieListPage };