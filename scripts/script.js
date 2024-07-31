import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";
import {
  showAddPopup,
  showPopup,
  closePopup,
  closeAddPopup,
  keyHandler,
  editButton,
  addButton,
  closeButton,
  closeaddButton,
} from "./utils.js";

let formSelector = document.querySelector(".popup__form");
let cardForm = document.querySelector("#add-form");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardTemplate = card.generateCard();
  document.querySelector(".elements__cards").append(cardTemplate);
});

function createnewcard(evt) {
  evt.preventDefault();
  let placeInput = document.querySelector("#place-input");
  let imageInput = document.querySelector("#link-input");
  const card = new Card(placeInput.value, imageInput.value);
  const cardTemplate = card.generateCard();
  document.querySelector(".elements__cards").prepend(cardTemplate);
}

cardForm.addEventListener("submit", (evt) => {
  createnewcard(evt);
});

function changeProfile(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector(".popup__item_type_name");
  let aboutInput = document.querySelector(".popup__item_type_about");
  let profileName = document.querySelector(".profile__name");
  let profileAbout = document.querySelector(".profile__description");

  if (nameInput.value && aboutInput.value) {
    profileName.textContent = `${nameInput.value}`;
    profileAbout.textContent = `${aboutInput.value}`;
    closePopup();
    formSelector.reset();
  }
}

formSelector.addEventListener("submit", changeProfile);
editButton.addEventListener("click", showPopup);
addButton.addEventListener("click", showAddPopup);
closeButton.addEventListener("click", closePopup);
closeaddButton.addEventListener("click", closeAddPopup);
document.addEventListener("keydown", keyHandler);

const formValidatorProfile = new FormValidator(formSelector);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(cardForm);
formValidatorCard.enableValidation();
