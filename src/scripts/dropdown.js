export function initDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown__trigger');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownValue = dropdown.querySelector('.dropdown__value');

    if (!trigger || !dropdownList) {
      return;
    }

    const isQuantity = dropdown.dataset.type === 'quantity';
    const UNIT_PRICE = 1200;
    const priceElem = isQuantity
      ? dropdown.closest('.order-summary')?.querySelector('.order-summary__value')
      : null;

    trigger.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--active');
    });

    dropdownList.addEventListener('click', (event) => {
      const listItem = event.target.closest('.dropdown__item');

      if (!listItem) {
        return;
      }

      const value = listItem.textContent;

      dropdownValue.textContent = value;

      if (isQuantity && priceElem) {
        priceElem.textContent = `$${UNIT_PRICE * +value}`;
      }

      dropdown.classList.remove('dropdown--active');
    });
  });
}
