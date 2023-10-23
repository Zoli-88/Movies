import {dialogModalComponent} from "../../components/_dialog-modal.js";

function renderDialogModal(el) {
  el.insertAdjacentHTML("beforeend", dialogModalComponent())
}

function clearDialogModal(el) {
  el.remove();
}

export {renderDialogModal, clearDialogModal}