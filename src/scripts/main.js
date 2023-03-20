'use strict';

const btn = document.querySelectorAll('.tech__button');

const btnFirst = document.querySelector('.tech__button--1');
const btnFirstMsg = document.querySelector('.tech__button-message--1');

const btnSecond = document.querySelector('.tech__button--2');
const btnSecondMsg = document.querySelector('.tech__button-message--2');

const btnThird = document.querySelector('.tech__button--3');
const btnThirdMsg = document.querySelector('.tech__button-message--3');

const form = document.getElementById('form');
const nam = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const textArea = document.querySelector('.contact__form-textarea');
// eslint-disable-next-line max-len
const textAreaLabel = document.querySelector('.contact__form-textarea-label');

btn.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.innerText === '-') {
      button.innerText = '+';
      button.classList.remove('tech__button--pressed');
    } else {
      button.innerText = '-';
      button.classList.add('tech__button--pressed');
    }
  });
});

btnFirst.addEventListener('click', () => {
  btnFirstMsg.classList.toggle('tech__button-message--visible');

  btnSecond.classList.remove('tech__button--pressed');
  btnSecondMsg.classList.remove('tech__button-message--visible');
  btnSecond.innerText = '+';

  btnThird.classList.remove('tech__button--pressed');
  btnThirdMsg.classList.remove('tech__button-message--visible');
  btnThird.innerText = '+';
});

btnSecond.addEventListener('click', () => {
  btnSecondMsg.classList.toggle('tech__button-message--visible');

  btnFirst.classList.remove('tech__button--pressed');
  btnFirstMsg.classList.remove('tech__button-message--visible');
  btnFirst.innerText = '+';

  btnThird.classList.remove('tech__button--pressed');
  btnThirdMsg.classList.remove('tech__button-message--visible');
  btnThird.innerText = '+';
});

btnThird.addEventListener('click', () => {
  btnThirdMsg.classList.toggle('tech__button-message--visible');

  btnFirst.classList.remove('tech__button--pressed');
  btnFirstMsg.classList.remove('tech__button-message--visible');
  btnFirst.innerText = '+';

  btnSecond.classList.remove('tech__button--pressed');
  btnSecondMsg.classList.remove('tech__button-message--visible');
  btnSecond.innerText = '+';
});

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
    setErrorFor(phone, 'Incorrect phone format*');
    result = false;
  } else {
    setSuccessFor(phone);
    result = true;
  }

  return result;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.contact__form-small');

  small.innerText = message;

  formControl.className = 'contact__form-control contact__form-control--error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'contact__form-control';
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

  input.addEventListener('focusin', () => {
    label.classList.add('contact__form-label--active');
  });

  input.addEventListener('focusout', () => {
    label.classList.remove('contact__form-label--active');
  });
});
