'use strict';

// dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropdownButton = dropdown.querySelector('.dropdown__button');
const dropdownMenu = dropdown.querySelector('.dropdown__menu');
const dropdownSvg = dropdown.querySelector('.dropdown__svg');

dropdownButton.addEventListener('click', (event) => {
  event.preventDefault();

  dropdownMenu.classList.toggle('dropdown__menu--active');
  dropdownSvg.classList.toggle('dropdown__svg--rotate');
});

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('dropdown__button')) {
    dropdownMenu.classList.remove('dropdown__menu--active');
    dropdownSvg.classList.remove('dropdown__svg--rotate');
  }
});

// disable scrolling when the menu is open
window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page--overflow')
    : document.body.classList.remove('page--overflow');

  return menu;
};
