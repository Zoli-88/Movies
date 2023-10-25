import {signInFormComponent} from "../../components/_sign-in-form.js";
import {goBackToPreviousPage, intentionalDelay, redirectUserToTheHomePage} from "../../utils/utils.js";
import {MASTER_EMAIL, MASTER_PASSWORD} from "../../constants/constants.js";
import {renderLoading} from "../shared/loading.js";
import {errorComponent} from "../../components/_error.js";
import {clearError} from "../shared/error.js";
import {setLoggedInStatus} from "../../auth/auth.js";

function renderSignInForm() {
  const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
  $backToPreviousPageButton.addEventListener("click", goBackToPreviousPage);
  const $formContainer = document.querySelector("#sign-in-form-container");
  $formContainer.insertAdjacentHTML("afterbegin", signInFormComponent());
  const $form = document.querySelector("#sign-in-form");
  $form.addEventListener("submit", handleLogin);

  function handleLogin(e) {
    e.preventDefault();
    const user = Object.fromEntries(new FormData(e.target));
    const successMessage = "Signing in, please wait...";
    const error = "Incorrect email or password!";
    const errorMessage = "Please try again";
  
    const $main = document.querySelector("main");
  
    if (user.email === MASTER_EMAIL && user.password === MASTER_PASSWORD) {
      setLoggedInStatus(true);
      renderLoading(successMessage);
      intentionalDelay(goBackToPreviousPage);
    } else {
      setLoggedInStatus(false);
      $main.insertAdjacentHTML("beforeend", errorComponent(error, errorMessage));
      const $errorButton = document.querySelector("#error-btn");
      $errorButton.addEventListener("click", clearError);
      $errorButton.addEventListener("click", $form.reset());
    }
  }
}

export {renderSignInForm}