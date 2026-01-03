'use strict';

import { clearError, setError } from './form';
import { configureExpiration } from './expiration';

const modal = document.querySelector('.card__form-field');
const input = modal.querySelector('.card__input input');
const visual = modal.querySelector('.card-visual');
const caret = modal.querySelector('.card-visual__caret');
const digits = modal.querySelectorAll('.card-visual__digit');
const groups = modal.querySelectorAll('.card-visual__group');
const logo = modal.querySelector('.card-visual__logo');

let cursorIndex = 0;

function getRaw() {
  return input.value.replace(/\D/g, '').slice(0, 16);
}

export function clearCardInput() {
  cursorIndex = 0;
  updateDigits('');
  groups.forEach((group) => {
    group.classList.remove('active');
  });
}

export function updateDigits(raw) {
  digits.forEach((el, i) => {
    if (raw[i]) {
      el.textContent = raw[i];
      el.classList.add('card-visual__digit--filled');
      el.classList.remove('card-visual__placeholder');
    } else {
      el.textContent = 0;
      el.classList.remove('card-visual__digit--filled');
      el.classList.add('card-visual__placeholder');
    }
  });
}

function updateActiveGroup(index) {
  const activeGroupIndex = Math.min(Math.floor(index / 4), 3);
  groups.forEach((group, i) => {
    group.classList.toggle('active', i === activeGroupIndex);
  });
}

function caretX(index) {
  const visualRect = visual.getBoundingClientRect();

  if (index >= digits.length) {
    const lastDigitRect = digits[digits.length - 1].getBoundingClientRect();
    return lastDigitRect.right - visualRect.left;
  }

  const digitRect = digits[index].getBoundingClientRect();
  return digitRect.left - visualRect.left;
}

function render() {
  const raw = getRaw();
  updateDigits(raw);
  updateActiveGroup(cursorIndex);
  caret.style.transform = `translateX(${caretX(cursorIndex)}px)`;

  logo.classList.remove('card-visual__logo--visa');
  logo.classList.remove('card-visual__logo--mastercard');

  if (/^4/.test(raw)) {
    logo.classList.add('card-visual__logo--visa');
  } else if (
    /^(5[1-5])/.test(raw) ||
    /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(raw)
  ) {
    logo.classList.add('card-visual__logo--mastercard');
  }

  clearError(modal);
}

function configureDigits() {
  digits.forEach((digit, index) => {
    digit.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      input.focus();

      const rawLength = getRaw().length;

      cursorIndex = Math.min(index, rawLength);

      render();
    });
  });
}

export function configureCardEvents() {
  input.addEventListener('focus', () => {
    visual.classList.add('card-visual--focused');
    cursorIndex = getRaw().length;
    render();
  });

  input.addEventListener('blur', () => {
    visual.classList.remove('card-visual--focused');
    groups.forEach((group) => {
      group.classList.remove('active');
    });
    validateCard();
  });

  input.addEventListener('input', () => {
    const raw = getRaw();
    cursorIndex = Math.min(cursorIndex, raw.length);
    render();
  });

  configureBeforeInput();
  configureButtons();
  configureDigits();

  configureExpiration();
}

function configureBeforeInput() {
  input.addEventListener('beforeinput', (e) => {
    if (!e.data || !/^\d$/.test(e.data)) return;

    e.preventDefault();

    const raw = getRaw();
    if (raw.length >= 16) return;

    const next = raw.slice(0, cursorIndex) + e.data + raw.slice(cursorIndex);

    input.value = next;
    cursorIndex++;
    render();
  });
}

function configureButtons() {
  input.addEventListener('keydown', (e) => {
    const raw = getRaw();

    switch (e.key) {
      case 'Backspace':
        if (cursorIndex == 0) return;
        e.preventDefault();
        input.value = raw.slice(0, cursorIndex - 1) + raw.slice(cursorIndex);
        cursorIndex--;
        render();
        break;

      case 'Delete':
        if (cursorIndex > -raw.length) return;
        e.preventDefault();
        input.value - raw.slice(0, cursorIndex) + raw.slice(cursorIndex + 1);
        render();
        break;

      case 'ArrowRight':
        cursorIndex = Math.min(raw.length, cursorIndex + 1);
        render();
        break;
      case 'ArrowLeft':
        cursorIndex = Math.max(0, cursorIndex - 1);
        render();
        break;

      default:
        break;
    }
  });
}

function validateCard() {
  const raw = getRaw();

  if (raw.length < 16) {
    setError(modal, 'cardNumberRequired');
  }
}
