function errorComponent(error, personalisedErrorMessage) {
  return `
    <div id="error" class="status-component padding-inline">
      <div class="error-message padding-inline">
        <div>
        <i class="fa-solid fa-circle-exclamation status-icon"></i>
        <span class="status-text">Error, ${error} ${personalisedErrorMessage}.</span>
        </div>
        <button id="error-btn" class="primary-btn">Ok</button>
      </div>
    </div>
  `
}

export {errorComponent};