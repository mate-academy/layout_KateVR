'use strict';

const nav = document.querySelector('.nav-mobile');
const toggler = document.getElementById('toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav-mobile--active');
  toggler.classList.toggle('top-actions__nav-mobile-toggler--active');
});

const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll('.contact__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
