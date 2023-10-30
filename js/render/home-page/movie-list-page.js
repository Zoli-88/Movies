// On load
import {renderLoading, clearLoading} from "../shared/loading.js";
import {renderMovies} from "./movies.js";
import {renderCopyright} from "../shared/copyright.js";
import {menuNavComponent} from "../../components/_menu-nav.js";
import {intentionalDelay} from "../../utils/utils.js";
import {renderDialogModal, clearDialogModal, setDialogModalMessage, setDialogModalType, getConfirmationDialogModalStatusFromLocalStorage, setConfirmationDialogModalStatusInLocalStorage} from "../shared/dialog-modal.js";

async function initMovieListPage() {
  const shouldShowConfirmationDialog = getConfirmationDialogModalStatusFromLocalStorage();
  renderLoading();
  menuNavComponent();
  renderCopyright();
  const $container = document.querySelector("#container");
  const urlSearchParams = new URLSearchParams(window.location.search);
  const searchResult = urlSearchParams.get("search");

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

  export {initMovieListPage};