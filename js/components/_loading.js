function loadingComponent() {
  return `
    <div id="loading" class="status-component">
      <div>
        <i class="fa-solid fa-spinner fa-spin status-icon"></i>
        <br>
        <span class="status-text">Loading, please wait...</span>
      </div>
    </div>
  `
}

export {loadingComponent};