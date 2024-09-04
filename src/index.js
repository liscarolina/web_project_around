import "./pages/index.css";
import Section from "./components/section.js";
import Card from "./components/card.js";
import PopupWithImage from "./components/popupWithImage.js";
import PopupWithForm from "./components/popupWithForm.js";
import PopupWithConfirmation from "./components/popupWithConfirmation.js";
import UserInfo from "./components/userInfo.js";
import FormValidator from "./components/formValidator.js";
import Api from "./components/api.js";

import {
  cardsContainer,
  editPopup,
  addPopup,
  editButton,
  addButton,
  avatarPopup,
  nameSelector,
  jobSelector,
  formSelector,
  cardForm,
  avatar,
} from "./components/constants.js";

const api = new Api("https://around.nomoreparties.co/v1/web-es-cohort-15", {
  authorization: "260c146d-e463-4081-80f1-261d849484a2",
  "Content-Type": "application/json",
});
let currentUser = null;
const userInfo = new UserInfo(nameSelector, jobSelector);

api.getUserInfo().then((user) => {
  currentUser = user;
  userInfo.setUserInfo(user.name, user.about);
  avatar.src = user.avatar;
  api.getInitialCards().then((initialCards) => {
    const cardList = new Section(
      {
        data: initialCards,
        renderer: (item) => {
          const card = new Card(
            item.name,
            item.link,
            item.owner,
            item.likes,
            () => {
              popupImage.open(item.name, item.link);
            },
            (id, remove) => {
              popupWithConfirmation.open(() => {
                api.deleteCard(item._id).then(() => {
                  popupWithConfirmation.close();
                  card.handleCardRemoval();
                });
              });
            },
            (id) => {
              return api.addCardLike(item._id);
            },
            (id) => {
              return api.deleteCardLike(item._id);
            },
            currentUser
          );
          const cardTemplate = card.generateCard();
          document.querySelector(".elements__cards").append(cardTemplate);
        },
      },
      cardsContainer
    );

    cardList.renderItems();
  });
});

const popupWindow = document.querySelector("#popup_image");
const popupImage = new PopupWithImage(popupWindow);
popupImage.enableListeners();

const popupWithConfirmation = new PopupWithConfirmation(
  document.querySelector("#delete-popup")
);
popupWithConfirmation.enableListeners();
popupWithConfirmation.setEventListener();

const profilePopup = new PopupWithForm(editPopup, ({ name, about }) => {
  api.changeProfile(name, about).then((user) => {
    userInfo.setUserInfo(user.name, user.about);
  });
});
profilePopup.enableListeners();

editButton.addEventListener("click", () => {
  profilePopup.open();
  editPopup.querySelector(".popup__item_type_name").value =
    userInfo.getUserInfo().name;
  editPopup.querySelector(".popup__item_type_about").value =
    userInfo.getUserInfo().job;
});

const avatarProfilePopup = new PopupWithForm(avatarPopup, ({ link }) => {
  api.changeAvatar(link).then((user) => {
    avatar.src = user.avatar;
  });
});
avatarProfilePopup.enableListeners();

avatar.addEventListener("click", () => {
  avatarProfilePopup.open();
  avatarPopup.querySelector(".popup__item_type_about").value =
    currentUser.avatar;
});

const addCardPopup = new PopupWithForm(addPopup, ({ place, link }) => {
  addCardPopup.renderLoading(true);
  api.createCard(place, link).then((card) => {
    const newCard = new Card(
      place,
      link,
      currentUser,
      [],
      () => {
        popupImage.open(card.name, card.link);
      },
      (id, remove) => {
        popupWithConfirmation.open(() => {
          api.deleteCard(card._id).then(() => {
            popupWithConfirmation.close();
            newCard.handleCardRemoval();
          });
        });
      },
      (id) => {
        return api.addCardLike(card._id);
      },
      (id) => {
        return api.deleteCardLike(card._id);
      },
      currentUser
    );
    addCardPopup.renderLoading(false);
    const cardTemplate = newCard.generateCard();
    document.querySelector(".elements__cards").prepend(cardTemplate);
  });
});

addCardPopup.enableListeners();
addButton.addEventListener("click", () => {
  addCardPopup.open();
});

const formValidatorProfile = new FormValidator(formSelector);
formValidatorProfile.enableValidation();
const formValidatorCard = new FormValidator(cardForm);
formValidatorCard.enableValidation();
const formValidatorAvatar = new FormValidator(avatarPopup);
formValidatorAvatar.enableValidation();
