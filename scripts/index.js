const popupBackgroundEditProfile = document.querySelector('.popup_type_edit-profile');
const popupBackgroundAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const popupName = document.querySelector('.popup__text_type_name');
const popupJob = document.querySelector('.popup__text_type_job');
const popupElementEditProfile = document.querySelector('.popup__form_type_edit-profile');
const popupElementAddCard = document.querySelector('.popup__form_type_add-card');

const closeButtonEditProfile = document.querySelector('.popup__close-button_type_edit-profile');
const closeButtonAddCard = document.querySelector('.popup__close-button_type_add-card');
const closeButtonImage = document.querySelector('.popup__close-button_type_image');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const template = document.querySelector('.elements__template');
const cards = document.querySelector('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function addCard (name, link) {
    const newCard = template.content.cloneNode(true);
    const likeElement = newCard.querySelector('.element__like');
    const deleteElement = newCard.querySelector('.element__delete');
    const imageElement = newCard.querySelector('.element__image');

    newCard.querySelector('.element__subtitle').textContent = name;
    newCard.querySelector('.element__image').src = link;

    likeElement.addEventListener('click', function() {
        likeElement.classList.toggle("element__like_active");
    });

    deleteElement.addEventListener('click', function(evt) {
        evt.target.closest(".element").remove();
    });

    imageElement.addEventListener('click', function() {
        popupImage.querySelector('.popup__caption').textContent = name;
        popupImage.querySelector('.popup__image').src = link;

        popupImage.classList.add('popup_opened');
    });

    cards.prepend(newCard);
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();

    name.textContent = popupName.value;
    job.textContent = popupJob.value;

    closePopupEditProfile();
}

function addFormSubmitHandler(evt) {
    evt.preventDefault();

    const title = evt.target.popup__title.value;
    const link = evt.target.popup__link.value;

    addCard(title, link);

    closePopupAddCard();
}

function openPopupEditProfile() {
    popupName.value = name.textContent;
    popupJob.value = job.textContent;

    popupBackgroundEditProfile.classList.toggle('popup_opened');
}

function openPopupAddCard() {
    popupBackgroundAddCard.classList.toggle('popup_opened');
}

function closePopupEditProfile() {
    popupBackgroundEditProfile.classList.toggle('popup_opened');
}

function closePopupAddCard() {
    popupBackgroundAddCard.classList.toggle('popup_opened');
}

function closePopupImage() {
    popupImage.classList.remove('popup_opened');
}

initialCards.forEach(function(el) {
    addCard(el.name, el.link);
});

popupElementEditProfile.addEventListener('submit', editFormSubmitHandler);
popupElementAddCard.addEventListener('submit', addFormSubmitHandler);

editButton.addEventListener('click', openPopupEditProfile);
addButton.addEventListener('click', openPopupAddCard);

closeButtonEditProfile.addEventListener('click', closePopupEditProfile);
closeButtonAddCard.addEventListener('click', closePopupAddCard);
closeButtonImage.addEventListener('click', closePopupImage);