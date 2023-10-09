import {loadingModalComponent} from "../../components/_loading-modal.js";

function renderLoadingModal(imdbID) {
  const $cardComponent = document.querySelector(`[data-card-component-id=${imdbID}]`);
  $cardComponent.insertAdjacentHTML("beforeend", loadingModalComponent());
}

function renderClearLoadingModal(imdbID) {
  const $loadingModal = document.querySelector(`[data-card-component-id=${imdbID}] .loading-modal`)
  $loadingModal.remove();
}

export {renderLoadingModal, renderClearLoadingModal};