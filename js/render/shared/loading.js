import {loadingComponent} from "../../components/_loading.js";

function renderLoading() {
    const $body = document.body;
    $body.insertAdjacentHTML("beforeend", loadingComponent());
  }

export {renderLoading};