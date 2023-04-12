'use strict';

const form = document.getElementById('formContact');
const formBuy = document.getElementById('formBuy');
const formPay = document.getElementById('formPay');

const tabs = document.querySelectorAll('.buy__tab');
const buyTabContentFirst = document.querySelector('.buy__tab-content--1');
const buyTabContentSecond = document.querySelector('.buy__tab-content--2');
const buyTabContentThird = document.querySelector('.buy__tab-content--3');

// eslint-disable-next-line max-len
const formContainerBuy = document.querySelector('.form__control-container--buy');
// eslint-disable-next-line max-len
const quantityContainer = document.querySelector('.buy__tab-content-quantity-container');
const finishButton = document.querySelector('.buy__tab-button--3');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

formBuy.addEventListener('submit', (event) => {
  event.preventDefault();

  tabs[1].classList.add('buy__tab--active');
  formContainerBuy.style.display = 'none';
  buyTabContentSecond.classList.add('buy__tab-content--2-active');
  // eslint-disable-next-line max-len
  quantityContainer.classList.add('buy__tab-content-quantity-container--second-tab');
  buyTabContentFirst.classList.add('buy__tab-content--1-for-pay');
  formBuy.classList.add('buy__tab-content-form--1-second-tab');

  formBuy.reset();
});

formPay.addEventListener('submit', (event) => {
  event.preventDefault();

  buyTabContentSecond.classList.remove('buy__tab-content--2-active');
  buyTabContentFirst.classList.remove('buy__tab-content--1-for-pay');
  formBuy.classList.remove('buy__tab-content-form--1-second-tab');
  buyTabContentFirst.style.display = 'none';
  tabs[2].classList.add('buy__tab--active');
  buyTabContentThird.classList.add('buy__tab-content--3-active');

  formPay.reset();
});

finishButton.addEventListener('click', () => {
  tabs[1].classList.remove('buy__tab--active');
  tabs[2].classList.remove('buy__tab--active');

  formContainerBuy.style.display = 'grid';
  buyTabContentFirst.style.display = 'block';
  buyTabContentThird.classList.remove('buy__tab-content--3-active');

  formBuy.reset();
  formPay.reset();
});
