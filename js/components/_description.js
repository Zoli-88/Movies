function descriptionComponent(movie) {
    const {
    Title,
    Year,
    Rated,
    Runtime,
    Genre,
    Director,
    Language,
    Country,
    Awards,
    DVD,
    BoxOffice,
    Writer,
    Actors,
    Poster,
    Plot,
    } = movie;

    return `
        <div class="description-component">
            <img src="${Poster}" alt="${Title} movie poster">
            <div>
                <h1>${Title}</h1>
                <div class="subtitle">
                    <span>${Year} &#x2022;</span>
                    <span>${Rated === "N/A" ? "Unknown" : Rated} &#x2022;</span>
                    <span>${Runtime}</span>
                </div>
                <ul>
                    <li>
                        <i class="fa-solid fa-video"></i> <b>Genre</b>: ${Genre ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-clapperboard"></i> <b>Director</b>: ${Director ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-pen-to-square"></i> <b>Writers</b>: ${Writer ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-masks-theater"></i> <b>Actors</b>: ${Actors ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-globe"></i> <b>Languages</b>: ${Language ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-flag"></i> <b>Countries</b>: ${Country ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-trophy"></i> <b>Awards</b>: ${Awards ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-compact-disc"></i> <b>Released on DVD</b>: ${DVD ?? "Unknown"}</li>
                    <li>
                        <i class="fa-solid fa-sack-dollar"></i> <b>Box-office total</b>: ${BoxOffice ?? "Unknown"}</li>
                </ul>
                <br>
                <p class="plot">${Plot}</p>
            </div>
        </div>
    `
}

export { descriptionComponent };