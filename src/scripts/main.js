'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = document.querySelector('.dropdown__trigger');
const inProcess = document.querySelectorAll('.in-process');

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');
});

for (let i = 0; i < inProcess.length; i++) {
  inProcess[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}
