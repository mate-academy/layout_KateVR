'use strict';

const heroMenu = document.querySelector('.hero__menu');
const heroNav = document.querySelector('.nav');

const languageLink = document.querySelector('.nav__link--lang');
const langBackBtn = document.querySelector('.language-menu__back-btn');
const languageMenu = document.querySelector('.language-menu');

const faqsLink = document.querySelector('.nav__link--faq');
const bottomFaqsLink = document.querySelector('.bottom-nav__link--faq');
const faqsBackBtn = document.querySelector('.faq__back-btn');
const faqs = document.querySelector('.faq');

heroMenu.addEventListener('click', () => {
  heroMenu.classList.toggle('hero__menu--cros-icon');
  heroNav.classList.toggle('hero__nav');
  heroNav.classList.toggle('nav--is-open');
  heroNav.classList.toggle('nav--menu');
});

languageLink.addEventListener('click', () => {
  languageMenu.classList.add('language-menu--is-open');
});

langBackBtn.addEventListener('click', () => {
  languageMenu.classList.remove('language-menu--is-open');
});

faqsLink.addEventListener('click', () => {
  faqs.classList.add('faq--is-open');
});

bottomFaqsLink.addEventListener('click', () => {
  faqs.classList.add('faq--is-open');
});

faqsBackBtn.addEventListener('click', () => {
  faqs.classList.remove('faq--is-open');
});
