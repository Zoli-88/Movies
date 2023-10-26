function dialogModalComponent(question, modalButtonType) {
  let dataAttr = "";
  
  if (modalButtonType === "generic-modal") {
    dataAttr = "data-generic-dialog-modal-btn";
  }

  if (modalButtonType === "favorites-modal") {
   dataAttr = "data-favorites-dialog-modal-btn";
  }

  return `
  <div class="status-component padding-inline" data-dialog-modal>
    <div class="dialog-message padding-inline">
      <div>
        <i class="fa-solid fa-circle-question"></i>
        <span class="status-text">${question}</span>
      </div>
      <div>
        <button class="primary-btn" ${dataAttr}="confirm">Ok</button>
        <button class="primary-btn" ${dataAttr}="cancel">Cancel</button>
      </div>
    </div>
  </div>
  `
}

export {dialogModalComponent}