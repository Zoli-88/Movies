import {renderLoading, clearLoading} from "../shared/loading.js";
import {renderCopyright} from "../shared/copyright.js";
import {renderMovie} from "./movie.js";
import {renderRelatedMovies} from "./related-movies.js";
import { menuNavComponent } from "../../components/_menu-nav.js";
import { intentionalDelay } from "../../utils/utils.js";

async function initMoviePage() {
    renderLoading();
    menuNavComponent();
    renderCopyright();
    await renderMovie();
    await renderRelatedMovies();
    intentionalDelay(clearLoading);
}

export {initMoviePage};