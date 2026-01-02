'use strict';

import { dictionary } from './i18n';

export function clearAllErorrors(modal) {
  modal.querySelectorAll('.form-field').forEach(clearError);
}

export function configureFormValidations(modal) {
  modal.querySelectorAll('.form-field').forEach(initFieldValidation);
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

  const label = field.querySelector('.form-label');
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
  const label = field.querySelector('.form-label');
  const language = getLanguage();

  const error = dictionary[language][errorName];

  label.textContent = error;
  field.classList.add('form-field--error');
}

export function clearError(field) {
  const label = field.querySelector('.form-label');
  const language = getLanguage();

  const originalKey = label.dataset['i18n'];

  label.textContent = dictionary[language][originalKey];
  field.classList.remove('form-field--error');
}

function getLanguage() {
  return document.querySelector('.language-dropdown__selected-label').dataset
    .language;
}
