'use strict';

const open = document.querySelector('.faq__question-question');
const popup = document.querySelector('.faq__question-block');

open.addEventListener('click', function() {
  if (popup.style.display === 'none') {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
});
