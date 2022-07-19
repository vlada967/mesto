import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleDeleteCard) {
        super(popupSelector);
        this._formElement = this._popup.querySelector('.popup__form');
        this._handleDeleteCard = handleDeleteCard;
    }

    _handleClose = (evt) => {
        evt.preventDefault();
        this._handleDeleteCard();
    }

    setEventListeners() {
        super.setEventListeners();  
        this._formElement.addEventListener('submit', this._handleClose);
    }
}

export default PopupWithConfirmation;