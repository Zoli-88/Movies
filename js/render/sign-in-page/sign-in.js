import { renderSearchForm } from "../shared/form.js";
import { renderMenuNav } from "../shared/menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderSignInForm } from "./sign-in-form.js";

function initSignInPage() {
    renderMenuNav();
    renderSignInForm();
    renderSearchForm();
    renderCopyright();
}

export { initSignInPage }