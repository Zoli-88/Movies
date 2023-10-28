import {renderDialogModal, clearDialogModal} from "./dialog-modal.js";
import {renderLoading, clearLoading} from "./loading.js";
import {renderMovieInfoModalContent, clearMovieInfoModalContent} from "./movie-info.modal.js";
import { intentionalDelay } from "../../utils/utils.js";

const $container = document.querySelector("#container");
const $relatedMoviesContainer = document.querySelector("#related-movies");
let $dialogModalComponent;
let modalType = "favorites-modal";
const question = "Add this title to favorites?";
const confirmationMessage = "Title has been added to favorites";

if ($container) addEventListener("click", openMovieInfoModal);
if ($container) addEventListener("click", showFavoritesDialogModal);
if ($container) addEventListener("click", closeMovieInfoModal);

if ($relatedMoviesContainer) addEventListener("click", openMovieInfoModal);
if ($relatedMoviesContainer) addEventListener("click", closeMovieInfoModal);

function openMovieInfoModal(event) {
  const openModalButton = event.target.closest("[data-modal-btn-open-id]");
  
  if (openModalButton) {
    const imdbID = openModalButton.dataset.modalBtnOpenId;
    renderMovieInfoModalContent(imdbID);
  }
}

function closeMovieInfoModal(event) {
  const closeModalButton = event.target.closest("[data-modal-btn-close-id]");
  
  if (closeModalButton) {
    const imdbID = closeModalButton.dataset.modalBtnCloseId;
    clearMovieInfoModalContent(imdbID);
  }
}

function showFavoritesDialogModal(event) {
  const openFavoritesModalButton = event.target.closest("[data-add-to-favorites]");
  if (openFavoritesModalButton) {
    const loadingMessage = "Please wait...";
    modalType = "favorites-modal";
    renderDialogModal(question, modalType);
    $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
    const $dialogModalConfirmButton = document.querySelector(`[data-favorites-dialog-modal-btn="confirm"]`);
    const $dialogModalCancelButton = document.querySelector(`[data-favorites-dialog-modal-btn="cancel"]`);
    $dialogModalConfirmButton.addEventListener("click", () => {
      renderLoading(loadingMessage);
      intentionalDelay(() => handleConfirmationDialogModal()); 
    });
    $dialogModalCancelButton.addEventListener("click", () => clearDialogModal($dialogModalComponent));
  }
}

function handleConfirmationDialogModal() {
  clearLoading();
  clearDialogModal($dialogModalComponent);
  modalType = "confirmation-modal";
  renderDialogModal(confirmationMessage, modalType);
  $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
  const $dialogModalConfirmButton = document.querySelector(`[data-favorites-dialog-confirmation-message-modal-btn="confirm"]`);
  $dialogModalConfirmButton.addEventListener("click", () => {
    clearDialogModal($dialogModalComponent);
  });
}