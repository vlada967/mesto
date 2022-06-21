import {initialCards, config} from './data.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

const popupBackgroundEditProfile = document.querySelector('.popup_type_edit-profile');
const popupBackgroundAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const popupCaption = popupImage.querySelector('.popup__caption');
const popupLink = popupImage.querySelector('.popup__image');

const popupName = document.querySelector('.popup__text_type_name');
const popupJob = document.querySelector('.popup__text_type_job');
const popupElementEditProfile = document.querySelector('.popup__form_type_edit-profile');
const popupElementAddCard = document.querySelector('.popup__form_type_add-card');

const buttonCloseEditProfile = document.querySelector('.popup__close-button_type_edit-profile');
const buttonCloseAddCard = document.querySelector('.popup__close-button_type_add-card');
const buttonCloseImage = document.querySelector('.popup__close-button_type_image');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCreate = document.querySelector('.popup__create-button');

const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const template = document.querySelector('.elements__template');
const cards = document.querySelector('.elements');

const formList = Array.from(document.querySelectorAll('.popup__form'));

function renderCard(title, link) {
    const сardElement = new Card(title, link, '.elements__template', openImagePopup);
    const newCard = сardElement.createCard();
    cards.prepend(newCard);
}

function handleSubmitEditProfile(evt) {
    evt.preventDefault();

    name.textContent = popupName.value;
    job.textContent = popupJob.value;

    closePopup(popupBackgroundEditProfile);
}

function handleSubmitAddForm(evt) {
    evt.preventDefault();

    const title = evt.target.popup__title.value;
    const link = evt.target.popup__link.value;

    renderCard(title, link);

    closePopup(popupBackgroundAddCard);
    makeAddButtonDisabled();

    evt.target.reset();
}

function makeAddButtonDisabled() {
    buttonCreate.classList.add('popup__button-disabled');
    buttonCreate.setAttribute("disabled", "disabled");
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
}

function openImagePopup(link, name) {
        popupCaption.textContent = name;
        popupLink.src = link;
        popupLink.alt = name;
    
        openPopup(popupImage);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
}

function closePopupByEscape(evt) {
    if (evt.key == 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function closePopupByOverlay(evt) { 
    if (evt.target == evt.currentTarget) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

initialCards.forEach(function(el) {
    renderCard(el.name, el.link);
});

popupName.value = name.textContent;
popupJob.value = job.textContent;

formList.forEach((formElement) => {
    const formValidatorElement = new FormValidator(config, formElement);
    formValidatorElement.enableValidation(formList);
});

popupElementEditProfile.addEventListener('submit', handleSubmitEditProfile);
popupElementAddCard.addEventListener('submit', handleSubmitAddForm);

buttonEdit.addEventListener('click', function() {
    popupName.value = name.textContent;
    popupJob.value = job.textContent;
    openPopup(popupBackgroundEditProfile);
}); 
buttonAdd.addEventListener('click', () => openPopup(popupBackgroundAddCard));

buttonCloseEditProfile.addEventListener('click', () => closePopup(popupBackgroundEditProfile));
buttonCloseAddCard.addEventListener('click', () => closePopup(popupBackgroundAddCard));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));

popupBackgroundEditProfile.addEventListener('click', closePopupByOverlay);
popupBackgroundAddCard.addEventListener('click', closePopupByOverlay);
popupImage.addEventListener('click', closePopupByOverlay);