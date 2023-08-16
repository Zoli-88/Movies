function searchForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchResult = formData.get("search");
  const redirectUrl = `/index.html?find=${encodeURIComponent(searchResult)}`;
  window.location.href = redirectUrl;
}
