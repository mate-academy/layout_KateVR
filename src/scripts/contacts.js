'use strict';

const modal = document.querySelector('.contacts');
const button = modal.querySelector('.contacts__button');

import { dictionary } from './i18n';

export function configureContactsFormValidations() {
  modal.querySelectorAll('.contacts__form-field').forEach(initFieldValidation);

  button.addEventListener('click', () => {
    let isValid = true;

    modal.querySelectorAll('.contacts__form-field').forEach((field) => {
      const validField = validateField(field);

      if (!validField) {
        isValid = false;
      }
    });

    console.log(isValid);

    if (!isValid) return;

    if (isValid) {
      modal.querySelector('.contacts__form').reset();
      clearAllErorrs();
    }
  });
}

export function clearAllErorrs() {
  modal.querySelectorAll('.contacts__form-field').forEach(clearError);
}

function initFieldValidation(field) {
  const input = field.querySelector('.form__input');
  if (input) {
    input.addEventListener('blur', () => {
      validateField(field);
    });

    input.addEventListener('input', () => {
      clearError(field);
    });
  }
}

export function validateField(field) {
  const input = field.querySelector('.form__input');
  if (!input) return true;

  const label = field.querySelector('.contacts__form-label');
  const value = input.value;

  clearError(field);

  if (input.required && !value.trim()) {
    setError(field, label.getAttribute('data-error-required'));
    return false;
  }

  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    setError(field, label.getAttribute('data-error-format'));
    return false;
  }

  return true;
}

export function setError(field, errorName) {
  const label = field.querySelector('.contacts__form-label');
  const language = getLanguage();

  const error = dictionary[language][errorName];

  label.textContent = error;
  field.classList.add('contacts__form-field--error');
}

export function clearError(field) {
  const label = field.querySelector('.contacts__form-label');
  const language = getLanguage();

  const originalKey = label.dataset['i18n'];

  label.textContent = dictionary[language][originalKey];
  field.classList.remove('contacts__form-field--error');
}

function getLanguage() {
  return document.querySelector('.language-dropdown__selected-label').dataset
    .language;
}
