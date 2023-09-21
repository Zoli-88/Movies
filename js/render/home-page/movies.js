import { listMovies } from "../../api/api.js"
import { cardComponent } from "../../components/_card.js";
import { renderError } from "../shared/error.js";
import {checkIfMobileOrDesktop} from "../../utils/utils.js";

async function renderMovies(searchResult) {
    const $container = document.querySelector("#container");

    try {
      const data = await listMovies(searchResult);
      const movies = data.Search;
  
      $container.innerHTML = "";
      
      function handleRenderedMoviesLayout(isDesktop) {
        if (isDesktop) {
          movies.forEach(movie => {
            $container.innerHTML += cardComponent(movie, searchResult);
          });
          console.log("desktop");
        } else {
          console.log("mobile");
        }
      }
      checkIfMobileOrDesktop(handleRenderedMoviesLayout);
    } catch (error) {
      renderError(error);
    }
  }

export { renderMovies };


