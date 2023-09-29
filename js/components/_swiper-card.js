import { cardComponent } from "./_card.js";

function swiperCard(movies, searchResult) {
  return `
  <div class="swiper swiper-component">
    <div class="swiper-wrapper">
      ${movies.map((movie) => {
        return `
          <div class="swiper-slide">
            ${cardComponent(movie, searchResult)}
          </div>
        `
      }).join("")}
    </div>
  <button class="swiper-button swiper-button-next primary-btn"></button>
  <button class="swiper-button swiper-button-prev primary-btn"></button>
  </div>
  `
}

export { swiperCard }