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

function createCard (name, link) {
    const newCard = template.content.cloneNode(true);
    const likeElement = newCard.querySelector('.element__like');
    const deleteElement = newCard.querySelector('.element__delete');
    const imageElement = newCard.querySelector('.element__image');

    newCard.querySelector('.element__subtitle').textContent = name;
    imageElement.src = link;
    imageElement.alt = name;

    likeElement.addEventListener('click', function() {
        likeElement.classList.toggle("element__like_active");
    });

    deleteElement.addEventListener('click', function(evt) {
        evt.target.closest(".element").remove();
    });

    imageElement.addEventListener('click', function() {
        popupCaption.textContent = name;
        popupLink.src = link;
        popupLink.alt = name;

        openPopup(popupImage);
    });

    return newCard;
}

function handleSubmitEditProfile(evt) {
    evt.preventDefault();

    name.textContent = popupName.value;
    job.textContent = popupJob.value;

    closePopup(popupBackgroundEditProfile);

    popupName.value = name.textContent;
    popupJob.value = job.textContent;
}

function handleSubmitAddForm(evt) {
    evt.preventDefault();

    const title = evt.target.popup__title.value;
    const link = evt.target.popup__link.value;

    const newCard = createCard(title, link);
    cards.prepend(newCard);

    closePopup(popupBackgroundAddCard);
    makeAddButtonDisabled();

    evt.target.popup__title.value = '';
    evt.target.popup__link.value = '';
}

function makeAddButtonDisabled() {
    buttonCreate.classList.add('popup__button-disabled');
    buttonCreate.setAttribute("disabled", "disabled");
  }

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
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

initialCards.forEach(function(el) {
    const newCard = createCard(el.name, el.link);
    cards.prepend(newCard);
});

popupName.value = name.textContent;
popupJob.value = job.textContent;

popupElementEditProfile.addEventListener('submit', handleSubmitEditProfile);
popupElementAddCard.addEventListener('submit', handleSubmitAddForm);

buttonEdit.addEventListener('click', () => openPopup(popupBackgroundEditProfile));
buttonAdd.addEventListener('click', () => openPopup(popupBackgroundAddCard));

buttonCloseEditProfile.addEventListener('click', () => closePopup(popupBackgroundEditProfile));
buttonCloseAddCard.addEventListener('click', () => closePopup(popupBackgroundAddCard));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));

popupBackgroundEditProfile.addEventListener('click', function (evt) {
    if (evt.target == evt.currentTarget) {
        closePopup(popupBackgroundEditProfile);
    }
});
popupBackgroundAddCard.addEventListener('click', function (evt) {
    if (evt.target == evt.currentTarget) {
        closePopup(popupBackgroundAddCard);
    }
});
popupImage.addEventListener('click', function (evt) {
    if (evt.target == evt.currentTarget) {
        closePopup(popupImage);
    }
});