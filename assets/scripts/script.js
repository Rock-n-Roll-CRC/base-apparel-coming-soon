"use strict";
const emailSubscriptionSubmit = document.querySelector(".email-subscription-submit");
const emailSubscriptionInput = document.querySelector(".email-subscription-input");
const validationCircle = document.querySelector(".validation-message-circle");
const validationMessage = document.querySelector(".validation-message");
emailSubscriptionSubmit === null || emailSubscriptionSubmit === void 0 ? void 0 : emailSubscriptionSubmit.addEventListener("click", () => {
    if ((emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value) === "" ||
        (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.includes("@")) === false) {
        emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.classList.add("validation-complete");
        validationCircle === null || validationCircle === void 0 ? void 0 : validationCircle.classList.add("validation-complete");
        validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.classList.add("validation-complete");
    }
    if ((emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value) !== "" &&
        (emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.value.includes("@")) === true) {
        emailSubscriptionInput === null || emailSubscriptionInput === void 0 ? void 0 : emailSubscriptionInput.classList.remove("validation-complete");
        validationCircle === null || validationCircle === void 0 ? void 0 : validationCircle.classList.remove("validation-complete");
        validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.classList.remove("validation-complete");
    }
});
