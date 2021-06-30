'use strict';

const nav = document.querySelector('.nav-mobile');
const toggler = document.getElementById('toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav-mobile--active');
  toggler.classList.toggle('top-actions__nav-mobile-toggler--active');
});
