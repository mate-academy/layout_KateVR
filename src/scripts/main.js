'use strict';

//#region buy menu

const buyOpener = document.getElementById('buy-button');
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
const purchase = document.getElementById('.purchase');


function buyMenuOpener() {
  purchaseSlider.style.transform = 'translateX(0)';
  purchaseQuantity.style.opacity = '1';
  stepOrder.classList.add('steps__link--active');
  purchaseMenu.classList.add('page__purchase--active');
};

buyOpener.addEventListener('click', () => {
  buyMenuOpener();
});

function purchaseSliderPay() {
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
  // purchase.style.max-height = '500px';
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
  // purchase.style.max-height = '800px';
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

//#region contact form

const formLabelName = document.querySelector('.form__placeholder--name');
const formName = document.querySelector('.form__input--name');

const formLabelEmail = document.querySelector('.form__placeholder--email');
const formEmail = document.querySelector('.form__input--email');

const formLabelPhone = document.querySelector('.form__placeholder--phone');
const formPhone = document.querySelector('.form__input--phone');

const formLabelMessage = document.querySelector('.form__placeholder--message');
const formMessage = document.querySelector('.form__input--message');

formName.addEventListener('focus', () => {
  formLabelName.classList.add('form__placeholder--blue');
  formName.classList.add('form__input--focus');
});
formName.addEventListener('blur', () => {
  formLabelName.classList.remove('form__placeholder--blue');
});

formEmail.addEventListener('focus', () => {
  formLabelEmail.classList.add('form__placeholder--blue');
  formEmail.classList.add('form__input--focus');
});
formEmail.addEventListener('blur', () => {
  formLabelEmail.classList.remove('form__placeholder--blue');
});

formPhone.addEventListener('focus', () => {
  formLabelPhone.classList.add('form__placeholder--blue');
  formPhone.classList.add('form__input--focus');
});
formPhone.addEventListener('blur', () => {
  formLabelPhone.classList.remove('form__placeholder--blue');
});

formMessage.addEventListener('focus', () => {
  formLabelMessage.classList.add('form__placeholder--blue');
  formMessage.classList.add('form__input--message--focus');
  formMessage.classList.add('form__input--focus');
});
formMessage.addEventListener('blur', () => {
  formLabelMessage.classList.remove('form__placeholder--blue');
});

//#endregion contact form

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

//#region about slider



//#endregion about slider
