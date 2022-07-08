import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        const values = {};

        console.log('getInputValues');
        
        this._inputs = Array.from(this._formElement.querySelectorAll('.popup__text'));

        this._inputs.forEach((input) => {
            values[input.id] = input.value;
        });

        return values;
    }

    setEventListeners() {
        super.setEventListeners();  
        this._formElement.addEventListener('submit', this._handleSubmitForm);
    }

    close() {     
        super.close();
        this._formElement.reset();
    }
}

export default PopupWithForm;