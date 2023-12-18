'use strict';
/* зміна мови */

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

/* клас для видимості тексту в блоку FAQ */

function changeClassFaqItem() {
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(function(faqItem) {
    faqItem.addEventListener('click', function() {
      faqItem.classList.toggle('faq__item-mod');
    });
  });
}

document.addEventListener('DOMContentLoaded', changeClassFaqItem);

/* вибір кількості одиниць товару */

document.querySelectorAll('.select-buy').forEach(function(selectWrapper) {
  const btnSelectBuy = selectWrapper.querySelector('.select-buy__quality');
  const listSelectBuy
  = selectWrapper.querySelector('.select-buy__quality-list');
  const itemSelectBuy
  = listSelectBuy.querySelectorAll('.select-buy__quality-option');
  const inputHiddenBuy = selectWrapper.querySelector('.select-buy__input');

  /* клік на кнопку Відкрити/Закрити select-buy */
  btnSelectBuy.addEventListener('click', function() {
    listSelectBuy.classList.toggle('select-buy__quality-list--visible');
  });

  /* вибір елементу із списку, зберегти вибране значення, закрити список */
  itemSelectBuy.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
      e.stopPropagation();
      btnSelectBuy.innerText = this.innerText;
      inputHiddenBuy.value = this.dataset.value;
      listSelectBuy.classList.remove('select-buy__quality-list--visible');
    });
  });

  /* закрити список якщо клік помимо списку */
  document.addEventListener('click', function(e) {
    if (e.target !== btnSelectBuy) {
      listSelectBuy.classList.remove('select-buy__quality-list--visible');
    }
  });

  /* закрити список по натисканню на Esc/Tab */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      listSelectBuy.classList.remove('.select-buy__quality-list--visible');
    }
  });
});

/* вибір адреси */

document.querySelectorAll('.select-adress').forEach(function(selectWrapper) {
  const btnSelectBuy = selectWrapper.querySelector('.select-adress__name');
  const listSelectBuy = selectWrapper.querySelector('.select-adress__list');
  const itemSelectBuy
  = listSelectBuy.querySelectorAll('.select-adress__option');
  const inputHiddenBuy = selectWrapper.querySelector('.select-adress__input');

  /* клік на кнопку Відкрити/Закрити select-buy */
  btnSelectBuy.addEventListener('click', function() {
    listSelectBuy.classList.toggle('select-adress__list--visible');
  });

  /* вибір елементу із списку, зберегти вибране значення, закрити список */
  itemSelectBuy.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
      e.stopPropagation();
      btnSelectBuy.innerText = this.innerText;
      inputHiddenBuy.value = this.dataset.value;
      listSelectBuy.classList.remove('select-adress__list--visible');
    });
  });

  /* закрити список якщо клік помимо списку */
  document.addEventListener('click', function(e) {
    if (e.target !== btnSelectBuy) {
      listSelectBuy.classList.remove('select-adress__list--visible');
    }
  });

  /* закрити список по натисканню на Esc/Tab */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      listSelectBuy.classList.remove('.select-adress__list--visible');
    }
  });
});

/** зміна стилів при фокусі на номер карти */

document.addEventListener('DOMContentLoaded', function() {
  const inputElements = document.querySelectorAll('.form-pay__input-num');

  inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('focus', function() {
      document.querySelector('.form-pay__card').style.color = '#05c2df';
    });

    inputElement.addEventListener('blur', function() {
      document.querySelector('.form-pay__card').style.color = '#929292';
    });
  });
});

/* ------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
  const inputDate = document.querySelector('.form-pay__input-date');

  inputDate.addEventListener('focus', function() {
    document.querySelector('.form-pay__card-date').style.color = '#05c2df';
  });

  inputDate.addEventListener('blur', function() {
    document.querySelector('.form-pay__card-date').style.color = '#929292';
  });
});

/* --------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
  const inputCvv = document.querySelector('.form-pay__input-cvv');

  inputCvv.addEventListener('focus', function() {
    document.querySelector('.form-pay__card-cvv').style.color = '#05c2df';
  });

  inputCvv.addEventListener('blur', function() {
    document.querySelector('.form-pay__card-cvv').style.color = '#929292';
  });
});

/* вимкнути скрол при відкритих додаткових вікнах */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu'
    || window.location.hash === '#buy'
    || window.location.hash === '#language'
    || window.location.hash === '#faq'
    || window.location.hash === '#help'
    || window.location.hash === '#buy') {
    document.body.classList.add('page__body-menu');
  } else {
    document.body.classList.remove('page__body-menu');
  }
});

/* ввімкнути скрол при відкритому вікні faq, help */

document.addEventListener('DOMContentLoaded', function() {
  const faqElement = document.getElementById('faq');

  function setVerticalScroll() {
    const windowHeight = window.innerHeight;
    const faqHeight = faqElement.scrollHeight;

    if (faqHeight > windowHeight) {
      faqElement.style.overflowY = 'auto';
    } else {
      faqElement.style.overflowY = 'hidden';
    }
  }

  setVerticalScroll();

  window.addEventListener('resize', setVerticalScroll);
});
