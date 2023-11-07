import { renderLoading, clearLoading } from "../shared/loading.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderMovie } from "./movie.js";
import { renderRelatedMovies } from "./related-movies.js";
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
import { initMovieInfoModal } from "../shared/movie-info.modal.js";

async function initMoviePage() {
    const shouldShowConfirmationDialog = getConfirmationDialogModalStatusFromLocalStorage();

    renderLoading();
    renderMenuNav();
    renderCopyright();
    renderSearchForm();
    initMovieInfoModal();
    initWatchlistDialogModals();
    await renderMovie();
    await renderRelatedMovies();
    
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

export {initMoviePage};