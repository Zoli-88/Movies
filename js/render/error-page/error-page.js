import { menuNavComponent } from "../../components/_menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderErrorMessage } from "../error-page/error-message.js";

function initErrorPage() {
    menuNavComponent();
    renderErrorMessage();
    renderCopyright();
}

export { initErrorPage }