import { chooseSelectHandler } from "./chooseSelect";

export function formValidation() {
  const contactForm = document.querySelector('.contact__form');
  const contactInputs = document.querySelectorAll('.contact__input');

  const orderForm = document.querySelector('.order__form');
  const orderInputs = document.querySelectorAll('.order__input');
  const requiredOrderInputs = [...orderInputs].filter((input) => {
    return input.hasAttribute('required');
  });
  const orderStages = document.querySelectorAll('.order__item');
  const orderImage = document.querySelector('.order__image');
  const orderInfo = document.querySelector('.order__info');

  const payForm = document.querySelector('.order__pay');
  const payInputs = document.querySelectorAll('.pay__input');

  const countSelect = document.querySelector('.count__select');
  const countList = document.querySelector('.count__list');
  const countItem = document.querySelectorAll('.count__item')[0];
  const amount = document.querySelector('.order__amount');

  const complete = document.querySelector('.order__complete');

  let error = false;

  function errorAction(input, label) {
    error = true;
    input.classList.add('form__input--error');
    label.classList.add('form__label--error');
  }

  function inputValidation(input) {
    const field = input.closest('.form__field');
    const label = field.querySelector('.form__label');

    if (!input.value.trim()) {
      errorAction(input, label);
      label.textContent = `Please, fill your ${normalizeName(input.name)}*`;

      return;
    } else {
      error = false;
      label.textContent = `${input.name[0].toUpperCase()}${normalizeName(input.name).slice(1)}*`;
      input.classList.remove('form__input--error');
      label.classList.remove('form__label--error');
    }

    if (input.name === 'email' && input.value.indexOf('@') === -1) {
      errorAction(input, label);
      label.textContent = `Incorrect format of ${input.name}*`;
    }

    if (input.name === 'phone') {
      const phoneSymbols = '+()- 0123456789';

      for (const char of input.value) {
        if (!phoneSymbols.includes(char)) {
          errorAction(input, label);
          label.textContent = `Incorrect format of ${input.name}*`;
          break;
        }
      }
    }

    if (input.name === 'cardNumber') {
      if (input.value.length < 16) {
        errorAction(input, label);
        label.textContent = `Incorrect format of ${input.name}*`;
      }
      const cardSymbols = ' 0123456789';

      for (const char of input.value) {
        if (!cardSymbols.includes(char)) {
          errorAction(input, label);
          label.textContent = `Incorrect format of ${normalizeName(input.name)}*`;
          break;
        }
      }
    }

    if (input.name === 'expirationDate') {
      if (input.value.length !== 5) {
        errorAction(input, label);
        label.textContent = `Incorrect format of ${input.name}*`;
      }

      const expirationDateSymbols = '/0123456789';

      for (const char of input.value) {
        if (!expirationDateSymbols.includes(char)) {
          errorAction(input, label);
          label.textContent = `Incorrect format of ${normalizeName(input.name)}*`;
          break;
        }
      }
    }

    if (input.name === 'cvv') {
      if (input.value.length !== 3) {
        errorAction(input, label);
        label.textContent = `Incorrect format of ${input.name}*`;
      }

      const cvvSymbols = '0123456789';

      for (const char of input.value) {
        if (!cvvSymbols.includes(char)) {
          errorAction(input, label);
          label.textContent = `Incorrect format of ${input.name}*`;
          break;
        }
      }
    }
  }

  contactInputs.forEach((input) => {
    input.addEventListener('blur', () => {
      inputValidation(input);
    });
  });

  requiredOrderInputs.forEach((input) => {
    input.addEventListener('blur', () => {
      inputValidation(input);
    });
  });

  payInputs.forEach((input) => {
    input.addEventListener('blur', () => {
      inputValidation(input);
    });
  });

  function onSubmitContactForm(eventSubmit) {
    eventSubmit.preventDefault();
    contactInputs.forEach((input) => {
      inputValidation(input);
    });
    if (error) {
      return;
    }
    contactForm.reset();
  }

  function onSubmitOrderForm(eventSubmit) {
    eventSubmit.preventDefault();
    requiredOrderInputs.forEach((input) => {
      inputValidation(input);
    });
    if (error) {
      return;
    }

    orderForm.classList.remove('order__form--active');
    payForm.classList.add('order__pay--active');
    orderStages[0].classList.remove('order__item--active');
    orderStages[1].classList.add('order__item--active');
  }

  function onSubmitPayForm(eventSubmit) {
    eventSubmit.preventDefault();
    payInputs.forEach((input) => {
      inputValidation(input);
    });
    if (error) {
      return;
    }
    payForm.classList.remove('order__pay--active');
    complete.classList.add('order__complete--active');
    orderStages[1].classList.remove('order__item--active');
    orderStages[2].classList.add('order__item--active');
    orderImage.classList.add('order__image--complete');
    orderInfo.classList.add('order__info--complete');

    chooseSelectHandler(countItem, 'count', countSelect, countList);
    amount.textContent = '1200$';

    orderForm.reset();
    payForm.reset();
  }

  contactForm.addEventListener('submit', onSubmitContactForm);
  orderForm.addEventListener('submit', onSubmitOrderForm);
  payForm.addEventListener('submit', onSubmitPayForm);
}

function normalizeName(inputId) {
  let normalizedName = '';

  for (const char of inputId) {
    if (char === char.toUpperCase()) {
      normalizedName += ' ' + char.toLowerCase();
    } else {
      normalizedName += char;
    }
  }

  return normalizedName;
}
