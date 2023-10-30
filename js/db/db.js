const watchlist = [];

function addToWatchList(movie) {
    watchlist.push(movie);
    console.log(watchlist);
}

function getWatchList() {
    return watchlist;
}

export { addToWatchList, getWatchList }