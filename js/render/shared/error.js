import {errorComponent} from "../../components/_error.js";
import {renderErrorMessage} from "../error-page/error-message.js";

function renderError(error) {
    const $body = document.body;
    let personalisedErrorMessage = "";
    if (error === "Movie not found!") {
      personalisedErrorMessage = "Please try searching for a different title";
      $body.insertAdjacentHTML("beforeend", errorComponent(error, personalisedErrorMessage));
      const $errorButton = document.querySelector("#error-btn");
      if ($errorButton) $errorButton.addEventListener("click", redirectUserToTheHomePage);
    } else {
      redirectUserToTheErrorPage(error);
      personalisedErrorMessage = "The error message was sent to our team to investigate";
  }
}

function redirectUserToTheHomePage() {
    const redirectUrl = `/index.html`;
    window.location.href = redirectUrl;
}
  
function redirectUserToTheErrorPage(error) {
    const redirectUrl = `/error.html`;
    window.location.href = redirectUrl;
    renderErrorMessage(error);
}
  
function clearError() {
    const $error = document.querySelector("#error");
    $error.remove();
}

export {renderError, redirectUserToTheErrorPage};