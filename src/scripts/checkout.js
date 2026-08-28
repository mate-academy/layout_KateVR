'use strict';

// ============================

// OPEN CHECKOUT

// ============================

const buyButtons = document.querySelectorAll('.buyButton');

const checkout = document.getElementById('checkout');

if (checkout) {
  buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      checkout.classList.add('checkout--active');

      document.body.classList.add('page_body--no-scroll');
    });
  });
}

// ============================

// PRICE

// ============================

const PRICE = 1200;

// ============================
// ELEMENTS
// ============================

const steps = document.querySelectorAll('.checkout__step');
const pages = document.querySelectorAll('.checkout-page');
const progressBar = document.querySelector('.checkout__progress-bar');

const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('totalPrice');

const orderForm = document.getElementById('orderForm');
const paymentForm = document.getElementById('paymentForm');

const goToPayment = document.getElementById('goToPayment');
const completeOrder = document.getElementById('completeOrder');

const cardNumber = document.getElementById('cardNumber');
const expiry = document.getElementById('expiry');
const cvv = document.getElementById('cvv');

const STEP_WIDTH = 100;

// ============================
// SHOW PAGE
// ============================

function showStep(stepName) {
  pages.forEach((page) => {
    page.classList.toggle(
      'checkout-page--active',
      page.dataset.step === stepName,
    );
  });

  steps.forEach((step) => {
    step.classList.toggle(
      'checkout__step--active',
      step.dataset.step === stepName,
    );
  });

  let index = 0;

  if (stepName === 'pay') {
    index = 1;
  }

  if (stepName === 'complete') {
    index = 2;
  }

  if (progressBar) {
    progressBar.style.transform = `translateX(${index * 100}%)`;
  }
}

// ============================
// CLICK ON TABS
// ============================

steps.forEach((step) => {
  step.addEventListener('click', () => {
    const stepName = step.dataset.step;

    if (stepName === 'order') {
      showStep('order');
    }

    if (stepName === 'pay') {
      if (orderForm.checkValidity()) {
        showStep('pay');
      } else {
        orderForm.reportValidity();
      }
    }

    if (stepName === 'complete') {
      if (
        orderForm.checkValidity() &&
        paymentForm.checkValidity() &&
        validateCard()
      ) {
        showStep('complete');
      } else {
        paymentForm.reportValidity();
      }
    }
  });
});

// ============================
// PRICE
// ============================

if (quantity) {
  quantity.addEventListener('change', () => {
    const count = Number(quantity.value);

    totalPrice.textContent = `$${count * PRICE}`;
  });
}

// ============================
// FIRST BUTTON
// ============================

goToPayment?.addEventListener('click', () => {
  if (orderForm.checkValidity()) {
    showStep('pay');
  } else {
    orderForm.reportValidity();
  }
});

// ============================
// SECOND BUTTON
// ============================

completeOrder?.addEventListener('click', () => {
  if (!paymentForm.checkValidity()) {
    paymentForm.reportValidity();

    return;
  }

  if (!validateCard()) {
    return;
  }

  showStep('complete');
});

// ============================
// CARD FORMAT
// ============================

cardNumber?.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');

  value = value.substring(0, 16);

  value = value.replace(/(.{4})/g, '$1 ').trim();

  e.target.value = value;
});

// ============================
// DATE FORMAT
// ============================

expiry?.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 4) {
    value = value.substring(0, 4);
  }

  if (value.length > 2) {
    value = value.substring(0, 2) + '/' + value.substring(2);
  }

  e.target.value = value;
});

// ============================
// CVV
// ============================

cvv?.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
});

// ============================
// CARD VALIDATION
// ============================

function validateCard() {
  const number = cardNumber.value.replace(/\s/g, '');

  if (number.length !== 16) {
    alert('Card number must contain 16 digits.');

    return false;
  }

  const exp = expiry.value;

  const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

  if (!regex.test(exp)) {
    alert('Invalid expiration date.');

    return false;
  }

  if (cvv.value.length !== 3) {
    alert('Invalid CVV.');

    return false;
  }

  return true;
}

// ============================
// BACK HOME
// ============================

const homeButton = document.querySelector('.checkout-complete button');

homeButton?.addEventListener('click', () => {
  window.location.href = './index.html';
});

// ============================
// START
// ============================

showStep('order');
