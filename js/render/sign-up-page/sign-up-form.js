import {signUpFormComponent} from "../../components/_sign-up-form.js";
import {handleBackPage} from "../../utils/utils.js";

function renderSignUpForm() {
  const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
  $backToPreviousPageButton.addEventListener("click", handleBackPage);
  const $formContainer = document.querySelector("#sign-up-form-container");
  $formContainer.insertAdjacentHTML("afterbegin", signUpFormComponent());
}

export {renderSignUpForm}