// On load
import {renderLoading, clearLoading} from "../shared/loading.js";
import {renderMovies} from "./movies.js";
import {renderCopyright} from "../shared/copyright.js";

async function initMovieListPage() {
    renderLoading();
    renderCopyright();
    const $container = document.querySelector("#container");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchResult = urlSearchParams.get("search");
  
    if (searchResult) {
      await renderMovies(searchResult, $container);
    } else {
      await renderMovies();
    }
    clearLoading();
  }

  export {initMovieListPage};