function searchForm() {
  event.preventDefault();
  const form = document.querySelector("#searchForm");
  const formData = new FormData(event.target);
  const searchResult = formData.get("search");
  form.reset();
  renderSearchedMovies(searchResult);
}