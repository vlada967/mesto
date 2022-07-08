import '../pages/index.css';
import {initialCards, config, profileConfig} from './data.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

const popupName = document.querySelector('.popup__text_type_name');
const popupJob = document.querySelector('.popup__text_type_job');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCreate = document.querySelector('.popup__create-button');
const formList = Array.from(document.querySelectorAll('.popup__form'));

function renderCard(card) {
    const сardElement = new Card(card, '.elements__template', handleCardClick);
    return сardElement.createCard();
}

function handleSubmitEditProfile(evt) {
    evt.preventDefault();

    const name = evt.target.popup__name.value;
    const job = evt.target.popup__job.value;

    user.setUserInfo(name, job);
    editProfilePopup.close();
}

function handleSubmitAddForm(evt) {
    evt.preventDefault();

    cardsContainer.addItem({
        name: evt.target.popup__title.value, 
        link: evt.target.popup__link.value
    });

    addCardPopup.close();
    makeAddButtonDisabled();
    evt.target.reset();
}

function handleCardClick(link, name) {
    const imagePopup = new PopupWithImage('.popup_type_image');
    imagePopup.setEventListeners();
    imagePopup.open(link, name);
}

function makeAddButtonDisabled() {
    buttonCreate.classList.add('popup__button-disabled');
    buttonCreate.setAttribute("disabled", "disabled");
}

const user = new UserInfo(profileConfig);
user.setUserInfo('Жак-Ив Кусто', 'Исследователь океана');

const cardsContainer = new Section({
    items: initialCards,
    renderer: renderCard
}, '.elements');
cardsContainer.renderAll();

const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddForm);
addCardPopup.setEventListeners();
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitEditProfile);
editProfilePopup.setEventListeners();

formList.forEach((formElement) => {
    const formValidatorElement = new FormValidator(config, formElement);
    formValidatorElement.enableValidation(formList);
});

buttonEdit.addEventListener('click', () => {
    const userInfo = user.getUserInfo();
    popupName.value = userInfo.name.textContent;
    popupJob.value = userInfo.info.textContent;
    editProfilePopup.open()
});
buttonAdd.addEventListener('click', () => addCardPopup.open());