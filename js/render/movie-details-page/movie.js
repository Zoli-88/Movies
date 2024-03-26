import { renderError } from "../shared/error.js";
import { listMovie } from "../../api/api.js";
import { ratingsComponent } from "../../components/_ratings.js";
import { descriptionComponent } from "../../components/_description.js";
import { goBackToPreviousPage } from "../../utils/utils.js";

async function renderMovie() {
    const $moviePage = document.querySelector("#movie-page");
    const $backToPreviousPageButton = document.querySelector("#prev-page-btn");
    const $description = document.querySelector("#description");

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const queryImdbID = searchParams.get("imdbID");
    const querySearchPhrase = searchParams.get("searchPhrase");

    try {
        const movie = await listMovie(queryImdbID);
        $backToPreviousPageButton.addEventListener("click", goBackToPreviousPage);
        $moviePage.innerHTML = ratingsComponent(movie, querySearchPhrase);
        $description.innerHTML = descriptionComponent(movie, querySearchPhrase);
    } catch (error) {
        renderError(error);
    }
}

export { renderMovie };