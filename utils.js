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
