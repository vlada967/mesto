import './index.css';
import {config, profileConfig} from '../utils/data.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

const popupName = document.querySelector('.popup__text_type_name');
const popupJob = document.querySelector('.popup__text_type_job');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const avatar = document.querySelector('.profile__avatar');
const formList = Array.from(document.querySelectorAll('.popup__form'));
const formValidators = {};
let userId;
let cardId;
let cardElement;

function renderCard(card) {
    const сardElement = new Card(card, userId, '.elements__template', handleCardClick, handleDeleteClick, handleLikeCard);
    return сardElement.createCard();
}

function handleSubmitEditProfile(data, changeButtonCaption) {
    changeButtonCaption(true);
    api.editProfile(data.popup__name, data.popup__job)
    .then((res) => {
        user.setUserInfo(res.name, res.about, res._id);
        editProfilePopup.close();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        changeButtonCaption(false);
    })
}

function handleSubmitEditAvatar(data, changeButtonCaption) {
    changeButtonCaption(true);
    api.editAvatar(data.popup__link)
    .then((res) => {
        user.setAvatar(res.avatar);
        editAvatarPopup.close();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        changeButtonCaption(false);
    })
}

function handleSubmitAddForm(data, changeButtonCaption) {
    changeButtonCaption(true);
    api.addCard(data.popup__title, data.popup__link)
    .then((res) => {
        cardsContainer.addItem(res);
        addCardPopup.close();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        changeButtonCaption(false);
    })
}

function handleDeleteClick(card, id) {
    cardElement = card;
    cardId = id;
    confirmDeletePopup.open();
}

function deleteCard() {
    api.deleteCard(cardId)
    .then(() => {
        cardElement.remove();
        confirmDeletePopup.close();
    })
    .catch((err) => {
        console.log(err);
    });
}

function handleLikeCard(id, isLiked, setLikes) {
    api.toggleLike(id, isLiked)
    .then((res) => {
        setLikes(res.likes);
    })
    .catch((err) => {
        console.log(err);
    });
}

function handleCardClick(link, name) {  
    imagePopup.open(link, name);
}

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_type_add-card', handleSubmitAddForm);
addCardPopup.setEventListeners();
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleSubmitEditProfile);
editProfilePopup.setEventListeners();
const confirmDeletePopup = new PopupWithConfirmation('.popup_type_confirm', deleteCard);
confirmDeletePopup.setEventListeners();
const editAvatarPopup = new PopupWithForm('.popup_type_edit-avatar', handleSubmitEditAvatar);
editAvatarPopup.setEventListeners();

formList.forEach((formElement) => {
    const formValidatorElement = new FormValidator(config, formElement);

    const formName = formElement.getAttribute('name');
    formValidators[formName] = formValidatorElement;

    formValidatorElement.enableValidation();
});

const user = new UserInfo(profileConfig);

const cardsContainer = new Section({
    items: [],
    renderer: renderCard
}, '.elements');

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45/',
    headers: {
      authorization: '9488e9f7-85b0-4db2-829a-31c62e0974e3',
      'Content-Type': 'application/json'
    }
});

Promise.all([api.getProfileInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userId = userData._id;
        user.setAvatar(userData.avatar);
        user.setUserInfo(userData.name, userData.about, userData._id);

        cardsContainer.renderAll(cards);
    })
    .catch((err) => {
        console.log(err);
    });


buttonEdit.addEventListener('click', () => {
    formValidators['edit-form'].resetValidation();

    const userInfo = user.getUserInfo();
    popupName.value = userInfo.name.textContent;
    popupJob.value = userInfo.info.textContent;

    editProfilePopup.open();
});

buttonAdd.addEventListener('click', () => {
    formValidators['add-form'].resetValidation();
    addCardPopup.open();
});

avatar.addEventListener('click', () => {
    formValidators['edit-avatar-form'].resetValidation();
    editAvatarPopup.open();
});