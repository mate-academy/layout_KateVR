'use strict';

// Code Block for Menu opening handling
const heroMenu = document.querySelector('.hero__menu');
const heroNav = document.querySelector('.nav');

heroMenu.addEventListener('click', () => {
  heroMenu.classList.toggle('hero__menu--cros-icon');
  heroNav.classList.toggle('hero__nav');
  heroNav.classList.toggle('nav--is-open');
  heroNav.classList.toggle('nav--menu');
});

// Code Block for opening Language Menu
const languageLink = document.querySelector('.nav__link--lang');
const langBackBtn = document.querySelector('.language-menu__back-btn');
const languageMenu = document.querySelector('.language-menu');

languageLink.addEventListener('click', () => {
  languageMenu.classList.add('language-menu--is-open');
});

langBackBtn.addEventListener('click', () => {
  languageMenu.classList.remove('language-menu--is-open');
});

// Code Block for opening faqs Screen
const faqsLink = document.querySelector('.nav__link--faq');
const bottomFaqsLink = document.querySelector('.bottom-nav__link--faq');
const faqsBackBtn = document.querySelector('.faq__cross-btn');
const faqs = document.querySelector('.faq');

faqsLink.addEventListener('click', () => {
  faqs.classList.add('faq--is-open');
});

bottomFaqsLink.addEventListener('click', () => {
  faqs.classList.add('faq--is-open');
});

faqsBackBtn.addEventListener('click', () => {
  faqs.classList.remove('faq--is-open');
});

// Code block for opening help Screen
const helpLink = document.querySelector('.nav__link--help');
const helpBottomNavLink = document.querySelector('.bottom-nav__link--help');
const helpCrossBtn = document.querySelector('.help__cross-btn');
const help = document.querySelector('.help');

helpLink.addEventListener('click', () => {
  help.classList.add('help--is-open');
});

helpBottomNavLink.addEventListener('click', () => {
  help.classList.add('help--is-open');
});

helpCrossBtn.addEventListener('click', () => {
  help.classList.remove('help--is-open');
});

// Code block for handling Purchase Btn;
const navBuyBtn = document.querySelector('.nav__link--buy');
const heroBuyBtn = document.querySelector('.hero__buy');
const crossBtnPurchase = document.querySelector('.buy-product__cross-btn');
const buyProductScreen = document.querySelector('.buy-product');
const placeOrderScreen = document.querySelector('.place-order');
const payOrderScreen = document.querySelector('.pay-order');
const completeOrderScreen = document.querySelector('.complete-order');
const placeOrderBtn = document.querySelector('.place-order__btn');
const payOrderBtn = document.querySelector('.pay-order__btn');
const completeOrderBtn = document.querySelector('.complete-order__btn');

navBuyBtn.addEventListener('click', () => {
  buyProductScreen.classList.add('buy-product--is-active');
  placeOrderScreen.classList.add('place-order--is-active');
});

heroBuyBtn.addEventListener('click', () => {
  buyProductScreen.classList.add('buy-product--is-active');
  placeOrderScreen.classList.add('place-order--is-active');
});

crossBtnPurchase.addEventListener('click', () => {
  buyProductScreen.classList.remove('buy-product--is-active');
  placeOrderScreen.classList.remove('place-order--is-active');
  payOrderScreen.classList.remove('pay-order--is-active');
  completeOrderScreen.classList.remove('complete-order--is-active');
});

placeOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  placeOrderScreen.classList.remove('place-order--is-active');
  payOrderScreen.classList.add('pay-order--is-active');
});

payOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  payOrderScreen.classList.remove('pay-order--is-active');
  completeOrderScreen.classList.add('complete-order--is-active');
});

completeOrderBtn.addEventListener('click', () => {
  buyProductScreen.classList.remove('buy-product--is-active');
  placeOrderScreen.classList.remove('place-order--is-active');
  payOrderScreen.classList.remove('pay-order--is-active');
  completeOrderScreen.classList.remove('complete-order--is-active');
});
