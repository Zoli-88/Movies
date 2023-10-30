import {renderError} from "../shared/error.js";
import {listMovie} from "../../api/api.js";
import {ratingsComponent} from "../../components/_ratings.js";
import {descriptionComponent} from "../../components/_description.js";
import {goBackToPreviousPage, intentionalDelay} from "../../utils/utils.js";
import {renderDialogModal, clearDialogModal, setDialogModalMessage, setDialogModalType, getConfirmationDialogModalStatusFromLocalStorage, setConfirmationDialogModalStatusInLocalStorage} from "../shared/dialog-modal.js";

async function renderMovie() {
    const $moviePage = document.querySelector("#movie-page");
    const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
    const $description = document.querySelector("#description");

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const queryImdbID = searchParams.get("imdbID");
    const querySearchPhrase = searchParams.get("searchPhrase");
    const shouldShowConfirmationDialog = getConfirmationDialogModalStatusFromLocalStorage();

    try {
        const movie = await listMovie(queryImdbID);
        $backToPreviousPageButton.addEventListener("click", goBackToPreviousPage);
        $moviePage.innerHTML = ratingsComponent(movie, querySearchPhrase);
        $description.innerHTML = descriptionComponent(movie, querySearchPhrase);
    } catch (error) {
        renderError(error);
    }

    if (shouldShowConfirmationDialog) {
        const confirmationMessage = setDialogModalMessage("You have been successfully signed out");
        const modalType = setDialogModalType("confirmation-modal");
        setConfirmationDialogModalStatusInLocalStorage(false);
        intentionalDelay(() => {
            renderDialogModal(confirmationMessage, modalType);
            const $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
            const $dialogModalConfirmButton = document.querySelector(`[data-dialog-confirmation-message-modal-btn="confirm"]`);
            $dialogModalConfirmButton.addEventListener("click", () => {
                clearDialogModal($dialogModalComponent);
            });
        });
    }
}

export {renderMovie};