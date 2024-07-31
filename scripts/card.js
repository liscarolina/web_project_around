// let editButton = document.querySelector("#edit-button");
// let editPopup = document.querySelector("#profile");
// let addButton = document.querySelector("#add-button");
// let addPopup = document.querySelector("#add-popup");
// let popup = document.querySelector(".popup");
// let closeButton = document.querySelector(".popup__button_type_close");
// let closeaddButton = document.querySelector("#close-add-popup");
// let formElement = document.querySelector(".popup__container");
// let formSelector = document.querySelector(".popup__form");
// let formItem = formSelector.querySelector(".popup__item");
// let cardForm = document.querySelector("#add-form");

// function showPopup() {
//   editPopup.classList.add("popup_opened");
// }

// function showAddPopup() {
//   addPopup.classList.add("popup_opened");
// }

// function closePopup() {
//   popup.classList.remove("popup_opened");
// }

// function closeAddPopup() {
//   addPopup.classList.remove("popup_opened");
// }

// function keyHandler(evt) {
//   if (evt.key === "Escape") {
//     closePopup();
//     closeAddPopup();
//   }
// }
// editButton.addEventListener("click", showPopup);
// addButton.addEventListener("click", showAddPopup);
// closeButton.addEventListener("click", closePopup);
// closeaddButton.addEventListener("click", closeAddPopup);
// document.addEventListener("keydown", keyHandler);

// const initialCards = [
//   {
//     name: "Valle de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
//   },
//   {
//     name: "Montañas Calvas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
//   },
//   {
//     name: "Parque Nacional de la Vanoise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//   },
// ];

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

// initialCards.forEach((item) => {
//   const card = new Card(item.name, item.link);
//   const cardTemplate = card.generateCard();
//   document.querySelector(".elements__cards").append(cardTemplate);
// });

// function createnewcard(evt) {
//   evt.preventDefault();
//   let placeInput = document.querySelector("#place-input");
//   let imageInput = document.querySelector("#link-input");
//   const card = new Card(placeInput.value, imageInput.value);
//   const cardTemplate = card.generateCard();
//   document.querySelector(".elements__cards").prepend(cardTemplate);
// }

// cardForm.addEventListener("submit", (evt) => {
//   createnewcard(evt);
// });

// function changeProfile(evt) {
//   evt.preventDefault();

//   let nameInput = document.querySelector(".popup__item_type_name");
//   let aboutInput = document.querySelector(".popup__item_type_about");
//   let profileName = document.querySelector(".profile__name");
//   let profileAbout = document.querySelector(".profile__description");

//   if (nameInput.value && aboutInput.value) {
//     profileName.textContent = `${nameInput.value}`;
//     profileAbout.textContent = `${aboutInput.value}`;
//     closePopup();
//     formSelector.reset();
//   }
// }

// formSelector.addEventListener("submit", changeProfile);
// let submitButtonSelector = formElement.querySelector(
//   ".popup__button_type_send"
// );
