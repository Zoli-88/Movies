function goBackToPreviousPage() {
    // history.back() will go back to the previously visited page
    // this way we don't have to manually add an exact page URL, for example index.html
    window.history.back();
}

function redirectUserToTheHomePage() {
    const redirectUrl = "/index.html";
    window.location.href = redirectUrl;
}

function reloadCurrentPage() {
    location.reload();
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

function checkIfMobileOrDesktop(callback, breakpointValue) {
    const breakpoint = window.matchMedia(`(min-width: ${breakpointValue}px)`);

    function updateIsDesktop(event) {
        const isDesktop = event.matches;
        callback(isDesktop);
    }
    breakpoint.addEventListener("change", updateIsDesktop);
    updateIsDesktop(breakpoint);
}

function currentYear() {
    const year = new Date().getFullYear();
    return year;
}

function toggleClasses(element, openClass, closeClass, isOpen) {
    if (isOpen) {
        element.classList.add(openClass);
        element.classList.remove(closeClass);
    } else {
        element.classList.add(closeClass);
        element.classList.remove(openClass);
    }
}

function intentionalDelay(callback) {
    const intentionalDelayInMs = 1000;
        setTimeout(() => {
        callback();
    }, intentionalDelayInMs)
}

function checkNumberOfChildren(parentEl) {
    const numberOfChildren = parentEl.childElementCount;
    return numberOfChildren;
}

export {
    goBackToPreviousPage, 
    isValidUrl, 
    checkIfMobileOrDesktop, 
    currentYear, 
    redirectUserToTheHomePage, 
    reloadCurrentPage, 
    toggleClasses, 
    intentionalDelay,
    checkNumberOfChildren
};