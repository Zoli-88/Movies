import {listMovies} from "../../api/api.js";
import {activateSwiper} from "../shared/swiper.js";
import {relatedTitlesComponent} from "../../components/_related-titles.js";
import {noRelatedTitlesComponent} from "../../components/_no-related-titles.js";
import {relatedMoviesComponent} from "../../components/_related-movies.js";
import {renderError} from "../shared/error.js";

async function renderRelatedMovies() {
  const $relatedMovies = document.querySelector("#related-movies");
  const $relatedMoviesTitle = document.querySelector("#related-movies-title");

    try {
      const paramsString = window.location.search;
      const searchParams = new URLSearchParams(paramsString);
      const queryImdbID = searchParams.get("imdbID");
      const querySearchPhrase = searchParams.get("searchPhrase");
      
      const data = await listMovies(querySearchPhrase);
      const movies = data.Search;
  
      const moviesWithoutCurrent = movies.filter((movie) => {
        return movie.imdbID !== queryImdbID
      });
  
      if (moviesWithoutCurrent.length === 0) {
        $relatedMoviesTitle.innerHTML = noRelatedTitlesComponent(querySearchPhrase);
      } else {
        $relatedMoviesTitle.innerHTML = relatedTitlesComponent(querySearchPhrase)
        $relatedMovies.insertAdjacentHTML("beforeend", relatedMoviesComponent(moviesWithoutCurrent))
        activateSwiper();
      }
    } catch (error) {
      renderError(error);
    }
  }

  export {renderRelatedMovies};