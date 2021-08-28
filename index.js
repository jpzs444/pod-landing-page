const emailInput = document.getElementById("email-input");
const requestButton = document.getElementById("request-button");
const ctaErrorMessage = document.getElementById("cta-error-msg");

const regExValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

window.onload = function() {
    emailInput.value = "";
}

requestButton.addEventListener("click", validateEmail);

emailInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        validateEmail();
    }
});

function validateEmail() {
    if (regExValidEmail.test(emailInput.value)) {
        ctaErrorMessage.textContent = "";
    } else {
        ctaErrorMessage.textContent = "Oops! Please check your email";
    }
}