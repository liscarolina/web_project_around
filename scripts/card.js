export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(".elements__template")
      .content.querySelector(".elements__card")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".elements__text").textContent = this._name;
    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__window-image").src = this._link;
    this._element.querySelector(".elements__window-name").textContent =
      this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__button_type_like")
      .addEventListener("click", () => {
        this._handleLikeButtonClick();
      });

    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });

    this._element
      .querySelector("#window-close-button")
      .addEventListener("click", () => {
        this._handleWindowCloseClick();
      });

    this._element
      .querySelector(".elements__window")
      .addEventListener("click", () => {
        this._handleWindowCloseClick();
      });

    this._element
      .querySelector(".elements__button_type_trash")
      .addEventListener("click", () => {
        this._handleCardRemoval();
      });

    document.addEventListener("keydown", (evt) => {
      this._handleWindowEsc(evt);
    });
  }

  _handleLikeButtonClick() {
    this._element
      .querySelector(".elements__button_type_like")
      .classList.toggle("elements__button_type_like-active");
  }

  _handleImageClick() {
    this._element
      .querySelector(".elements__window")
      .classList.add("elements__window_opened");
  }

  _handleWindowCloseClick() {
    this._element
      .querySelector(".elements__window")
      .classList.remove("elements__window_opened");
  }

  _handleCardRemoval() {
    this._element.remove();
  }

  _handleWindowEsc(evt) {
    if (evt.key === "Escape") {
      this._element
        .querySelector(".elements__window")
        .classList.remove("elements__window_opened");
    }
  }
}
