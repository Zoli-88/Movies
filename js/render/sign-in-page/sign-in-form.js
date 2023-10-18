import {signInFormComponent} from "../../components/_sign-in-form.js";
import {handleBackPage} from "../../utils/utils.js";
import {MASTER_EMAIL, MASTER_PASSWORD} from "../../constants/constants.js";
import {renderLoading} from "../shared/loading.js";
import { renderErrorMessage } from "../error-page/error-message.js";
import { errorComponent } from "../../components/_error.js";


function renderSignInForm() {
  const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
  $backToPreviousPageButton.addEventListener("click", handleBackPage);
  const $formContainer = document.querySelector("#sign-in-form-container");
  $formContainer.insertAdjacentHTML("afterbegin", signInFormComponent());
  const $form = document.querySelector("#sign-in-form");
  $form.addEventListener("submit", handleLogin);
}

function handleLogin(e) {
  e.preventDefault();
  const user = Object.fromEntries(new FormData(e.target));
  const successMessage = "Signing in, please wait...";
  const error = "Incorrect email or password!";
  const errorMessage = "Please try again";

  if (user.email === MASTER_EMAIL && user.password === MASTER_PASSWORD) {
    console.log("true");
    renderLoading(successMessage);
  } else {
    console.log("false");
    document.body.insertAdjacentHTML("beforeend", errorComponent(error, errorMessage));
  }
}

export {renderSignInForm}