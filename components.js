function cardComponent(movie) {
  return `
    <div class="card">
    <div class="poster-container">
      <a href="#!" class="poster-link">
        <img src="${movie.Poster}" alt="">
      </a>
    </div>
      <div class="content">
        <a href="#!" class="title">
          <span>${movie.Title}</span>
        </a>
        <br>
        <i class="fa-regular fa-calendar calendar-icon"></i>
        <span class="year">${movie.Year}</span>
      </div>
      <div class="details">
        <a href="#!">
          <i class="fa-brands fa-imdb logo-icon"></i>
        </a>
        <a href="#!" class="info-button">
          <i class="fa-solid fa-circle-info "></i>
        </a>
      </div>
    </div>
  `
}