import { renderMenuNav } from "../shared/menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";
import { renderErrorMessage } from "../error-page/error-message.js";
import { renderSearchForm } from "../shared/form.js";

function initErrorPage() {
    renderMenuNav();
    renderErrorMessage();
    renderCopyright();
    renderSearchForm();
}

export { initErrorPage }