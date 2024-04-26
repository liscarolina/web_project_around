let editButton = document.querySelector(".profile__button_type_edit");
let popup = document.querySelector(".popup");

function showPopup() {
  popup.classList.add("popup_opened");
}
editButton.addEventListener("click", showPopup);

let closeButton = document.querySelector(".popup__button_type_close");

function closePopup() {
  popup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", closePopup);

let submitButton = document.querySelector(".popup__button_type_send");
let formElement = document.querySelector(".popup__container");

function changeProfile(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__item_type_name");
  let aboutInput = document.querySelector(".popup__item_type_about");
  let profileName = document.querySelector(".profile__name");
  let profileAbout = document.querySelector(".profile__description");
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

formElement.addEventListener("submit", changeProfile);
submitButton.addEventListener("click", closePopup);
