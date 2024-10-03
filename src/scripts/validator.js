'use strict';

import { query, queryAll } from "./utils.js";

const REQUIRE_TEXT = 'This field is required! Please fill it out.';
export const FORM__ERROR_TEXT = 'Oh! the form is not filled in! Please fill in the fields.';
export const FORM_FILLING_ERROR_TEXT = 'Oh! something went wrong! Please check the correctness of filled fields.';
export const MESSAGE_TEXT = 'Invalid. Only no less two letters and Latin are allowed. Please repeat!';
export const MESSAGE_EMAIL = 'Invalid.For example: global@katvr.com  Please repeat!';
export const MESSAGE_PHONE = 'Invalid. For example: 86057186105373. Please repeat!';
export const MESSAGE_SELECT = 'Invalid. This field is required! Please select from the list.';

export let spanError = [];

class Validator {

  isRequired(value) {
    if(value.trim() !== '') {
      return true;
    } else {
      spanError.push(1);
      return false;
    }
  };

  isName(value) {
    if(/^[a-zA-Z]{2,}$/.test(value)) {
      return true;
    } else {
      spanError.push(2);
      return false;
    }
  };

  isEmail(value) {
    if(/^\w{3,}@\w{3,}\.[a-zA-z]{2,}$/.test(value)) {
      return true;
    } else {
      spanError.push(2);
      return false;
    }
  };

  isPhone(value) {
    if(/^\+?\d{10,}$/.test(value)) {
      return true;
    } else {
      spanError.push(2);
      return false;
    }
  };

  isSelect(value) {
    if(value.trim() !== '') {
      return true;
    } else {
      spanError.push(1);
      return false;
    }
  }
};

const validator = new Validator();

// ===============????????????????

export function validateField(name, validate, message) {

  const labelElement = query(`.contact__form--${name}`);

  const inputElement = query(`input[name="${name}"]`);
  const span = query(`span[data-value="error-${name}"]`);

  const spanForm = query('span[data-value="error-form"]');

  inputElement.addEventListener('input', (event) => {
    event.preventDefault();

    const requiredField = validator.isRequired(inputElement.value);
    const inputValue = validator[validate](inputElement.value);

    if(requiredField !== true) {
      span.textContent = REQUIRE_TEXT;
      span.style.transform = 'scale(1)';
      inputElement.dataset.role = '1';

    } else if(inputValue !== true) {
      span.textContent = message;
      span.style.transform = 'scale(1)';
    }  else {

      setTimeout(function() {
        span.textContent = '';
        spanForm.textContent = '';
      },400);

      spanError = [];
      span.style.transform = 'scale(0)';
      spanForm.style.transform = 'scale(0)';
      inputElement.dataset.role = '0';
      labelElement.style.color = '';
    }
  })
};

export function validateField_2(name, validate, message) {

  // const labelElement = query(`.contact__form--${name}`);

  const inputField = query(`input[name="${name}"]`);

  const span = query(`span[data-value="error-${name}"]`);


  // const spanForm = query('span[data-value="error-form"]');

  inputField.addEventListener('input', (event) => {
    event.preventDefault();

    const requiredField = validator.isRequired(inputField.value);
    const inputValue = validator[validate](inputField.value);

    if(requiredField !== true) {
      span.textContent = REQUIRE_TEXT;
      span.style.transform = 'scale(1)';
      inputField.dataset.role = '1';

    } else if(inputValue !== true) {
      span.textContent = message;
      span.style.transform = 'scale(1)';
    }  else {

      setTimeout(function() {
        span.textContent = '';
      }, 400);

      spanError = [];
      span.style.transform = 'scale(0)';
      inputField.dataset.role = '0';
    }
  })
};

// =======================???????????????



export function validateInput(namefield) {

  const input = query(`input[name="${namefield}"]`);
  const span = query(`span[data-value="error-${namefield}"]`);

  input.addEventListener('input', function () {

    const requiredField = validator.isRequired(input.value);

    if(requiredField !== true) {
      span.textContent = REQUIRE_TEXT;
      span.style.transform = 'scale(1)';
      input.dataset.role = '1';

    } else {

      setTimeout(function() {
        span.textContent = '';
      }, 400);

      spanError = [];
      span.style.transform = 'scale(0)';
      input.dataset.role = '0';
    };
  });
};

export function validField(namefield, validate, message) {

  const input = query(`input[name="${namefield}"]`);
  const span = query(`span[data-value="error-${namefield}"]`);

  input.addEventListener('blur', function () {

    const requiredField = validator.isRequired(input.value);
    const inputValue = validator[validate](input.value);

    if(requiredField !== true) {
      span.textContent = REQUIRE_TEXT;
      span.style.transform = 'scale(1)';
      input.dataset.role = '1';

    } else if(inputValue !== true) {
      span.textContent = message;
      span.style.transform = 'scale(1)';
      input.dataset.role = '1';
    } else {

      setTimeout(function() {
        span.textContent = '';
      }, 400);

      spanError = [];
      span.style.transform = 'scale(0)';
      input.dataset.role = '0';
    };
  });
};

export function validCreditCard(field, stringLength) {
  const input = query(`input[name="${field}"]`);

  input.addEventListener('input', function() {

    if(this.value.length === Number(stringLength)) {
      input.dataset.role = '0';
    } else {
      input.dataset.role = '1';
    };
  });
};

export function onlyLetters(field) {
  const input = query(field);

  input.addEventListener('input', function() {
    this.value = this.value.replace(/\d/g, '');
  });
};

export function onlyNumbers(field) {
  const input = query(field);

  input.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
  });
};

export function validForm(nameFileds) {

  const inputs = queryAll(nameFileds);
  const span = query('span[data-value="error-btn-user-data');


  inputs.forEach(input => {

    let dataValue = parseInt(input.dataset.role);

    console.log(dataValue);


    if(dataValue >= 1) {
      span.textContent = FORM_FILLING_ERROR_TEXT;
      span.style.transform = 'scale(1)';
    } else {

      setTimeout(function() {
        span.textContent = '';
      }, 400);

      span.textContent = '';
      span.style.transform = 'scale(0)';
    }

  });
};
