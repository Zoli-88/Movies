function errorComponent(error) {
  return `
    <div id="error" class="status-component">
      <i class="fa-solid fa-circle-exclamation status-icon"></i>
      <br>
      <span class="status-text">Error, ${error}</span>
    </div>
  `
}

export {errorComponent};