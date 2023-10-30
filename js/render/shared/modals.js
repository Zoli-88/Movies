import {renderMovieInfoModalContent, clearMovieInfoModalContent} from "./movie-info.modal.js";

const $container = document.querySelector("#container");
const $relatedMoviesContainer = document.querySelector("#related-movies");

if ($container) $container.addEventListener("click", openMovieInfoModal);
if ($container) $container.addEventListener("click", closeMovieInfoModal);

if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", openMovieInfoModal);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", closeMovieInfoModal);

function openMovieInfoModal(e) {
    const openModalButton = e.target.closest("[data-modal-btn-open-id]");

    if (openModalButton) {
        const imdbID = openModalButton.dataset.modalBtnOpenId;
        renderMovieInfoModalContent(imdbID);
    }
}

function closeMovieInfoModal(e) {
    const closeModalButton = e.target.closest("[data-modal-btn-close-id]");

    if (closeModalButton) {
        const imdbID = closeModalButton.dataset.modalBtnCloseId;
        clearMovieInfoModalContent(imdbID);
    }
}

