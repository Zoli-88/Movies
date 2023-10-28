import {dialogModalComponent} from "../../components/_dialog-modal.js";
import {renderLoading, clearLoading, setLoadingMessage} from "./loading.js";
import {intentionalDelay} from "../../utils/utils.js";

const $container = document.querySelector("#container");
const $relatedMoviesContainer = document.querySelector("#related-movies");

if ($container) $container.addEventListener("click", initFavoritesDialogModal);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", initFavoritesDialogModal);

function initFavoritesDialogModal(e) {
  const openFavoritesModalButton = e.target.closest("[data-add-to-favorites]");
  if (openFavoritesModalButton) {
    const loadingMessage = setLoadingMessage("Please wait...");
    const question = setDialogModalMessage("Add this title to favorites?");
    const modalType = setDialogModalType("favorites-modal");
    renderDialogModal(question, modalType);
    const $dialogModalComponent = document.querySelector("[data-dialog-modal]");
    const $dialogModalButtons = document.querySelectorAll("[data-favorites-dialog-modal-btn]")
  
    $dialogModalButtons.forEach(button => {
      const action = button.dataset.favoritesDialogModalBtn;

      if (action === "confirm") button.addEventListener("click", () => {
        renderLoading(loadingMessage);
        intentionalDelay(handleConfirmationDialogModal); 
      });
      if (action === "cancel") button.addEventListener("click", () => clearDialogModal($dialogModalComponent));
    });
  }
}

function handleConfirmationDialogModal() {
  clearLoading();
  let $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
  clearDialogModal($dialogModalComponent);
  const confirmationMessage = setDialogModalMessage("Title has been added to favorites");
  const modalType = setDialogModalType("confirmation-modal");
  renderDialogModal(confirmationMessage, modalType);
  $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
  const $dialogModalConfirmButton = document.querySelector(`[data-favorites-dialog-confirmation-message-modal-btn="confirm"]`);
  $dialogModalConfirmButton.addEventListener("click", () => {
    clearDialogModal($dialogModalComponent);
  });
}

function renderDialogModal(questionOrConfirmationMessage, modalType) {
  const $main = document.querySelector("main");
  $main.insertAdjacentHTML("beforeend", dialogModalComponent(questionOrConfirmationMessage, modalType))
}

function clearDialogModal(el) {
  el.remove();
}

function setDialogModalType(type) {
  return type;
}

function setDialogModalMessage(message) {
  return message;
}

export {renderDialogModal, clearDialogModal, setDialogModalType, setDialogModalMessage}