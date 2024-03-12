'use strict';

const menuOpen = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const body = document.querySelector('.body');

menuOpen.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
  menuOpen.classList.toggle('menu-icon-open');
  body.classList.toggle('page-body');
});

const menuLink = document.querySelectorAll('.menu__link--hide');
const links = Array.from(menuLink);

function removePageBodyOnClick() {
  links.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('page-body');
      menu.classList.remove('menu-open');
    });
  });
}

removePageBodyOnClick(links);

const languageLink = document.querySelector('.menu__link--language');
const languageIconClose = document.querySelector('.language__icon-close');
const languageMenu = document.querySelector('.language');

languageLink.addEventListener('click', () => {
  languageMenu.classList.add('menu-open');
});

languageIconClose.addEventListener('click', () => {
  languageMenu.classList.remove('menu-open');
});

const helpLink = document.querySelector('.menu__link--help');
const helpMenu = document.querySelector('.help');
const helpIconClose = document.querySelector('.help__icon-close');

helpLink.addEventListener('click', () => {
  helpMenu.classList.add('menu-open');
});

helpIconClose.addEventListener('click', () => {
  helpMenu.classList.remove('menu-open');
});

const prev = document.querySelector('.header__link--prev');
const next = document.querySelector('.header__link--next');
const slideOne = document.querySelector('.header__image--one');
const slideTwo = document.querySelector('.header__image--two');
const buttonsAfter = document.querySelector('.header__list--buttons');

next.addEventListener('click', () => {
  slideOne.classList.add('swiper-slide');
  slideTwo.classList.add('swiper-slide');
  next.classList.add('white-color');
  prev.classList.add('gray-color');
  buttonsAfter.classList.add('after-transform');
});

prev.addEventListener('click', () => {
  slideOne.classList.remove('swiper-slide');
  slideTwo.classList.remove('swiper-slide');
  next.classList.remove('white-color');
  prev.classList.remove('gray-color');
  buttonsAfter.classList.remove('after-transform');
});

let distance = 0;
const buttonOne = document.querySelector('.swiper__pagination-bullet--1');
const buttonTwo = document.querySelector('.swiper__pagination-bullet--2');
const buttonThree = document.querySelector('.swiper__pagination-bullet--3');
const buttonFour = document.querySelector('.swiper__pagination-bullet--4');
const buttonFive = document.querySelector('.swiper__pagination-bullet--5');
const swiperSlides = Array.from(document.querySelectorAll('.swiper__slide'));
const aboutPrev = document.querySelector('.about__link--prev');
const aboutNext = document.querySelector('.about__link--next');
const aboutAfter = document.querySelector('.about__list--buttons');
let slideIndex = 0;
const slideCount = swiperSlides.length;

function swiperTransform() {
  swiperSlides.forEach((slide) => {
    slide.style.transform = `translateX(${distance}%)`;
  });
}

function changeDistanceAndTransform() {
  swiperTransform(swiperSlides, distance);
}

buttonOne.addEventListener('click', () => {
  buttonOne.classList.add('pagination__bullet--active');
  buttonTwo.classList.remove('pagination__bullet--active');
  buttonThree.classList.remove('pagination__bullet--active');
  buttonFour.classList.remove('pagination__bullet--active');
  buttonFive.classList.remove('pagination__bullet--active');

  distance = 0;

  changeDistanceAndTransform(distance);
});

buttonTwo.addEventListener('click', () => {
  distance = -100;

  buttonOne.classList.remove('pagination__bullet--active');
  buttonTwo.classList.add('pagination__bullet--active');
  buttonThree.classList.remove('pagination__bullet--active');
  buttonFour.classList.remove('pagination__bullet--active');
  buttonFive.classList.remove('pagination__bullet--active');

  changeDistanceAndTransform(distance);
});

buttonThree.addEventListener('click', () => {
  distance = -200;
  buttonOne.classList.remove('pagination__bullet--active');
  buttonTwo.classList.remove('pagination__bullet--active');
  buttonThree.classList.add('pagination__bullet--active');
  buttonFour.classList.remove('pagination__bullet--active');
  buttonFive.classList.remove('pagination__bullet--active');

  changeDistanceAndTransform(distance);
});

buttonFour.addEventListener('click', () => {
  distance = -300;

  buttonOne.classList.remove('pagination__bullet--active');
  buttonTwo.classList.remove('pagination__bullet--active');
  buttonThree.classList.remove('pagination__bullet--active');
  buttonFour.classList.add('pagination__bullet--active');
  buttonFive.classList.remove('pagination__bullet--active');

  changeDistanceAndTransform(distance);
});

buttonFive.addEventListener('click', () => {
  distance = -400;

  buttonOne.classList.remove('pagination__bullet--active');
  buttonTwo.classList.remove('pagination__bullet--active');
  buttonThree.classList.remove('pagination__bullet--active');
  buttonFour.classList.remove('pagination__bullet--active');
  buttonFive.classList.add('pagination__bullet--active');

  changeDistanceAndTransform(distance);
});

aboutPrev.addEventListener('click', () => {
  if (distance < 0) {
    distance += 100;
    changeDistanceAndTransform();
  }
  aboutAfter.classList.remove('after-transform');
  aboutPrev.classList.remove('gray-color');
  aboutNext.classList.remove('white-color');
});

aboutNext.addEventListener('click', () => {
  if (distance > -400) {
    distance -= 100;
    changeDistanceAndTransform();
  }
  aboutAfter.classList.add('after-transform');
  aboutPrev.classList.add('gray-color');
  aboutNext.classList.add('white-color');
});

aboutPrev.addEventListener('click', showPreviousSlide);
aboutNext.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  // slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slideIndex -= 1;

  if (slideIndex < 0) {
    slideIndex = 0;
  }
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex += 1;

  if (slideIndex > slideCount - 1) {
    slideIndex = slideCount - 1;
  }
  updateSlider();
}

function numberSlide() {
  document.querySelector('.about__number').textContent = `${slideIndex + 1}`;
}

function updateSlider() {
  swiperSlides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    }
  });
  numberSlide();
}

const techButtonOne = document.querySelector('.tech__button--1');
const techButtonTwo = document.querySelector('.tech__button--2');
const techButtonThree = document.querySelector('.tech__button--3');
const techBlockOne = document.querySelector('.tech__item--1');
const techBlockTwo = document.querySelector('.tech__item--2');
const techBlockThree = document.querySelector('.tech__item--3');

techButtonOne.addEventListener('click', () => {
  techBlockOne.classList.toggle('display-flex');
  techButtonOne.classList.toggle('gray-button');
});

techButtonTwo.addEventListener('click', () => {
  techBlockTwo.classList.toggle('display-flex');
  techButtonTwo.classList.toggle('gray-button');
});

techButtonThree.addEventListener('click', () => {
  techBlockThree.classList.toggle('display-flex');
  techButtonThree.classList.toggle('gray-button');
});

const video = document.querySelector('.video');
const iconClose = document.querySelector('.video__icon-close');
const headerButton = document.querySelector('.header__video-button');
const aboutButton = document.querySelector('.about__video-button');

headerButton.addEventListener('click', () => {
  video.classList.add('display-block');
  iconClose.classList.add('display-block');
  body.classList.add('page-body');
});

aboutButton.addEventListener('click', () => {
  video.classList.add('display-block');
  iconClose.classList.add('display-block');
  body.classList.add('page-body');
});

iconClose.addEventListener('click', () => {
  video.currentTime = 0;
  video.pause();
});
