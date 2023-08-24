function modalComponent(movie) {
  return `
    <div class="modal-component show-modal">
      <h1 class="modal-title">${movie.Title}</h1>
      <div class="subtitle">
        <span>${movie.Year} &#x2022;</span>
        <span>${movie.Rated === "N/A" ? "Unknown" : movie.Rated} &#x2022;</span>
        <span>${movie.Runtime}</span>
        <br/>
        <span>${movie.Genre ?? "Unknown"}</span>
        <br/>
        <i class="fa-solid fa-star"></i> <span>${movie.imdbRating}/10</span>
      </div>
      <button class="primary-btn">
        <i class="fa-solid fa-square-xmark"></i>
      </button>
    </div>
  `
}

export {modalComponent};