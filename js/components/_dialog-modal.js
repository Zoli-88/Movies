function dialogModalComponent() {
  return `
  <div class="status-component padding-inline" data-dialog-modal>
    <div class="dialog-message padding-inline">
      <div>
        <i class="fa-solid fa-circle-question"></i>
        <span class="status-text">Are you sure you want to sign out?</span>
      </div>
      <div>
        <button class="primary-btn" data-dialog-modal-btn="confirm">Ok</button>
        <button class="primary-btn" data-dialog-modal-btn="cancel">Cancel</button>
      </div>
    </div>
  </div>
  `
}

export {dialogModalComponent}