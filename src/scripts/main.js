'use strict';

const form = document.querySelector('.form');

if (form) {
  form.addEventListener(
    'invalid',
    () => form.classList.add('form--checked'),
    true,
  );

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.reset();
    form.classList.remove('form--checked');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
