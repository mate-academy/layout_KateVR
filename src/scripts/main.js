'use strict';

const answer = document.querySelector('.question-answer-block__answer');

const toggler1 = document.querySelector('#menu-faq-1');

toggler1.addEventListener('click', () => {
  answer.classList.toggle('question-answer-block__answer--hidden-1');
});

const more = document.querySelector('#button-more');

const unHidde = document.querySelector('.button-block--un-hidden');

more.addEventListener('click', () => {
  unHidde.classList.toggle('button-block--hidden');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#menu-language') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#menu-help') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#menu-faq') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#consult').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  }
);
