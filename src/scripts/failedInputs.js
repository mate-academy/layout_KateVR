'use strict';

const allInputs = document.querySelectorAll('input, textarea');

allInputs.forEach(input => {
  input.addEventListener('change', () => {
    input.classList.remove('failed');
  });
});
