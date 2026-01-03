'use strict';

import { addSliderForHeader } from './header-slider';
import { setModals } from './modal';
import {
  setLanguageButtons,
  syncLanguage,
  setChangingLanguage,
} from './language';
import { addMenu } from './menu';
import { configureOverlay } from './overlay-click';
import { initPayments } from './payment';
import { configureMoreSection } from './more';
import { configureSliderAbout } from './slider-about';
import { configureTechButtons } from './tech';
import { configureContactsFormValidations } from './contacts';

const defaultLanguage = 'en';

configureOverlay();
setLanguageButtons();
syncLanguage(defaultLanguage);
setChangingLanguage();

document.addEventListener('DOMContentLoaded', function () {
  addSliderForHeader();
});

setModals();

addMenu();

const faqTitle = document.querySelectorAll('.faq__card-title-wrapper');

faqTitle.forEach((title) => {
  title.addEventListener('click', () => {
    const closestCard = title.closest('.faq__card');

    closestCard.classList.toggle('faq__card--active');
  });
});


initPayments();
configureMoreSection();

configureSliderAbout();

configureTechButtons();

configureContactsFormValidations();