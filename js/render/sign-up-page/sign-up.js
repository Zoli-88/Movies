import {menuNavComponent} from "../../components/_menu-nav.js";
import {renderCopyright} from "../shared/copyright.js";
import {renderSignUpForm} from "./sign-up-form.js";

function initSignUpPage() {
  menuNavComponent();
  renderSignUpForm();
  renderCopyright();
}

export {initSignUpPage}