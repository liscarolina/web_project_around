export default class Card {
  constructor(
    name,
    link,
    owner,
    likes,
    handleCardClick,
    handleDeleteCard,
    handleAddCardLike,
    handleDeleteCardLike,
    user
  ) {
    this._name = name;
    this._link = link;
    this._owner = owner;
    this._likes = likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleAddCardLike = handleAddCardLike;
    this._handleDeleteCardLike = handleDeleteCardLike;
    this._user = user;
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

    const trashButton = this._element.querySelector(
      ".elements__button_type_trash"
    );

    const likeButton = this._element.querySelector(
      ".elements__button_type_like"
    );

    if (this._user._id !== this._owner._id) {
      trashButton.remove();
    }

    if (this._likes.some((like) => like._id === this._user._id)) {
      likeButton.classList.add("elements__button_type_like-active");
    }

    const counter = this._element.querySelector(".elements__counter");
    counter.textContent = this._likes.length;

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
        this._handleDeleteCard(this._element._id, () => this._element.remove);
      });
  }

  _handleLikeButtonClick() {
    const counter = this._element.querySelector(".elements__counter");
    if (this._likes.some((like) => like._id === this._user._id)) {
      this._handleDeleteCardLike(this._id).then((card) => {
        this._likes = card.likes;
        this._element
          .querySelector(".elements__button_type_like")
          .classList.remove("elements__button_type_like-active");
        counter.textContent = this._likes.length;
      });
    } else {
      this._handleAddCardLike(this._id).then((card) => {
        this._likes = card.likes;
        this._element
          .querySelector(".elements__button_type_like")
          .classList.add("elements__button_type_like-active");
        counter.textContent = this._likes.length;
      });
    }
  }

  handleCardRemoval() {
    this._element.remove();
  }
}
