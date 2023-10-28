import {dialogModalComponent} from "../../components/_dialog-modal.js";

function renderDialogModal(questionOrConfirmationMessage, modalType) {
  const $main = document.querySelector("main");
  $main.insertAdjacentHTML("beforeend", dialogModalComponent(questionOrConfirmationMessage, modalType))
}

function clearDialogModal(el) {
  el.remove();
}

function setDialogModalType(type) {
  return type;
}

function setDialogModalMessage(message) {
  return message;
}

export {renderDialogModal, clearDialogModal, setDialogModalType, setDialogModalMessage}