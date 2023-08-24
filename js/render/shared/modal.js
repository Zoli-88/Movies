import { listMovie } from "../../api/api.js";
import { modalComponent } from "../../components/_modal.js";
import { renderError } from "../../render/shared/error.js";

const $container = document.querySelector(`#container`);
const $relatedMoviesContainer = document.querySelector("#related-movies");

async function renderModalContent(imdbID) {
  try {
    const $cardComponent = document.querySelector(`[data-card-component-id=${imdbID}]`);
    const movie = await listMovie(imdbID);
    $cardComponent.insertAdjacentHTML("beforeend", modalComponent(movie));
  } catch (error) {
      renderError(error);
  }
}

if ($container) $container.addEventListener("click", openModalonMainPage);
if ($relatedMoviesContainer) $relatedMoviesContainer.addEventListener("click", openModalonDetailsPage);

function openModalonMainPage(event) {
  const openModalButton = event.target.closest("[data-modal-btn-open-id]");
  
  if (openModalButton) {
    const imdbID = openModalButton.dataset.modalBtnOpenId;
    renderModalContent(imdbID);
  }
}

function openModalonDetailsPage(event) {
  const openModalButton = event.target.closest("[data-modal-btn-open-id]");
  
  if (openModalButton) {
    const imdbID = openModalButton.dataset.modalBtnOpenId;
    renderModalContent(imdbID);
  }
}

export { renderModalContent };
