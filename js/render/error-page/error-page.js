import { menuNavComponent } from "../../components/_menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderErrorMessage } from "../error-page/error-message.js";
import { formComponent } from "../../components/_form.js";

function initErrorPage() {
    menuNavComponent();
    renderErrorMessage();
    renderCopyright();
    formComponent();
}

export { initErrorPage }