/* eslint-disable operator-linebreak */
'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    640: {
      pagination: {
        el: '.swiper-pagination',
      },
    },
    1240: {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});

const btn = document.querySelector('.page__scroll-button');

function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

document.addEventListener('scroll', () => {
  const moreSection = document.querySelector('.more');
  const rect = moreSection.getBoundingClientRect();

  const showOnTheScreen = isInViewport(btn) ?
    btn.style.position = 'fixed' : 'relative';

  if (rect.top > 0) {
    btn.style.display = 'none';
  } else {
    btn.style.display = 'block';
  }

  return showOnTheScreen;
});

const touchBtns = document.querySelectorAll('.techspecs__touch');
const descriptions = document.querySelectorAll('.techspecs__description');

touchBtns.forEach((el, index) => el.addEventListener('click', () => {
  for (let i = 0; i < descriptions.length; i++) {
    if (descriptions[i].style.display === 'block') {
      descriptions[i].style.display = 'none';
    }

    descriptions[index].style.display = 'block';
  }
}));

const closeIcons = document.querySelectorAll('.techspecs__icon-close');

closeIcons.forEach((el, index) => el.addEventListener('click', () => {
  descriptions[index].style.display = 'none';
}));

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
