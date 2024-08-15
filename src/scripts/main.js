'use strict';

import {
  query,
  queryAll,
  queryID,
  classHtml,
  resizingWindow,
  breakpoint,
  changePositionItem,
  changePositionElement,
} from './utils.js';

import { eventProcessing, movingDots } from './buttons.js';
import { navigation } from './slider.js';

// #region animate logo
  document.addEventListener('DOMContentLoaded', () => {
    const letters = queryAll('.top-bar__logo--letter');

    letters.forEach((letter, index) => {
      letter.style.setProperty('--index', index);
    });
  });
// #endregion

// #region animate favicon
  import favicon_1 from '../icon/favicons/favicon1.svg';
  import favicon_2 from '../icon/favicons/favicon2.svg';
  import favicon_3 from '../icon/favicons/favicon3.svg';

  const favicons = [favicon_1, favicon_2, favicon_3];
  let currentIndex = 0;

  function animateFavicon() {
    const favicon = queryID('animate-favicon');
    favicon.href = favicons[currentIndex];
    currentIndex = (currentIndex + 1) % favicons.length;
  };

  setInterval(animateFavicon, 1000);
// #endregion

// #region icon open menu
  query('.top-bar__menu').addEventListener('click', () => {
    classHtml('.top-bar__menu', 'add', '--active');
    classHtml('.drop-down-menu', 'add', '__active');
    classHtml('.body', 'add', '__lock');

    // queryAll('top-bar__menu--icon').forEach((item) => {
      //   item.classList.add('top-bar__menu--active');
      // });
  });
// #endregion

// #region icon close menu
  query('.drop-down-menu__icon').addEventListener('click', () => {
    classHtml('.top-bar__menu', 'remove', '--active');
    classHtml('.drop-down-menu', 'remove', '__active');
    classHtml('.body', 'remove', '__lock');

    //  queryAll('top-bar__menu--icon').forEach((item) => {
    //   item.classList.remove('top-bar__menu--active');
    //  });
  });
// #endregion

// #region button "play-video"
  movingDots('.header__link-video--lines', 'dots', 'top');
  movingDots('.header__link-video--lines', 'dots', 'bottom');

  eventProcessing('.header__link-video', 'add', '--active', 'https://www.youtube.com/embed/SvTbB19bvIw?si=C6jgLg3OL_VWxo8Y');
  eventProcessing('.header__video-link--icon-close', 'remove', '--active', '');

  resizingWindow('.header__video-link', '.header__video-link--resizer');
//#endregion

// #region changing the position of elements
  window.addEventListener('DOMContentLoaded', () => {
    changePositionItem('--desktop', '.menu', '.top-bar', '.drop-down-menu');

    changePositionElement('--desktop', '.menu__list', 'li-1', '.top-bar__box');
    changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
    changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
    // location.reload;
  });

  window.addEventListener('resize', () => {
    changePositionItem('--desktop', '.menu', '.top-bar', '.drop-down-menu');

    changePositionElement('--desktop', '.menu__list', 'li-1', '.top-bar__box');
    changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
    changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
  });
// #endregion

// #region slider
  navigation(query('input[name="next"]'), 'forward');
  navigation(query('input[name="previous"]'), 'back');
// #endregion
