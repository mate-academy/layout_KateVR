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
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = menu.querySelector('.icon--cross');
const menuLanguages = document.querySelector('.menu--languages');
const menuLanguagesOpener = document.querySelector('.menu__languages-opener');
const menuLanguagesBack = menuLanguages.querySelector('.icon--back');
const faq = document.querySelector('.faq');
const headerFaqOpener = document.querySelector('.header__link--faq');
const menuFaqOpener = document.querySelector('.menu__link--faq');
const helpFaqOpener = document.querySelector('.help__link--faq');
const faqCross = faq.querySelector('.icon--cross');
const faqItems = document.querySelectorAll('.faq__item');
const help = document.querySelector('.help');
const headerHelpOpener = document.querySelector('.header__link--help');
const menuHelpOpener = document.querySelector('.menu__link--help');
const helpCross = help.querySelector('.icon--cross');
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

const openFaq = () => {
  faq.classList.add('faq--open');
  document.body.classList.add('page__body--with-menu');
  help.classList.remove('help--open');
};

const openHelp = () => {
  help.classList.add('help--open');
  faq.classList.remove('faq--open');
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

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

menuCross.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});

menuLanguagesOpener.addEventListener('click', () => {
  menuLanguages.classList.add('menu--open');
  menu.classList.remove('menu--open');
});

menuLanguagesBack.addEventListener('click', () => {
  menuLanguages.classList.remove('menu--open');
  menu.classList.add('menu--open');
});

headerFaqOpener.addEventListener('click', () => {
  faq.classList.add('faq--open');
});

headerFaqOpener.addEventListener('click', openFaq);
menuFaqOpener.addEventListener('click', openFaq);
helpFaqOpener.addEventListener('click', openFaq);

faqCross.addEventListener('click', () => {
  faq.classList.remove('faq--open');
  document.body.classList.remove('page__body--with-menu');
});

faqItems.forEach(item => item.querySelector('.faq__item-title')
  .addEventListener('click', (e) => {
    e.target.classList.toggle('faq__item-title--item-opened');

    item.querySelector('.faq__text-wrapper')
      .classList.toggle('faq__text-wrapper--open');
  })
);

headerHelpOpener.addEventListener('click', () => {
  help.classList.add('help--open');
});

headerHelpOpener.addEventListener('click', openHelp);
menuHelpOpener.addEventListener('click', openHelp);

helpCross.addEventListener('click', () => {
  help.classList.remove('help--open');
  document.body.classList.remove('page__body--with-menu');
});
