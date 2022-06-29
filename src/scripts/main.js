'use strict';

const form = document.querySelector('.touch__form');
const more = document.querySelector('.more');
const goTop = document.querySelector('.main__go-top');
const footer = document.querySelector('.footer');

form.addEventListener('submit', event => {
  event.preventDefault();

  form.reset();

  window.location.href = '#';
});

window.addEventListener('scroll', () => {
  if (more.getBoundingClientRect().top < 0
    && footer.getBoundingClientRect().top >= window.innerHeight) {
    goTop.style.display = 'block';
  } else {
    goTop.style.display = 'none';
  }
});
