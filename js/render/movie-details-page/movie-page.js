import {renderLoading, clearLoading} from "../shared/loading.js";
import {renderCopyright} from "../shared/copyright.js";
import {renderMovie} from "./movie.js";
import {renderRelatedMovies} from "./related-movies.js";

async function initMoviePage() {
    renderLoading();
    renderCopyright();
    await renderMovie();
    await renderRelatedMovies();
    clearLoading();
}

export {initMoviePage};