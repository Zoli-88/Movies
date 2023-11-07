import { listMovie } from "../../api/api.js";
import { movieInfoModalComponent } from "../../components/_movie-info-modal.js";
import { renderError } from "./error.js";
import { renderLoadingModal, renderClearLoadingModal } from "./loading-modal.js";
import { intentionalDelay } from "../../utils/utils.js";

function initMovieInfoModal() {

    const $container = document.querySelector("#container");
    const $watchlistContainer = document.querySelector(`[data-el="watchlist"]`);
    const $relatedMoviesContainer = document.querySelector("#related-movies");
    
    if ($container) $container.addEventListener("click", openMovieInfoModal);
    if ($container) $container.addEventListener("click", closeMovieInfoModal);
    
    if ($watchlistContainer) $watchlistContainer.addEventListener("click", closeMovieInfoModal);
    if ($watchlistContainer) $watchlistContainer.addEventListener("click", openMovieInfoModal);
    
    if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", openMovieInfoModal);
    if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", closeMovieInfoModal);
    
    async function openMovieInfoModal(e) {
        const openModalButton = e.target.closest("[data-modal-btn-open-id]");
        if (!openModalButton) return;
        const imdbID = openModalButton.dataset.modalBtnOpenId;
        renderLoadingModal(imdbID);
        try {
            const $cardComponent = document.querySelector(`[data-card-component-id=${imdbID}]`);
            const movie = await listMovie(imdbID);
            intentionalDelay(() => renderClearLoadingModal(imdbID));
            $cardComponent.insertAdjacentHTML("beforeend", movieInfoModalComponent(movie));
        } catch (error) {
            renderError(error);
        }
    }
    
    function closeMovieInfoModal(e) {
        const closeModalButton = e.target.closest("[data-modal-btn-close-id]");
        if (!closeModalButton) return;
        const imdbID = closeModalButton.dataset.modalBtnCloseId;
        const $modal = document.querySelector(`[data-modal-open-id=${imdbID}]`);
        const fadeOutMs = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--fade-ms'));
        $modal.classList.add("hide-modal");
    
        setTimeout(() => {
            $modal.remove();
        }, fadeOutMs);    
    }
}

export { initMovieInfoModal };