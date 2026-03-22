export function initQuantityPrice() {
  const quantitySelects = document.querySelectorAll('.quantity__select');
  const priceDisplays = document.querySelectorAll('.quantity__value');
  const allQuantityButtons = document.querySelectorAll('.quantity__button');

  if (quantitySelects.length === 0) return;

  const UNIT_PRICE = 1200;

  const updateAllPrices = (amount) => {
    priceDisplays.forEach((display) => {
      display.textContent = `${amount}$`;
    });
  };

  const updateAllButtons = (count) => {
    allQuantityButtons.forEach((btn) => {
      btn.textContent = count;
    });
  };

  updateAllPrices(UNIT_PRICE);
  updateAllButtons(1);

  quantitySelects.forEach((quantitySelect) => {
    const items = quantitySelect.querySelectorAll('.select__item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        const count = parseInt(item.getAttribute('data-value')) || 1;
        const totalPrice = count * UNIT_PRICE;

        updateAllPrices(totalPrice);
        updateAllButtons(count);

        quantitySelect.classList.remove('is-open');
      });
    });
  });
}
