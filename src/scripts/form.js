import { pattern } from './constants';
import { phone } from './constants';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');
const textarea = document.querySelector('.form__textarea');
const button = document.querySelector('.form__button');

const emailValidation = (email) => pattern.test(email);

const fields = Array.from(inputs).map((input) => ({
  input,
  span: document.querySelector(`.form__span-${input.name}`),
}));

const toggleButtonState = () => {
  const allFilled = fields.every(({ input }) => input.value.trim() !== '');
  button.disabled = !allFilled;
};

fields.forEach(({ input, span }) => {
  input.addEventListener('input', () => {
    if (span.classList.contains('form__input--error')) {
      span.textContent = `${input.name[0].toUpperCase()}${input.name.slice(1)}*`;
      span.classList.remove('form__input--error');
      input.classList.remove('form__input--error');
    }

    toggleButtonState();
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  fields.forEach(({ input, span }) => {
    const value = input.value.trim();
    function setError(input, span, message) {
      span.textContent = message;
      span.classList.add('form__input--error');
      input.classList.add('form__input--error');
      return false;
    }

    if (!value) {
      isValid = setError(input, span, `Please, fill your ${input.name}*`);
    } else if (input.name === 'email' && !emailValidation(value)) {
      isValid = setError(input, span, 'Incorrect format your email*');
    } else if (input.name === 'phone' && !phone.test(value)) {
      isValid = setError(input, span, 'Incorrect format your number phone*');
    }
  });

  if (!isValid) return;

  fields.forEach(({ input }) => input.value = '');
  textarea.value = '';
  button.disabled = true;

  // here can add form submission logic
  //...
});
