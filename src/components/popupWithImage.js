import { Popup } from "./popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(name, link) {
    super.open();

    this._popup.querySelector(".popup__window-image").src = link;
    this._popup.querySelector(".popup__window-name").textContent = name;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("click", () => {
      this.close();
    });
  }
}
