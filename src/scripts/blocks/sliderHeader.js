'use strict';

// eslint-disable-next-line no-new, no-undef
new Swiper('.header__slider-container', {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  scrollbar: {
    el: '.header__slider-scrollbar',
    draggable: true,
  },

  navigation: {
    nextEl: '.header__slider-nav-button-next',
    prevEl: '.header__slider-nav-button-prev',
  },
});
