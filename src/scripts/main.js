'use strict';

const answer = document.querySelector('.question-answer-block__answer');

const toggler1 = document.querySelector('#menu-faq-1');

toggler1.addEventListener('click', () => {
  answer.classList.toggle('question-answer-block__answer--hidden-1');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  if (window.location.hash === '#menu-language') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  if (window.location.hash === '#menu-help') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  if (window.location.hash === '#menu-faq') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
