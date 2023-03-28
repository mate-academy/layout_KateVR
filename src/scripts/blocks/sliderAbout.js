'use strict';

// eslint-disable-next-line no-new, no-undef
const aboutSlider = new Swiper('.about__slider', {
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  navigation: {
    nextEl: '.about__slider-nav-buttons-next',
    prevEl: '.about__slider-nav-buttons-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
});

const sliderTotalSlides = document.querySelector('.about__slider-total');
const sliderCurrentSlide = document.querySelector('.about__slider-current');

sliderTotalSlides.innerHTML = aboutSlider.slides.length;

aboutSlider.on('slideChange', function() {
  // eslint-disable-next-line prefer-const
  let currentSlide = ++aboutSlider.realIndex;

  sliderCurrentSlide.innerHTML = currentSlide;
});
