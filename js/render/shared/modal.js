import {listMovie} from "../../api/api.js";
import {modalComponent} from "../../components/_modal.js";
import {renderError} from "../../render/shared/error.js";

async function renderModal(imdbID) {
    try {
      const $cardComponent = document.querySelector(`#${imdbID.id}`);
      const movie = await listMovie(imdbID.id);
      console.log(movie);
      $cardComponent.insertAdjacentHTML("beforeend", modalComponent(movie));
    } catch (error) {
      renderError(error);
    }
}

export {renderModal};