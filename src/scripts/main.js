'use strict';

const pageBody = document.querySelector('.page__body');
const menuOpen = document.querySelector('.header__menu');
const menuCloser = document.querySelector('.menuByList--item');
const lenguageOpen = document.querySelector('.goto-language');
const lenguageCloser = document.querySelector('.menuLanguage');
// const header = document.querySelector('.header');
// const mainContant = document.querySelector('.main');
// const footer = document.querySelector('.footer');

menuOpen.addEventListener('click', function() {
  pageBody.classList.add('hidden-blocks');
});

menuCloser.addEventListener('click', function() {
  pageBody.classList.remove('hidden-blocks');
});

lenguageOpen.addEventListener('click', function() {
  pageBody.classList.add('hidden-blocks');
});

lenguageCloser.addEventListener('click', function() {
  pageBody.classList.remove('hidden-blocks');
});
