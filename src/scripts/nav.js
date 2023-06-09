'use strict';

const mobileMenuOpen = document.querySelector('.mobile-menu-open');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const nav = document.querySelector('.nav');

mobileMenuOpen.addEventListener('click', () => {
  nav.classList.add('nav--show');
});

mobileMenuClose.addEventListener('click', () => {
  nav.classList.remove('nav--show');
});
