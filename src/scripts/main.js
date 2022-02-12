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

const button1 = document.querySelector('#circle-button--1');
const button2 = document.querySelector('#circle-button--2');
const button3 = document.querySelector('#circle-button--3');

const button1hidden = document
  .querySelector('.main-imgs__icon--tech-specs-hidden');
const button2hidden = document.querySelector('.tech-specs__text--hidden2');
const button3hidden = document.querySelector('.tech-specs__text--hidden3');

button1.addEventListener('click', () => {
  button1hidden.classList.toggle('.main-imgs__icon--tech-specs-hidden');
});

button2.addEventListener('click', () => {
  button2hidden.classList.toggle('.tech-specs__text--un-hidden2');
});

button3.addEventListener('click', () => {
  button3hidden.classList.toggle('.tech-specs__text--un-hidden3');
});
