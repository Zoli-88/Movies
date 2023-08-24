function closeModal(imdbID) {
  const $modal = document.querySelector(`[data-modal-open-id=${imdbID}]`);
  const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
  $modal.classList.add("hide-modal")

  setTimeout(() => {
    $modal.remove();
  }, fadeOutMs)
}

export {closeModal};













