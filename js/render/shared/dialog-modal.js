import { dialogModalComponent } from "../../components/_dialog-modal.js";

function renderDialogModal(questionOrConfirmationMessage, modalType) {
    const $main = document.querySelector("main");
    $main.insertAdjacentHTML("beforeend", dialogModalComponent(questionOrConfirmationMessage, modalType));
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

function setConfirmationModalStatus(status) {
    localStorage.setItem("showConfirmationDialogModal", status);
}

function getConfirmationModalStatus() {
    const shouldShowConfirmationModal =  localStorage.getItem("showConfirmationDialogModal");
    return shouldShowConfirmationModal === "true";
}

export {
    renderDialogModal, 
    clearDialogModal, 
    setDialogModalType, 
    setDialogModalMessage, 
    setConfirmationModalStatus, 
    getConfirmationModalStatus,
}