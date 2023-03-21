'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#language') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const swiper = new Swiper('.about-us__swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: '.about-us__pagination',
    clickable: true,
  }
});
