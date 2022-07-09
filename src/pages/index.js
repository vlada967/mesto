import './index.css';
import {initialCards, config, profileConfig} from '../components/data.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const popupName = document.querySelector('.popup__text_type_name');
const popupJob = document.querySelector('.popup__text_type_job');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formList = Array.from(document.querySelectorAll('.popup__form'));
const formValidators = {};

function renderCard(card) {
    const сardElement = new Card(card, '.elements__template', handleCardClick);
    return сardElement.createCard();
}

function handleSubmitEditProfile(data) {
    user.setUserInfo(data.popup__name, data.popup__job);
}

function handleSubmitAddForm(data) {
    cardsContainer.addItem({
        name: data.popup__title, 
        link: data.popup__link
    });
}

function handleCardClick(link, name) {  
    imagePopup.open(link, name);
}

const user = new UserInfo(profileConfig);
user.setUserInfo('Жак-Ив Кусто', 'Исследователь океана');

const cardsContainer = new Section({
    items: initialCards,
    renderer: renderCard
}, '.elements');
cardsContainer.renderAll();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddForm);
addCardPopup.setEventListeners();
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitEditProfile);
editProfilePopup.setEventListeners();

formList.forEach((formElement) => {
    const formValidatorElement = new FormValidator(config, formElement);

    const formName = formElement.getAttribute('name');
    formValidators[formName] = formValidatorElement;

    formValidatorElement.enableValidation(formList);
});

buttonEdit.addEventListener('click', () => {
    formValidators['edit-form'].resetValidation();

    const userInfo = user.getUserInfo();
    popupName.value = userInfo.name.textContent;
    popupJob.value = userInfo.info.textContent;

    editProfilePopup.open()
});

buttonAdd.addEventListener('click', () => {
    formValidators['add-form'].resetValidation();
    addCardPopup.open()
});