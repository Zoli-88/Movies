import { errorComponent } from "../../components/_error.js";

function renderError(error) {
    const $main = document.querySelector("main");
    let personalisedErrorMessage = "";

    switch (error) {
        case "Movie not found!":
            personalisedErrorMessage = `Please try searching for a different title`;
            break;
        case "Too many results.":
            personalisedErrorMessage = `Please try searching for a more specific title to narrow down your search`;
            break;
        case "Incorrect IMDb ID.":
            personalisedErrorMessage = `Please try searching for a title instead, for example "Thor"`;
            break;
        default:
            redirectUserToTheErrorPage(error);
            return;
    }
    
    $main.insertAdjacentHTML("beforeend", errorComponent(error, personalisedErrorMessage));
    const $errorButton = document.querySelector("#error-btn");
    if ($errorButton) $errorButton.addEventListener("click", () => {
        clearError();
    });
}
  
function redirectUserToTheErrorPage(error) {
    const redirectUrl = `/error.html?errorMessage=${encodeURIComponent(error)}`;
    window.location.href = redirectUrl;
}
  
function clearError() {
    const $error = document.querySelector("#error");
    $error.remove();
}

export { renderError, clearError };