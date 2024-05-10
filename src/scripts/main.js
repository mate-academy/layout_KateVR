'use strict';

import { burgerFunctionality, stickyHeader } from './modules/header';
import { sliders } from './modules/sliders';
import { techSpecs } from './modules/tech-specs';
import { iframeFn } from './modules/iframeFn';
import { asides } from './modules/asides';

document.addEventListener('DOMContentLoaded', () => {
  burgerFunctionality();
  stickyHeader();
  sliders();
  techSpecs();
  iframeFn();
  asides(
    'header__link--help',
    'popup-help',
    'popup-help__close-btn',
    'popup-help--open',
  );
  asides(
    'hero-bottom__link--help',
    'popup-help',
    'popup-help__close-btn',
    'popup-help--open',
  );
  asides(
    'header__link--language',
    'language-body',
    'language-body__close',
    'language-body--open',
  );
});
