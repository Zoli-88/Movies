import { checkIfMobileOrDesktop } from "../utils/utils.js";
import { listMovies } from "../api/api.js";
import { renderError } from "../render/shared/error.js";
let $formComponent;
const breakpointValue = 768;

function updateFormIdBasedOnScreenSize(isDesktop) {
    if (isDesktop) {
        $formComponent = document.querySelector(`[data-el=search-form-desktop]`);
        $formComponent.addEventListener("submit", searchForm);
    } else {
        $formComponent = document.querySelector(`[data-el=search-form-mobile]`);
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

async function searchFormValidation(searchResult) {
    try {
        await listMovies(searchResult);
        const redirectUrl = `/index.html?search=${encodeURIComponent(searchResult)}`;
        window.location.href = redirectUrl;
    } catch (error) {
        renderError(error);
    }
    // to do basic validation and display some message
}

checkIfMobileOrDesktop(updateFormIdBasedOnScreenSize, breakpointValue);
