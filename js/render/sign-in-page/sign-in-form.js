import {signInFormComponent} from "../../components/_sign-in-form.js";
import {handleBackPage} from "../../utils/utils.js";

function renderSignInForm() {
  const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
  $backToPreviousPageButton.addEventListener("click", handleBackPage);
  const $formContainer = document.querySelector("#sign-in-form-container");
  $formContainer.insertAdjacentHTML("afterbegin", signInFormComponent());
}

export {renderSignInForm}