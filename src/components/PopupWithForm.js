import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._submitButton = this._popup.querySelector('.popup__submit');
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._formElement.querySelectorAll('.popup__text'));
    }

    _getInputValues() {
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        this._handleSubmitForm(this._getInputValues(), this.changeButtonText);
    }

    changeButtonText = (isSaving) => {
        this._submitButton.textContent = isSaving ? 'Сохранение...' : 'Сохранить';
    }

    setEventListeners() {
        super.setEventListeners();  
        this._formElement.addEventListener('submit', this._handleSubmit);
    }

    close() {     
        super.close();
        this._formElement.reset();
    }
}

export default PopupWithForm;