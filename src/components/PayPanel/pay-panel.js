'use strict';

export function initPayPanel() {
  const expDate = document.getElementById('exp-date');

  if (!expDate) {
    return;
  }

  expDate.addEventListener('input', () => {
    const digits = expDate.value.replace(/\D/g, '').slice(0, 4);
    let formatted = digits;

    if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }

    expDate.value = formatted;
  });

  expDate.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && expDate.value.endsWith('/')) {
      expDate.value = expDate.value.slice(0, -1);
    }
  });
}
