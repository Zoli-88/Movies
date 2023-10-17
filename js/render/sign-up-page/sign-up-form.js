import {signUpFormComponent} from "../../components/_sign-up-form.js";
import {handleBackPage} from "../../utils/utils.js";

function renderSignUpForm() {
  const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
  const $formContainer = document.querySelector("#sign-up-form-container");
  $formContainer.insertAdjacentHTML("afterbegin", signUpFormComponent());
  
  const $form = document.querySelector("#sign-up-form");

  $backToPreviousPageButton.addEventListener("click", handleBackPage);
  $form.addEventListener("submit", handleSubmit);
}

async function handleSubmit(event) {
  event.preventDefault();
  const userData = new FormData(event.target);
  console.log(userData);
}

export {renderSignUpForm}