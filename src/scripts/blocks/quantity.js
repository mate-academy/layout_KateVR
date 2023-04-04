'use strict';

const QuantityInput = document.querySelector('.dropdown__input--quantity');
const QuantityInputValue = parseInt(QuantityInput.value);
const priceValue = document.querySelector('.buy__tab-quantity-price-value--1');

priceValue.innerHTML = `${1200 * QuantityInputValue}$`;
