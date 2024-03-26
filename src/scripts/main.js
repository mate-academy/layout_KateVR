'use strict';

// const form = document.querySelector('#form');

// function submit(event) {
//   event.preventDefault();
//   form.reset();
// }

// form.addEventListener('submit', submit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menuR' || window.location.hash
  === '#menuX2' || window.location.hash
  === '#LANGUAGE' || window.location.hash
  === '#FAQ' || window.location.hash === '#menuH'
  || window.location.hash === '#menuB' || window.location.hash === '#menuP') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const input = document.getElementById('counter');
const priceElement = document.getElementById('price');

input.addEventListener('input', function() {
  const value = this.value;
  const price = calculatePrice(value);

  priceElement.textContent = price;
});

function calculatePrice(value) {
  const basePrice = 1200;
  const totalPrice = basePrice * value;

  return totalPrice + '$';
}

document.querySelector('.purchase__form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
  });
