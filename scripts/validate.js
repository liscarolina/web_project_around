function enableValidation() {
  let formSelectors = document.querySelectorAll(".popup__form");
  formSelectors.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
}

function setEventListeners(formSelector) {
  let formItems = Array.from(formSelector.querySelectorAll(".popup__item"));
  let submitButtonSelector = formSelector.querySelector(
    ".popup__button_type_send"
  );
  toggleButtonState(formItems, submitButtonSelector);
  formItems.forEach((formItem) => {
    formItem.addEventListener("input", (evt) => {
      evt.preventDefault();
      if (!formItem.validity.valid) {
        showInputError(formSelector, formItem);
      } else {
        hideInputError(formSelector, formItem);
      }
      toggleButtonState(formItems, submitButtonSelector);
    });
  });
}

function showInputError(formSelector, formItem) {
  let formError = formSelector.querySelector(`.popup__error-${formItem.name}`);
  formError.textContent = formItem.validationMessage;
  formItem.classList.add("popup__item_invalid");
}

function hideInputError(formSelector, formItem) {
  let formError = formSelector.querySelector(`.popup__error-${formItem.name}`);
  formError.textContent = "";
  formItem.classList.remove("popup__item_invalid");
}

function toggleButtonState(formItems, submitButtonSelector) {
  if (hasInvalidInput(formItems)) {
    submitButtonSelector.classList.add("popup__button_type_send-inactive");
  } else {
    submitButtonSelector.classList.remove("popup__button_type_send-inactive");
  }
}

function hasInvalidInput(formItems) {
  return formItems.some((formItem) => {
    return !formItem.validity.valid;
  });
}

enableValidation();
