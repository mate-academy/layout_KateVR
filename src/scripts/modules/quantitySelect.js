export const setupQuantitySelect = () => {
  const orders = document.querySelectorAll('.buy-module__step');

  const setupQuantity = (orderElement) => {
    if (!orderElement) return;

    const price = orderElement.querySelector('.order__price-count');
    const qtySelect = orderElement.querySelector('.select-qty');
    const qtySelectValue = qtySelect?.querySelector('.select-qty__current-value');
    const qtySelectList = qtySelect?.querySelector('.select-qty__list-wrapper');
    const qtyItems = Array.from(qtySelectList?.querySelectorAll('.select-qty__item') || []);

    if (!price || !qtySelect || !qtySelectValue || !qtySelectList) return;

    qtySelect.addEventListener('click', () => {
      const selectedValue = qtySelectValue.textContent.trim();
      qtyItems.forEach((item) => {
        item.classList.toggle('hidden', item.textContent === selectedValue);
      });
      qtySelectList.classList.toggle('select-qty__list-wrapper--visible');
    });

    qtySelectList.addEventListener('click', (event) => {
      const li = event.target.closest('.select-qty__item');
      if (!li || li.classList.contains('hidden')) return;

      const liText = li.textContent.trim();
      qtySelectValue.textContent = liText;
      price.textContent = `${+liText * 1200}$`;

      const selectedLi = qtySelect.querySelector('.select-qty__item--selected');
      selectedLi?.classList.remove('select-qty__item--selected');
      li.classList.add('select-qty__item--selected');

      qtySelectList.classList.remove('select-qty__list-wrapper--visible');
    });
  };

  orders.forEach(setupQuantity);
};
