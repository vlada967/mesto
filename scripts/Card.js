class Card {
    constructor(name, link, cardSelector, openImagePopup) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate() {
        this._card = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    }

    _setEventListeners() {
        this._likeElement.addEventListener('click', this._handleLikeClick);
        this._deleteElement.addEventListener('click', this._handleDeleteClick);
        this._imageElement.addEventListener('click', this._handleImageClick);
    }

    _handleImageClick = () => {
        this._openImagePopup(this._link, this._name);
    }

    _handleLikeClick = () => {
        this._likeElement.classList.toggle("element__like_active");
    }

    _handleDeleteClick = () => {
        this._card.remove();
    }

    createCard() {
        this._getTemplate();

        this._likeElement = this._card.querySelector('.element__like');
        this._deleteElement = this._card.querySelector('.element__delete');
        this._imageElement = this._card.querySelector('.element__image');

        this._setEventListeners();
    
        this._card.querySelector('.element__subtitle').textContent = this._name;
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
    
        return this._card;
    }
}

export default Card;