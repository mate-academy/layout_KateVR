'use strict';

const contactBtn = document.querySelector('.contact__btn');
const contactForm = document.querySelector('.contact__form');
const cItems = document.querySelectorAll('.contact__input, .contact__textarea');

contactBtn.addEventListener('click', () => {
  cItems.forEach(item => {
    if (item.value === '') {
      item.classList.add('failed');
    } else {
      item.classList.remove('failed');
    }
  });

  if (document.querySelectorAll('.failed').length === 0) {
    contactForm.reset();
  }
});
