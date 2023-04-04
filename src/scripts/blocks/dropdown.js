'use strict';

const dropdownInputs = document.querySelectorAll('.dropdown__input');

window.onload = (event) => {
  for (let i = 0; i < dropdownInputs.length; i++) {
    dropdownInputs[i].value = '';
  }
};

// eslint-disable-next-line max-len
document.querySelectorAll('.dropdown__container').forEach(function(dropdownWrapper) {
  const dropdownButton = dropdownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  // eslint-disable-next-line max-len
  const dropdownListItems = dropdownList.querySelectorAll('.dropdown__list-item');
  // eslint-disable-next-line max-len
  const dropdownInput = dropdownWrapper.querySelector('.dropdown__input--hidden');

  dropdownButton.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list--active');
  });

  dropdownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownButton.innerText = this.innerText;
      dropdownButton.style.color = '#fff';
      dropdownInput.value = this.dataset.value;
      dropdownList.classList.remove('dropdown__list--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target !== dropdownButton) {
      dropdownList.classList.remove('dropdown__list--active');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Tab') {
      dropdownList.classList.remove('dropdown__list--active');
    }
  });
});
