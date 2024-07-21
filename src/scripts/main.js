'use strict';

// #region animate favicon
import favicon_1 from '../icon/favicons/favicon1.svg';
import favicon_2 from '../icon/favicons/favicon2.svg';
import favicon_3 from '../icon/favicons/favicon3.svg';

  const favicons = [favicon_1, favicon_2, favicon_3];
  let currentIndex = 0;

  function animateFavicon() {
    const favicon = document.getElementById('animate-favicon');
    favicon.href = favicons[currentIndex];
    currentIndex = (currentIndex + 1) % favicons.length;
  };

  setInterval(animateFavicon, 1000);
  // #endregion

  import { query, queryAll, classHtml, movingDots } from './utils.js';

// #region animate logo
  document.addEventListener('DOMContentLoaded', () => {
    const letters = queryAll('top-bar__logo--letter');

    letters.forEach((letter, index) => {
      letter.style.setProperty('--index', index);
    });
  });
// #endregion

// #region icon menu
  query('top-bar__menu').addEventListener('click', () => {
    classHtml('top-bar__menu', 'add', 'top-bar__menu--active');
    classHtml('drop-down-menu', 'add', 'drop-down-menu__active');
    classHtml('body', 'add', 'boby__lock');

    // queryAll('top-bar__menu--icon').forEach((item) => {
      //   item.classList.add('top-bar__menu--active');
      // });
    });

    // icon close menu
    query('drop-down-menu__icon').addEventListener('click', () => {
    classHtml('top-bar__menu', 'remove', 'top-bar__menu--active');
    classHtml('drop-down-menu', 'remove', 'drop-down-menu__active');
    classHtml('body', 'remove', 'boby__lock');

  //  queryAll('top-bar__menu--icon').forEach((item) => {
  //   item.classList.remove('top-bar__menu--active');
  //  });
  });
// #endregion

  movingDots('header__link-video--lines', 'header__link-video--dots', 'top');
  movingDots('header__link-video--lines', 'header__link-video--dots', 'bottom');
