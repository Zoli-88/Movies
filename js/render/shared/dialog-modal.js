import {dialogModalComponent} from "../../components/_dialog-modal.js";

function renderDialogModal(el, questionOrConfirmationMessage, modalType) {
  el.insertAdjacentHTML("beforeend", dialogModalComponent(questionOrConfirmationMessage, modalType))
}

function clearDialogModal(el) {
  el.remove();
}

export {renderDialogModal, clearDialogModal}