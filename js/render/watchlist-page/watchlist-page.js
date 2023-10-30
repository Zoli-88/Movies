import { menuNavComponent } from "../../components/_menu-nav.js";
import { renderCopyright } from "../shared/copyright.js";

function initWatchlistPage() {
    menuNavComponent();
    renderCopyright();
}

export { initWatchlistPage }