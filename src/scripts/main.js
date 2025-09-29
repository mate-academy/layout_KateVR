'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__navigation');
const header = document.querySelector('.header');
const body = document.body;

const languageLink = document
  .querySelector('.header__languages-link');
const headerArrowRight = document
  .querySelector('.header__arrow-right');

const darkWrapper = document
  .querySelector('.dark-wrapper');

burgerMenu.addEventListener('click', () => {
  body.classList.toggle('no-scroll');

  burgerMenu.classList.toggle('burger-menu--active');
  header.classList.toggle('header--active');

  menu.classList.toggle('header__navigation--active');
  darkWrapper.classList.toggle('dark-wrapper--active');
});

languageLink.addEventListener('click', () => {
  menu.scrollTo({
    left: window.innerWidth,
    behavior: 'smooth',
  })

  headerArrowRight.classList.add('header__arrow-right--active');
  burgerMenu.style.display = 'none';
});

headerArrowRight.addEventListener('click', () => {
  menu.scrollTo({
    left: -window.innerWidth,
    behavior: 'smooth',
  })

  headerArrowRight.classList.remove('header__arrow-right--active');
  burgerMenu.style.display = 'flex';
});
