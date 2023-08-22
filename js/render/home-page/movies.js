import { listMovies } from "../../api/api.js"
import { cardComponent } from "../../components/_card.js";
import { renderError } from "../shared/error.js";

async function renderMovies(searchResult) {
    const $container = document.querySelector("#container");

    try {
      const data = await listMovies(searchResult);
      const movies = data.Search;
  
      $container.innerHTML = "";
  
      movies.forEach(movie => {
        $container.innerHTML += cardComponent(movie, searchResult);
      });
      
    } catch (error) {
      renderError(error);
    }
  }

  export {renderMovies};