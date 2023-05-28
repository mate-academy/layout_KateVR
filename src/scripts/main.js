'use strict';

const languagesOpener = document.querySelector('.header__languages-opener');
const languagesList = document.querySelector('.header__languages-list');
const languagesItems = document.querySelectorAll('.header__language');
const currentLanguage = document.querySelector('.header__current-language');
const headerSlider = document.querySelector('.header__slider');
const headerSlides = document.querySelector('.header__slides');
const headerPreviousButton = document.querySelector(
  '.header__slider-button--previous'
);
const headerNextButton = document.querySelector('.header__slider-button--next');
const headerSlidesTranslateStep = 50;
let activeSlide = 0;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

const moveSlides = () => {
  if (activeSlide < 0) {
    activeSlide = 0;

    return;
  }

  if (activeSlide > 1) {
    activeSlide = 1;

    return;
  }

  headerSlides.style.transform = `
    translateX(-${activeSlide * headerSlidesTranslateStep}%)
  `;
};

languagesOpener.addEventListener('click', (e) => {
  e.stopPropagation();
  languagesList.classList.toggle('header__languages-list--open');
  languagesOpener.classList.toggle('header__languages-opener--opened-list');
});

document.addEventListener('click', () => {
  languagesList.classList.remove('header__languages-list--open');
  languagesOpener.classList.remove('header__languages-opener--opened-list');
});

languagesItems.forEach(item => item.addEventListener('click', (e) => {
  currentLanguage.innerText = e.target.innerText;
}));

headerPreviousButton.addEventListener('click', () => {
  activeSlide--;

  moveSlides();

  headerNextButton.classList.remove('header__slider-button--not-active');

  if (activeSlide === 0) {
    headerPreviousButton.classList.add('header__slider-button--not-active');
  }
});

headerNextButton.addEventListener('click', () => {
  activeSlide++;

  moveSlides();

  headerPreviousButton.classList.remove('header__slider-button--not-active');

  if (activeSlide === 1) {
    headerNextButton.classList.add('header__slider-button--not-active');
  }
});

headerSlider.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
});

headerSlider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
    if (startX > endX) {
      activeSlide++;
    }

    if (startX < endX) {
      activeSlide--;
    }

    moveSlides();
  }
});
