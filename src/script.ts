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

emailSubscriptionSubmit?.addEventListener("click", () => {
  if (
    emailSubscriptionInput?.value === "" ||
    emailSubscriptionInput?.value.includes("@") === false
  ) {
    emailSubscriptionInput?.classList.add("validation-complete");
    validationCircle?.classList.add("validation-complete");
    validationMessage?.classList.add("validation-complete");
  }

  if (
    emailSubscriptionInput?.value !== "" &&
    emailSubscriptionInput?.value.includes("@") === true
  ) {
    emailSubscriptionInput?.classList.remove("validation-complete");
    validationCircle?.classList.remove("validation-complete");
    validationMessage?.classList.remove("validation-complete");
  }
});
