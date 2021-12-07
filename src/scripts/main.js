'use strict';

const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.form-field');
const textarea = document.querySelector('.form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // eslint-disable-next-line no-return-assign
  inputs.forEach(elem => elem.value = '');
  textarea.value = '';
});
