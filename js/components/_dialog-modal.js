function dialogModalComponent(questionOrConfirmationMessage, modalType) {
    let dataAttr = "";
    let hideCancelButton = false;
    let iconType = "";

    if (modalType === "sign-out-modal") {
        dataAttr = "data-sign-out-dialog-modal-btn";
        iconType = "question";
    }

    if (modalType === "watchlist-modal") {
        dataAttr = "data-watchlist-dialog-modal-btn";
        iconType = "question";
    }

    if (modalType === "confirmation-modal") {
        dataAttr = "data-dialog-confirmation-message-modal-btn";
        hideCancelButton = true;
        iconType = "info";
    }

    return `
        <div class="status-component padding-inline" data-dialog-modal>
            <div class="dialog-message padding-inline">
                <div>
                    <i class="fa-solid fa-circle-${iconType}"></i>
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