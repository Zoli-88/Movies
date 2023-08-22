import {renderError} from "../shared/error.js";
import {listMovie} from "../../api/api.js";
import {ratingsComponent} from "../../components/_ratings.js";
import {descriptionComponent} from "../../components/_description.js";
import {backToPreviousPageComponent} from "../../components/_back-to-previous-page.js";
import { handleBackPage } from "../../utils/utils.js";

async function renderMovie() {
    const $moviePage = document.querySelector("#movie-page");
    const $backToPreviousPage = document.querySelector("#prev-page");
    const $description = document.querySelector("#description");

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const queryImdbID = searchParams.get("imdbID");
    const querySearchPhrase = searchParams.get("searchPhrase");

    try {
        const movie = await listMovie(queryImdbID);
        $backToPreviousPage.innerHTML = backToPreviousPageComponent();
        $backToPreviousPage.addEventListener("click", handleBackPage);
        $moviePage.innerHTML = ratingsComponent(movie, querySearchPhrase);
        $description.innerHTML = descriptionComponent(movie, querySearchPhrase);
    } catch (error) {
        renderError(error);
    }
}

export {renderMovie};