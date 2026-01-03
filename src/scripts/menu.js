'use strict';

import { uiState } from "./uiState";
import { syncOverlay } from "./overlay";

const menuButton = document.querySelector('.button--open-menu');
const menuCloseButton = document.querySelector('.button--close-menu');
const menu = document.querySelector('.page__menu');
const menuLanguage = document.querySelector('.menu__language');
const menuNavigation = document.querySelector('.menu__navigation');

export function addMenu() {
  menuButton.addEventListener('click', () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1280) {
      history.replaceState(null, '', location.pathname + '#menu');
      menu.classList.add('page__menu--opened');

      uiState.menuOpen = true;
      syncOverlay();
    }
  });

  menuCloseButton.addEventListener('click', () => {
    closeMenu();
  });
}

export function closeMenu() {
  history.replaceState(null, '', location.pathname);
  menu.classList.remove('page__menu--opened');

  uiState.menuOpen = false;
  syncOverlay();

  if (menuLanguage.classList.contains('menu--active')) {
    menuLanguage.classList.remove('menu--active');
    menuLanguage.classList.add('menu--inactive');
    menuNavigation.classList.remove('menu--inactive');
    menuNavigation.classList.add('menu--active');
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280 && location.hash === '#menu') {
    closeMenu();
  }
});

window.addEventListener('hashchange', () => {
  closeMenu();
});
