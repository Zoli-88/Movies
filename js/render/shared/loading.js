import {loadingComponent} from "../../components/_loading.js";

function renderLoading() {
    const $body = document.body;
    $body.insertAdjacentHTML("beforeend", loadingComponent());
  }

function clearLoading() {
  const $loading = document.querySelector("#loading");
  $loading.remove();
}

export {renderLoading, clearLoading};