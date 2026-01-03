'use strict';

import { configureDropdown, syncUIDropdown } from './dropdown';
import {
  createCountryCityDropdown,
  loadCitiesChunked,
} from './country-city-dropdown';
import {
  configureFormValidations,
  clearAllErorrors,
  validateField,
  setError,
  clearError,
} from './form';
import { closeModals } from './modal';
import { configureCardEvents, clearCardInput } from './card';
import { getError } from './expiration';

const modal = document.querySelector('.modal--payment');
const steps = modal.querySelectorAll('.payment__step');
const indicators = modal.querySelectorAll('.payment__step-indicator');
const paymentHomepageButton = document.querySelector(
  '.payment__homepage-button',
);
const closeButton = modal.querySelector('.modal__close--payment');

const paymentOrderPriceBlocks = modal.querySelectorAll('.payment__order-price');
const stepValidators = {
  order: validateOrderData,
  payment: validatePaymentData,
};

let currentStep = 0;

export function initPayments() {
  renderPaymentStep();

  document.addEventListener('DOMContentLoaded', () => {
    createCountryCityDropdown();
  });

  paymentOrderPriceBlocks.forEach((block) => {
    mountPaymentOrderPrice(block);
  });

  const quantityDropdowns = modal.querySelectorAll('.quantity-dropdown');

  quantityDropdowns.forEach((quantityDropdown) => {
    configureDropdown(quantityDropdown, 'quantity', 'quantity', '1', [
      configurePrice,
    ]);
  });

  configurePaymentNextButton();

  configureFormValidations(modal);

  configurePaymentExitButton();
  configureCardEvents();
  configureCvv();
  configurePhone();

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1281) {
      renderPaymentStep();
    }
  });

  closeButton.addEventListener('click', () => {
    cleanModal();
  });
}

function configurePaymentNextButton() {
  const buttons = modal.querySelectorAll('.payment-next__button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const isValid = validateAllFields();

      if (isValid && currentStep < steps.length - 1) {
        currentStep++;
        renderPaymentStep();
      }
    });
  });
}

function configurePrice(quantity) {
  const amounts = modal.querySelectorAll('.payment__price-amount');

  amounts.forEach((amount) => {
    amount.textContent = quantity * 1200 + '$';
  });

  const quantityDropdowns = modal.querySelectorAll('.quantity-dropdown');

  quantityDropdowns.forEach((quantityDropdown) => {
    syncUIDropdown('quantity', 'quantity', quantity, quantityDropdown);
  });
}

function renderPaymentStep() {
  steps.forEach((step, index) => {
    step.classList.toggle('payment__step--active', index === currentStep);
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      'payment__step-indicator--active',
      index === currentStep,
    );
    indicator.style.setProperty('--step', currentStep);
  });

  if (window.innerWidth >= 1280) {
    moveStepDot();
  }
}

function configurePaymentExitButton() {
  paymentHomepageButton.addEventListener('click', () => {
    cleanModal();
  });
}

function mountPaymentOrderPrice(container) {
  const template = document.getElementById('quantity-dropdown-template');

  const dropdown = template.content.cloneNode(true);

  container.prepend(dropdown);
}

function validateAllFields() {
  const activeStep = modal.querySelector('.payment__step--active');
  const stepType = activeStep.dataset.step;

  const validator = stepValidators[stepType];

  if (!validator) {
    return true;
  }

  return validator(activeStep);
}

function validateOrderData(activeStep) {
  let isValid = true;

  activeStep.querySelectorAll('.form-field').forEach((field) => {
    const fieldIsValid = validateField(field);

    if (!fieldIsValid) {
      isValid = false;
    }
  });

  const cityField = modal.querySelector('.city-dropdown');

  const chosenCity = modal.querySelector('.city-dropdown__selected-label');

  if (chosenCity.textContent.trim().length === 0) {
    isValid = false;
    setError(cityField, 'cityRequired');
  } else {
    clearError(cityField);
  }

  return isValid;
}

function validatePaymentData(activeStep) {
  let isValid = true;

  activeStep.querySelectorAll('.form-field').forEach((field) => {
    const fieldIsValid = validateField(field);

    if (!fieldIsValid) {
      isValid = false;
    }
  });

  const cardField = activeStep.querySelector('.card__form-field');
  const cardValue = cardField.querySelector('input').value;

  if (cardValue.length < 16) {
    setError(cardField, 'cardNumberRequired');
    isValid = false;
  }

  const cvvField = activeStep.querySelector('.card-secure__field--cvv');
  const cvvValue = cvvField.querySelector('input').value;
  if (cvvValue.length < 3) {
    setError(cvvField, 'cvvRequired');
    isValid = false;
  } else {
    clearError(cvvField);
  }

  const expirationField = activeStep.querySelector(
    '.card-secure__field--expiration',
  );
  const expirationValue = expirationField
    .querySelector('input')
    .value.replace(/\D/g, '')
    .slice(0, 4);
  const error = getError(expirationValue);

  if (error) {
    setError(expirationField, error);
    isValid = false;
  }

  return isValid;
}

function configureCvv() {
  const cvvField = modal.querySelector('.card-secure__field--cvv');
  const cvvInput = cvvField.querySelector('input');

  cvvInput.addEventListener('input', () => {
    clearError(cvvField);

    cvvInput.value = cvvInput.value.replace(/\D/g, '');
  });

  cvvInput.addEventListener('blur', () => {
    const cvv = cvvInput.value;
    if (cvv.length < 3) {
      setError(cvvField, 'cvvRequired');
    }
  });
}

function configurePhone() {
  const phoneField = document.getElementById('phone');

  phoneField.addEventListener('input', () => {
    phoneField.value = phoneField.value.replace(/\D/g, '');
  });
}

function moveStepDot() {
  const active = modal.querySelector('.payment__step-indicator--active');
  const stepBar = modal.querySelector('.payment__step-bar');

  if (!active || !stepBar) return;

  const barRect = stepBar.getBoundingClientRect();
  const textRect = active.getBoundingClientRect();

  const centerX = textRect.left + textRect.width / 2 - barRect.left - 4 / 2;

  active.style.setProperty('--dot-x', `${centerX}px`);
}

function cleanModal() {
  closeModals();
  currentStep = 0;
  renderPaymentStep();
  configurePrice('1');
  clearAllErorrors(modal);
  const country = document.querySelector('.country-dropdown');
  syncUIDropdown('country', 'country', 'UA', country);
  loadCitiesChunked('UA');
  clearCardInput();

  const forms = modal.querySelectorAll('.form');

  forms.forEach((form) => {
    if (form) {
      form.reset();
    }
  });
}
