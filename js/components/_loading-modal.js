function loadingModalComponent() {
  return `
    <div class="status-component loading-modal">
      <div>
        <i class="fa-solid fa-spinner fa-spin status-icon"></i>
        <br>
        <span class="status-text">Loading, please wait...</span>
      </div>
    </div>
  `
}

export {loadingModalComponent}