'use strict';

const form = document.getElementById('formContact');
const nam = document.getElementById('nameContact');
const email = document.getElementById('emailContact');
const phone = document.getElementById('phoneContact');

const tabs = document.querySelectorAll('.buy__tab');
const buyTabContentFirst = document.querySelector('.buy__tab-content--1');
const buyTabContentSecond = document.querySelector('.buy__tab-content--2');
const buyTabContentThird = document.querySelector('.buy__tab-content--3');
// eslint-disable-next-line max-len
const formContainerBuy = document.querySelector('.form__control-container--buy');
// eslint-disable-next-line max-len
const quantityContainer = document.querySelector('.buy__tab-content-quantity-container');
const finishButton = document.querySelector('.buy__tab-button--3');

const formBuy = document.getElementById('formBuy');
const firstNameBuy = document.getElementById('nameFirstBuy');
const lastNameBuy = document.getElementById('nameLastBuy');
const emailBuy = document.getElementById('emailBuy');
const phoneBuy = document.getElementById('phoneBuy');
// const dropdownQuantityBuy = document.getElementById('dropdownQuantityBuy');
// const dropdownCountryBuy = document.getElementById('dropdownCountryBuy');
// const dropdownCityBuy = document.getElementById('dropdownCityBuy');
const addressFirstBuy = document.getElementById('addressFirstBuy');

const formPay = document.getElementById('formPay');
// const cardNumberPayFirst = document.getElementById('cardNumberPayFirst');
// const cardNumberPaySecond = document.getElementById('cardNumberPaySecond');
// const cardNumberPayThird = document.getElementById('cardNumberPayThird');
// const cardNumberPayFourth = document.getElementById('cardNumberPayFourth');
const cardHolderNamePay = document.getElementById('cardHolderPay');
const cardExpirartionDateInput = document.getElementById('expirationDatePay');
const cardCvvPay = document.getElementById('CVVPay');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputs();

  if (checkInputs() === true) {
    form.reset();
  }
});

formBuy.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputsBuy();

  if (checkInputsBuy() === true) {
    tabs[1].classList.add('buy__tab--active');
    formContainerBuy.style.display = 'none';
    buyTabContentSecond.classList.add('buy__tab-content--2-active');
    // eslint-disable-next-line max-len
    quantityContainer.classList.add('buy__tab-content-quantity-container--second-tab');
    buyTabContentFirst.classList.add('buy__tab-content--1-for-pay');
    formBuy.classList.add('buy__tab-content-form--1-second-tab');

    formBuy.reset();
  }
});

formPay.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputsPay();

  if (checkInputsPay() === true) {
    buyTabContentSecond.classList.remove('buy__tab-content--2-active');
    buyTabContentFirst.classList.remove('buy__tab-content--1-for-pay');
    formBuy.classList.remove('buy__tab-content-form--1-second-tab');
    buyTabContentFirst.style.display = 'none';
    tabs[2].classList.add('buy__tab--active');
    buyTabContentThird.classList.add('buy__tab-content--3-active');

    formPay.reset();
  }
});

finishButton.addEventListener('click', () => {
  tabs[1].classList.remove('buy__tab--active');
  tabs[2].classList.remove('buy__tab--active');
  formContainerBuy.style.display = 'grid';
  buyTabContentFirst.style.display = 'block';
  buyTabContentThird.classList.remove('buy__tab-content--3-active');
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

function checkInputsBuy() {
  const firstNameBuyValue = firstNameBuy.value.trim();
  const lastNameBuyValue = lastNameBuy.value.trim();
  const emailBuyValue = emailBuy.value.trim();
  const phoneBuyValue = phoneBuy.value.trim();
  // const dropdownQuantityBuyValue = dropdownQuantityBuy.value.trim();
  // const dropdownCountryBuyValue = dropdownCountryBuy.value.trim();
  // const dropdownCityBuyValue = dropdownCityBuy.value.trim();
  const addressFirstBuyValue = addressFirstBuy.value.trim();

  let result = false;

  if (firstNameBuyValue === '') {
    setErrorFor(firstNameBuy, 'Please, fill your first name*');
    result = false;
  } else {
    setSuccessFor(firstNameBuy);
    result = true;
  }

  if (lastNameBuyValue === '') {
    setErrorFor(lastNameBuy, 'Please, fill your last name*');
    result = false;
  } else {
    setSuccessFor(lastNameBuy);
    result = true;
  }

  if (emailBuyValue === '') {
    setErrorFor(emailBuy, 'Please, fill your email*');
    result = false;
  } else if (!isEmail(emailBuyValue)) {
    setErrorFor(emailBuy, 'Incorrect email format*');
    result = false;
  } else {
    setSuccessFor(emailBuy);
    result = true;
  }

  if (phoneBuyValue === '') {
    setErrorFor(phoneBuy, 'Please, fill your phone*');
    result = false;
  } else if (!isPhone(phoneBuyValue)) {
    setErrorFor(phoneBuy, 'Incorrect phone format (123-456-7890)*');
    result = false;
  } else {
    setSuccessFor(phoneBuy);
    result = true;
  }

  if (addressFirstBuyValue === '') {
    setErrorFor(addressFirstBuy, 'Please, fill your first address*');
    result = false;
  } else {
    setSuccessFor(addressFirstBuy);
    result = true;
  }

  // if (dropdownQuantityBuyValue === '') {
  //   setErrorFor(dropdownQuantityBuy, 'Error*');
  //   result = false;
  // } else {
  //   setSuccessFor(dropdownQuantityBuy);
  //   result = true;
  // }

  // if (dropdownCountryBuyValue === '') {
  //   setErrorFor(dropdownCountryBuy, 'Please, select your country*');
  //   result = false;
  // } else {
  //   setSuccessFor(dropdownCountryBuy);
  //   result = true;
  // }

  // if (dropdownCityBuyValue === '') {
  //   setErrorFor(dropdownCityBuy, 'Please, select your city*');
  //   result = false;
  // } else {
  //   setSuccessFor(dropdownCityBuy);
  //   result = true;
  // }

  return result;
}

function checkInputsPay() {
  // const cardNumberPayFirstValue = cardNumberPayFirst.value.trim();
  // const cardNumberPaySecondValue = cardNumberPaySecond.value.trim();
  // const cardNumberPayThirdValue = cardNumberPayThird.value.trim();
  // const cardNumberPayFourthValue = cardNumberPayFourth.value.trim();
  const cardHolderNamePayValue = cardHolderNamePay.value.trim();
  const cardExpirartionDateInputValue = cardExpirartionDateInput.value.trim();
  const cvvPayValue = cardCvvPay.value.trim();

  let result = false;

  if (cardHolderNamePayValue === '') {
    setErrorFor(cardHolderNamePay, 'Please, fill the card placeholder name*');
    result = false;
  } else {
    setSuccessFor(cardHolderNamePay);
    result = true;
  }

  if (cardExpirartionDateInputValue.length < 7) {
    setErrorFor(cardExpirartionDateInput, 'Please, fill the expiration date*');
    result = false;
  } else {
    setSuccessFor(cardExpirartionDateInput);
    result = true;
  }

  if (cvvPayValue === '') {
    setErrorFor(cardCvvPay, 'Please, fill the CVV*');
    result = false;
  } else if (cvvPayValue.length < 3) {
    setErrorFor(cardCvvPay, 'Code must be 3 digits');
    result = false;
  } else if (cvvPayValue === /[a-zA-Z]/) {
    setErrorFor(cardCvvPay, 'Code must be digit');
    result = false;
  } else {
    setSuccessFor(cardCvvPay);
    result = true;
  }

  // eslint-disable-next-line max-len
  // if (cardNumberPayFirstValue === '' && cardNumberPaySecondValue === '' && cardNumberPayThirdValue === '' && cardNumberPayFourthValue === '') {
  //   setErrorFor(cardNumberPayFirst, 'Test');
  //   result = false;
  // } else {
  //   setSuccessFor(cardNumberPayFirst);
  //   result = true;
  // }

  return result;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.form__error');

  errorMessage.innerText = message;

  // eslint-disable-next-line max-len
  formControl.classList.add('form__control', 'form__control--error');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.classList.add('form__control');
  formControl.classList.remove('form__control--error');
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
