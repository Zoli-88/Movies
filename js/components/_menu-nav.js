import {checkIfMobileOrDesktop, toggleClasses} from "../utils/utils.js";
import {getLoggedInStatus, setLoggedInStatus} from "../auth/auth.js";
import {renderDialogModal, clearDialogModal} from "../render/shared/dialog-modal.js";

const isLoggedIn = getLoggedInStatus();

function menuNavComponent() {
  const $main = document.querySelector("main");
  const $navMenuComponent = document.querySelector(".navigation-component");
  const $navMenuComponentDesktop = document.querySelector(".navigation-component .desktop");
  const $navMenuComponentMobile = document.querySelector(".navigation-component .mobile");
  const $navMenuMobileList = document.querySelector(".navigation-component .nav-links-list-mobile");
  const $navMenuMobileLinks = document.querySelectorAll(".navigation-component .nav-links-list-mobile li");
  const $navMenuSignInSignOutLinks = document.querySelectorAll("[data-sign-in-out]");
  const $navMenuWatchlistLinks = document.querySelectorAll("[data-watchlist]");
  const $navMenuToggleButton = document.querySelector(".nav-menu-toggle-btn");
  const $dropDownMenuComponent = document.querySelector(".dropdown-menu-component");
  const $scrollEffectTrigger = document.querySelector("[data-nav-menu-scroll-trigger]");
  const scrollEffectTriggerMarginTop = 2;
  const breakpointValue = 768;

  function changeNavMenuLinksIfUserIsLoggedIn() {
    if (!isLoggedIn) return;
    $navMenuSignInSignOutLinks.forEach((link) => {
      link.setAttribute("href", "#");
      link.innerHTML = "Sign Out";
      link.addEventListener("click", showDialogModal);
    });
    $navMenuWatchlistLinks.forEach((link) => link.setAttribute("href", "/watchlist.html"));
  }
  changeNavMenuLinksIfUserIsLoggedIn();

  function showDialogModal() {
    renderDialogModal($main);
    const $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
    const $dialogModalConfirmButton = document.querySelector(`[data-dialog-modal-btn="confirm"]`);
    const $dialogModalCancelButton = document.querySelector(`[data-dialog-modal-btn="cancel"]`);

    $dialogModalConfirmButton.addEventListener("click", () => {
      handleDialogModal($dialogModalConfirmButton, $dialogModalComponent);
    });
    $dialogModalCancelButton.addEventListener("click", () => {
      handleDialogModal($dialogModalCancelButton, $dialogModalComponent);
    });
  }

  function handleDialogModal(element, dialogModal) {
    const userResponse = element.getAttribute("data-dialog-modal-btn");

    if (userResponse === "confirm") {
      
      changeNavMenuLinksIfUserIsLoggedOut();
      clearDialogModal(dialogModal);
    }

    if (userResponse === "cancel") {
      clearDialogModal(dialogModal);
    }
  }

  function changeNavMenuLinksIfUserIsLoggedOut() {
    $navMenuSignInSignOutLinks.forEach((link) => {
      link.removeEventListener("click", showDialogModal);
      link.setAttribute("href", "/sign-in.html");
      link.innerHTML = "Sign In";
    })
    $navMenuWatchlistLinks.forEach((link) => link.setAttribute("href", "/sign-in.html"));
  }
  
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
    const mobileListOpenClass = "visible";
    const mobileListCloseClass = "hidden";
    const linkOpenClass = "fade-in";
    const linkCloseClass = "fade-out";

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
  if ($navMenuToggleButton) $navMenuToggleButton.addEventListener("click", toggleDropdownMenu);

  // Intersection Observer - Scroll styling
  changeNavMenuComponentAppearanceOnScroll($scrollEffectTrigger, $navMenuComponent, "scroll", scrollEffectTriggerMarginTop);
};

export {menuNavComponent};