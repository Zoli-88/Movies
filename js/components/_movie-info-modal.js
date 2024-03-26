function movieInfoModalComponent(movie) {

    const {
    Title,
    Year,
    Rated,
    Runtime,
    Genre,
    imdbID,
    imdbRating
    } = movie;

    return `
        <div data-modal-open-id=${imdbID} class="modal-component show-modal">
            <h1 class="modal-title">${Title}</h1>
            <div class="subtitle">
                <span>${Year} &#x2022;</span>
                <span>${Rated === "N/A" ? "Unknown" : Rated} &#x2022;</span>
                <span>${Runtime}</span>
                <br/>
                <span>${Genre ?? "Unknown"}</span>
                <br/>
                <i class="fa-solid fa-star"></i> <span>${imdbRating}/10</span>
            </div>
            <button data-modal-btn-close-id="${imdbID}" class="primary-btn">
                <i class="fa-solid fa-square-xmark"></i>
            </button>
        </div>
    `
}

export { movieInfoModalComponent };