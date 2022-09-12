'use strict';

const heroMenu = document.querySelector('.hero__menu');
const heroNav = document.querySelector('.nav');
const languageLink = document.querySelector('.nav__link--lang');
const lnaguageBackBtn = document.querySelector('.language-menu__back-btn');
const languageMenu = document.querySelector('.language-menu');

heroMenu.addEventListener('click', () => {
  heroMenu.classList.toggle('hero__menu--cros-icon');
  heroNav.classList.toggle('hero__nav');
  heroNav.classList.toggle('nav--is-open');
  heroNav.classList.toggle('nav--menu');
});

languageLink.addEventListener('click', () => {
  languageMenu.classList.add('language-menu--is-open');
});

lnaguageBackBtn.addEventListener('click', () => {
  languageMenu.classList.remove('language-menu--is-open');
});
