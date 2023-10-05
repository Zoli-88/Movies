import {checkIfMobileOrDesktop, toggleClasses} from "../utils/utils.js";

function menuNavComponent() {
  const $navMenuComponent = document.querySelector(".navigation-component");
  const $navMenuComponentDesktop = document.querySelector(".navigation-component .desktop");
  const $navMenuComponentMobile = document.querySelector(".navigation-component .mobile");
  const $navMenuMobileList = document.querySelector(".navigation-component .nav-links-list-mobile");
  const $navMenuMobileLinks = document.querySelectorAll(".navigation-component .nav-links-list-mobile li");
  const $navMenuToggleButton = document.querySelector(".nav-menu-toggle-btn");
  const $dropDownMenuComponent = document.querySelector(".dropdown-menu-component");
  const $scrollEffectTrigger = document.querySelector("[data-nav-menu-scroll-trigger]");
  const $scrollEffectTriggerMarginTop = 2;
  const breakpointValue = 768;
  
  function handleMenuNavLayout(isDesktop) {
    if (isDesktop) {
      $navMenuComponentDesktop.classList.remove("hide");
      $navMenuComponentMobile.classList.add("hide");
    } else {
      $navMenuComponentDesktop.classList.add("hide");
      $navMenuComponentMobile.classList.remove("hide");
    }
  }
  checkIfMobileOrDesktop(handleMenuNavLayout, breakpointValue);

  function toggleDropdownMenu() {
    // Toggle classes for dropdown button and menu
    $navMenuToggleButton.classList.toggle("toggle");
    $dropDownMenuComponent.classList.toggle("open");
  
    const isOpen = $dropDownMenuComponent.classList.contains("open");
    const dropdownOpenClass = "visible";
    const dropdownCloseClass = "hidden";
    const mobileListOpenClass = "visible";
    const mobileListCloseClass = "hidden";
    const linkOpenClass = "fade-in";
    const linkCloseClass = "fade-out";
  
    // Toggle classes for dropdown component
    toggleClasses($dropDownMenuComponent, dropdownOpenClass, dropdownCloseClass, isOpen);
  
    // Toggle classes for mobile list
    toggleClasses($navMenuMobileList, mobileListOpenClass, mobileListCloseClass, isOpen);
  
    // Toggle classes for mobile links
    $navMenuMobileLinks.forEach(link => {
      toggleClasses(link, linkOpenClass, linkCloseClass, isOpen);
    });
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