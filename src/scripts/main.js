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

// When scrolling, we run the function
window.onscroll = magic;
