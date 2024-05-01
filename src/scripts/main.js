'use strict';

const dropdown = document.querySelector('.header__top--part1--select');
const trigger = document.querySelector('.header__top--part1--select--button');
const option
= document.querySelector('.header__top--part1--select--content--option');

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('header__top--part1--select--active');
});

option.addEventListener('click', () => {
  dropdown.classList.remove('header__top--part1--select--active');
});

const part = 'header__buy--content--part1--left--content--select';
const dropdownBuy = document.querySelector('.' + part);
const triggerBuy = document.querySelector('.' + part + '--button');
const optionBuy = document.querySelectorAll('.' + part + '--options--item');

triggerBuy.addEventListener('click', () => {
  dropdownBuy.classList.toggle(part + '--active');
});

optionBuy.forEach((options) => {
  options.addEventListener('click', () => {
    dropdownBuy.classList.remove(part + '--active');
  });
});

const part22 = '.header__buy--content--part1--left--content--price--num';
const price = document.querySelector(part22);
let quanity = 1;
const priceOfProduct = 1200;
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');

option1.addEventListener('click', (event) => {
  event.preventDefault();
  quanity = 1;
  changePrice();
});

option2.addEventListener('click', (event) => {
  event.preventDefault();
  quanity = 2;
  changePrice();
});

option3.addEventListener('click', (event) => {
  event.preventDefault();
  quanity = 3;
  changePrice();
});

option4.addEventListener('click', (event) => {
  event.preventDefault();
  quanity = 4;
  changePrice();
});

function changePrice() {
  price.textContent = `${quanity * priceOfProduct}$`;
  triggerBuy.innerHTML = `${quanity}`;
};

const part3 = '.header__buy--content';
const part1 = document.querySelector('.header__buy--content--part1');
const part2 = document.querySelector('.header__buy--content--part2');
const right1 = document.querySelector('.header__buy--content--part1--right1');
const right2 = document.querySelector('.header__buy--content--part1--right2');
const step1Text = document.querySelector('.step1__text');
const step2Text = document.querySelector('.step2__text');
const step3Text = document.querySelector('.step3__text');
const step1Circle = document.querySelector('.step1__circle');
const step2Circle = document.querySelector('.step2__circle');
const step3Circle = document.querySelector('.step3__circle');
const form1 = document.getElementById('info');
const form2 = document.getElementById('payment');
const button1 = document.querySelector(part3 + '--part1--right1--button');
const button2 = document.querySelector(part3 + '--part1--right2--button');

button1.addEventListener('click', () => {
  if (form1.checkValidity()) {
    step1Circle.classList.remove('step__circle');
    step1Text.classList.remove('step__text');
    right2.style.display = 'block';
    right1.style.display = 'none';
    step2Circle.classList.add('step__circle');
    step2Text.classList.add('step__text');
  } else {
    window.alert('Please fill in all the required fields in the Info form.');
  }
});

button2.addEventListener('click', () => {
  if (form2.checkValidity()) {
    step2Circle.classList.remove('step__circle');
    step2Text.classList.remove('step__text');
    step3Circle.classList.add('step__circle');
    step3Text.classList.add('step__text');
    part1.style.display = 'none';
    part2.style.display = 'flex';
  } else {
    window.alert('Please fill in all the required fields in the Payment form.');
  }
});

const country = document.querySelector('.country__select');
const countryTrigger = document.querySelector('.country__select--trigger');
const city = document.querySelector('.city__select');
const cityTrigger = document.querySelector('.city__select--trigger');

countryTrigger.addEventListener('click', () => {
  country.classList.toggle('country__select--active');
});

cityTrigger.addEventListener('click', () => {
  city.classList.toggle('city__select--active');
});
