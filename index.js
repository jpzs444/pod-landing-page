const emailInput = document.getElementById("email-input");
const requestButton = document.getElementById("request-button");
const ctaErrorMessage = document.getElementById("cta-error-msg");

// regular expression to validate an email
const regExValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// emailInput value becomes empty when webpage is refreshed
window.onload = function() {
    emailInput.value = "";
}

// trigger validateEmail function when enter key (13) is pressed in emailInput
emailInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        validateEmail();
    }
});

requestButton.addEventListener("click", validateEmail);

function validateEmail() {
    if (regExValidEmail.test(emailInput.value)) {
        ctaErrorMessage.textContent = "";
    } else {
        ctaErrorMessage.textContent = "Oops! Please check your email";
    }
}