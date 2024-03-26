import { errorMessageComponent } from "../../components/_error-message.js";
import { redirectUserToTheHomePage } from "../../utils/utils.js";

function renderErrorMessage() {
    const $error = document.querySelector("#error");
    $error.insertAdjacentHTML("beforeend", errorMessageComponent());
    const $errorButton = document.querySelector(`#error button`);
    $errorButton.addEventListener("click", redirectUserToTheHomePage);
}

export { renderErrorMessage }