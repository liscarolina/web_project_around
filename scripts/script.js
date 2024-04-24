let formElement = document.querySelector(".popup__container");
function handleProfileSubmitForm(evt) {
  evt.preventDefault();
}

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

let profileName = document.querySelector(".profile__info");
let submitButton = document.querySelector(".popup__button_type_send");

function changeProfile() {
  let nameInput = document.querySelector(".popup__item_type_name");
  let aboutInput = document.querySelector(".popup__item_type_about");
  profileName.innerHTML = `<h1 class="profile__name">${nameInput.value}</h1>
    <h2 class="profile__description">${aboutInput.value}</h2>`;
}

submitButton.addEventListener("click", changeProfile);
