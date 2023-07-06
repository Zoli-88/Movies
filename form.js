function searchForm() {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchResult = formData.get("search");
  console.log(searchResult);
}