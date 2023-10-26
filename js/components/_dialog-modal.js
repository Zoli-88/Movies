function dialogModalComponent(questionOrConfirmationMessage, modalType) {
  let dataAttr = "";
  let hideCancelButton = false;
  
  if (modalType === "generic-modal") {
    dataAttr = "data-generic-dialog-modal-btn";
  }

  if (modalType === "favorites-modal") {
   dataAttr = "data-favorites-dialog-modal-btn";
  }

  if (modalType === "confirmation-modal") {
    dataAttr = "data-favorites-dialog-confirmation-message-modal-btn";
    hideCancelButton = true;
  }

  return `
  <div class="status-component padding-inline" data-dialog-modal>
    <div class="dialog-message padding-inline">
      <div>
        <i class="fa-solid fa-circle-question"></i>
        <span class="status-text">${questionOrConfirmationMessage}</span>
      </div>
      <div>
        <button class="primary-btn" ${dataAttr}="confirm">Ok</button>
        ${hideCancelButton ? `` : `<button class="primary-btn" ${dataAttr}="cancel">Cancel</button>`}
      </div>
    </div>
  </div>
  `
}

export {dialogModalComponent}