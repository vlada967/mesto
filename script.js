let popupBackground = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let popupName = document.querySelector('.popup__text_type_name');
let popupJob = document.querySelector('.popup__text_type_job');

let popupElement = document.querySelector('.popup__form');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let saveButton = document.querySelector('.popup__save-button');

let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');

let likeElement = document.querySelectorAll('.element__like');

popupName.value = name.textContent;
popupJob.value = job.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();

    name.textContent = popupName.value;
    job.textContent = popupJob.value;
}

popupElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', popup);
closeButton.addEventListener('click', popup);
saveButton.addEventListener('click', popup);

function popup() {
    formElement.classList.toggle('popup_opened');
    popupBackground.classList.toggle('popup_opened');
}

for (let i = 0 ; i < likeElement.length; i++) {
    likeElement[i].addEventListener('click', function() {
        likeElement[i].classList.toggle("element__like_active")
    });
    ;
}