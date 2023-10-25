function setLoggedInStatus(status) {
  localStorage.setItem("isLoggedIn", status);
}

function getLoggedInStatus() {
// localStorage API returns true or false value as a string based on our logic
// to make conditional rendering easier, we return the boolean value true if the string
// is "true", else we return the boolean value of false
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
}

export {setLoggedInStatus, getLoggedInStatus}