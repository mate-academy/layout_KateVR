'use strict';

import { dictionary } from './i18n';
import { configureDropdown } from './dropdown';

const languageOpenerButton = document.querySelector('.button__language-opener');
const languageCloseButton = document.querySelector('.button__language--close');
const menuNavigation = document.querySelector('.menu__navigation');
const menuLanguage = document.querySelector('.menu__language');
const languageButtons = document.querySelectorAll('.menu__language-button');
const i18nElements = document.querySelectorAll('[data-i18n]');
const languageBlock = document.querySelector('.language-dropdown');
const options = document.querySelectorAll('.language-dropdown__option');

export function setLanguageButtons() {
  languageOpenerButton.addEventListener('click', () => {
    menuNavigation.classList.add('menu--inactive');
    menuLanguage.classList.remove('menu--inactive');
    menuLanguage.classList.add('menu--active');
  });

  languageCloseButton.addEventListener('click', () => {
    menuNavigation.classList.remove('menu--inactive');
    menuLanguage.classList.add('menu--inactive');
    menuLanguage.classList.remove('menu--active');
  });
}

export function syncLanguage(language) {
  syncMenuLanguageUI(language);
  syncLanguageUIDropdown(language);
}

export function setChangingLanguage() {
  setChangingLanguageMenu();

  configureDropdown(languageBlock, 'language', 'language', 'en', [
    syncLanguage,
    setLanguage,
  ]);
}

function setChangingLanguageMenu() {
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      console.log(language);
      setLanguage(language);
      syncLanguage(language);
    });
  });
}

function syncMenuLanguageUI(language) {
  languageButtons.forEach((button) => {
    if (button.dataset.language === language) {
      button.classList.add('menu__language-button--selected');
    } else {
      button.classList.remove('menu__language-button--selected');
    }
  });
}

function syncLanguageUIDropdown(language) {
  const label = languageBlock.querySelector(
    '.language-dropdown__selected-label',
  );

  label.dataset.language = language;

  options.forEach((opt) => {
    const isSelected = opt.dataset.language === language;

    opt.hidden = isSelected;

    if (isSelected) {
      label.textContent = opt.textContent;
    }
  });
}

function setLanguage(lang) {
  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[lang][key]) {
      el.textContent = dictionary[lang][key];
    }
  });
}
