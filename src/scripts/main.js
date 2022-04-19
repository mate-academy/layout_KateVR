'use strict';

const icon = document.getElementById('header-burger');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item1.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item2.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item3.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item4.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item5.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item6.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item7.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

const prev = document.getElementById('headerLink1');
const next = document.getElementById('headerLink2');

const prev1 = document.getElementById('productLink1');
const next1 = document.getElementById('productLink2');

prev.addEventListener('click', (event) => {
  event.preventDefault();

  next.classList.remove('header__link--active');
  prev.classList.add('header__link--active');
});

next.addEventListener('click', (event) => {
  event.preventDefault();

  prev.classList.remove('header__link--active');
  next.classList.add('header__link--active');
});

prev1.addEventListener('click', (event) => {
  event.preventDefault();

  next1.classList.remove('product__link--active');
  prev1.classList.add('product__link--active');

  document.getElementById('player').classList.add('product__video--active');
  document.getElementById('player1').classList.remove('product__video--active');

  document.getElementById('button').classList.add('product__button--active');

  const button1 = document.getElementById('button1');

  button1.classList.remove('product__button--active');

  document.getElementById('count').textContent = '1/2';
});

next1.addEventListener('click', (event) => {
  event.preventDefault();

  prev1.classList.remove('product__link--active');
  next1.classList.add('product__link--active');

  document.getElementById('player').classList.remove('product__video--active');
  document.getElementById('player1').classList.add('product__video--active');

  document.getElementById('button').classList.remove('product__button--active');

  document.getElementById('button1').classList.add('product__button--active');

  document.getElementById('count').textContent = '2/2';
});
