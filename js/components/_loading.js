function loadingComponent(message = "Loading, please wait...") {
    return `
    <div id="loading" class="status-component">
        <div>
            <i class="fa-solid fa-spinner fa-spin"></i>
            <br>
            <span class="status-text">${message}</span>
        </div>
    </div>
    `
}

export { loadingComponent };