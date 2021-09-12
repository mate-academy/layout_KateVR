'use strict';

//#region buy menu

const buyOpener = document.querySelectorAll('[id="buy-button"]');
const purchaseMenu = document.getElementById('purchase');
const buyClosure = document.getElementById('buy-cross');
const stepOrder = document.getElementById('steps-link-order');
const stepPay = document.getElementById('steps-link-pay');
const stepComplete = document.getElementById('steps-link-complete');
const purchaseButton = document.getElementById('purchase-button');
const purchaseButtonPay = document.getElementById('purchase-button-pay');
const purchaseButtonEnd = document.querySelector('.purchase__end-button');
const purchaseSlider = document.querySelector('.purchase__slider');
const purchaseQuantity = document.querySelector('.purchase__quantity');
const purchase = document.getElementById('purchase');


function buyMenuOpener() {
  // purchase.style.height = "unset";
  purchaseSlider.style.transform = 'translateX(0)';
  purchaseQuantity.style.opacity = '1';
  stepOrder.classList.add('steps__link--active');
  purchaseMenu.classList.add('page__purchase--active');
};

buyOpener[0].addEventListener('click', () => {
  buyMenuOpener();
});

buyOpener[1].addEventListener('click', () => {
  buyMenuOpener();
});

buyOpener[2].addEventListener('click', () => {
  buyMenuOpener();
});

function purchaseSliderPay() {
  // purchase.style.height = "600px";
  purchaseQuantity.style.opacity = '1';
  purchaseSlider.style.transform = 'translateX(-100%)';
  stepOrder.classList.remove('steps__link--active');
  stepComplete.classList.remove('steps__link--active');
  stepPay.classList.add('steps__link--active');
};

stepPay.addEventListener('click', () => {
  purchaseSliderPay();
});

purchaseButton.addEventListener('click', () => {
  purchaseSliderPay();
});

function purchaseSliderComplete() {
  // purchase.style.height = "600px";
  purchaseSlider.style.transform = 'translateX(-200%)';
  purchaseQuantity.style.opacity = '0';
  stepOrder.classList.remove('steps__link--active');
  stepPay.classList.remove('steps__link--active');
  stepComplete.classList.add('steps__link--active');
};

stepComplete.addEventListener('click', () => {
  purchaseSliderComplete();
});

purchaseButtonPay.addEventListener('click', () => {
  purchaseSliderComplete();
});

function purchaseSliderOrder() {
  // purchase.style.height = "unset";
  purchaseQuantity.style.opacity = '1';
  purchaseSlider.style.transform = 'translateX(0)';
  stepPay.classList.remove('steps__link--active');
  stepComplete.classList.remove('steps__link--active');
  stepOrder.classList.add('steps__link--active');
};

stepOrder.addEventListener('click', () => {
  purchaseSliderOrder();
});

function buyMenuСlosure() {
  // purchase.style.height = "unset";
  purchaseQuantity.style.opacity = '1';
  stepOrder.classList.remove('steps__link--active');
  stepPay.classList.remove('steps__link--active');
  stepComplete.classList.remove('steps__link--active');
  purchaseMenu.classList.remove('page__purchase--active');
};

buyClosure.addEventListener('click', () => {
  buyMenuСlosure();
});

purchaseButtonEnd.addEventListener('click', () => {
  buyMenuСlosure();
});

//#endregion buy menu

//#region form

const formLabel = document.querySelectorAll('[id="label"]');
const formInput = document.querySelectorAll('[id="input"]');

formInput[0].addEventListener('focus', () => {
  formLabel[0].classList.add('form__placeholder--blue');
  formInput[0].classList.add('form__input--focus');
});
formInput[0].addEventListener('blur', () => {
  formLabel[0].classList.remove('form__placeholder--blue');
});

formInput[1].addEventListener('focus', () => {
  formLabel[1].classList.add('form__placeholder--blue');
  formInput[1].classList.add('form__input--focus');
});
formInput[1].addEventListener('blur', () => {
  formLabel[1].classList.remove('form__placeholder--blue');
});

formInput[2].addEventListener('focus', () => {
  formLabel[2].classList.add('form__placeholder--blue');
  formInput[2].classList.add('form__input--focus');
});
formInput[2].addEventListener('blur', () => {
  formLabel[2].classList.remove('form__placeholder--blue');
});

formInput[3].addEventListener('focus', () => {
  formLabel[3].classList.add('form__placeholder--blue');
  formInput[3].classList.add('form__input--focus');
});
formInput[3].addEventListener('blur', () => {
  formLabel[3].classList.remove('form__placeholder--blue');
});

formInput[4].addEventListener('focus', () => {
  formLabel[4].classList.add('form__placeholder--blue');
  formInput[4].classList.add('form__input--focus');
});
formInput[4].addEventListener('blur', () => {
  formLabel[4].classList.remove('form__placeholder--blue');
});

formInput[5].addEventListener('focus', () => {
  formLabel[5].classList.add('form__placeholder--blue');
  formInput[5].classList.add('form__input--focus');
});
formInput[5].addEventListener('blur', () => {
  formLabel[5].classList.remove('form__placeholder--blue');
});

formInput[6].addEventListener('focus', () => {
  formLabel[6].classList.add('form__placeholder--blue');
  formInput[6].classList.add('form__input--focus');
});
formInput[6].addEventListener('blur', () => {
  formLabel[6].classList.remove('form__placeholder--blue');
});

formInput[7].addEventListener('focus', () => {
  formLabel[7].classList.add('form__placeholder--blue');
  formInput[7].classList.add('form__input--focus');
});
formInput[7].addEventListener('blur', () => {
  formLabel[7].classList.remove('form__placeholder--blue');
});

formInput[8].addEventListener('focus', () => {
  formLabel[8].classList.add('form__placeholder--blue');
  formInput[8].classList.add('form__input--focus');
});
formInput[8].addEventListener('blur', () => {
  formLabel[8].classList.remove('form__placeholder--blue');
});

formInput[9].addEventListener('focus', () => {
  formLabel[9].classList.add('form__placeholder--blue');
  formInput[9].classList.add('form__input--focus');
});
formInput[9].addEventListener('blur', () => {
  formLabel[9].classList.remove('form__placeholder--blue');
});

formInput[10].addEventListener('focus', () => {
  formLabel[10].classList.add('form__placeholder--blue');
  formInput[10].classList.add('form__input--focus');
  formInput[10].classList.add('form__input--message--focus');
});
formInput[10].addEventListener('blur', () => {
  formLabel[10].classList.remove('form__placeholder--blue');
});

//#endregion form

//#region tech buttons

const techButtonSensor = document.querySelector('.tech__round-button--sensor');
const techButtonBatterries = document.querySelector('.tech__round-button--batterries');
const techButtonConnection = document.querySelector('.tech__round-button--connection');
const techInfoSensor = document.getElementById('tech__info--sensor');
const techInfoBatterries = document.getElementById('tech__info--batterries');
const techInfoConnection = document.getElementById('tech__info--connection');


techButtonSensor.addEventListener('click', () => {
  techButtonSensor.classList.toggle('tech__round-button--active');
  techInfoSensor.classList.toggle('tech__info--sensor');
});

techButtonBatterries.addEventListener('click', () => {
  techButtonBatterries.classList.toggle('tech__round-button--active');
  techInfoBatterries.classList.toggle('tech__info--batterries');
});

techButtonConnection.addEventListener('click', () => {
  techButtonConnection.classList.toggle('tech__round-button--active');
  techInfoConnection.classList.toggle('tech__info--connection');
});

//#endregion tech buttons

//#region input card

//#endregion input card

//#region price

const selector = document.querySelector('.purchase__selector');
const price = document.querySelector('.purchase__number');

selector.addEventListener('click', () => {
  let value = selector.value;
  price.textContent = value * 1200 + '$';
});

//#endregion price
