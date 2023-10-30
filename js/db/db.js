
function addToWatchList(movie) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function getWatchList() {
    const watchlistData = localStorage.getItem("watchlist");
    return watchlistData ? JSON.parse(watchlistData) : [];
}

export { addToWatchList, getWatchList }