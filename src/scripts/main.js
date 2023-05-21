'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#lang') {
    document.body.classList.add('page__body--with-lang');
  } else {
    document.body.classList.remove('page__body--with-lang');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#help') {
    document.body.classList.add('page__body--with-help');
  } else {
    document.body.classList.remove('page__body--with-help');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#buy') {
    document.body.classList.add('page__body--with-buy');
  } else {
    document.body.classList.remove('page__body--with-buy');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#pay') {
    document.body.classList.add('page__body--with-pay');
  } else {
    document.body.classList.remove('page__body--with-pay');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#complete') {
    document.body.classList.add('page__body--with-complete');
  } else {
    document.body.classList.remove('page__body--with-complete');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#faq') {
    document.body.classList.add('page__body--with-faq');
  } else {
    document.body.classList.remove('page__body--with-faq');
  }
});

window.addEventListener('hashchange', () => {
  const langMenu = document.querySelector('.lang');

  if (window.location.hash === '#lang') {
    langMenu.classList.add('page__menu');
  } else {
    langMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const faqMenu = document.querySelector('.faq');

  if (window.location.hash === '#faq') {
    faqMenu.classList.add('page__menu');
  } else {
    faqMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const helpMenu = document.querySelector('.help');

  if (window.location.hash === '#help') {
    helpMenu.classList.add('page__menu');
  } else {
    helpMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const buyMenu = document.querySelector('.buy');

  if (window.location.hash === '#buy') {
    buyMenu.classList.add('page__menu');
  } else {
    buyMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const payMenu = document.querySelector('.pay');

  if (window.location.hash === '#pay') {
    payMenu.classList.add('page__menu');
  } else {
    payMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const completeMenu = document.querySelector('.complete');

  if (window.location.hash === '#complete') {
    completeMenu.classList.add('page__menu');
  } else {
    completeMenu.classList.remove('page__menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit, false);

function onSubmit(event) {
  event.preventDefault();
  form.reset();
};

// const selectElement = document.querySelector('select[name="amount"]');
// const priceElement = document.querySelector('.place__price');

// const prices = {
//   1: 1200,
//   2: 2400,
// };

// selectElement.addEventListener('change', () => {
//   const selectedAmount = parseInt(selectElement.value);
//   const price = prices[selectedAmount];

//   if (price) {
//     priceElement.textContent = `${price}$`;
//   }
// });

// const selectPayElement = document.querySelector('select[name="amount-pay"]');
// const pricePayElement = document.querySelector('.pay__price');

// selectPayElement.addEventListener('change', () => {
//   const selectedPayAmount = parseInt(selectPayElement.value);
//   const price = prices[selectedPayAmount];

//   if (price) {
//     pricePayElement.textContent = `${price}$`;
//   }
// });

const prices = {
  1: 1200,
  2: 2400,
};

// eslint-disable-next-line no-shadow
const updatePrice = (selectElement, priceElement) => {
  const selectedAmount = parseInt(selectElement.value);
  const price = prices[selectedAmount];

  if (price) {
    priceElement.textContent = `${price}$`;
  }
};

const selectElement = document.querySelector('select[name="amount"]');
const priceElement = document.querySelector('.place__price');

selectElement.addEventListener('change', () => {
  updatePrice(selectElement, priceElement);
});

const selectPayElement = document.querySelector('select[name="amount-pay"]');
const pricePayElement = document.querySelector('.pay__price');

selectPayElement.addEventListener('change', () => {
  updatePrice(selectPayElement, pricePayElement);
});

const formSubmit = document.querySelector('.place__customer-info');
const countrySelect = document.querySelector('select[name="countries"]');
const citySelect = document.querySelector('select[name="cities"]');

formSubmit.addEventListener('submit', (event) => {
  if (countrySelect.value === ' ' || citySelect.value === ' ') {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    alert('Please select a country and a city.');
  }
});
