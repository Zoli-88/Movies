import {ICONS_MAP} from "../constants/constants.js";

function ratingsComponent(movie) {
  return `
    <div class="ratings-component">
      ${ratingComponent({
        Source: "IMDB",
        Value: movie.imdbRating
      })}
      ${movie.Ratings.map(rating => {
        return ratingComponent(rating);
      }).join("")}
    </div>    
  `
}

function ratingComponent(rating) {
  return `
    <div class="source">
      <span>${rating.Source}</span>
      <div class="value">
        <span>${rating.Value}</span>
        <i class="${ICONS_MAP.get(rating.Source)}"></i>
      </div>
    </div>
    `
}

export {ratingComponent, ratingsComponent};