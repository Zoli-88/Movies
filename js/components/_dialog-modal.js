function dialogModalComponent(questionOrConfirmationMessage, modalType) {
  let dataAttr = "";
  let hideCancelButton = false;
  let icon = "";
  
  if (modalType === "generic-modal") {
    dataAttr = "data-generic-dialog-modal-btn";
    icon = "question";
  }

  if (modalType === "favorites-modal") {
   dataAttr = "data-favorites-dialog-modal-btn";
   icon = "question";
  }

  if (modalType === "confirmation-modal") {
    dataAttr = "data-favorites-dialog-confirmation-message-modal-btn";
    hideCancelButton = true;
    icon = "info";
  }

  return `
  <div class="status-component padding-inline" data-dialog-modal>
    <div class="dialog-message padding-inline">
      <div>
        <i class="fa-solid fa-circle-${icon}"></i>
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