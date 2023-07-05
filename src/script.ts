// VARIABLES
const emailSubscriptionSubmit: HTMLButtonElement | null =
  document.querySelector(".email-subscription-submit");

const emailSubscriptionInput: HTMLInputElement | null = document.querySelector(
  ".email-subscription-input"
);
const validationCircle: HTMLDivElement | null = document.querySelector(
  ".validation-message-circle"
);
const validationMessage: HTMLParagraphElement | null = document.querySelector(
  ".validation-message"
);

// FUNCTIONS
const emailValidated = function (): void {
  emailSubscriptionInput?.classList.add("validation-complete");
  validationCircle?.classList.add("validation-complete");
  validationMessage?.classList.add("validation-complete");
};

const emailInvalidated = function (): void {
  emailSubscriptionInput?.classList.remove("validation-complete");
  validationCircle?.classList.remove("validation-complete");
  validationMessage?.classList.remove("validation-complete");
};

// EMAIL PARSING
emailSubscriptionSubmit?.addEventListener("click", () => {
  if (
    emailSubscriptionInput?.value.includes("@") === false ||
    emailSubscriptionInput?.value.indexOf("@") === 0 ||
    emailSubscriptionInput?.value.indexOf("@") !==
      emailSubscriptionInput?.value.lastIndexOf("@") ||
    emailSubscriptionInput?.value.includes(".") === false
  ) {
    emailValidated();
  } else {
    emailInvalidated();
  }
});
