'use strict';

const form = document.querySelector('.touch__form');

form.addEventListener('submit', event => {
  event.preventDefault();

  form.reset();

  window.location.href = '#';
});
