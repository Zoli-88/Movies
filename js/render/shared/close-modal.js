const $container = document.querySelector(`#container`);
const $relatedMoviesContainer = document.querySelector("#related-movies");

function closeModal(imdbID) {
  const $modal = document.querySelector(`[data-modal-open-id=${imdbID}]`);
  const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
  $modal.classList.add("hide-modal");

  setTimeout(() => {
    $modal.remove();
  }, fadeOutMs)
}

if ($container) $container.addEventListener("click", closeModalOnMainPage);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", closeModalOnDetailsPage);

function closeModalOnMainPage(event) {
  const closeModalButton = event.target.closest("[data-modal-btn-close-id]");
  
  if (closeModalButton) {
    const imdbID = closeModalButton.dataset.modalBtnCloseId;
    closeModal(imdbID);
  }
}

function closeModalOnDetailsPage(event) {
  const closeModalButton = event.target.closest("[data-modal-btn-close-id]");
  
  if (closeModalButton) {
    const imdbID = closeModalButton.dataset.modalBtnCloseId;
    closeModal(imdbID);
  }
}

export {closeModal};













