import { listMovies } from "../../api/api.js"
import { cardComponent } from "../../components/_card.js";
import { renderError } from "../shared/error.js";
import {checkIfMobileOrDesktop} from "../../utils/utils.js";

async function renderMovies(searchResult) {
    const $containerDesktop = document.querySelector("#container-desktop");
    const $containerMobile = document.querySelector("#container-mobile");
    const breakpointValue = 576;

    try {
      const data = await listMovies(searchResult);
      const movies = data.Search;
  
      $containerDesktop.innerHTML = "";
      $containerMobile.innerHTML = "";
      
      movies.forEach(movie => {
        $containerDesktop.innerHTML += cardComponent(movie, searchResult);
      });

      function handleRenderedMoviesLayout(isDesktop) {
        if (isDesktop) {
          $containerDesktop.classList.remove("hide");
          $containerMobile.classList.add("hide");
        } else {
          $containerDesktop.classList.add("hide");
          $containerMobile.classList.remove("hide");
        }
      }
      checkIfMobileOrDesktop(handleRenderedMoviesLayout, breakpointValue);
    } catch (error) {
      renderError(error);
    }
  }

export { renderMovies };


