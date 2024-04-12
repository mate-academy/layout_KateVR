'use strict';

const dropdown = document.querySelectorAll('.dropdown');
const trigger = document.querySelectorAll('.dropdown__trigger');
const dev = document.querySelectorAll('.indev');

for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener('click', () => {
    dropdown[i].classList.toggle('dropdown--active');
  });
}

for (let i = 0; i < dev.length; i++) {
  dev[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}

const tech1 = document.querySelector('.tech__dot--1');
const tech2 = document.querySelector('.tech__dot--2');
const tech3 = document.querySelector('.tech__dot--3');

const techInfo1 = document.querySelector('.tech__info--1');
const techInfo2 = document.querySelector('.tech__info--2');
const techInfo3 = document.querySelector('.tech__info--3');

function toggleClassName(el) {
  el.classList.toggle('tech__info--visible');
}

tech1.addEventListener('click', () => toggleClassName(techInfo1));
tech2.addEventListener('click', () => toggleClassName(techInfo2));
tech3.addEventListener('click', () => toggleClassName(techInfo3));
