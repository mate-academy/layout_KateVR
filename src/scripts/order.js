'use strict';

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input');

  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--active');
    this.classList.add('dropdown__button--active');
  });
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--active');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--active');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key == 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--active');
    }
  });
});

document.querySelectorAll('.order-quantity__item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.order__price-item').textContent = +item.textContent * 1200 + '$';
  });
});

function changeLink () {
  if (window.innerWidth < 1280) {
  document.querySelectorAll('.order__top-link').forEach((link) => {
    if (link.innerText == 'Order complete') {
      link.textContent = 'Complete';
    }
  });
} else {
  document.querySelectorAll('.order__top-link').forEach((link) => {
    if (link.innerText == 'Complete') {
      link.textContent = 'Order complete';
    }
  });
};
};

window.addEventListener('load', changeLink);
window.addEventListener('resize', changeLink);
