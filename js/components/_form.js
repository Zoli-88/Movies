import {searchFormValidation} from "../utils/utils.js";
const $formComponent = document.querySelector("#search-form");

function searchForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchResult = formData.get("search");
  searchFormValidation(searchResult);
}

$formComponent.addEventListener("submit", searchForm);
