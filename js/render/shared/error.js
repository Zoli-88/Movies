import {errorComponent} from "../../components/_error.js";
import {redirectUserToTheHomePage} from "../../utils/utils.js";

function renderError(error) {
    const $main = document.querySelector("main");
    let personalisedErrorMessage = "";
    if (error === "Movie not found!") {
        personalisedErrorMessage = "Please try searching for a different title";
        $main.insertAdjacentHTML("beforeend", errorComponent(error, personalisedErrorMessage));
        const $errorButton = document.querySelector("#error-btn");
            if ($errorButton) $errorButton.addEventListener("click", () => {
                redirectUserToTheHomePage();
                clearError();
            });
    } else {
        redirectUserToTheErrorPage(error);
    }
}
  
function redirectUserToTheErrorPage(error) {
    const redirectUrl = `/error.html?errorMessage=${encodeURIComponent(error)}`;
    window.location.href = redirectUrl;
    clearError();
}
  
function clearError() {
    const $error = document.querySelector("#error");
    $error.remove();
}

export {renderError, clearError};