import { formComponent } from "../../components/_form.js";
import { menuNavComponent } from "../../components/_menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderSignInForm } from "./sign-in-form.js";

function initSignInPage() {
    menuNavComponent();
    renderSignInForm();
    formComponent();
    renderCopyright();
}

export { initSignInPage }