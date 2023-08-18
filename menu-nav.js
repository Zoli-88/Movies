function menuNavComponent() {
  const $navMenuComponentDesktop = document.querySelector(".navigation-container.desktop");
  const $navMenuComponentMobile = document.querySelector(".navigation-container.mobile");
  const $navMenuToggleButton = document.querySelector(".nav-menu-toggle-btn");
  const breakpointValue = 768;
  const breakpoint = window.matchMedia(`(max-width: ${breakpointValue}px)`);
  
  function handleMenuNavLayout(event) {
    if (event.matches) {
      $navMenuComponentDesktop.classList.add("hide");
      $navMenuComponentMobile.classList.remove("hide");
    } else {
      $navMenuComponentDesktop.classList.remove("hide");
      $navMenuComponentMobile.classList.add("hide");
    }
  }
  // Initial call to set the layout based on the initial media query state
  handleMenuNavLayout(breakpoint);

  function toggleMenuNav() {
    $navMenuToggleButton.classList.toggle("toggle");
  }

  // Event Listeners
  breakpoint.addEventListener("change", handleMenuNavLayout);
  $navMenuToggleButton.addEventListener("click", toggleMenuNav);
}
menuNavComponent();

