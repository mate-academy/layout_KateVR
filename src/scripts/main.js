'use strict';

// Code Block for Menu opening handling
const heroMenuIcon = document.querySelector('.hero__menu-icon');
const heroNav = document.querySelector('.nav');

heroMenuIcon.addEventListener('click', () => {
  heroMenuIcon.classList.toggle('hero__menu-icon--normal');
  heroMenuIcon.classList.toggle('hero__menu-icon--cross');
  heroNav.classList.toggle('hero__nav');
  heroNav.classList.toggle('nav--is-open');
  heroNav.classList.toggle('nav--menu');
});

// Code Block for closing Menu on focusout
// heroNav.addEventListener('focusout', () => {
//   heroMenuIcon.click();
// });

// Code Block for opening Language Menu
const languageLink = document.querySelector('.nav__link--lang');
const langBackBtn = document.querySelector('.language-menu__back-btn');
const languageMenu = document.querySelector('.language-menu');
const languageLinkEnglish = document.querySelector('.hero__language-en');

languageLink.addEventListener('click', () => {
  languageMenu.classList.add('language-menu--is-open');
});

languageLinkEnglish.addEventListener('click', () => {
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
const featuresBuyBtn = document.querySelector('.features__btn-buy');

navBuyBtn.addEventListener('click', () => {
  buyProductScreen.classList.add('buy-product--is-active');
  placeOrderScreen.classList.add('place-order--is-active');
});

featuresBuyBtn.addEventListener('click', () => {
  buyProductScreen.classList.add('buy-product--is-active');
  window.scrollTo(0, 0);
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

const formSubmitContact = document.querySelector('.contact-us__btn');
const contactName = document.querySelector('#contact-name');
const contactEmail = document.querySelector('#contact-email');
const contactPhone = document.querySelector('#contact-phone');

formSubmitContact.addEventListener('click', (event) => {
  // event.preventDefault();
  window.alert(`{
    Name: ${contactName.value},
    Email: ${contactEmail.value},
    Phone: ${contactPhone.value},
  }`);

  contactName.value = '';
  contactEmail.value = '';
  contactPhone.value = '';
});
