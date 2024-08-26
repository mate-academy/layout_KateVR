'use strict';

import {
  query,
  queryID,
  queryAll,
  resizingWindow,
  changePositionItem,
  changePositionElement,
  classTracking,
  clickClass,
  clickGroup,
  classTrackingAll,
  breakpoint
} from './utils.js';

import {
  eventProcessing,
  movingDots,
  openWindow,
  clickToggleClass,
  clickToggleAll,
  displayCurrent,
  disableClick,
  disableClickAll,
} from './buttons.js';

import { navigation } from './slider.js';
import { experience } from './array_of_data.js';
import { templateHtml } from './templates.js';

import favicon_1 from '../icon/favicons/favicon1.svg';
import favicon_2 from '../icon/favicons/favicon2.svg';
import favicon_3 from '../icon/favicons/favicon3.svg';
// #region animate favicon

  const favicons = [favicon_1, favicon_2, favicon_3];
  let currentIndex = 0;

  function animateFavicon() {
    const favicon = queryID('animate-favicon');
    favicon.href = favicons[currentIndex];
    currentIndex = (currentIndex + 1) % favicons.length;
  };

  setInterval(animateFavicon, 1000);
// #endregion

// #region window "language"
  openWindow('.link-language', 'add', '--active', '.language-page');

  openWindow('.language-page__icon', 'add', '--close', '.language-page');
  openWindow('.language-page__icon', 'remove', '--active', '.language-page');
  classTracking('.language-page__icon','remove', '--close');


  disableClickAll('.language-page__item', '.button');
  clickGroup('.language-page__item', 'remove', '--active', '.language-page');
  clickGroup('.language-page__item', 'remove', '__lock', '.body');
  classTrackingAll('.language-page__item', 'remove', '--close', '.language-page');

  window.addEventListener('DOMContentLoaded', () => {

    (window.innerWidth < breakpoint('--desktop'))
      ? clickGroup('.language-page__item', 'add', '--close', '.language-page')
      : clickGroup('.language-page__item', 'remove', '--close', '.language-page');
  });

  window.addEventListener('resize', () => {

    (window.innerWidth < breakpoint('--desktop'))
      ? clickGroup('.language-page__item', 'add', '--close', '.language-page')
      : clickGroup('.language-page__item', 'remove', '--close', '.language-page');
  });

  clickClass('.language-page__button', '.body', 'toggle', '__lock');
  clickClass('.language-page__button', '.body-wrapper', 'toggle', '--blurred-screen');
  clickClass('.language-page__button', '.language-page__icon-arrow', 'toggle', '--active');
  clickToggleClass('.language-page__button', '.language-page__list');
  disableClick('.language-page__button', '.button');

  clickGroup('.language-page__item', 'remove', '--active', '.language-page__icon-arrow');
  clickGroup('.language-page__item', 'remove', '--active', '.language-page__list');
  clickGroup('.language-page__item', 'remove', '--blurred-screen', '.body-wrapper');

  displayCurrent('.language-page__list', '.language-page__current-language');
// #endregion

// #region window "FAQ"
  openWindow('.link-faq', 'add', '--active', '.faq-page');
  disableClick('.link-faq', '.button');
  clickClass('.link-faq', '.body-wrapper', 'add', '--blurred-screen');

  query('.faq-page__link').innerHTML = query('.header__bottom__link').innerHTML;
  clickToggleAll('.faq-page__block');

  disableClick('.faq-page__icon', '.button');
  openWindow('.faq-page__icon', 'remove', '--active', '.faq-page');
  openWindow('.faq-page__icon', 'remove', '--active', '.help-page');
  openWindow('.faq-page__icon', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');
  clickClass('.faq-page__icon', '.body-wrapper', 'remove', '--blurred-screen');

  disableClick('.faq-page__link', '.button');
  openWindow('.faq-page__link', 'remove', '--active', '.faq-page');
  openWindow('.faq-page__link', 'remove', '--active', '.help-page');
  openWindow('.faq-page__link', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');
  clickClass('.faq-page__link', '.body-wrapper', 'remove', '--blurred-screen');
// #endregion

// #region window "help"
  openWindow('.link-help', 'add', '--active', '.help-page');
  clickClass('.link-help', '.body-wrapper', 'add', '--blurred-screen');
  disableClick('.link-help', '.button');
  openWindow('.help-page__text--link-faq', 'add', '--active', '.faq-page');

  disableClick('.help-page__icon', '.button');
  openWindow('.help-page__icon', 'remove', '--active', '.help-page');
  clickClass('.help-page__icon', '.body-wrapper', 'remove', '--blurred-screen');
  openWindow('.help-page__icon', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');

  disableClick('.help-page__text--link-contact', '.button');
  openWindow('.help-page__text--link-contact', 'remove', '--active', '.help-page');
  clickClass('.help-page__text--link-contact', '.body-wrapper', 'remove', '--blurred-screen');
  openWindow('.help-page__text--link-contact', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');
// #endregion

// #region section "top-bar"

  // animate logo
    document.addEventListener('DOMContentLoaded', () => {
      const letters = queryAll('.top-bar__logo--letter');

      letters.forEach((letter, index) => {
        letter.style.setProperty('--index', index);
      });
    });
// #endregion

// #region section "header"

  // icon open menu
    openWindow('.top-bar__menu', 'add', '--active', '.top-bar__menu', '.drop-down-menu');
    openWindow('.drop-down-menu__icon', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');

  // button "play-video"
    movingDots('.header__link-video--lines', 'dots', 'top');
    movingDots('.header__link-video--lines', 'dots', 'bottom');
    disableClick('.header__link-video--lines', '.button');

    eventProcessing('.header__link-video', 'add', '--active', 'https://www.youtube.com/embed/SvTbB19bvIw?si=C6jgLg3OL_VWxo8Y');
    eventProcessing('.video-link--icon-close', 'remove', '--active');

    disableClick('.video-link--icon-close', '.button');
    resizingWindow('.video-link', '.video-link--resizer');
// #endregion

// #region section "experience"

  // add a template to a document
    query('.experience__content').innerHTML = experience.map(templateHtml).join('');
//#endregion

// #region section "about product"

  // slider buttons
    navigation(query('input[name="next"]'), 'forward');
    navigation(query('input[name="previous"]'), 'back');

  // duplication button "link-video"
    const clone = query('.header__link-video').cloneNode(true);
    query('.about-product__link-video').appendChild(clone);

    eventProcessing('.about-product__link-video', 'add', '--active', 'https://www.youtube.com/embed/SvTbB19bvIw?si=C6jgLg3OL_VWxo8Y');

  // duplication nagivation
    const cloneNavigation = query('.header__navigation').cloneNode(true);
    const cloneDisplayNav = query('.header__display-nav').cloneNode(true);
    const container = query('.about-product__clone-navigation');

    container.appendChild(cloneNavigation);
    container.appendChild(cloneDisplayNav);

  // copying images in the section "images"
    window.addEventListener('DOMContentLoaded', function() {
      let numberCopy = 5;

      // if(window.innerWidth >= breakpoint('--desktop')) {
      //   numberCopy = 5;
      // };

      for(let i=0; i < numberCopy; i++) {
        const clone = query('.about-product__img').cloneNode(true);

        query('.about-product__images').appendChild(clone);
      }
    })
// #endregion

// #region changing resize window broswer and content loaded

window.addEventListener('DOMContentLoaded', () => {
  changePositionItem('--desktop', '.menu', 'appendChild', '.top-bar__container', '.drop-down-menu');
  changePositionItem('--tablet', '.about-product__title', 'prepend', '.about-product__article-1', '.about-product__container');

  changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
  changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');


  clickGroup('.language-page__item', 'remove', '--active', '.language-page__list');
  clickGroup('.language-page__item', 'remove', '--blurred-screen', '.header__container');
});

window.addEventListener('resize', () => {
  changePositionItem('--desktop', '.menu', 'appendChild', '.top-bar__container', '.drop-down-menu');
  changePositionItem('--tablet', '.about-product__title', 'prepend', '.about-product__article-1', '.about-product__container');

  changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
  changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
});
// #endregion
