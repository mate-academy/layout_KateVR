'use strict';

const textArea = document.querySelector('.form__textarea');
// eslint-disable-next-line max-len
const textAreaLabel = document.querySelector('.form__textarea-label');

textArea.addEventListener('focusin', () => {
  textAreaLabel.classList.add('form__textarea-label--active');
});

textArea.addEventListener('focusout', () => {
  textAreaLabel.classList.remove('form__textarea-label--active');
});

// eslint-disable-next-line max-len
document.querySelectorAll('.form__control').forEach(function(formWrapper) {
  const input = formWrapper.querySelector('.form__input');
  const label = formWrapper.querySelector('.form__label');

  if (input) {
    input.addEventListener('focusin', () => {
      label.classList.add('form__label--active');
    });

    input.addEventListener('focusout', () => {
      label.classList.remove('form__label--active');
    });
  };
});
