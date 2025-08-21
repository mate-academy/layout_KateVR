// 'use strict';

// страны и города
document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('country');
  const citySelect = document.getElementById('city');

  // Объект с городами для каждой страны
  const citiesByCountry = {
    ukraine: [
      { value: 'kyiv', text: 'Kyiv' },
      { value: 'Zaporizhia', text: 'Zaporizhia' },
      { value: 'Kharkiv', text: 'Kharkiv' },
      { value: 'Odessa', text: 'Odessa' },
      { value: 'Dnipro', text: 'Dnipro' },
      { value: 'Donetsk', text: 'Donetsk' },
      { value: 'Mykolaiv', text: 'Mykolaiv' },
    ],
    russia: [
      { value: 'moskov', text: 'Moskov' },
      { value: 'maykop', text: 'Maykop' },
    ],
    france: [
      { value: 'parish', text: 'Parish' },
      { value: 'marsel', text: 'Marsel' },
    ],
    spain: [
      { value: 'barselona', text: 'Barselona' },
      { value: 'kapella', text: 'Kapella' },
    ],
    usa: [
      { value: 'mayami', text: 'Mayami' },
      { value: 'vashington', text: 'Vashington' },
    ],
    china: [
      { value: 'pekin', text: 'Pekin' },
      { value: 'shanhay', text: 'Shanhay' },
    ],
    italy: [
      { value: 'milan', text: 'Milan' },
      { value: 'palermo', text: 'Palermo' },
    ],
    turkey: [
      { value: 'stambul', text: 'Stambul' },
      { value: 'ankara', text: 'Ankara' },
    ],
  };

  // Функция для обновления списка городов
  function updateCities() {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = '<option value="" disabled selected>City*</option>'; // Сбрасываем список

    if (selectedCountry && citiesByCountry[selectedCountry]) {
      citiesByCountry[selectedCountry].forEach((city) => {
        const option = document.createElement('option');
        option.value = city.value;
        option.textContent = city.text;
        citySelect.appendChild(option);
      });
    }
  }

  // Слушаем изменение страны
  countrySelect.addEventListener('change', updateCities);
});

// блок цена
let currentQuantity = 1; // Значение по умолчанию
const basePrice = 1200; // Базовая цена за 1 единицу

document.addEventListener('DOMContentLoaded', () => {
  const quantitySelects = document.querySelectorAll('.quantity__select-option');
  const priceValues = document.querySelectorAll('.quantity__select-price');

  // Функция для синхронизации количества и цены
  function syncQuantityAndPrice(selectedQuantity) {
    currentQuantity = parseInt(selectedQuantity);

    // Обновляем значение во всех select
    quantitySelects.forEach((select) => {
      select.value = currentQuantity;
    });

    // Обновляем цену во всех price-container
    const totalPrice = basePrice * currentQuantity;
    priceValues.forEach((priceValue) => {
      priceValue.textContent = `${totalPrice}$`;
    });
  }

  // Инициализация: устанавливаем начальное значение и цену
  syncQuantityAndPrice(currentQuantity);

  // Привязываем обработчик события change ко всем элементам quantity__select-option
  quantitySelects.forEach((select) => {
    select.addEventListener('change', () => {
      const selectedQuantity = parseInt(select.value);
      syncQuantityAndPrice(selectedQuantity);
    });
  });
});

// Функция для ограничения ввода только цифр
function restrictToNumbers(event) {
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, '');
}

// Функция для проверки количества цифр в полях номера карты
function checkCardNumberLength(input) {
  const errorMessage = document.getElementById('card-number-error');
  const value = input.value;

  if (value.length < 4 && value.length > 0) {
    errorMessage.textContent = 'Please enter exactly 4 digits in each field.';
    errorMessage.style.display = 'block';
  } else {
    const allInputs = document.querySelectorAll(
      '.payment-form__input--card-number',
    );
    let allValid = true;
    allInputs.forEach((inp) => {
      if (inp.value.length > 0 && inp.value.length < 4) {
        allValid = false;
      }
    });
    if (allValid) {
      errorMessage.style.display = 'none';
    }
  }
  updatePurchaseButtonState(); // Проверяем состояние кнопки
}

// Функция для проверки количества цифр в поле CVV
function checkCVVLength(input) {
  const errorMessage = document.getElementById('cvv-error');
  const value = input.value;

  if (value.length < 3 && value.length > 0) {
    errorMessage.textContent = 'Please enter exactly 3 digits.';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
  updatePurchaseButtonState(); // Проверяем состояние кнопки
}

// Функция для ограничения ввода только латинских букв и пробелов
function restrictToLettersAndSpaces(event) {
  const input = event.target;
  const errorMessage = document.getElementById('card-holder-error');
  const originalValue = input.value;
  input.value = input.value.replace(/[^a-zA-Z\s]/g, '');

  if (originalValue !== input.value) {
    errorMessage.textContent = 'Please use only Latin letters and spaces.';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
  updatePurchaseButtonState(); // Проверяем состояние кнопки
}

// Функция для поля даты истечения (автоформатирование MM / YY с валидацией месяца)
function restrictToDateFormat(event) {
  const input = event.target;
  const errorMessage = document.getElementById('expiry-date-error');
  let value = input.value.replace(/[^0-9]/g, '');

  if (value.length > 4) {
    value = value.slice(0, 4);
  }

  let monthValid = true;
  if (value.length >= 2) {
    const month = parseInt(value.slice(0, 2), 10);
    if (month < 1 || month > 12) {
      monthValid = false;
      errorMessage.textContent = 'Month must be between 01 and 12.';
      errorMessage.style.display = 'block';
      value = value.slice(0, 2);
    } else {
      errorMessage.style.display = 'none';
    }
  } else {
    errorMessage.style.display = 'none';
  }

  let formattedValue = value;
  if (value.length > 2 && monthValid) {
    formattedValue = value.slice(0, 2) + ' / ' + value.slice(2, 4);
  }
  input.value = formattedValue;
  updatePurchaseButtonState(); // Проверяем состояние кнопки
}

// Функция для проверки валидности всех полей и обновления состояния кнопки
function updatePurchaseButtonState() {
  const purchaseButton = document.querySelector('.buy__button-pay');
  const cardNumber1 = document.getElementById('card-number-1').value;
  const cardNumber2 = document.getElementById('card-number-2').value;
  const cardNumber3 = document.getElementById('card-number-3').value;
  const cardNumber4 = document.getElementById('card-number-4').value;
  const cardHolder = document.getElementById('card-holder').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  // Проверяем валидность всех полей
  const isCardNumberValid =
    /^\d{4}$/.test(cardNumber1) &&
    /^\d{4}$/.test(cardNumber2) &&
    /^\d{4}$/.test(cardNumber3) &&
    /^\d{4}$/.test(cardNumber4);

  const isCardHolderValid =
    /^[a-zA-Z\s]+$/.test(cardHolder) && cardHolder.length > 0;

  const isExpiryDateValid = /^\d{2}\s\/\s\d{2}$/.test(expiryDate);
  const month = parseInt(expiryDate.slice(0, 2), 10);
  const isMonthValid = month >= 1 && month <= 12;

  const isCVVValid = /^\d{3}$/.test(cvv);

  // Включаем кнопку только если все поля валидны
  if (
    isCardNumberValid &&
    isCardHolderValid &&
    isExpiryDateValid &&
    isMonthValid &&
    isCVVValid
  ) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }
}

// Функция для перемещения фокуса на следующее поле при нажатии Enter
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const input = event.target;
    const form = input.form;
    const inputs = Array.from(form.querySelectorAll('input'));
    const currentIndex = inputs.indexOf(input);

    if (input.classList.contains('payment-form__input--card-number')) {
      if (input.value.length === 4) {
        if (currentIndex < inputs.length - 1) {
          inputs[currentIndex + 1].focus();
        }
      } else {
        const errorMessage = document.getElementById('card-number-error');
        errorMessage.textContent =
          'Please enter exactly 4 digits in each field.';
        errorMessage.style.display = 'block';
      }
    } else if (input.id === 'cvv') {
      if (input.value.length === 3) {
        if (currentIndex < inputs.length - 1) {
          inputs[currentIndex + 1].focus();
        }
      } else {
        const errorMessage = document.getElementById('cvv-error');
        errorMessage.textContent = 'Please enter exactly 3 digits.';
        errorMessage.style.display = 'block';
      }
    } else {
      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }
    }
  }
}

// Применяем ограничения и проверки к полям номера карты
document
  .querySelectorAll('.payment-form__input--card-number')
  .forEach((input) => {
    input.addEventListener('input', function (event) {
      restrictToNumbers(event);
      checkCardNumberLength(input);
    });
    input.addEventListener('keydown', handleEnterKey);
  });

// Применяем ограничения и проверки к полю CVV
document.getElementById('cvv').addEventListener('input', function (event) {
  restrictToNumbers(event);
  checkCVVLength(event.target);
});
document.getElementById('cvv').addEventListener('keydown', handleEnterKey);

// Применяем ограничения к другим полям
document
  .getElementById('expiry-date')
  .addEventListener('input', restrictToDateFormat);
document
  .getElementById('expiry-date')
  .addEventListener('keydown', handleEnterKey);

document
  .getElementById('card-holder')
  .addEventListener('input', restrictToLettersAndSpaces);
document
  .getElementById('card-holder')
  .addEventListener('keydown', handleEnterKey);

// Валидация при отправке формы
document
  .getElementById('payment-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber1 = document.getElementById('card-number-1').value;
    const cardNumber2 = document.getElementById('card-number-2').value;
    const cardNumber3 = document.getElementById('card-number-3').value;
    const cardNumber4 = document.getElementById('card-number-4').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (
      !/^\d{4}$/.test(cardNumber1) ||
      !/^\d{4}$/.test(cardNumber2) ||
      !/^\d{4}$/.test(cardNumber3) ||
      !/^\d{4}$/.test(cardNumber4)
    ) {
      alert('Each card number field must contain exactly 4 digits.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
      alert('Card Holder Name must contain only Latin letters and spaces.');
      return;
    }

    if (!/^\d{2}\s\/\s\d{2}$/.test(expiryDate)) {
      alert('Expiration date must be in the format MM / YY (e.g., 12 / 25).');
      return;
    }

    const month = parseInt(expiryDate.slice(0, 2), 10);
    if (month < 1 || month > 12) {
      alert('Month must be between 01 and 12.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('CVV must be exactly 3 digits.');
      return;
    }

    console.log('Payment data:', {
      cardNumber: `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`,
      cardHolder,
      expiryDate,
      cvv,
    });
  });

// Инициализируем состояние кнопки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  updatePurchaseButtonState();
});

// Управление шагами и модальными окнами
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuButton = document.querySelector('.header__icon--menu');
  const menuCloseButton = document.querySelector('.menu--close');
  const modals = document.querySelectorAll('.buy');
  const steps = document.querySelectorAll('.step');
  const stepLinks = document.querySelectorAll('.buy__menu-item');
  const buyButton = document.querySelector('.buy-button');
  const orderForm = document.getElementById('order-form');
  const closeButtons = document.querySelectorAll('.buy__close');
  const purchaseButtons = document.querySelectorAll('.buy__button');

  let currentStep = 1;
  let isClosing = false; // Флаг для отслеживания закрытия

  // Функция для переключения шага
  function setActiveStep(stepNumber) {
    if (isClosing) return; // Не открываем модальное окно, если оно закрывается

    modals.forEach((modal) => {
      modal.classList.remove('buy--open');
    });

    const activeModal = document.getElementById(
      stepNumber === 1 ? 'buy' : `step-${stepNumber}`,
    );
    if (activeModal) {
      activeModal.classList.add('buy--open');
      console.log(`Открываем модальное окно для шага ${stepNumber}`);
    } else {
      console.error(`Модальное окно для шага ${stepNumber} не найдено`);
    }

    steps.forEach((step) => {
      step.classList.remove('active');
      if (parseInt(step.dataset.step) === stepNumber) {
        step.classList.add('active');
      }
    });

    currentStep = stepNumber;
    window.location.hash = stepNumber === 1 ? 'buy' : `step-${stepNumber}`;
  }

  // Функция для закрытия модального окна
  function closeModal() {
    isClosing = true;
    modals.forEach((modal) => modal.classList.remove('buy--open'));
    window.location.hash = ''; // Сбрасываем хэш
    currentStep = 1;
    isClosing = false;
  }

  // Открытие модального окна при клике на "Buy Now"
  if (buyButton) {
    buyButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Клик по кнопке Buy Now');
      setActiveStep(1);
    });
  } else {
    console.error('Кнопка Buy Now не найдена');
  }

  // Переключение шагов при клике на ссылки в меню
  stepLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const stepNumber = parseInt(link.parentElement.dataset.step);
      console.log(`Клик по ссылке шага ${stepNumber}`);
      setActiveStep(stepNumber);
    });
  });

  // Переход на следующий шаг при клике на "Purchase" или "End"
  purchaseButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Клик по кнопке с индексом ${index}`);
      if (index === 0) {
        // Первый шаг (Place Order)
        if (orderForm.checkValidity()) {
          setActiveStep(2);
        } else {
          orderForm.reportValidity();
        }
      } else if (index === 1) {
        // Второй шаг (Pay)
        setActiveStep(3);
      } else if (index === 2) {
        // Третий шаг (Complete)
        console.log('Клик по кнопке End');
        closeModal();
      }
    });
  });

  // Закрытие модального окна
  closeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  // Проверка хэша при загрузке страницы
  function checkHashOnLoad() {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'buy') {
      setActiveStep(1);
    } else if (hash === 'step-2') {
      setActiveStep(2);
    } else if (hash === 'step-3') {
      setActiveStep(3);
    } else if (hash === 'menu') {
      openMenu();
    } else if (hash === 'help') {
      openAsideModal('help');
    } else if (hash === 'faq') {
      openAsideModal('faq');
    } else if (hash === 'lang') {
      openAsideModal('lang');
    } else {
      // Если хэш пустой, закрываем все модальные окна
      modals.forEach((modal) => modal.classList.remove('buy--open'));
      currentStep = 1;
    }
  }

  // Вызываем проверку хэша при загрузке страницы
  checkHashOnLoad();

  // Слушаем изменение хэша
  window.addEventListener('hashchange', () => {
    console.log('Хэш изменился:', window.location.hash);
    if (isClosing) return;

    const hash = window.location.hash.replace('#', '');
    const navigationHashes = ['about', 'tech', 'benefits', 'contact'];

    if (hash === 'buy') {
      setActiveStep(1);
    } else if (hash === 'step-2') {
      setActiveStep(2);
    } else if (hash === 'step-3') {
      setActiveStep(3);
    } else if (hash === 'menu') {
      openMenu();
    } else if (hash === 'help') {
      openAsideModal('help');
    } else if (hash === 'faq') {
      openAsideModal('faq');
    } else if (hash === 'lang') {
      openAsideModal('lang');
    } else if (!navigationHashes.includes(hash)) {
      closeModal();
    }
  });
});

// Управление меню
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuButton = document.querySelector('.header__icon--menu');
  const menuCloseButton = document.querySelector('.menu--close');

  // Функция для открытия меню
  function openMenu() {
    menu.classList.add('menu--open');
    window.location.hash = 'menu'; // Устанавливаем хэш
  }

  // Функция для закрытия меню
  function closeMenu() {
    menu.classList.remove('menu--open');
    window.location.hash = ''; // Сбрасываем хэш
  }
});

//main button. Появление при скроле
document.addEventListener('DOMContentLoaded', () => {
  const mainButton = document.querySelector('.main-button');
  const header = document.querySelector('.header');

  // Получаем высоту хедера динамически
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    // Текущее положение скролла
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      // Показываем кнопку, если скролл больше 50px
      mainButton.classList.add('visible');
    } else if (scrollPosition <= headerHeight) {
      // Скрываем кнопку, если скролл вернулся к верху до высоты хедера
      mainButton.classList.remove('visible');
    }
  });
});

//lang-switcher
// Выбираем все ссылки языков (для маленьких и больших экранов)
const langLinks = document.querySelectorAll('.lang__link');
const langSwitcher = document.querySelector('.lang-switcher');
const currentLangSpan = langSwitcher.querySelector(
  '.lang-switcher__current span',
);

// Объект с переводами для всех языков
const translations = {
  en: {
    title:
      'The New Start of <br><span class="header__title--color">VR LOCOMOTION</span>',
    description:
      'Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!',
    buyButton: 'Buy Now',
  },
  ar: {
    title:
      'بداية جديدة لـ <br><span class="header__title--color">الحركة في الواقع الافتراضي</span>',
    description:
      'اكتشف نظام الحركة الأكثر شمولاً في الواقع الافتراضي، واطلق العنان للحركة اللانهائية في أي ألعاب على أي منصة!',
    buyButton: 'اشترِ الآن',
  },
  'zh-s': {
    title: 'VR运动的 <br><span class="header__title--color">新起点</span>',
    description: '发现最全面的VR运动系统，解锁任何平台上任何游戏中的无限运动！',
    buyButton: '立即购买',
  },
  'zh-t': {
    title: 'VR運動的 <br><span class="header__title--color">新起點</span>',
    description: '發現最全面的VR運動系統，解鎖任何平台上任何遊戲中的無限運動！',
    buyButton: '立即購買',
  },
  fr: {
    title:
      'Le nouveau départ de la <br><span class="header__title--color">locomotion VR</span>',
    description:
      'Découvrez le système de locomotion VR le plus complet et débloquez un mouvement infini dans tous les jeux sur toutes les plateformes !',
    buyButton: 'Acheter maintenant',
  },
  de: {
    title:
      'Der Neue Start der <br><span class="header__title--color">VR-Lokomotion</span>',
    description:
      'Entdecken Sie das umfassendste VR-Lokomotionssystem und schalten Sie unendliche Bewegung in allen Spielen auf allen Plattформах frei!',
    buyButton: 'Jetzt Kaufen',
  },
  it: {
    title:
      'Il nuovo inizio della <br><span class="header__title--color">locomozione VR</span>',
    description:
      'Scopri il sistema di locomozione VR più completo e sblocca un movimento infinito in qualsiasi gioco su qualsiasi piattaforma!',
    buyButton: 'Acquista ora',
  },
  pl: {
    title:
      'Nowy początek <br><span class="header__title--color">lokomocji VR</span>',
    description:
      'Odkryj najbardziej wszechstronny system lokomocji VR i odblokuj nieskończony ruch w dowolnych grach na dowolnych platformach!',
    buyButton: 'Kup teraz',
  },
  ru: {
    title:
      'Новый старт <br><span class="header__title--color">VR-локомоции</span>',
    description:
      'Откройте самую полную систему VR-локомоции и разблокируйте бесконечное движение в любых играх на любых платформах!',
    buyButton: 'Купить сейчас',
  },
  uk: {
    title:
      'Новий Початок <br><span class="header__title--color">VR Локомоції</span>',
    description:
      'Відкрийте найповнішу систему VR локомоції та розблокуйте безмежний рух у будь-яких іграх на будь-яких платформах!',
    buyButton: 'Купити Зараз',
  },
};

// Функция для форматирования текста (первая буква заглавная, остальные строчные)
function formatLanguageDisplay(lang) {
  return lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase(); // Например, "en" → "En", "zh-s" → "Zh-s"
}

// Функция для установки языка
function setLanguage(lang) {
  localStorage.setItem('language', lang); // Сохраняем выбранный язык
  currentLangSpan.textContent = formatLanguageDisplay(lang); // Обновляем отображение

  // Обновляем текст на странице
  document.querySelector('.header__title').innerHTML = translations[lang].title; // Используем innerHTML вместо textContent
  document.querySelector('.header__text').textContent =
    translations[lang].description;
  document.querySelector('.main-button__link').textContent =
    translations[lang].buyButton;

  // Закрываем меню после выбора языка
  langSwitcher.classList.remove('is-open');
}

// Устанавливаем язык при загрузке страницы
const savedLang = localStorage.getItem('language') || 'en';
setLanguage(savedLang);

// Обработчик клика для открытия/закрытия меню
langSwitcher
  .querySelector('.lang-switcher__current')
  .addEventListener('click', () => {
    langSwitcher.classList.toggle('is-open');
  });

// langLinks.querySelector('.lang__link').addEventListener('click', () => {
//   window.location.href = 'http://localhost:8080/';
// });

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) {
    langSwitcher.classList.remove('is-open');
  }
});

// Обработчик клика по языкам
langLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLang = link.getAttribute('data-lang');
    setLanguage(selectedLang);
    window.location.href = 'https://inhakr.github.io/layout_KateVR/';
  });
});

//слайдер
document.addEventListener('DOMContentLoaded', () => {
  const sliderItems = document.querySelectorAll('.slider__item');
  const prevButton = document.querySelector('.header__bottom-slider-but--prev');
  const currentButton = document.querySelector(
    '.header__bottom-slider-but--current',
  );
  const nextButton = document.querySelector('.header__bottom-slider-but--next');
  let currentIndex = 0;
  let autoSlideInterval;
  let lastClickedButton = null; // Переменная для отслеживания последней нажатой кнопки

  function updateSlider() {
    // Убираем класс active у всех слайдов и кнопок
    sliderItems.forEach((item) => item.classList.remove('active'));
    prevButton.classList.remove('active');
    currentButton.classList.remove('active');
    nextButton.classList.remove('active');

    // Добавляем класс active текущему слайду
    sliderItems[currentIndex].classList.add('active');

    // Если пользователь нажимал на кнопку, подчеркивание остается на ней
    if (lastClickedButton) {
      lastClickedButton.classList.add('active');
    } else {
      // Иначе подчеркивание перемещается по заданному порядку
      if (currentIndex === 0) {
        currentButton.classList.add('active'); // Первый слайд — подчеркивание на центральной кнопке
      } else if (currentIndex === 1) {
        nextButton.classList.add('active'); // Второй слайд — подчеркивание на "Next"
      } else if (currentIndex === 2) {
        prevButton.classList.add('active'); // Третий слайд — подчеркивание на "Previous"
      }
    }
  }

  // Функция для автоматической прокрутки
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderItems.length; // Переключаем на следующий слайд
      lastClickedButton = null; // Сбрасываем последнюю нажатую кнопку при автопрокрутке
      updateSlider();
    }, 2000); // Каждые 2 секунды
  }

  // Функция для остановки автоматической прокрутки
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Функция для перезапуска автоматической прокрутки после паузы
  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Обработчик для кнопки "Previous"
  prevButton.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    lastClickedButton = prevButton; // Сохраняем, что была нажата кнопка "Previous"
    updateSlider();
    setTimeout(restartAutoSlide, 5000); // Возобновляем автопрокрутку через 5 секунд
  });

  // Обработчик для кнопки "Next"
  nextButton.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex + 1) % sliderItems.length;
    lastClickedButton = nextButton; // Сохраняем, что была нажата кнопка "Next"
    updateSlider();
    setTimeout(restartAutoSlide, 5000); // Возобновляем автопрокрутку через 5 секунд
  });

  // Инициализация: показываем первый слайд и запускаем автопрокрутку
  updateSlider();
  startAutoSlide();
});

//троеточие в секции more
document.addEventListener('DOMContentLoaded', function () {
  // Находим все блоки с классом more__block
  const blocks = document.querySelectorAll('.section__text');

  // Проходим по каждому блоку
  blocks.forEach((block) => {
    // Функция для проверки состояния блока
    function updateEllipsis() {
      const scrollTop = block.scrollTop; // Текущая позиция скролла
      const scrollHeight = block.scrollHeight; // Полная высота содержимого
      const clientHeight = block.clientHeight; // Видимая высота блока

      // Условие 1: Если пользователь начал прокрутку (scrollTop > 0)
      // Условие 2: Если весь текст виден (scrollHeight <= clientHeight)
      if (scrollTop > 0 || scrollHeight <= clientHeight) {
        block.classList.add('hide-ellipsis');
      } else {
        block.classList.remove('hide-ellipsis');
      }
    }

    // Проверяем состояние при загрузке страницы
    updateEllipsis();

    // Проверяем состояние при прокрутке
    block.addEventListener('scroll', updateEllipsis);

    // Проверяем состояние при изменении размера окна (например, если текст перераспределился)
    window.addEventListener('resize', updateEllipsis);
  });
});

//кнопка видео kjlkjklj
let player1, player2;

// Элементы для первого плеера (#vrVideo)
const playButton1 = document.querySelector(
  '.play-button[data-video="vrVideo"]',
);
const closeButton1 = document.querySelector(
  '.aside--close-video[data-video="vrVideo"]',
);
const videoFrame1 = document.getElementById('vrVideo');
const headerVideo = document.querySelector('.header__video');

// Элементы для второго плеера (#vrVideo2)
const playButton2 = document.querySelector(
  '.about__play-button[data-video="vrVideo2"]',
);
const closeButton2 = document.querySelector(
  '.video--close-video[data-video="vrVideo2"]',
);
const videoFrame2 = document.getElementById('vrVideo2');

// Функция, которая вызывается, когда API YouTube готов
function onYouTubeIframeAPIReady() {
  console.log('YouTube IFrame API ready');

  // Инициализация первого плеера (#vrVideo)
  if (videoFrame1) {
    player1 = new YT.Player('vrVideo', {
      events: {
        onReady: onPlayer1Ready,
        onError: function (event) {
          console.error('YouTube Player 1 Error:', event.data);
        },
      },
    });
  }

  // Инициализация второго плеера (#vrVideo2)
  if (videoFrame2) {
    player2 = new YT.Player('vrVideo2', {
      events: {
        onReady: onPlayer2Ready,
        onError: function (event) {
          console.error('YouTube Player 2 Error:', event.data);
        },
      },
    });
  }
}

// Обработчик готовности первого плеера
function onPlayer1Ready(event) {
  console.log('Player 1 is ready');
  if (playButton1 && closeButton1) {
    playButton1.addEventListener('click', function () {
      console.log('Play button 1 clicked');
      if (player1 && player1.playVideo) {
        player1.playVideo();
        playButton1.style.display = 'none';
        videoFrame1.style.display = 'block';
        closeButton1.style.display = 'block';
        headerVideo.classList.add('header__video--active');
      } else {
        console.error('Player 1 is not initialized');
      }
    });

    closeButton1.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('Close button 1 clicked');
      if (player1 && player1.stopVideo) {
        player1.stopVideo();
        playButton1.style.display = 'block';
        videoFrame1.style.display = 'none';
        closeButton1.style.display = 'none';
        headerVideo.classList.remove('header__video--active');
      } else {
        console.error('Player 1 is not initialized');
      }
    });
  }
}

// Обработчик готовности второго плеера
function onPlayer2Ready(event) {
  console.log('Player 2 is ready');
  if (playButton2 && closeButton2) {
    playButton2.addEventListener('click', function () {
      console.log('Play button 2 clicked');
      if (player2 && player2.playVideo) {
        player2.playVideo();
        playButton2.style.display = 'none';
        videoFrame2.style.display = 'block';
        closeButton2.style.display = 'block';
      } else {
        console.error('Player 2 is not initialized');
      }
    });

    closeButton2.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('Close button 2 clicked');
      if (player2 && player2.stopVideo) {
        player2.stopVideo();
        playButton2.style.display = 'block';
        videoFrame2.style.display = 'none';
        closeButton2.style.display = 'none';
      } else {
        console.error('Player 2 is not initialized');
      }
    });
  }
}

// Логика для нового слайдера в секции About
// document.addEventListener('DOMContentLoaded', () => {
//   const aboutSlides = document.querySelectorAll('.about__slide');
//   const aboutPrevBtn = document.getElementById('aboutPrevBtn');
//   const aboutNextBtn = document.getElementById('aboutNextBtn');

//   const aboutNothingvBtn = document.getElementById('aboutNothingvBtn');

//   const aboutCounter = document.getElementById('aboutCounter');
//   const aboutDots = document.querySelectorAll('.about__slider-dot');
//   let aboutCurrentIndex = 0;
//   let aboutAutoSlideInterval;
//   let autoSlideStep = 0; // Счётчик шагов для автопрокрутки (определяет, какая кнопка подсвечивается)

//   function updateAboutSlider() {
//     // Обновление видимости слайдов
//     aboutSlides.forEach((slide, index) => {
//       slide.style.display = index === aboutCurrentIndex ? 'block' : 'none';
//     });

//     // Обновление счётчика
//     aboutCounter.textContent = `${aboutCurrentIndex + 1}/${aboutSlides.length}`;

//     // Обновление точек
//     aboutDots.forEach((dot, index) => {
//       dot.classList.toggle('active', index === aboutCurrentIndex);
//     });

//     // Обновление состояния кнопок
//     aboutPrevBtn.disabled = aboutCurrentIndex === 0;
//     aboutNextBtn.disabled = aboutCurrentIndex === aboutSlides.length - 1;
//   }

//   function startAboutAutoSlide() {
//     aboutAutoSlideInterval = setInterval(() => {
//       aboutCurrentIndex = (aboutCurrentIndex + 1) % aboutSlides.length;
//       updateAboutSlider();
//     }, 2000);
//   }

//   function stopAboutAutoSlide() {
//     clearInterval(aboutAutoSlideInterval);
//   }

//   function restartAboutAutoSlide() {
//     stopAboutAutoSlide();
//     setTimeout(startAboutAutoSlide, 5000);
//   }

//   // Обработчики событий для кнопок навигации
//   aboutPrevBtn.addEventListener('click', () => {
//     if (aboutCurrentIndex > 0) {
//       aboutCurrentIndex--;
//       updateAboutSlider();
//       restartAboutAutoSlide();
//     }
//   });

//   aboutNextBtn.addEventListener('click', () => {
//     if (aboutCurrentIndex < aboutSlides.length - 1) {
//       aboutCurrentIndex++;
//       updateAboutSlider();
//       restartAboutAutoSlide();
//     }
//   });

//   // Обработчики событий для точек
//   aboutDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//       aboutCurrentIndex = index;
//       updateAboutSlider();
//       restartAboutAutoSlide();
//     });
//   });

//   // Инициализация слайдера
//   updateAboutSlider();
//   startAboutAutoSlide();
// });

document.addEventListener('DOMContentLoaded', () => {
  const aboutSlides = document.querySelectorAll('.about__slide');
  const aboutPrevBtn = document.getElementById('aboutPrevBtn');
  const aboutNextBtn = document.getElementById('aboutNextBtn');
  const aboutNothingvBtn = document.getElementById('aboutNothingvBtn');
  const aboutCounter = document.getElementById('aboutCounter');
  const aboutDots = document.querySelectorAll('.about__slider-dot');
  let aboutCurrentIndex = 0;
  let aboutAutoSlideInterval;
  let autoSlideStep = 0; // Счётчик шагов для автопрокрутки (определяет, какая кнопка подсвечивается)

  function updateAboutSlider(autoSlide = false) {
    // Обновление видимости слайдов
    aboutSlides.forEach((slide, index) => {
      slide.style.display = index === aboutCurrentIndex ? 'block' : 'none';
    });

    // Обновление точек
    aboutDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === aboutCurrentIndex);
    });

    // Обновление счётчика
    aboutCounter.textContent = `${aboutCurrentIndex + 1}/${aboutSlides.length}`;

    // Обновление состояния кнопок (disabled)
    aboutPrevBtn.disabled = aboutCurrentIndex === 0;
    aboutNextBtn.disabled = aboutCurrentIndex === aboutSlides.length - 1;

    // Управление подчеркиванием кнопок
    if (autoSlide) {
      // При автоматической прокрутке определяем, какую кнопку подсвечивать
      const buttons = [aboutPrevBtn, aboutNothingvBtn, aboutNextBtn]; // Порядок кнопок
      const currentButtonIndex = autoSlideStep % buttons.length; // Индекс текущей кнопки (0, 1, 2)

      // Убираем подсветку со всех кнопок
      buttons.forEach((button) => button.classList.remove('active'));

      // Подсвечиваем текущую кнопку
      buttons[currentButtonIndex].classList.add('active');

      // Увеличиваем шаг автопрокрутки
      autoSlideStep++;
    }
  }

  function startAboutAutoSlide() {
    aboutAutoSlideInterval = setInterval(() => {
      aboutCurrentIndex = (aboutCurrentIndex + 1) % aboutSlides.length;
      updateAboutSlider(true); // Передаём true, чтобы указать, что это автопрокрутка
    }, 2000);
  }

  function stopAboutAutoSlide() {
    clearInterval(aboutAutoSlideInterval);
  }

  function restartAboutAutoSlide() {
    stopAboutAutoSlide();
    autoSlideStep = 0; // Сбрасываем шаг автопрокрутки
    setTimeout(startAboutAutoSlide, 5000);
  }

  // Обработчики событий для кнопок навигации
  aboutPrevBtn.addEventListener('click', () => {
    if (aboutCurrentIndex > 0) {
      aboutCurrentIndex--;
      updateAboutSlider(); // Ручное переключение (не автопрокрутка)
      restartAboutAutoSlide();

      // Подсвечиваем Previous, убираем подсветку с остальных
      aboutPrevBtn.classList.add('active');
      aboutNextBtn.classList.remove('active');
      aboutNothingvBtn.classList.remove('active');
    }
  });

  aboutNextBtn.addEventListener('click', () => {
    if (aboutCurrentIndex < aboutSlides.length - 1) {
      aboutCurrentIndex++;
      updateAboutSlider(); // Ручное переключение (не автопрокрутка)
      restartAboutAutoSlide();

      // Подсвечиваем Next, убираем подсветку с остальных
      aboutNextBtn.classList.add('active');
      aboutPrevBtn.classList.remove('active');
      aboutNothingvBtn.classList.remove('active');
    }
  });

  aboutNothingvBtn.addEventListener('click', () => {
    // При клике на aboutNothingvBtn подсвечиваем её, убираем подсветку с остальных
    updateAboutSlider(); // Ручное переключение (не автопрокрутка)
    restartAboutAutoSlide();

    aboutNothingvBtn.classList.add('active');
    aboutPrevBtn.classList.remove('active');
    aboutNextBtn.classList.remove('active');
  });

  // Инициализация слайдера
  updateAboutSlider();
  startAboutAutoSlide();
});

//tech
// document.addEventListener('DOMContentLoaded', () => {
//   const section = document.querySelector('.tech-specs');
//   const lines = document.querySelectorAll('.tech-specs__line');
//   const contents = document.querySelectorAll('.tech-specs__content');

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           lines.forEach((line) => (line.style.animationPlayState = 'running'));
//           contents.forEach(
//             (content) => (content.style.animationPlayState = 'running'),
//           );
//           observer.unobserve(section);
//         }
//       });
//     },
//     { threshold: 0.5 },
//   );

//   observer.observe(section);
// });

function updateSVG() {
  const svg = document.querySelector('.tech-specs__line--batteries');
  // const svgConnect = document.querySelector('.tech-specs__line--connection');

  const path = document.querySelector('.line-path');
  const pathConnect = document.querySelector('.path-connect');

  // const startCircle = document.querySelector('.start-circle');

  const endCircle = document.querySelector('.end-circle');
  const endCircleConnect = document.querySelector('.end-circle-connect');

  const width = window.innerWidth;

  if (width >= 1920) {
    // Для 1920px
    svg.setAttribute('width', '750');
    // svg.setAttribute('height', '525');
    // svg.setAttribute('viewBox', '-300 0 600 450');
    path.setAttribute('d', 'M7.5,15 V215 H-285');
    pathConnect.setAttribute('d', 'M0,10 H100 V-70 H180');

    // startCircle.setAttribute('cx', '8');
    // startCircle.setAttribute('cy', '12');
    // startCircle.setAttribute('r', '4.5');
    endCircle.setAttribute('cx', '-280');
    endCircleConnect.setAttribute('cx', '180');
    // endCircle.setAttribute('cy', '322.5');
    // endCircle.setAttribute('r', '4.5');
  } else {
    // Для 1280px (или других разрешений)
    // svg.setAttribute('width', '750');
    // svg.setAttribute('height', '350');
    // svg.setAttribute('viewBox', '-200 0 400 300');
    path.setAttribute('d', 'M5,10 V215 H-185');
    pathConnect.setAttribute('d', 'M0,10 H40 V-70 H95');
    // startCircle.setAttribute('r', '3');
    endCircle.setAttribute('cx', '-180');
    endCircleConnect.setAttribute('cx', '95');
    // endCircle.setAttribute('cy', '215');
    // endCircle.setAttribute('r', '3');
  }
}

// Выполнять при загрузке страницы и изменении размера окна
window.addEventListener('resize', updateSVG);
window.addEventListener('load', updateSVG);
// startCircle.setAttribute('cx', '5');
// startCircle.setAttribute('cy', '10');

// форма contact

document.addEventListener('DOMContentLoaded', () => {
  // Находим форму внутри section.contact
  const form = document.querySelector('section.contact .contact-form');
  const emailInput = document.querySelector('section.contact #email');
  const nameInput = document.querySelector('section.contact #name');
  const phoneInput = document.querySelector('section.contact #phone');

  // Проверяем, найдены ли элементы
  if (!form) {
    console.error(
      'Форма с классом .contact-form не найдена внутри section.contact!',
    );
    return;
  }
  if (!emailInput) {
    console.error('Поле email с id="email" не найдено внутри section.contact!');
    return;
  }
  if (!nameInput) {
    console.error('Поле name с id="name" не найдено внутри section.contact!');
    return;
  }
  if (!phoneInput) {
    console.error('Поле phone с id="phone" не найдено внутри section.contact!');
    return;
  } else {
    console.log('Элементы формы найдены корректно');
  }

  // Регулярное выражение для проверки email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Регулярное выражение для проверки телефона (+ и ровно 12 цифр)
  const phoneRegex = /^\+[0-9]{12}$/;

  // Функция для проверки формата email
  const validateEmail = (email) => emailRegex.test(email);

  // Функция для проверки формата телефона
  const validatePhone = (phone) => phoneRegex.test(phone);

  // Функция для проверки заполненности имени
  const validateName = (name) => name.trim().length > 0;

  // Функция для переключения состояния ошибки
  const toggleError = (input, hasError) => {
    const contactGroup = input.closest('.contact-group');
    if (!contactGroup) {
      console.error('Контейнер .contact-group не найден для поля:', input);
      return;
    }
    if (hasError) {
      console.log('Добавляем класс contact-group--error для поля:', input);
      contactGroup.classList.add('contact-group--error');
    } else {
      console.log('Убираем класс contact-group--error для поля:', input);
      contactGroup.classList.remove('contact-group--error');
    }
  };

  // Валидация имени при потере фокуса
  nameInput.addEventListener('blur', () => {
    const isValidName = validateName(nameInput.value);
    console.log('Name:', nameInput.value, 'Валиден:', isValidName);
    toggleError(nameInput, !isValidName);
  });

  // Валидация email при потере фокуса
  emailInput.addEventListener('blur', () => {
    const isValidEmail = validateEmail(emailInput.value);
    console.log('Email:', emailInput.value, 'Валиден:', isValidEmail);
    toggleError(emailInput, !isValidEmail);
  });

  // Ограничение ввода для телефона в реальном времени (без валидации)
  phoneInput.addEventListener('input', (e) => {
    let value = phoneInput.value;

    // Удаляем все, кроме символа + и цифр
    value = value.replace(/[^0-9+]/g, '');

    // Если символ + уже есть, не даем добавить еще один
    if (value.indexOf('+') !== 0) {
      value = '+' + value.replace(/\+/g, '');
    } else {
      value = value.replace(/\+/g, (match, index) => (index === 0 ? '+' : ''));
    }

    // Ограничиваем ввод: максимум 13 символов (+ и 12 цифр)
    if (value.length > 13) {
      value = value.slice(0, 13);
    }

    // Устанавливаем новое значение поля
    phoneInput.value = value;
  });

  // Валидация телефона при потере фокуса
  phoneInput.addEventListener('blur', () => {
    const isValidPhone = validatePhone(phoneInput.value);
    console.log('Phone:', phoneInput.value, 'Валиден:', isValidPhone);
    toggleError(phoneInput, !isValidPhone);
  });

  // Валидация при отправке формы
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    let hasError = false;

    // Проверка имени
    const isValidName = validateName(nameInput.value);
    if (!isValidName) {
      toggleError(nameInput, true);
      hasError = true;
    } else {
      toggleError(nameInput, false);
    }

    // Проверка email
    const isValidEmail = validateEmail(emailInput.value);
    if (!isValidEmail) {
      toggleError(emailInput, true);
      hasError = true;
    } else {
      toggleError(emailInput, false);
    }

    // Проверка телефона
    const isValidPhone = validatePhone(phoneInput.value);
    if (!isValidPhone) {
      toggleError(phoneInput, true);
      hasError = true;
    } else {
      toggleError(phoneInput, false);
    }

    if (!hasError) {
      console.log('Форма валидна, готова к отправке!');
      console.log('Форма отправлена');
      form.reset();
    }
  });
});

//кнопка back-to-up
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.back-to-top');
  const header = document.querySelector('#header');

  if (!backToTopButton) {
    console.error('Кнопка back-to-top не найдена!');
    return;
  }
  if (!header) {
    console.error('Хедер с id="header" не найден!');
    return;
  } else {
    console.log('Элементы back-to-top and header найдены корректно');
  }

  // Показ/скрытие кнопки при прокрутке
  window.addEventListener('scroll', () => {
    const headerHeight = header.offsetHeight; // Высота хедера
    const scrollPosition = window.scrollY; // Текущая позиция прокрутки

    if (scrollPosition > headerHeight) {
      backToTopButton.classList.add('visible'); // Показываем кнопку
    } else {
      backToTopButton.classList.remove('visible'); // Скрываем кнопку
    }
  });

  // Обработчик для кнопки "Вернуться наверх"
  backToTopButton.addEventListener('click', () => {
    header.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка к хедеру
  });
});

footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    console.log('Target ID:', targetId); // Должно вывести "#tech"
    const targetElement = document.querySelector(targetId);
    console.log('Target Element:', targetElement); // Должно вывести элемент <section id="tech">

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Элемент с ID ${targetId} не найден!`);
    }
  });
});
