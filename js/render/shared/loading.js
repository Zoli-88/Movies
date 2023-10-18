import {loadingComponent} from "../../components/_loading.js";

function renderLoading(message) {
    const $body = document.body;
    $body.insertAdjacentHTML("beforeend", loadingComponent(message));
  }

function clearLoading() {
  const $loading = document.querySelector("#loading");
  $loading.remove();
}

export {renderLoading, clearLoading};