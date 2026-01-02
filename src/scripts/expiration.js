'use strict';

import { clearError, setError } from './form';

const modal = document.querySelector('.card-secure__field--expiration');
const expiration = document.querySelector('.card-secure__input--expiration');
let cursor = 0;

export function configureExpiration() {
  configureCardExpirationEvents();

  configureButtons();
}

function getRaw() {
  return expiration.value.replace(/\D/g, '').slice(0, 4);
}

function format(raw) {
  if (raw.length <= 2) return raw;

  return `${raw.slice(0, 2)} / ${raw.slice(2)}`;
}

function setValue(raw) {
  expiration.value = format(raw);
}

export function getError(raw) {
  if (raw.length !== 4) return 'expirationDateRequired';

  const month = parseInt(raw.slice(0, 2), 10);
  const year = parseInt(raw.slice(2), 10);

  if (month < 1 || month > 12) {
    return 'expirationInvalid';
  }

  const fullYear = 2000 + year;
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  if (fullYear < currentYear || fullYear > currentYear + 20) {
    return 'expirationInvalid';
  }

  if (fullYear === currentYear && month < currentMonth) {
    return 'expirationInvalid';
  }

  return undefined;
}

function configureCardExpirationEvents() {
  configureBeforeinput();

  expiration.addEventListener('input', () => {
    clearError(modal);

    const raw = getRaw();
    cursor = Math.min(cursor, raw.length);
    setValue(raw);
  });

  expiration.addEventListener('blur', () => {
    const error = getError(getRaw());
    if (error) {
      setError(modal, error);
    }
  });

  expiration.addEventListener('focus', () => {
    cursor = getRaw().length;
  });
}

function configureBeforeinput() {
  expiration.addEventListener('beforeinput', (e) => {
    if (!e.data || !/\d/.test(e.data)) {
      return;
    }

    clearError(modal);

    e.preventDefault();

    const raw = getRaw();

    if (raw.length >= 4) {
    }

    const next = raw.slice(0, cursor) + e.data + raw.slice(cursor);
    cursor++;
    setValue(next);
  });
}

function configureButtons() {
  expiration.addEventListener('keydown', (e) => {
    const raw = getRaw();

    switch (e.key) {
      case 'Backspace':
        if (cursor == 0) return;
        e.preventDefault();
        clearError(modal);
        cursor--;
        setValue(raw.slice(0, cursor) + raw.slice(cursor + 1));
        break;

      case 'Delete':
        if (cursor > -raw.length) return;
        e.preventDefault();
        setValue(raw.slice(0, cursor) + raw.slice(cursor + 1));
        break;

      case 'ArrowRight':
        cursor = Math.min(raw.length, cursor + 1);
        render();
        break;
      case 'ArrowLeft':
        cursor = Math.max(0, cursor - 1);
        render();
        break;

      default:
        break;
    }
  });
}
