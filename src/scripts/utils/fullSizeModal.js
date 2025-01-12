export const fullSizeModal = () => {
  const lifecycleSteps = document.querySelectorAll('.order-modal__lifecycle p');
  const progressSteps = document.querySelectorAll('.order-modal__progress div');

  const placeOrderStep = document.getElementById('placeOrderStep');
  const payStep = document.getElementById('payStep');
  const orderCompleteStep = document.getElementById('orderCompleteStep');
  const paymentForm = document.getElementById('paymentForm');
  const priceDisplay = document.getElementById('price');
  const selectedQuantityDisplay = document.getElementById('selectedQuantity');
  const selectedPriceDisplay = document.getElementById('selectedPrice');

  const dropdown = document.getElementById('customDropdown');
  const selected = document.getElementById('dropdownSelected');
  const dropdownList = document.getElementById('dropdownList');

  const countryDropdown = document.getElementById('countryDropdown');
  const countrySelected = document.getElementById('countrySelected');
  const countryDropdownList = document.getElementById('countryDropdownList');

  const unitPrice = 1200;
  let selectedQuantity = 1;
  let selectedPrice = unitPrice;

  const citiesByCountry = {
    Ukraine: ['Kyiv', 'Lviv', 'Odessa'],
    Italy: ['Rome', 'Milan', 'Venice'],
    Spain: ['Madrid', 'Barcelona', 'Seville'],
    Poland: ['Warsaw', 'Krakow', 'Gdansk'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
  };

  function updateCities(country) {
    const cityDropdownList = document.getElementById('cityDropdownList');
    cityDropdownList.innerHTML = '';

    const cities = citiesByCountry[country] || [];
    cities.forEach((city) => {
      const cityItem = document.createElement('li');
      cityItem.classList.add('custom-dropdown__item');
      cityItem.textContent = city;
      cityItem.setAttribute('data-value', city);
      cityDropdownList.appendChild(cityItem);
    });

    if (cities.length > 0) {
      const citySelected = document.getElementById('citySelected');
      citySelected.textContent = cities[0];
    }
  }

  const options = Array.from(dropdownList.children);
  const countryOptions = Array.from(countryDropdownList.children);

  function updateLifecycleStep(step) {
    lifecycleSteps.forEach((stepElement, index) => {
      stepElement.classList.toggle(
        'order-modal__lifecycle-step--active',
        index === step,
      );
    });

    progressSteps.forEach((stepElement, index) => {
      stepElement.classList.toggle(
        'order-modal__progress-step--current',
        index === step,
      );
    });
  }

  function showStep(stepElement) {
    placeOrderStep.style.display = 'none';
    payStep.style.display = 'none';
    orderCompleteStep.style.display = 'none';
    stepElement.style.display = 'grid';
  }

  dropdown.addEventListener('click', () => {
    dropdownList.innerHTML = '';
    options
      .filter(
        (option) =>
          parseInt(option.getAttribute('data-value'), 10) !== selectedQuantity,
      )
      .forEach((option) => dropdownList.appendChild(option));

    dropdownList.classList.toggle('visible');
  });

  dropdownList.addEventListener('click', (event) => {
    if (event.target.classList.contains('custom-dropdown__item')) {
      const newSelectedQuantity = parseInt(
        event.target.getAttribute('data-value'),
        10,
      );

      if (selectedQuantity !== null) {
        const previousOption = options.find(
          (option) =>
            parseInt(option.getAttribute('data-value'), 10) ===
            selectedQuantity,
        );
        if (previousOption) {
          dropdownList.appendChild(previousOption);
        }
      }

      selectedQuantity = newSelectedQuantity;
      selectedPrice = unitPrice * selectedQuantity;

      selected.textContent = selectedQuantity;
      priceDisplay.textContent = `${selectedPrice}$`;

      dropdownList.classList.remove('visible');
    }
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove('visible');
    }
  });

  countryDropdown.addEventListener('click', () => {
    countryDropdownList.classList.toggle('visible');
  });

  countryDropdownList.addEventListener('click', (event) => {
    if (event.target.classList.contains('custom-dropdown__item')) {
      const selectedCountry = event.target.getAttribute('data-value');
      countrySelected.textContent = selectedCountry;

      updateCities(selectedCountry);

      countryDropdownList.classList.remove('visible');
    }
  });

  const cityDropdown = document.getElementById('cityDropdown');
  cityDropdown.addEventListener('click', () => {
    const cityDropdownList = document.getElementById('cityDropdownList');
    cityDropdownList.classList.toggle('visible');
  });

  const cityDropdownList = document.getElementById('cityDropdownList');
  cityDropdownList.addEventListener('click', (event) => {
    if (event.target.classList.contains('custom-dropdown__item')) {
      const selectedCity = event.target.getAttribute('data-value');
      const citySelected = document.getElementById('citySelected');
      citySelected.textContent = selectedCity;
      cityDropdownList.classList.remove('visible');
    }
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    selectedQuantityDisplay.textContent = selectedQuantity;
    selectedPriceDisplay.textContent = `${selectedPrice}$`;
    showStep(payStep);
    updateLifecycleStep(1);
  });

  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showStep(orderCompleteStep);
    updateLifecycleStep(2);
  });

  updateLifecycleStep(0);
  showStep(placeOrderStep);

  updateCities('Ukraine');
};
