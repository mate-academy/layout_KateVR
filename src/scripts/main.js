'use strict';

/* eslint-env jquery */

$(document).ready(function() {
  $('.home__image-container').bxSlider({
    slideSelector: '.home__prod-wrap',
    wrapperClass: 'header__slider',
    nextSelector: '.home__next',
    prevSelector: '.home__prev',
    nextText: '',
    prevText: '',
    pager: false,
    auto: true,
    maxSlides: 1,
    shrinkItems: true,
  });

  $('.about__slider').bxSlider({
    slideSelector: '.about__slide',
    wrapperClass: 'about__slider',
    nextSelector: '.about__next',
    prevSelector: '.about__prev',
    nextText: '',
    prevText: '',
    pager: true,
    auto: true,
    maxSlides: 1,
    shrinkItems: true,
    pagerSelector: '.about__controls-points',
  });
});
