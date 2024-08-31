import { Popup } from "./popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._popup = popup;
  }

  open(handleDeleteCard) {
    super.open();
    this._handleDeleteCard = handleDeleteCard;
  }

  setEventListener() {
    const deleteButton = this._popup.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }
}
