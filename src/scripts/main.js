'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#language') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
