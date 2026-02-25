export function initCardInputs() {
  const cardField = document.querySelector('.form__card');
  const cardInputs = cardField.querySelectorAll('.form__input');
  const expirationDateInput = document.querySelector('#expiration-date');

  const cardBrandElem = document.querySelector('.card-brand');

  [...cardInputs].forEach((input, index) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '');

      if (input.value.length === 4 && cardInputs[index + 1]) {
        cardInputs[index + 1].focus();
      }

      if (index === 0) {
        const firstDigit = +input.value[0];

        cardBrandElem.classList.remove(
          'card-brand--visa',
          'card-brand--mastercard',
        );

        if (!firstDigit) {
          return;
        }

        if (firstDigit >= 0 && firstDigit <= 4) {
          cardBrandElem.classList.add('card-brand--visa');
        } else if (firstDigit >= 5 && firstDigit <= 9) {
          cardBrandElem.classList.add('card-brand--mastercard');
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (
        e.key === 'Backspace' &&
        input.value.length === 0 &&
        cardInputs[index - 1]
      ) {
        cardInputs[index - 1].focus();
      }
    });
  });

  expirationDateInput.addEventListener('input', () => {
    let inputValue = expirationDateInput.value.replace(/\D/g, '');

    if (inputValue.length > 2) {
      inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
    }

    expirationDateInput.value = inputValue;
  });

  expirationDateInput.addEventListener('keydown', (e) => {
    if (expirationDateInput.length === 3 && e.key === 'Backspace') {
      expirationDateInput.value = expirationDateInput.value.slice(0, 2);
    }
  });
}
