function noRelatedTitlesComponent(querySearchPhrase) {
    return `
        <h3 class="title center-text">We couldn't find any related titles to <span class="highlight capitalize">${querySearchPhrase}</span></h3>
    `
}

export { noRelatedTitlesComponent };