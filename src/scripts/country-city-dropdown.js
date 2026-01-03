'use strict';

import { Country, City } from 'country-state-city';
import { configureDropdown } from './dropdown';
import { clearError } from './form';

const countrySelectOptions = document.querySelector(
  '.country-dropdown__options',
);
const cityField = document.querySelector('.city-dropdown');
const cityOptionsContainer = document.querySelector('.city-dropdown__options');
const cityLabel = document.querySelector('.city-dropdown__selected-label');
const defaultCountry = 'UA';

export function createCountryCityDropdown() {
  renderCountries();
  loadCitiesChunked(defaultCountry);

  const country = document.querySelector('.country-dropdown');
  configureDropdown(country, 'country', 'country', defaultCountry, [
    loadCitiesChunked,
    clearCityErrors,
  ]);

  configureDropdown(cityField, 'city', 'city', '', [clearCityErrors]);
}

function renderCountries() {
  const fragment = document.createDocumentFragment();

  Country.getAllCountries().forEach((country) => {
    const div = document.createElement('div');
    div.className = 'dropdown__option country-dropdown__option';
    div.dataset.country = country.isoCode;
    div.textContent = country.name;
    fragment.appendChild(div);
  });

  countrySelectOptions.appendChild(fragment);
}

export function loadCitiesChunked(countryCode, chunkSize = 200) {
  const uniqueCities = [
    ...new Set(City.getCitiesOfCountry(countryCode).map((city) => city.name)),
  ].map((name) => ({ name }));

  cityOptionsContainer.innerHTML = '';
  cityLabel.textContent = '';

  let index = 0;

  function renderChunk() {
    const fragment = document.createDocumentFragment();
    const slice = uniqueCities.slice(index, index + chunkSize);

    slice.forEach((city) => {
      const div = document.createElement('div');
      div.className = 'dropdown__option city-dropdown__option';
      div.dataset.city = city.name;
      div.textContent = city.name;
      fragment.appendChild(div);
    });

    cityOptionsContainer.appendChild(fragment);
    index += chunkSize;

    if (index < uniqueCities.length) {
      requestAnimationFrame(renderChunk);
    }
  }

  renderChunk();
}

function clearCityErrors() {
  clearError(cityField);
}
