function handleBackPage() {
  // history.back() will go back to the previously visited page
  // this way we don't have to manually add an exact page URL, for example index.html
  window.history.back();
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function searchFormValidation(searchResult) {
  const redirectUrl = `/index.html?search=${encodeURIComponent(searchResult)}`;
  window.location.href = redirectUrl;
  // to do basic validation and display some message
}

export {handleBackPage, isValidUrl, searchFormValidation};