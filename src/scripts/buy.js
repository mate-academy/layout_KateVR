'use strict';
// Buy

const buyBtn = document.querySelectorAll('.buy__btn');

buyBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const bItems = btn.closest('form').querySelectorAll('.buy__input');

    bItems.forEach(item => {
      if (item.value === '') {
        item.classList.add('failed');
      } else {
        item.classList.remove('failed');
      }
    });

    if (document.querySelectorAll('.failed').length === 0) {
      btn.closest('form').classList.remove('buy__form--active');
      btn.closest('form').nextElementSibling.classList.add('buy__form--active');

      const stage = document.querySelector('.buy__stage--active');

      stage.nextElementSibling.classList.add('buy__stage--active');
      stage.classList.remove('buy__stage--active');
    }
  });
});

const quantity = document.querySelectorAll('.buy__select-quan');
const quantityValue = document.querySelectorAll('.buy__price-value');

quantity.forEach(select => {
  select.addEventListener('change', () => {
    quantityValue.forEach(val => {
      val.innerText = `${select.value * 1200}$`;
    });
  });
});

const allInputs = document.querySelectorAll('input, textarea');

allInputs.forEach(input => {
  input.addEventListener('change', () => {
    input.classList.remove('failed');
  });
});
