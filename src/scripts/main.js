'use strict';

const heroMenu = document.querySelector('.hero__menu');
const heroNav = document.querySelector('.nav');

const languageLink = document.querySelector('.nav__link--lang');
const langBackBtn = document.querySelector('.language-menu__back-btn');
const languageMenu = document.querySelector('.language-menu');

const faqsLink = document.querySelector('.nav__link--faq');
const bottomFaqsLink = document.querySelector('.bottom-nav__link--faq');
const faqsBackBtn = document.querySelector('.faq__cross-btn');
const faqs = document.querySelector('.faq');

const helpLink = document.querySelector('.nav__link--help');
const helpBottomNavLink = document.querySelector('.bottom-nav__link--help');
const helpCrossBtn = document.querySelector('.help__cross-btn');
const help = document.querySelector('.help');

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

helpLink.addEventListener('click', () => {
  help.classList.add('help--is-open');
});

helpBottomNavLink.addEventListener('click', () => {
  help.classList.add('help--is-open');
});

helpCrossBtn.addEventListener('click', () => {
  help.classList.remove('help--is-open');
});
