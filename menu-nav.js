function menuNavComponent() {
  const $navMenuComponentLinks = document.querySelector(".navigation-component .nav-links");
  const $navMenuToggleButton = document.querySelector(".navigation-component .menu-nav-toggle");
  const breakpointValue = 768;
  const breakpoint = window.matchMedia(`(max-width: ${breakpointValue}px)`);
  
  function handleMenuNavLayout(event) {
    if (event.matches) {
      $navMenuComponentLinks.classList.add("hide");
      $navMenuToggleButton.classList.remove("hide");
    } else {
      $navMenuToggleButton.classList.add("hide");
      $navMenuComponentLinks.classList.remove("hide");
    }
  }
  // Initial call to set the layout based on the initial media query state
  handleMenuNavLayout(breakpoint);

  //Add the event listener to the media query
  breakpoint.addEventListener("change", handleMenuNavLayout);
}
menuNavComponent();

