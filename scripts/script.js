let editButton = document.querySelector("#edit-button");
let editPopup = document.querySelector("#profile");

function showPopup() {
  editPopup.classList.add("popup_opened");
}
editButton.addEventListener("click", showPopup);

let addButton = document.querySelector("#add-button");
let addPopup = document.querySelector("#add-popup");

function showAddPopup() {
  addPopup.classList.add("popup_opened");
}

addButton.addEventListener("click", showAddPopup);

let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__button_type_close");
function closePopup() {
  popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closePopup);

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

let template = document.querySelector(".elements__template");
let cardArea = document.querySelector(".elements__cards");

function createCard(name, link) {
  let card = template.cloneNode(true).content.querySelector(".elements__card");
  let cardImage = card.querySelector(".elements__image");
  let cardText = card.querySelector(".elements__text");
  let cardTrashButton = card.querySelector(".elements__button_type_trash");
  let cardLikeButton = card.querySelector(".elements__button_type_like");
  let cardWindow = card.querySelector(".elements__window");
  let buttonCardImage = card.querySelector(".elements__image-button");
  let cardWindowImage = card.querySelector(".elements__window-image");
  let cardWindowName = card.querySelector(".elements__window-name");
  let windowCloseButton = card.querySelector("#window-close-button");
  cardImage.src = link;
  cardText.textContent = name;
  cardImage.alt = name;
  cardWindowImage.src = link;
  cardWindowImage.alt = name;
  cardWindowName.textContent = name;
  cardTrashButton.addEventListener("click", function () {
    card.remove();
  });
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.add("elements__button_type_like-active");
  });

  buttonCardImage.addEventListener("click", function () {
    cardWindow.classList.toggle("elements__window_opened");
  });

  windowCloseButton.addEventListener("click", function () {
    cardWindow.classList.remove("elements__window_opened");
  });

  cardWindow.addEventListener("click", function () {
    cardWindow.classList.remove("elements__window_opened");
  });

  buttonCardImage.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      cardWindow.classList.remove("elements__window_opened");
    }
  });
  cardWindow.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      cardWindow.classList.remove("elements__window_opened");
    }
  });

  return card;
}

initialCards.forEach(function (element) {
  let firstcards = createCard(element.name, element.link);
  cardArea.append(firstcards);
});

let formElement = document.querySelector(".popup__container");
let formSelector = document.querySelector(".popup__form");
let formItem = formSelector.querySelector(".popup__item");

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
let submitButtonSelector = formElement.querySelector(
  ".popup__button_type_send"
);

let cardForm = document.querySelector("#add-form");
let addCardButton = document.querySelector("#add-card-button");

addCardButton.addEventListener("click", function () {
  cardForm.classList.add("popup_opened");
});

cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let placeInput = document.querySelector("#place-input");
  let imageInput = document.querySelector("#link-input");
  let newCard = createCard(placeInput.value, imageInput.value);
  cardArea.prepend(newCard);
});

function closeAddPopup() {
  addPopup.classList.remove("popup_opened");
}
addCardButton.addEventListener("click", closeAddPopup);

let closeaddButton = document.querySelector("#close-add-popup");
closeaddButton.addEventListener("click", closeAddPopup);

function keyHandler(evt) {
  if (evt.key === "Escape") {
    closePopup();
    closeAddPopup();
  }
}
editButton.addEventListener("keydown", keyHandler);
addButton.addEventListener("keydown", keyHandler);
addPopup.addEventListener("keydown", keyHandler);
formSelector.addEventListener("keydown", keyHandler);
