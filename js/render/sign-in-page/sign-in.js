import {menuNavComponent} from "../../components/_menu-nav.js";
import {renderCopyright} from "../shared/copyright.js";
import {renderSignInForm} from "./sign-in-form.js";

function initSignInPage() {
    menuNavComponent();
    renderSignInForm();
    renderCopyright();
}

export {initSignInPage}