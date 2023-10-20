function setLoggedInStatus(status) {
  localStorage.setItem("isLoggedIn", status)
}

function getLoggedInStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn;
}

export {setLoggedInStatus, getLoggedInStatus}