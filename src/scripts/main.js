/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    320: {
      pagination: {
        el: '.swiper-pagination',
      },
    },
    1224: {
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

const btn = document.getElementById('button');

function magic() {
  if (window.pageYOffset > 800) {
    btn.style.opacity = '1';
  } else {
    btn.style.opacity = '0';
  }
}

btn.onclick = function() {
  window.scrollTo(0, 0);
};
window.onscroll = magic;

const overflow = document.querySelectorAll('.overflow');
const katevr = document.querySelector('.katevr');
const closes = document.querySelectorAll('.close');

overflow.forEach(element => {
  element.addEventListener('click', () => {
    katevr.classList.add('katevr__overflow');
  });
});

closes.forEach(element => {
  element.addEventListener('click', () => {
    katevr.classList.remove('katevr__overflow');
  });
});
