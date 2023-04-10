'use strict';

const cardNumberPayFirstInput = document.getElementById('cardNumberPayFirst');
const cardNumberPayIndicator = document.querySelector('.form__card-indicator');

const cardNumberPayAllInputs = document.querySelectorAll('.form__input--card');
const cardNumberPayAllLabel = document.querySelector('.form__label--pay');

cardNumberPayFirstInput.addEventListener('focusout', () => {
  if (cardNumberPayFirstInput.value[0] === '3') {
    // eslint-disable-next-line max-len
    cardNumberPayIndicator.classList.add('form__card-indicator--american-express');

    cardNumberPayIndicator.classList.remove('form__card-indicator--visa');
    cardNumberPayIndicator.classList.remove('form__card-indicator--mastercard');
  }

  if (cardNumberPayFirstInput.value[0] === '4') {
    cardNumberPayIndicator.classList.add('form__card-indicator--visa');

    // eslint-disable-next-line max-len
    cardNumberPayIndicator.classList.remove('form__card-indicator--american-express');
    cardNumberPayIndicator.classList.remove('form__card-indicator--mastercard');
  }

  if (cardNumberPayFirstInput.value[0] === '5') {
    cardNumberPayIndicator.classList.add('form__card-indicator--mastercard');

    // eslint-disable-next-line max-len
    cardNumberPayIndicator.classList.remove('form__card-indicator--american-express');
    cardNumberPayIndicator.classList.remove('form__card-indicator--visa');
  }
});

for (let i = 0; i < cardNumberPayAllInputs.length; i++) {
  cardNumberPayAllInputs[i].addEventListener('input', function() {
    if (this.value.length === 4) {
      const cardNumberPayNextInput = this.nextElementSibling;

      if (cardNumberPayNextInput !== null) {
        cardNumberPayNextInput.focus();
        cardNumberPayAllLabel.classList.add('form__label--active');
      }
    }
  });
}
