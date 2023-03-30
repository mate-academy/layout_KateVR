'use strict';

const textArea = document.querySelector('.contact__form-textarea');
// eslint-disable-next-line max-len
const textAreaLabel = document.querySelector('.contact__form-textarea-label');

textArea.addEventListener('focusin', () => {
  textAreaLabel.classList.add('contact__form-textarea-label--active');
});

textArea.addEventListener('focusout', () => {
  textAreaLabel.classList.remove('contact__form-textarea-label--active');
});

// eslint-disable-next-line max-len
document.querySelectorAll('.contact__form-control').forEach(function(formWrapper) {
  const input = formWrapper.querySelector('.contact__form-input');
  const label = formWrapper.querySelector('.contact__form-label');

  if (input) {
    input.addEventListener('focusin', () => {
      label.classList.add('contact__form-label--active');
    });

    input.addEventListener('focusout', () => {
      label.classList.remove('contact__form-label--active');
    });
  };
});
