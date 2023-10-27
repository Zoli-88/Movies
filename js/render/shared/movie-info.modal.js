import {listMovie} from "../../api/api.js";
import {modalComponent} from "../../components/_modal.js";
import {renderError} from "../../render/shared/error.js";
import {renderLoadingModal, renderClearLoadingModal} from "./loading-modal.js";
import {intentionalDelay} from "../../utils/utils.js";

async function renderMovieInfoModalContent(imdbID) {
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

function clearMovieInfoModalContent(imdbID) {
  const $modal = document.querySelector(`[data-modal-open-id=${imdbID}]`);
  const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
  $modal.classList.add("hide-modal");

  setTimeout(() => {
    $modal.remove();
  }, fadeOutMs);
}

export {renderMovieInfoModalContent, clearMovieInfoModalContent};