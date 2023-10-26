import {dialogModalComponent} from "../../components/_dialog-modal.js";

function renderDialogModal(el, question, modalButtonType) {
  el.insertAdjacentHTML("beforeend", dialogModalComponent(question, modalButtonType))
}

function clearDialogModal(el) {
  el.remove();
}

export {renderDialogModal, clearDialogModal}