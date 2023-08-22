function noRelatedTitlesComponent(querySearchPhrase) {
  return `
    <h3 class="title center">We couldn't find any related titles to <span class="highlight">${querySearchPhrase}</span></h3>
    `
}