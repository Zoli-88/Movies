
function addToWatchList(movie) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function removeFromWatchList(imdbID) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const index = watchlist.findIndex(movie => movie.imdbID === imdbID);

    if (index !== -1) {
        watchlist.splice(index, 1);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
}

function getWatchList() {
    const watchlistData = localStorage.getItem("watchlist");
    return watchlistData ? JSON.parse(watchlistData) : [];
}

function isTitleInWatchlist(imdbID) {
    const watchlist = getWatchList();
    return watchlist.some(movie => movie.imdbID === imdbID);
}

export { addToWatchList, removeFromWatchList, getWatchList, isTitleInWatchlist }