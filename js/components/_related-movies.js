import {cardComponent} from "../components/_card.js";

function relatedMoviesComponent(movies) {
  // In the related movies component (swiper) we want to render all the movies present in the default search
  // except the one that is highlighted in the movie component
  
  // to do this, first we need to find a unique id for the movie we want to remove, this can be retrieved from the url
  // "http://127.0.0.1:5500/movie.html?imdbID=tt2654124"
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const querySearchPhrase = searchParams.get("searchPhrase");
  // then we need to create a new array that will contain all the movies in the default search 
  // except the one that is highlighted in the movie component
  // a non destructive method would be the filter method which returns a new array based on the condition we provide
  // in our case, the method below would translate to 
  // "return a new copy of the original "movies" array that contains all the objects (movies) in the default search
  // except the one that has the movie.imdbID value equal to the queryImdbID in the search URL"
  return `
    <div class="swiper swiper-component">
      <div class="swiper-wrapper">
        ${movies.map((movie) => {
          return `
            <div class="swiper-slide">
              ${cardComponent(movie, querySearchPhrase)}
            </div>
          `
        }).join("")}
      </div>
      <button class="swiper-button swiper-button-next primary-btn"></button>
      <button class="swiper-button swiper-button-prev primary-btn"></button>
    </div>
  `
}

export {relatedMoviesComponent};