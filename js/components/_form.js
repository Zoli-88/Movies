import {searchFormValidation, checkIfMobileOrDesktop} from "../utils/utils.js";
let $formComponent;
const breakpointValue = 768;

function updateFormIdBasedOnScreenSize(isDesktop) {
  if (isDesktop) {
    $formComponent = document.querySelector(".navigation-component .desktop #search-form");
    $formComponent.addEventListener("submit", searchForm);
  } else {
    $formComponent = document.querySelector(".navigation-component .mobile #search-form");
    $formComponent.addEventListener("submit", searchForm);
  }
}

function searchForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchResult = formData.get("search");
  searchFormValidation(searchResult);
}

checkIfMobileOrDesktop(updateFormIdBasedOnScreenSize, breakpointValue);
