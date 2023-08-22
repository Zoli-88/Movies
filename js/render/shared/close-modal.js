function closeModal(imdbID) {
  const $modal = document.querySelector(`#${imdbID.id} > #modal-component`);
  const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
  $modal.classList.add("hide-modal")

  setTimeout(() => {
    $modal.remove();
  }, fadeOutMs)
}

export {closeModal};













