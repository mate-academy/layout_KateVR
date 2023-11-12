'use strict';

document.querySelectorAll('.select').forEach(function(selectWrapper) {
  const btnSelect = selectWrapper.querySelector('.select__language');
  const listSelect = selectWrapper.querySelector('.select__language-list');
  const itemSelect = listSelect.querySelectorAll('.select__language-option');
  const inputHidden = selectWrapper.querySelector('.select__input-hidden');

  /* клік на кнопку Відкрити/Закрити select */
  btnSelect.addEventListener('click', function() {
    listSelect.classList.toggle('select__language-list--visible');
  });

  /* вибір елементу із списку, зберегти вибране значення, закрити список */
  itemSelect.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
      e.stopPropagation();
      btnSelect.innerText = this.innerText;
      inputHidden.value = this.dataset.value;
      listSelect.classList.remove('select__language-list--visible');
    });
  });

  /* закрити список якщо клік помимо списку */
  document.addEventListener('click', function(e) {
    if (e.target !== btnSelect) {
      listSelect.classList.remove('select__language-list--visible');
    }
  });

  /* закрити список по натисканню на Esc/Tab */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      listSelect.classList.remove('.select__language-list--visible');
    }
  });
});
