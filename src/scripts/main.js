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

document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open-faq');
  const faqWindow = document.getElementById('faq');
  const body = document.body;
  const closeButton = document.getElementById('cross');

  openButton.addEventListener('click', function() {
    faqWindow.style.display = 'block';
    body.classList.add('faq-open');
  });

  // Закриття вікна FAQ при кліку на елемент з id="cross"
  closeButton.addEventListener('click', function() {
    faqWindow.style.display = 'none';
    body.classList.remove('faq-open');
  });

  // Опційно: закривайте вікно FAQ при кліку на затемнений фон
  faqWindow.addEventListener('click', function(event) {
    if (event.target === faqWindow) {
      faqWindow.style.display = 'none';
      body.classList.remove('faq-open');
    }
  });
});

/* рахуємо вартість одиниць товарів */

document.addEventListener('DOMContentLoaded', function() {
  const qualityButton = document.getElementById('qualityButton');
  const selectValue = document.getElementById('selectValue');
  const priceDisplay = document.getElementById('priceDisplay');
  const initialPrice = 1200;

  selectValue.value = qualityButton.innerText;
  priceDisplay.innerText = initialPrice * selectValue.value + '$';

  document
    .querySelectorAll('.select-buy__quality-option')
    .forEach(function(option) {
      option.addEventListener('click', function() {
        const selectedValue = option.getAttribute('data-value');

        selectValue.value = selectedValue;
        priceDisplay.innerText = initialPrice * selectedValue + '$';
      });
    });
});

/* валідатор телефонного номеру */

/* очищення форми при кліку на кнопку form-buy__purchase */

const buyButton = document.querySelector('.form-buy__purchase');

buyButton.addEventListener('click', function() {
  clearForm();
});

function clearForm() {
  const formPlace = document.getElementById('form-place');
  const formPay = document.getElementById('form-pay');

  formPlace.querySelectorAll('input').forEach(input => {
    input.value = '';
  });

  formPay.querySelectorAll('input').forEach(input => {
    input.value = '';
  });

  const qualityButton = document.getElementById('qualityButton');
  const priceDisplay = document.getElementById('priceDisplay');
  const initialPrice = 1200;

  qualityButton.textContent = '1';
  priceDisplay.innerText = initialPrice + '$';
}

/* змінюємо активну кнопку у блоку #buy, приховуємо і відображаємо блоки */

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button-buy__link');
  const blocks = {
    'Place Order': ['place-buy', 'form-place'],
    'Pay': ['form-pay', 'place-buy'],
    'Complete': ['complete-buy'],
  };

  function activateFirstButton() {
    buttons[0].classList.add('button-buy__link-active');

    blocks[buttons[0].textContent].forEach(id => {
      const block = document.getElementById(id);

      if (block) {
        block.classList.remove('hidden');
      }
    });
  }

  setTimeout(activateFirstButton, 0);

  function handleWindowResize() {
    const windowWidth = window.innerWidth;
    const activeButton = document.querySelector('.button-buy__link-active');

    if (windowWidth >= 768
      && windowWidth <= 1280
      && activeButton
      && activeButton.textContent === 'Pay') {
      const placeBuyBlock = document.getElementById('place-buy');

      if (placeBuyBlock) {
        placeBuyBlock.style.width = '460px';
        placeBuyBlock.style.margin = '0 auto';
      }
    } else {
      // Скидання стилів блоку, якщо умова не виконується
      const placeBuyBlock = document.getElementById('place-buy');

      if (placeBuyBlock) {
        placeBuyBlock.style.width = ''; // Скидання ширини
        placeBuyBlock.style.margin = ''; // Скидання відступів
      }
    }
  }

  // Додавання обробника події resize до вікна
  window.addEventListener('resize', handleWindowResize);

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      Object.values(blocks).flat().forEach(id => {
        const block = document.getElementById(id);

        if (block) {
          block.classList.add('hidden');
        }
      });

      blocks[this.textContent].forEach(id => {
        const block = document.getElementById(id);

        if (block) {
          block.classList.remove('hidden');
        }
      });

      buttons.forEach(btn => btn.classList.remove('button-buy__link-active'));
      this.classList.add('button-buy__link-active');

      // При зміні кнопки також перевіряємо розмір вікна
      handleWindowResize();
    });
  });
});
