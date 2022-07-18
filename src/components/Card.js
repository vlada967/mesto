class Card {
    constructor(data, userId, cardSelector, openImagePopup, deleteCard, likeCard) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._cardId = data._id;
        this._cardSelector = cardSelector;
        this._openImagePopup = openImagePopup;
        this._deleteCard = deleteCard;
        this._likeCard = likeCard;
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
        this._imageElement.addEventListener('click', this._handleImageClick);

        if (this._ownerId === this._userId) {
            this._deleteElement.addEventListener('click', this._handleDeleteClick);
        }
        else {
            this._deleteElement.remove();
        }
    }

    _handleImageClick = () => {
        this._openImagePopup(this._link, this._name);
    }

    _renderLikes = () => {
        if (this._isCardLiked === true) {
            this._likeElement.classList.add("element__like_active");
        } else {
            this._likeElement.classList.remove("element__like_active");
        }
        this._likesNumber.textContent = this._likes.length;
    }

    _isLiked = () => {
        const likes = Array.from(this._likes);
        likes.forEach((like) => {
            if (like._id === this._userId) {
                this._isCardLiked = true;
            }
        })
        return this._isCardLiked;
    }

    setLikes = (likes) => {
        this._likes = likes;
        this._renderLikes();
    }

    _handleLikeClick = () => {
        if (this._isCardLiked === true) {
            this._isCardLiked = false;
        } else {
            this._isCardLiked = true;
        }
        this._renderLikes();
        this._likeCard(this._cardId, this._isCardLiked, this.setLikes);
    }

    _handleDeleteClick = () => {
        this._deleteCard(this._card, this._cardId);
    }

    createCard() {
        this._getTemplate();

        this._likeElement = this._card.querySelector('.element__like');
        this._likesNumber = this._card.querySelector('.element__like-number');
        this._imageElement = this._card.querySelector('.element__image');
        this._deleteElement = this._card.querySelector('.element__delete');
        
        this._setEventListeners();
    
        this._card.querySelector('.element__subtitle').textContent = this._name;
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;

        this._isLiked();
        this._renderLikes();
    
        return this._card;
    }
}

export default Card;