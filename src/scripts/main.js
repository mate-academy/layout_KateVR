'use strict';

const dropdowns = document.querySelectorAll('.dropdown');
const triggers = document.querySelectorAll('.dropdown__icon');

triggers.forEach((trigger, i) => {
  const dropdown = dropdowns[i];
  trigger.addEventListener('click', () => {

    if (dropdown.classList.contains('dropdown--active')) {
      dropdown.classList.remove('dropdown--active');
    } else {
      dropdown.classList.add('dropdown--active');
    }
  });
});
