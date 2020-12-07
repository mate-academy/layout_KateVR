'use strict';

const burger = document.querySelector('.nav__burger-container');
const burgerMenu = document.querySelector('.nav__menu-bar');

burger.addEventListener('click', function() {
  this.classList.toggle('nav__burger-container--active');
  burgerMenu.classList.toggle('nav__menu-bar--active');
});
