export {
  showAddPopup,
  showPopup,
  closePopup,
  closeAddPopup,
  keyHandler,
  editButton,
  addButton,
  closeButton,
  closeaddButton,
};

let editButton = document.querySelector("#edit-button");
let editPopup = document.querySelector("#profile");
let addButton = document.querySelector("#add-button");
let addPopup = document.querySelector("#add-popup");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__button_type_close");
let closeaddButton = document.querySelector("#close-add-popup");

function showPopup() {
  editPopup.classList.add("popup_opened");
}

function showAddPopup() {
  addPopup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function closeAddPopup() {
  addPopup.classList.remove("popup_opened");
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    closePopup();
    closeAddPopup();
  }
}
