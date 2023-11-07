import { dialogModalComponent } from "../../components/_dialog-modal.js";

function showDialogModal(questionOrConfirmationMessage, modalType) {
    const $main = document.querySelector("main");
    $main.insertAdjacentHTML("beforeend", dialogModalComponent(questionOrConfirmationMessage, modalType));
}

function hideDialogModal(el) {
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
    showDialogModal, 
    hideDialogModal, 
    setDialogModalType, 
    setDialogModalMessage, 
    setConfirmationModalStatus, 
    getConfirmationModalStatus,
}