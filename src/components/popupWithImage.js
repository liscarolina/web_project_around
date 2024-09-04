import { Popup } from "./popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(place, link) {
    super.open();

    this._popup.querySelector(".popup__window-image").src = link;
    this._popup.querySelector(".popup__window-name").textContent = place;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("click", () => {
      this.close();
    });
  }
}
