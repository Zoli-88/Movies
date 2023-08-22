// On load
import { renderLoading } from "../shared/loading.js";
import { renderMovies } from "./movies.js";
import { clearLoading } from "../shared/clear-loading.js";


async function initMovieListPage() {

    renderLoading();
    
    const $container = document.querySelector("#container");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchResult = urlSearchParams.get("find");
  
    if (searchResult) {
      await renderMovies(searchResult, $container);
    } else {
      await renderMovies();
    }
    clearLoading();
  }

  export {initMovieListPage};