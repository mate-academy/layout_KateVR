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
