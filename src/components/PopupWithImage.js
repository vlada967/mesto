import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCaption = this._popup.querySelector('.popup__caption');
        this._popupLink = this._popup.querySelector('.popup__image');
    }

    open(link, name) {
        this._popupCaption.textContent = name;
        this._popupLink.src = link;
        this._popupLink.alt = name;

        super.open();
    }
}

export default PopupWithImage;