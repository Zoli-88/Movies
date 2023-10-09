import {listMovie} from "../../api/api.js";
import {modalComponent} from "../../components/_modal.js";
import {renderError} from "../../render/shared/error.js";
import {renderLoadingModal, renderClearLoadingModal} from "./loading-modal.js";

const $container = document.querySelector("#container");
const $relatedMoviesContainer = document.querySelector("#related-movies");

async function renderModalContent(imdbID) {
  renderLoadingModal(imdbID);
  try {
    const $cardComponent = document.querySelector(`[data-card-component-id=${imdbID}]`);
    const movie = await listMovie(imdbID);
    $cardComponent.insertAdjacentHTML("beforeend", modalComponent(movie));
  } catch (error) {
      renderError(error);
  }
  renderClearLoadingModal(imdbID);
}

if ($container) $container.addEventListener("click", openModal);
if ($container) $container.addEventListener("click", closeModal);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", openModal);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", closeModal);

function openModal(event) {
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