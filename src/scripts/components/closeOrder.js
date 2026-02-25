const orderStages = document.querySelectorAll('.order__item');
const orderImage = document.querySelector('.order__image');
const orderInfo = document.querySelector('.order__info');
const orderForm = document.querySelector('.order__form');
const payForm = document.querySelector('.order__pay');
const complete = document.querySelector('.order__complete');

const orderLogo = document.querySelector('.order__logo');
const orderIconClose = document.querySelector('.order__icon');
const completeButton = document.querySelector('.complete__button');
const placeOrder = document.querySelector('.order__item--place-order');

export function closeOrder() {
  orderLogo.addEventListener('click', closeOrderHandler);
  orderIconClose.addEventListener('click', closeOrderHandler);
  completeButton.addEventListener('click', closeOrderHandler);
  placeOrder.addEventListener('click', closeOrderHandler);
}

function closeOrderHandler() {
  orderForm.classList.add('order__form--active');
  payForm.classList.remove('order__pay--active');
  complete.classList.remove('order__complete--active');
  orderStages[0].classList.add('order__item--active');
  orderStages[1].classList.remove('order__item--active');
  orderStages[2].classList.remove('order__item--active');
  orderImage.classList.remove('order__image--complete');
  orderInfo.classList.remove('order__info--complete');
}
