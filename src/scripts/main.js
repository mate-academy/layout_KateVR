'use strict';

import '../styles/main.scss';
import { initSlider } from './slider.js';
import { initTechSpecs } from './tech.js';
import { initMenu } from './menu.js';
import { initScrollObserver } from './observer.js';
import { initSelect } from './select.js';
import { initStepper } from './stepper.js';
import { initCheckoutToggle } from './checkout.js';
import { initForm } from './form.js';
import { initLocationSelects } from './country-select.js';
import { initQuantityPrice } from './quantity.js';
import { initPaymentForm } from './payment.js';
import { initModals } from './modals.js';
import { initVideoModal } from './video.js';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initMenu();
  initScrollObserver();
  initSelect();
  initCheckoutToggle();
  initLocationSelects();
  initQuantityPrice();
  initTechSpecs();
  initModals();
  initVideoModal();


  const { updateStepper } = initStepper();

  initForm((form) => {
    if (form.classList.contains('order__form')) {
      updateStepper(1);
    }
  });

  initPaymentForm((form) => {
    console.log('STEP 3 TRIGGER');
    if (form.classList.contains('pay__form')) {
      updateStepper(2);
    }
  });
});
