import {checkIfMobileOrDesktop} from "../utils/utils.js";

function menuNavComponent() {
  const $navMenuComponent = document.querySelector(".navigation-component");
  const $navMenuComponentDesktop = document.querySelector(".navigation-component .desktop");
  const $navMenuComponentMobile = document.querySelector(".navigation-component .mobile");
  const $navMenuMobileLinks = document.querySelector(".navigation-component .nav-links-mobile");
  const $navMenuToggleButton = document.querySelector(".nav-menu-toggle-btn");
  const $dropDownMenuComponent = document.querySelector(".dropdown-menu-component");
  const $scrollEffectTrigger = document.querySelector("[data-nav-menu-scroll-trigger]");
  const $scrollEffectTriggerMarginTop = 2;
  
  function handleMenuNavLayout(isDesktop) {
    if (isDesktop) {
      $navMenuComponentDesktop.classList.remove("hide");
      $navMenuComponentMobile.classList.add("hide");
    } else {
      $navMenuComponentDesktop.classList.add("hide");   
      $navMenuComponentMobile.classList.remove("hide");
    }
  }
  checkIfMobileOrDesktop(handleMenuNavLayout);

  function toggleDropdownMenu() {
    $navMenuToggleButton.classList.toggle("toggle");
    $dropDownMenuComponent.classList.toggle("slide");
    $navMenuMobileLinks.classList.toggle("hide");
  }

  function changeNavMenuComponentAppearanceOnScroll(scrollTrigger, navMenuComponent, classname, scrollTriggerMarginTop) {
    const options = {
      rootMargin: `${scrollTriggerMarginTop}px 0px 0px 0px`,
      threshold: 0,
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navMenuComponent.classList.remove(classname);
        } else {
          navMenuComponent.classList.add(classname);
        }
      });
    }, options);
    observer.observe(scrollTrigger);  
  }

  // Event Listeners
  $navMenuToggleButton.addEventListener("click", toggleDropdownMenu);

  // Intersection Observer - Scroll styling
  changeNavMenuComponentAppearanceOnScroll($scrollEffectTrigger, $navMenuComponent, "scroll", $scrollEffectTriggerMarginTop);
};

export {menuNavComponent};