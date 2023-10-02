import {errorComponent} from "../../components/_error.js";

function renderError(error) {
    const $body = document.body;
    $body.insertAdjacentHTML("beforeend", errorComponent(error));
  }

function clearError() {
  const $error = document.querySelector("#error");
  $error.remove();
}

export {renderError};