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

window.addEventListener('scroll', findScroll);

const button = document.querySelector('.header__button');
const buttonOverlay = document.querySelector('.header__button-overlay');

function findScroll() {
  // eslint-disable-next-line max-len
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // eslint-disable-next-line max-len
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const contactSection = document.querySelector('.contact');
  const contactHeight = contactSection.offsetHeight;
  const heightWOContacts = windowHeight - contactHeight;

  if (heightWOContacts < windowScroll) {
    button.style.display = 'none';
    buttonOverlay.style.display = 'none';
  } else {
    button.style.display = 'inline-flex';
    buttonOverlay.style.display = 'block';
  }
}
