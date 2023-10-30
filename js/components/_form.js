import {searchFormValidation, checkIfMobileOrDesktop} from "../utils/utils.js";
let $formComponent;
const breakpointValue = 768;

function updateFormIdBasedOnScreenSize(isDesktop) {
    if (isDesktop) {
        $formComponent = document.querySelector("#search-form-desktop");
        $formComponent.addEventListener("submit", searchForm);
    } else {
        $formComponent = document.querySelector("#search-form-mobile");
        $formComponent.addEventListener("submit", searchForm);
    }

    function searchForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let searchResult;

        if (isDesktop) {
            searchResult = formData.get("search-desktop");
        } else {
            searchResult = formData.get("search-mobile");
        }
        searchFormValidation(searchResult);
    }
}

checkIfMobileOrDesktop(updateFormIdBasedOnScreenSize, breakpointValue);
