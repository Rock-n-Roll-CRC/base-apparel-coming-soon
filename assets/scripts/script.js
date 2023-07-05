"use strict";
// VARIABLES
const emailSubscriptionSubmit = document.querySelector(".email-subscription-submit");
const emailSubscriptionInput = document.querySelector(".email-subscription-input");
const validationCircle = document.querySelector(".validation-message-circle");
const validationMessage = document.querySelector(".validation-message");
// FUNCTIONS
const emailValidated = function () {
    emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.classList.add("validation-complete");
    validationCircle === null || validationCircle === void 0 ? void 0 : validationCircle.classList.add("validation-complete");
    validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.classList.add("validation-complete");
};
const emailInvalidated = function () {
    emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.classList.remove("validation-complete");
    validationCircle === null || validationCircle === void 0 ? void 0 : validationCircle.classList.remove("validation-complete");
    validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.classList.remove("validation-complete");
};
// EMAIL PARSING
emailSubscriptionSubmit === null || emailSubscriptionSubmit === void 0 ? void 0 : emailSubscriptionSubmit.addEventListener("click", () => {
    if ((emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.includes("@")) === false ||
        (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.indexOf("@")) === 0 ||
        (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.indexOf("@")) !==
            (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.lastIndexOf("@")) ||
        (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.includes(".")) === false) {
        emailValidated();
    }
    else {
        emailInvalidated();
    }
});
