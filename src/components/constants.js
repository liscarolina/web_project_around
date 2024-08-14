export {
  editButton,
  editPopup,
  addButton,
  addPopup,
  formSelector,
  cardForm,
  cardsContainer,
  initialCards,
  nameSelector,
  jobSelector,
};

let editButton = document.querySelector("#edit-button");
let editPopup = document.querySelector("#profile");
let addButton = document.querySelector("#add-button");
let addPopup = document.querySelector("#add-popup");
let formSelector = document.querySelector(".popup__form");
let cardForm = document.querySelector("#add-form");
let cardsContainer = ".elements";
const nameSelector = ".profile__name";
const jobSelector = ".profile__description";

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
