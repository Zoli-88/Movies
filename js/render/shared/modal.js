import { listMovie } from "../../api/api.js";
import { modalComponent } from "../../components/_modal.js";
import { renderError } from "../../render/shared/error.js";

const $container = document.querySelector(`#container`);
const $relatedMoviesContainer = document.querySelector("#related-movies");

async function renderModalContent(imdbID) {
  try {
    const $cardComponent = document.querySelector(`#${imdbID.id}`);
    const movie = await listMovie(imdbID.id);
    $cardComponent.insertAdjacentHTML("beforeend", modalComponent(movie));
  } catch (error) {
      renderError(error);
  }
}

if ($container) {
  $container.addEventListener("click", event => {
    const modalButton = event.target.closest("[data-modal-btn-open-id]");
    if (modalButton) {
        const imdbID = modalButton.dataset.modalBtnOpenId;
        renderModalContent({ id: imdbID });
    }
  });
}

if ($relatedMoviesContainer) {
  $relatedMoviesContainer.addEventListener("click", event => {
    const modalButton = event.target.closest("[data-modal-btn-open-id]");
    if (modalButton) {
        const imdbID = modalButton.dataset.modalBtnOpenId;
        renderModalContent({ id: imdbID });
    }
  });
}

export { renderModalContent };
