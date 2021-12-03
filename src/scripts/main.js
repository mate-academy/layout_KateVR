'use strict';
// burger menu

const burger = document.querySelector('.nav__burger-container');
const burgerMenu = document.querySelector('.nav__menu-bar');

burger.addEventListener('click', function() {
  this.classList.toggle('nav__burger-container--active');
  burgerMenu.classList.toggle('nav__menu-bar--active');
});

// popups

const buttons = [];

buttons.push(document.querySelector('.tech-specs__button--1'));
buttons.push(document.querySelector('.tech-specs__button--2'));
buttons.push(document.querySelector('.tech-specs__button--3'));

const popups = [];

popups.push(document.querySelector('.tech-specs__desc--three'));
popups.push(document.querySelector('.tech-specs__desc--two'));
popups.push(document.querySelector('.tech-specs__desc--one'));

buttons.forEach(function(item, index) {
  item.addEventListener('mouseover', function() {
    popups[index].classList.toggle('tech-specs__button--active');
  });

  item.addEventListener('mouseout', function() {
    popups[index].classList.toggle('tech-specs__button--active');
  });
});
