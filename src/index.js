import "./pages/index.css";
import Section from "./components/section.js";
import Card from "./components/card.js";
import PopupWithImage from "./components/popupWithImage.js";
import PopupWithForm from "./components/popupWithForm.js";
import UserInfo from "./components/userInfo.js";
import FormValidator from "./components/formValidator.js";

import {
  initialCards,
  cardsContainer,
  editPopup,
  addPopup,
  editButton,
  addButton,
  nameSelector,
  jobSelector,
  formSelector,
  cardForm,
} from "./components/constants.js";

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, () => {
        popupImage.open(item.name, item.link);
      });
      const cardTemplate = card.generateCard();
      document.querySelector(".elements__cards").append(cardTemplate);
    },
  },
  cardsContainer
);

cardList.renderItems();

const popupWindow = document.querySelector("#popup_image");
const popupImage = new PopupWithImage(popupWindow);
popupImage.enableListeners();

const userInfo = new UserInfo(nameSelector, jobSelector);
const profilePopup = new PopupWithForm(editPopup, ({ name, about }) => {
  userInfo.setUserInfo(name, about);
});
profilePopup.enableListeners();
editButton.addEventListener("click", () => {
  profilePopup.open();

  editPopup.querySelector(".popup__item_type_name").value =
    userInfo.getUserInfo().name;
  editPopup.querySelector(".popup__item_type_about").value =
    userInfo.getUserInfo().job;
});

const addCardPopup = new PopupWithForm(addPopup, ({ link, place }) => {
  const card = new Card(place, link, () => {
    popupImage.open(place, link);
  });
  const cardTemplate = card.generateCard();
  document.querySelector(".elements__cards").prepend(cardTemplate);
});
addCardPopup.enableListeners();
addButton.addEventListener("click", () => {
  addCardPopup.open();
});

const formValidatorProfile = new FormValidator(formSelector);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(cardForm);
formValidatorCard.enableValidation();
