import {menuNavComponent} from "../../components/_menu-nav.js";
import {renderCopyright} from "../../render/shared/copyright.js";

function initSignUpPage() {
  menuNavComponent();
  renderCopyright();
}

export {initSignUpPage}