let popupBackground = document.querySelector('.popup');
let popupName = document.querySelector('.popup__text_type_name');
let popupJob = document.querySelector('.popup__text_type_job');
let popupElement = document.querySelector('.popup__form');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');

//let likeElement = document.querySelectorAll('.element__like');

function formSubmitHandler(evt) {
    evt.preventDefault();

    name.textContent = popupName.value;
    job.textContent = popupJob.value;

    closePopup();
}

function openPopup() {
    popupName.value = name.textContent;
    popupJob.value = job.textContent;

    popupBackground.classList.toggle('popup_opened');
}

function closePopup() {
    popupBackground.classList.toggle('popup_opened');
}

popupElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

/*for (let i = 0; i < likeElement.length; i++) {
    likeElement[i].addEventListener('click', function() {
        likeElement[i].classList.toggle("element__like_active")
    });
    ;
}*/