'use strict';

const form = document.getElementById('formContact');
const nam = document.getElementById('nameContact');
const email = document.getElementById('emailContact');
const phone = document.getElementById('phoneContact');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputs();

  if (checkInputs() === true) {
    form.reset();
  }
});

function checkInputs() {
  const namValue = nam.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  let result = true;

  if (namValue === '') {
    setErrorFor(nam, 'Please, fill your name*');
    result = false;
  } else {
    setSuccessFor(nam);
    result = true;
  }

  if (emailValue === '') {
    setErrorFor(email, 'Please, fill your email*');
    result = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Incorrect email format*');
    result = false;
  } else {
    setSuccessFor(email);
    result = true;
  }

  if (phoneValue === '') {
    setErrorFor(phone, 'Please, fill your phone*');
    result = false;
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, 'Incorrect phone format* (123-456-7890)');
    result = false;
  } else {
    setSuccessFor(phone);
    result = true;
  }

  return result;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.form__error');

  errorMessage.innerText = message;

  // eslint-disable-next-line max-len
  formControl.className = 'form__control form__control--error contact__form-control';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form__control';
}

// eslint-disable-next-line no-shadow
function isEmail(email) {
  // eslint-disable-next-line no-useless-escape, max-len
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phon) {
  // eslint-disable-next-line max-len, no-useless-escape
  return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phon);
}
