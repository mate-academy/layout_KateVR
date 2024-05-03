'use strict';

const dropdown = document.querySelectorAll('.dropdown');
const trigger = document.querySelectorAll('.dropdown__trigger');
const inProcess = document.querySelectorAll('.in-process');

for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener('click', () => {
    dropdown[i].classList.toggle('dropdown--active');
  });
}

for (let i = 0; i < inProcess.length; i++) {
  inProcess[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}
