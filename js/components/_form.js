import { searchFormValidation } from "../utils/utils.js";

export function searchForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchResult = formData.get("search");
  searchFormValidation(searchResult);
}
