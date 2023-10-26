import {checkIfMobileOrDesktop, intentionalDelay, reloadCurrentPage, toggleClasses} from "../utils/utils.js";
import {getLoggedInStatus, setLoggedInStatus} from "../auth/auth.js";
import {renderDialogModal, clearDialogModal} from "../render/shared/dialog-modal.js";
import {renderLoading} from "../render/shared/loading.js";

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

  function updateNavMenuLinksBasedOnGuestOrUser() {
    const isLoggedIn = getLoggedInStatus();
    isLoggedIn ? updateNavMenuLinksForLoggedInUser() : updateNavMenuLinksForLoggedOutUser();
  }
  updateNavMenuLinksBasedOnGuestOrUser();
  
  function updateNavMenuLinksForLoggedInUser() {
    $navMenuSignInSignOutLinks.forEach(link => {
      link.setAttribute("href", "javascript: void(0)");
      link.innerText = "Sign Out";
      link.addEventListener("click", showDialogModal);
    });
    $navMenuWatchlistLinks.forEach(link => {
      link.setAttribute("href", "/watchlist.html");
    });
  }
  
  function updateNavMenuLinksForLoggedOutUser() {
    $navMenuSignInSignOutLinks.forEach(link => {
      link.setAttribute("href", "/sign-in.html");
      link.innerText = "Sign In";
    });
    $navMenuWatchlistLinks.forEach(link => {
      link.setAttribute("href", "/sign-in.html");
    });
  }

  function showDialogModal() {
    const question = "Are you sure you want to sign out?";
    const modalButtonType = "generic-modal";
    renderDialogModal($main, question, modalButtonType);
    const $dialogModalComponent = document.querySelector(`[data-dialog-modal]`);
    const $dialogModalConfirmButton = document.querySelector(`[data-generic-dialog-modal-btn="confirm"]`);
    const $dialogModalCancelButton = document.querySelector(`[data-generic-dialog-modal-btn="cancel"]`);
    $dialogModalConfirmButton.addEventListener("click", handleLogoutUser);
    $dialogModalCancelButton.addEventListener("click", () => clearDialogModal($dialogModalComponent));
    
    function handleLogoutUser(e) {
      const loadingMessage = "Signing you out, please wait...";
      e.preventDefault();
      renderLoading(loadingMessage);
      clearDialogModal($dialogModalComponent);
      setLoggedInStatus(false);
      updateNavMenuLinksBasedOnGuestOrUser();
      intentionalDelay(reloadCurrentPage);
    }
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