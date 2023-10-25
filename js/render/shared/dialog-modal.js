import {dialogModalComponent} from "../../components/_dialog-modal.js";

function renderDialogModal(el, question) {
  el.insertAdjacentHTML("beforeend", dialogModalComponent(question))
}

function clearDialogModal(el) {
  el.remove();
}

export {renderDialogModal, clearDialogModal}