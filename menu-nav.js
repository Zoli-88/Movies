function menuNavComponent() {
  const $navMenuComponentLinks = document.querySelector(".navigation-component .nav-links");
  const breakpoint = window.matchMedia("(max-width: 768px)");
  
  function handleMenuNavLayout(event) {
    if (event.matches) {
      $navMenuComponentLinks.classList.add("hide");
    } else {
      $navMenuComponentLinks.classList.remove("hide");
    }
  }
  // Initial call to set the layout based on the initial media query state
  handleMenuNavLayout(breakpoint);

  //Add the event listener to the media query
  breakpoint.addEventListener("change", handleMenuNavLayout);
}
menuNavComponent();

