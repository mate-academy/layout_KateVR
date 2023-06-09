'use strict';

const techItemBtn = document.querySelectorAll('.tech__item-btn');
const techItem = document.querySelectorAll('.tech__item');

techItemBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const text = techItem[index].querySelector('.tech__item-text');

    btn.classList.toggle('tech__item-btn--active');
    text.classList.toggle('tech__item-text--active');
  });
});
