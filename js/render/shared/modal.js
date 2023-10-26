import {listMovie} from "../../api/api.js";
import {modalComponent} from "../../components/_modal.js";
import {renderError} from "../../render/shared/error.js";
import {intentionalDelay} from "../../utils/utils.js";
import {renderLoadingModal, renderClearLoadingModal} from "./loading-modal.js";
import {renderDialogModal, clearDialogModal} from "./dialog-modal.js";

const $main = document.querySelector("main");
const $container = document.querySelector("#container");
const $relatedMoviesContainer = document.querySelector("#related-movies");

async function renderModalContent(imdbID) {
  renderLoadingModal(imdbID);
  try {
    const $cardComponent = document.querySelector(`[data-card-component-id=${imdbID}]`);
    const movie = await listMovie(imdbID);
    intentionalDelay(() => renderClearLoadingModal(imdbID));
    $cardComponent.insertAdjacentHTML("beforeend", modalComponent(movie));
  } catch (error) {
      renderError(error);
  }
}

if ($container) $container.addEventListener("click", openModal);
if ($container) $container.addEventListener("click", showFavoritesDialogModal);
if ($container) $container.addEventListener("click", closeModal);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", openModal);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", closeModal);

function openModal(event) {
  console.log(event.target)
  const openModalButton = event.target.closest("[data-modal-btn-open-id]");
  
  if (openModalButton) {
    const imdbID = openModalButton.dataset.modalBtnOpenId;
    renderModalContent(imdbID);
  }
}

function clearModalContent(imdbID) {
  const $modal = document.querySelector(`[data-modal-open-id=${imdbID}]`);
  const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
  $modal.classList.add("hide-modal");

  setTimeout(() => {
    $modal.remove();
  }, fadeOutMs);
}

function closeModal(event) {
  const closeModalButton = event.target.closest("[data-modal-btn-close-id]");
  
  if (closeModalButton) {
    const imdbID = closeModalButton.dataset.modalBtnCloseId;
    clearModalContent(imdbID);
  }
}

function showFavoritesDialogModal(event) {
  const openFavoritesModalButton = event.target.closest("[data-add-to-favorites]");
  if (openFavoritesModalButton) {
    const question = "Add this title to favorites?";
    const modalButtonType = "favorites-modal";
    renderDialogModal($main, question, modalButtonType);
    const $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
    const $dialogModalConfirmButton = document.querySelector(`[data-favorites-dialog-modal-btn="confirm"]`);
    const $dialogModalCancelButton = document.querySelector(`[data-favorites-dialog-modal-btn="cancel"]`);
    $dialogModalConfirmButton.addEventListener("click", addTitleToFavoritesList);
    $dialogModalCancelButton.addEventListener("click", () => clearDialogModal($dialogModalComponent));
  }
}

function addTitleToFavoritesList() {
  console.log(":DDDDDDDDDDDDDD");
}