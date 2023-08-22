import {renderLoading} from "../shared/loading.js";
import {renderMovie} from "./movie.js";
import {renderRelatedMovies} from "./related-movies.js";
import {clearLoading} from "../shared/clear-loading.js";

async function initMoviePage() {
    renderLoading();
    await renderMovie();
    await renderRelatedMovies();
    clearLoading();
}

export {initMoviePage};