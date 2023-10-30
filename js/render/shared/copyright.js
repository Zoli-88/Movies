import { copyRightComponent } from "../../components/_copyright.js";
import { currentYear } from "../../utils/utils.js";

function renderCopyright() {
    const $copyRight = document.querySelector("#copyright");
    const year = currentYear();
    $copyRight.innerHTML = copyRightComponent(year);
}

export { renderCopyright }