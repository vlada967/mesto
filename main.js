(()=>{"use strict";var e={inputSelector:"popup__text",submitButtonSelector:"popup__submit",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input-error",errorClass:"popup__error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._inputSelector))),this._buttonElement=this._form.querySelector(".".concat(this._submitButtonSelector))}var n,r;return n=e,r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled","disabled"))}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(".".concat(this._inputErrorClass,"_active"))}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(".".concat(this._inputErrorClass,"_active")),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(e){e.forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()}))})),this._setEventListeners()}}],r&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();const r=n;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleImageClick",(function(){o._openImagePopup(o._link,o._name)})),i(this,"_handleLikeClick",(function(){o._likeElement.classList.toggle("element__like_active")})),i(this,"_handleDeleteClick",(function(){o._card.remove()})),this._name=t.name,this._link=t.link,this._cardSelector=n,this._openImagePopup=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){this._card=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._likeElement.addEventListener("click",this._handleLikeClick),this._deleteElement.addEventListener("click",this._handleDeleteClick),this._imageElement.addEventListener("click",this._handleImageClick)}},{key:"createCard",value:function(){return this._getTemplate(),this._likeElement=this._card.querySelector(".element__like"),this._deleteElement=this._card.querySelector(".element__delete"),this._imageElement=this._card.querySelector(".element__image"),this._setEventListeners(),this._card.querySelector(".element__subtitle").textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._name,this._card}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerSelector=n,this._container=document.querySelector(this._containerSelector)}var t,n;return t=e,(n=[{key:"renderAll",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const l=function(){function e(t){var n=t.nameSelector,r=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._infoSelector=r,this._name=document.querySelector(this._nameSelector),this._info=document.querySelector(this._infoSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name,info:this._info}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._info.textContent=t}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_handleEscClose",(function(e){"Escape"==e.key&&n.close()})),f(this,"_closePopupByOverlay",(function(e){e.target==e.currentTarget&&n.close()})),f(this,"close",(function(){n._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",n._handleEscClose)})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close),this._popup.addEventListener("mousedown",this._closePopupByOverlay)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}const g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupCaption=t._popup.querySelector(".popup__caption"),t._popupLink=t._popup.querySelector(".popup__image"),t}return t=c,(n=[{key:"open",value:function(e,t){this._popupCaption.textContent=t,this._popupLink.src=e,this._popupLink.alt=t,y(E(c.prototype),"open",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}const I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),u=function(e){e.preventDefault(),n._handleSubmitForm(n._getInputValues()),n.close(),e.target.reset()},(o="_handleSubmit")in(r=L(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._handleSubmitForm=t,n._formElement=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._formElement.querySelectorAll(".popup__text")),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){w(P(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){w(P(c.prototype),"close",this).call(this),this._formElement.reset()}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);var q=document.querySelector(".popup__text_type_name"),x=document.querySelector(".popup__text_type_job"),B=document.querySelector(".profile__edit-button"),R=document.querySelector(".profile__add-button"),T=Array.from(document.querySelectorAll(".popup__form")),A={};function V(e,t){F.open(e,t)}var D=new l({nameSelector:".profile__title",infoSelector:".profile__subtitle"});D.setUserInfo("Жак-Ив Кусто","Исследователь океана");var U=new a({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new c(e,".elements__template",V).createCard()}},".elements");U.renderAll();var F=new g(".popup_type_image");F.setEventListeners();var z=new I(".popup_type_add-card",(function(e){U.addItem({name:e.popup__title,link:e.popup__link})}));z.setEventListeners();var M=new I(".popup_type_edit-profile",(function(e){D.setUserInfo(e.popup__name,e.popup__job)}));M.setEventListeners(),T.forEach((function(t){var n=new r(e,t),o=t.getAttribute("name");A[o]=n,n.enableValidation(T)})),B.addEventListener("click",(function(){A["edit-form"].resetValidation();var e=D.getUserInfo();q.value=e.name.textContent,x.value=e.info.textContent,M.open()})),R.addEventListener("click",(function(){A["add-form"].resetValidation(),z.open()}))})();