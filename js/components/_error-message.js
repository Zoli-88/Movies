function errorMessageComponent() {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const errorMessage = searchParams.get("errorMessage");

    return `
        <div class="error-message-component">
            <div class="img-wrapper">
                <img src="/Images/penguin.png">
            </div>
            <div class="error-description">
                <p class="center-text">Oops..looks like our engines ran out of steam for a moment. The following error occured: <span class="highlight">${errorMessage}.</span> It was automatically forwarded to our team to investigate.</p>
                <p class="center-text">In the meantime, you can stay and enjoy this cute penguin or click on the button to return to the homepage.</p>
                <button class="primary-btn">Ok</button>
            </div>
        </div>
    `
}

export {errorMessageComponent}