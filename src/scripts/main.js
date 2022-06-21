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
