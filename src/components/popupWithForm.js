import { Popup } from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(Popup, handleSubmitForm) {
    super(Popup);
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    const form = this._popup.querySelector(".popup__form");
    const formItems = Array.from(form.querySelectorAll(".popup__item"));
    const formValues = {};
    formItems.forEach((item) => {
      formValues[item.name] = item.value;
    });
    return formValues;
  }

  close() {
    super.close();
    const form = this._popup.querySelector(".popup__form");
    form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this._popup.querySelector(".popup__form");

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      const submitButton = this._popup.querySelector(
        ".popup__button_type_send"
      );
      submitButton.textContent = "Guardando...";
    } else {
      const submitButton = this._popup.querySelector(
        ".popup__button_type_send"
      );
      submitButton.textContent = "Guardar";
    }
  }
}
