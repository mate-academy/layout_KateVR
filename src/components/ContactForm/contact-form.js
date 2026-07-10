'use strict';

const prices = {
  1: 1200,
  2: 2400,
};

function updatePrice(selectElement, priceElement) {
  const selectedAmount = parseInt(selectElement.value, 10);
  const price = prices[selectedAmount];

  if (price) {
    priceElement.textContent = `${price}$`;
  }
}

export function initContactForm() {
  const form = document.querySelector('#form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

export function initBuyPanel() {
  const selectElement = document.querySelector('select[name="amount"]');
  const priceElement = document.querySelector('.place__price');

  if (selectElement && priceElement) {
    selectElement.addEventListener('change', () => {
      updatePrice(selectElement, priceElement);
    });
  }

  const selectPayElement = document.querySelector('select[name="amount-pay"]');
  const pricePayElement = document.querySelector('.pay__price');

  if (selectPayElement && pricePayElement) {
    selectPayElement.addEventListener('change', () => {
      updatePrice(selectPayElement, pricePayElement);
    });
  }

  const formSubmit = document.querySelector('.place__customer-info');
  const countrySelect = document.querySelector('select[name="countries"]');
  const citySelect = document.querySelector('select[name="cities"]');

  if (formSubmit && countrySelect && citySelect) {
    formSubmit.addEventListener('submit', (event) => {
      if (countrySelect.value.trim() === '' || citySelect.value.trim() === '') {
        event.preventDefault();
        alert('Please select a country and a city.');
      }
    });
  }
}
