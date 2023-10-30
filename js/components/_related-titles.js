function relatedTitlesComponent(querySearchPhrase) {
    return `
        <h3 class="title">Titles related to <span class="highlight">${querySearchPhrase}</span></h3>
    `
}

export {relatedTitlesComponent};