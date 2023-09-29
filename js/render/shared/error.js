import {errorComponent} from "../../components/_error.js";

function renderError(error) {
    const $body = document.body;
    $body.insertAdjacentHTML("beforeend", errorComponent(error));
  }

export {renderError};