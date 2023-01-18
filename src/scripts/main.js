'use strict';

const forms = document.querySelectorAll('form');
const toTop = document.querySelector('.page__to-top');

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    || window.location.hash === '#language'
    || window.location.hash === '#help'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add('page__to-top--active');
  } else {
    toTop.classList.remove('page__to-top--active');
  }
});
