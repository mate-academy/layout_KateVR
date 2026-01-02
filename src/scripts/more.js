'use strict';

const more = document.querySelector('.more');
const moreButton = document.querySelector('.header__bottom-button');
const moreTopBar = more.querySelector('.more__top');

export function configureMoreSection() {
  moreTopBar.addEventListener('click', () => {
    if (window.innerWidth < 1280) {
      more.classList.toggle('more--active');
    }
  });

  moreButton.addEventListener('click', () => {
    if (window.innerWidth >= 1280) {
      more.classList.toggle('more--active');
    }
  });
}
