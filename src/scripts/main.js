'use strict';

const navMob = document.querySelector('.nav-mob');
const navLink = document.querySelectorAll('.nav-mob__link');

document.querySelector('#nav-mob-toggler')
  .addEventListener('click', function(event) {
    navMob.classList.add('page__nav-mob--active');
    document.body.classList.add('page__body--with-menu');
  }, true);

document.querySelector('#nav-mob-toggler-2')
  .addEventListener('click', function(event) {
    navMob.classList.remove('page__nav-mob--active');
    document.body.classList.remove('page__body--with-menu');
  }, true);

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function(event) {
    navMob.classList.remove('page__nav-mob--active');
    document.body.classList.remove('page__body--with-menu');
  }, true);
}

const form = document.querySelector('.form');

form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  form.reset();
}
