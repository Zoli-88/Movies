const watchlist = [];

function addToWatchList(movie) {
    watchlist.push(movie);
}

function getWatchList() {
    return watchlist;
}

export { addToWatchList, getWatchList }