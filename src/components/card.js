export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
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
        this._handleCardClick();
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
