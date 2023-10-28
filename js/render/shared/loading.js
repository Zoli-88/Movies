import {loadingComponent} from "../../components/_loading.js";

function renderLoading(message) {
    const $main = document.querySelector("main");
    $main.insertAdjacentHTML("beforeend", loadingComponent(message));
  }

function clearLoading() {
  const $loading = document.querySelector("#loading");
  $loading.remove();
}

function setLoadingMessage(message) {
  return message;
}

export {renderLoading, clearLoading, setLoadingMessage};