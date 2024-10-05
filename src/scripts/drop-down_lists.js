'use strict';

import { countries } from "./array_of_data.js";
import { queryID } from "./utils.js";


export function countrySelect(nameSelect) {
  const countrySelect = queryID(nameSelect);

  Object.keys(countries).forEach(country => {

    const option = document.createElement('option');
    option.classList ='purchase-payment__user-data--option';
    option.value = country;
    option.textContent = country;

    countrySelect.appendChild(option);
  });
};

export function citySelect() {
  const countrySelect = queryID('countrySelect');
  const citySelect = queryID('citySelect');

  citySelect.innerHTML = '<option> Select a city </option>';

  if(countrySelect.value) {
    citySelect.disabled = false;

    countries[countrySelect.value].forEach(city => {

      const option = document.createElement('option');
      option.classList = 'purchase-payment__user-data--option';
      option.value = city;
      option.textContent = city;

      citySelect.appendChild(option);
    });

  } else {
    citySelect.disabled = true;
  }
};
