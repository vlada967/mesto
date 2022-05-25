const config = {
    formSelector: 'popup__form',
    inputSelector: 'popup__text',
    submitButtonSelector: 'popup__submit',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error'
  }; 

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
}; 
  
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute("disabled", "disabled");
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute("disabled", "disabled");
    }
}; 
  
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`.${inputErrorClass}_active`);
};
  
const hideInputError = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(`.${inputErrorClass}_active`);
    errorElement.textContent = '';
};
  
const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass);
    }
};
  
const setEventListeners = (formElement, validConfig) => {
    const {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass} = validConfig;
    const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
    const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, inputErrorClass);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });

};

const enableValidation = (validConfig) => {
    const {formSelector} = validConfig;
    const formList = Array.from(document.querySelectorAll(`.${formSelector}`));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, validConfig);
    })
};

enableValidation(config);