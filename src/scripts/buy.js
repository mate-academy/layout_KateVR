'use strict';
// Buy

const buyBtn = document.querySelectorAll('.buy__btn');
const buyForm = document.querySelectorAll('.buy__form');

buyBtn.forEach((btn, index) => {
  const bItems = buyForm[index].querySelectorAll('.buy__input');

  btn.addEventListener('click', () => {
    bItems.forEach(item => {
      if (item.value === '') {
        item.classList.add('failed');
      } else {
        item.classList.remove('failed');
      }
    });

    if (document.querySelectorAll('.failed').length === 0) {
      buyForm[index].classList.remove('buy__form--active');
      buyForm[index].nextElementSibling.classList.add('buy__form--active');

      const stage = document.querySelector('.buy__stage--active');

      stage.nextElementSibling.classList.add('buy__stage--active');
      stage.classList.remove('buy__stage--active');
    }
  });
});

const quantity = document.querySelector('.buy__quantity');
const quantityValue = document.querySelectorAll('.buy__price-value');

quantity.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('buy__select-quan')) {
    quantityValue.forEach(val => {
      val.innerText = `${target.value * 1200}$`;
    });
  }
});
