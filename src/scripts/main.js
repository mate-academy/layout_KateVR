'use strict';

import { countries } from './countries.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.purchase__form');
  const inputs = form.querySelectorAll('input[required]');
  const purchaseBtn = form.querySelector('.purchase__btn');
  const quantitySelect = document.querySelector('.order__quantity-select');
  const dropBar = document.querySelector('.order__quantity-options');
  const priceDisplay = document.querySelector('.order__price-value');
  const unitPrice = 1200;
  const countrySelect = document.querySelector('.purchase__select');
  const countryBar = document.querySelector('.purchase__dropdown');
  const labelCountry = document.querySelector('.purchase__label');
  const citiesSelect = document.querySelector('.purchase__select--city');
  const citiesBar = document.querySelector('.purchase__dropdown--city');
  const labelCity = document.querySelector('.purchase__label--city');
  const closeBtn = document.querySelector('.video-section__icon--close');
  const plusBtns = document.querySelectorAll('.tech-spec__button-plus');
  const descriptions = document.querySelectorAll('.tech-spec__description');

  function toggleCountriesBar() {
    countryBar.classList.toggle('active');
  }

  [countrySelect, labelCountry].forEach(el => {
    el.addEventListener('click', toggleCountriesBar);
  });

  function toggleCitiesBar() {
    citiesBar.classList.toggle('active');
  }

  [citiesSelect, labelCity].forEach(el => {
    el.addEventListener('click', toggleCitiesBar);
  });

  function changePrice(amount) {
    if (!quantitySelect.value && !amount) {
       priceDisplay.textContent = `0$`;
      return;
    }

    if (amount) {
      quantitySelect.value = amount;
    }

    let qty = amount || quantitySelect.value;

    const total = unitPrice * parseInt(qty);
    priceDisplay.textContent = `${total}$`;
  }

  function choiceCountry(e) {
    e.preventDefault();
    const clickedCountry = e.target;

    if (clickedCountry) {

      const country = clickedCountry.textContent;
      countrySelect.textContent = country;
      citiesSelect.textContent = '';
      toggleCountriesBar();
      getCities(country);
    } else {
      countrySelect.textContent = '';
      toggleCountriesBar();
      choiceCity();
    }
  }

  function getCities(value) {
    const dropdown = document.querySelector('.purchase__dropdown--city');
    dropdown.textContent = '';

    if (!value) {
      citiesBar.classList.remove('active');
    };

    const selectedCountry = countries.find(country => country.name === value);
    if (!selectedCountry) return;

    selectedCountry.cities.forEach(city => {
      const cityLink = document.createElement('a');
      cityLink.className = 'purchase__value';
      cityLink.href = '#';
      cityLink.textContent = city;

      dropdown.appendChild(cityLink);
    });
  }

   document.addEventListener('click', (e) => {

    const isClickInside =
      countrySelect.contains(e.target) || countryBar.contains(e.target) || labelCountry.contains(e.target);

    if (!isClickInside) {
      countryBar.classList.remove('active');
    }
  });

  function choiceCity(e) {
    e.preventDefault();

    const city = e.target.textContent;

    citiesSelect.textContent = city;
    citiesBar.classList.remove('active');
  }

  document.addEventListener('click', (e) => {

    const isClickInsideCityBar =
      citiesSelect.contains(e.target) || citiesBar.contains(e.target) || labelCity.contains(e.target);

    if (!isClickInsideCityBar) {
      citiesBar.classList.remove('active');
    }
  });

  function toggleDropBar() {
    dropBar.classList.toggle('active');
  }

  quantitySelect.addEventListener('click', toggleDropBar);

  quantitySelect.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toggleDropBar();
      changePrice();
    }
  });

  document.addEventListener('click', (e) => {
    const isClickInside =
      quantitySelect.contains(e.target) || dropBar.contains(e.target);

    if (!isClickInside) {
      dropBar.classList.remove('active');
      changePrice();
    }
  });

  function changeAmount(e) {
    e.preventDefault();

    const clickedOption = e.target;

    if (clickedOption.classList.contains('order__quantity-option')) {
      const value = +clickedOption.textContent;
      quantitySelect.value !== value;
      changePrice(value);
      dropBar.classList.remove('active');
    }
  }

  dropBar.addEventListener('click', changeAmount);
  countryBar.addEventListener('click', choiceCountry);
  citiesBar.addEventListener('click', choiceCity);

 function validateForm() {
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!countrySelect.textContent || !citiesSelect.textContent) {
      isValid = false;
    }


    if (isValid) {
      purchaseBtn.classList.remove('disabled');
    } else {
      purchaseBtn.classList.add('disabled');
    }
  }

   inputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });


  countrySelect.addEventListener('DOMSubtreeModified', validateForm);
  citiesSelect.addEventListener('DOMSubtreeModified', validateForm);


  plusBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    const index = btn.dataset.index;
    btn.classList.toggle('active');

    descriptions.forEach(desc => {
      if (desc.dataset.index === index) {
        desc.classList.toggle('active');
      } else {
        desc.classList.remove('active');
      }
    });

    plusBtns.forEach((b) => {
      if (b !== btn) {
        b.classList.remove('active');
      }
    });
  });
});

document.addEventListener('click', (e) => {
  const isButton = e.target.closest('.plus-btn');
  const isDesc = e.target.closest('.tech-spec__description-text');

  if (!isButton && !isDesc) {
    descriptions.forEach(desc => desc.classList.remove('active'));
    plusBtns.forEach(btn => btn.classList.remove('active'));
  }
});

function stopVideo() {
  const iframe = document.getElementById('video-section__iframe');
  iframe.src = iframe.src;
}

closeBtn.addEventListener('click', stopVideo);
});
