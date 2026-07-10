'use strict';

const bodyClassMap = {
  '#menu': 'page__body--with-menu',
  '#lang': 'page__body--with-lang',
  '#help': 'page__body--with-help',
  '#buy': 'page__body--with-buy',
  '#pay': 'page__body--with-pay',
  '#complete': 'page__body--with-complete',
  '#faq': 'page__body--with-faq',
};

const menuClassMap = {
  '#lang': '.lang',
  '#faq': '.faq',
  '#help': '.help',
  '#buy': '.buy',
  '#pay': '.pay',
  '#complete': '.complete',
};

function updatePageState() {
  const hash = window.location.hash;

  Object.values(bodyClassMap).forEach((className) => {
    document.body.classList.remove(className);
  });

  Object.values(menuClassMap).forEach((selector) => {
    document.querySelector(selector)?.classList.remove('page__menu');
  });

  if (bodyClassMap[hash]) {
    document.body.classList.add(bodyClassMap[hash]);
  }

  if (menuClassMap[hash]) {
    document.querySelector(menuClassMap[hash])?.classList.add('page__menu');
  }
}

export function initSideMenu() {
  window.addEventListener('hashchange', updatePageState);
  window.addEventListener('load', updatePageState);
}
