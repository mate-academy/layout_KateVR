'use strict';

// #region sliders
// About Slider

const about = document.getElementById('about');
const aboutSliderNumber = about.querySelector('.about__slider-number');

const aboutSlides = about.querySelector('.slider__slides');
const aboutSliderPoints = about.querySelectorAll('.slider__point');

const aboutSliderUnderlines = about.querySelectorAll('.prev-next__underline');
const aboutPrevSlideBtn = about.querySelector('.prev-next__btn--prev');
const aboutNextSlideBtn = about.querySelector('.prev-next__btn--next');

const aboutSlideWidth = aboutSlides.getBoundingClientRect().width;

let aboutTimerId = 0;

aboutSlides.addEventListener('scroll', () => {
  window.clearTimeout(aboutTimerId);

  aboutTimerId = window.setTimeout(() => {
    scrollSlider(aboutSlides, aboutSlideWidth, updateAboutSlider);
  }, 300);
});

aboutNextSlideBtn.addEventListener('click', () => {
  aboutSlides.scrollLeft += aboutSlideWidth;
});

aboutPrevSlideBtn.addEventListener('click', () => {
  aboutSlides.scrollLeft -= aboutSlideWidth;
});

function updateAboutSlider(slideIndex) {
  aboutPrevSlideBtn.disabled = slideIndex === 0;
  aboutNextSlideBtn.disabled = slideIndex === 4;
  aboutSliderNumber.textContent = `${slideIndex + 1}/5`;

  const activeUnderline = about.querySelector('.prev-next__underline--active');

  activeUnderline.classList.remove('prev-next__underline--active');
  aboutSliderUnderlines[slideIndex].classList.add(
    'prev-next__underline--active',
  );

  const activePoint = about.querySelector('.slider__point--active');

  activePoint.classList.remove('slider__point--active');
  aboutSliderPoints[slideIndex].classList.add('slider__point--active');
}

// Header Slider

const header = document.querySelector('.header');

const headerSlides = header.querySelector('.slider__slides--header');
const headerSliderUnderlines = header.querySelectorAll('.prev-next__underline');
const headerPrevSlideBtn = header.querySelector('.prev-next__btn--prev');
const headerNextSlideBtn = header.querySelector('.prev-next__btn--next');

const headerSlideWidth = headerSlides.getBoundingClientRect().width;

let headerTimerId = 0;

headerSlides.addEventListener('scroll', () => {
  window.clearTimeout(headerTimerId);

  headerTimerId = window.setTimeout(() => {
    scrollSlider(headerSlides, headerSlideWidth, updateHeaderSlider);
  }, 300);
});

headerNextSlideBtn.addEventListener('click', () => {
  headerSlides.scrollLeft += headerSlideWidth;
});

headerPrevSlideBtn.addEventListener('click', () => {
  headerSlides.scrollLeft -= headerSlideWidth;
});

function updateHeaderSlider(slideIndex) {
  headerPrevSlideBtn.disabled = slideIndex === 0;
  headerNextSlideBtn.disabled = slideIndex === 4;

  const activeUnderline = header.querySelector('.prev-next__underline--active');

  activeUnderline.classList.remove('prev-next__underline--active');
  headerSliderUnderlines[slideIndex].classList.add(
    'prev-next__underline--active',
  );
}

function scrollSlider(slides, slideWidth, updateSlider) {
  const scrollLeft = Math.floor(slides.scrollLeft);

  switch (scrollLeft) {
    case 0:
      updateSlider(0);
      break;

    case slideWidth:
      updateSlider(1);
      break;

    case slideWidth * 2:
      updateSlider(2);
      break;

    case slideWidth * 3:
      updateSlider(3);
      break;

    case slideWidth * 4:
      updateSlider(4);
      break;

    default:
      break;
  }
}

// #endregion

// #region techSpecsButtons
// Tech Specs Buttons

const techSpecsImgWrapper = document.querySelector('.tech-specs__img-wrapper');
const techSpecsButtons =
  techSpecsImgWrapper.querySelectorAll('.tech-specs__btn');

techSpecsImgWrapper.addEventListener('click', (e) => {
  const pressedBtn = e.target.closest('.tech-specs__btn');

  if (!pressedBtn) {
    return;
  }

  pressedBtn.classList.toggle('tech-specs__btn--active');

  for (const techSpecsButton of techSpecsButtons) {
    if (techSpecsButton !== pressedBtn) {
      techSpecsButton.classList.remove('tech-specs__btn--active');
    }
  }
});

for (const techSpecsButton of techSpecsButtons) {
  techSpecsButton.addEventListener('blur', () => {
    if (techSpecsButton.classList.contains('tech-specs__btn--active')) {
      techSpecsButton.classList.remove('tech-specs__btn--active');
    }
  });
}

// #endregion

// #region formValidation
// Get In Touch / Form Validation

const form = document.querySelector('.form');

const nameLabel = form.querySelector('.form__label--name');
const nameInput = form.querySelector('#name-input');

const emailLabel = form.querySelector('.form__label--email');
const emailInput = form.querySelector('#email-input');

const phoneLabel = form.querySelector('.form__label--phone');
const phoneInput = form.querySelector('#phone-input');

const redColor = '#860404';
const contrastColor = '#05c2df';
const textColor = '#929292';
const darkGreyColor = '#2f2f2f';

const numbers = '0123456789';
const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let nameError = false;
let emailError = false;
let phoneError = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');

  if (!name.trim()) {
    nameError = true;
    nameLabel.textContent = 'Please, fill your name*';
    setColor(nameLabel, nameInput, redColor, redColor);
  } else {
    const allowedChars = smallLetters + capitalLetters + numbers + '_- ';

    for (const char of name) {
      if (!allowedChars.includes(char)) {
        nameError = true;
        nameLabel.textContent = 'Incorrect name format*';
        setColor(nameLabel, nameInput, redColor, redColor);

        break;
      }
    }
  }

  if (!email.trim()) {
    emailError = true;
    emailLabel.textContent = 'Please, fill your email*';
    setColor(emailLabel, emailInput, redColor, redColor);
  } else {
    const allowedChars = smallLetters + capitalLetters + numbers + '@.';

    for (const char of email) {
      if (!allowedChars.includes(char)) {
        emailError = true;

        break;
      }
    }

    if (!email.includes('@')) {
      emailError = true;
    }

    if (emailError) {
      emailLabel.textContent = 'Incorrect email format*';
      setColor(emailLabel, emailInput, redColor, redColor);
    }
  }

  if (!phone.trim()) {
    phoneError = true;
    phoneLabel.textContent = 'Please, fill your phone*';
    setColor(phoneLabel, phoneInput, redColor, redColor);
  } else {
    const allowedChars = numbers + '+';

    for (let i = 0; i < phone.length; i++) {
      const char = phone[i];

      if (!allowedChars.includes(char) || (char === '+' && i !== 0)) {
        phoneError = true;
        phoneLabel.textContent = 'Incorrect phone format*';
        setColor(phoneLabel, phoneInput, redColor, redColor);

        break;
      }
    }
  }

  if (nameError) {
    nameInput.focus();

    return;
  }

  if (emailError) {
    emailInput.focus();

    return;
  }

  if (phoneError) {
    phoneInput.focus();

    return;
  }

  form.reset();
});

nameInput.addEventListener('input', () => {
  nameError = false;
  nameLabel.textContent = 'Name*';
  setColor(nameLabel, nameInput, contrastColor, contrastColor);
});

emailInput.addEventListener('input', () => {
  emailError = false;
  emailLabel.textContent = 'Email*';
  setColor(emailLabel, emailInput, contrastColor, contrastColor);
});

phoneInput.addEventListener('input', () => {
  phoneError = false;
  phoneLabel.textContent = 'Phone*';
  setColor(phoneLabel, phoneInput, contrastColor, contrastColor);
});

nameInput.addEventListener('blur', () => {
  if (!nameError) {
    setColor(nameLabel, nameInput, textColor, darkGreyColor);
  }
});

emailInput.addEventListener('blur', () => {
  if (!emailError) {
    setColor(emailLabel, emailInput, textColor, darkGreyColor);
  }
});

phoneInput.addEventListener('blur', () => {
  if (!phoneError) {
    setColor(phoneLabel, phoneInput, textColor, darkGreyColor);
  }
});

nameInput.addEventListener('focus', () => {
  if (!nameError) {
    setColor(nameLabel, nameInput, contrastColor, contrastColor);
  }
});

emailInput.addEventListener('focus', () => {
  if (!emailError) {
    setColor(emailLabel, emailInput, contrastColor, contrastColor);
  }
});

phoneInput.addEventListener('focus', () => {
  if (!phoneError) {
    setColor(phoneLabel, phoneInput, contrastColor, contrastColor);
  }
});

function setColor(label, input, labelColor, inputBorderColor) {
  label.style.color = labelColor;
  input.style.borderColor = inputBorderColor;
}

// #endregion

// #region scrollBuyNowLink
// Scroll Buy Now Link

const buyNowLink = document.querySelector('.page__buy-now');
const getInTouchSection = document.getElementById('contact');
const getInTouchTop = getInTouchSection.offsetTop;
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > getInTouchTop - windowHeight) {
    buyNowLink.classList.add('page__buy-now--hidden');
  } else {
    buyNowLink.classList.remove('page__buy-now--hidden');
  }
});

// #endregion

// #region faqSelectQuestion
// FAQ Select Question

const faqSection = document.getElementById('faq');
const faqMoreBtn = faqSection.querySelector('.more-btn');
const questions = faqSection.querySelectorAll('.faq__question');

faqSection.addEventListener('click', (e) => {
  const question = e.target.closest('.faq__question');

  if (!question) {
    return;
  }

  question.classList.toggle('faq__question--selected');

  let isMoreBtnDisabled = true;

  for (const question of questions) {
    if (!question.classList.contains('faq__question--selected')) {
      isMoreBtnDisabled = false;

      break;
    }
  }

  faqMoreBtn.disabled = isMoreBtnDisabled;
});

faqMoreBtn.addEventListener('click', () => {
  for (const question of questions) {
    if (!question.classList.contains('faq__question--selected')) {
      question.classList.add('faq__question--selected');

      break;
    }
  }

  const selectedQuestions = faqSection.querySelectorAll(
    '.faq__question--selected',
  );

  if (questions.length === selectedQuestions.length) {
    faqMoreBtn.disabled = true;
  }
});

// #endregion

// #region videoClosing
// Closing The Video In The Correct Section

const headerPlayVideoBtn = document.querySelector('.header__play-video');
const aboutPlayVideoBtn = document.querySelector('.about__play-video');
const videoAside = document.getElementById('video');
const videoCloseIcon = videoAside.querySelector('.top-bar__icon--close');

headerPlayVideoBtn.addEventListener('click', () => {
  videoCloseIcon.setAttribute('href', '#page-top');
});

aboutPlayVideoBtn.addEventListener('click', () => {
  videoCloseIcon.setAttribute('href', '#about');
});

// #endregion

// #region selectFields
// Select Quantity

const orderPlace = document.getElementById('order-place');
const orderPay = document.getElementById('order-pay');

const price1 = orderPlace.querySelector('.qty-price__price-value');
const qtySelect1 = orderPlace.querySelector('.select-qty');
const qtySelectValue1 = orderPlace.querySelector('.select-qty__current-value');
const qtySelectList1 = orderPlace.querySelector('.select-qty__list-wrapper');

const price2 = orderPay.querySelector('.qty-price__price-value');
const qtySelect2 = orderPay.querySelector('.select-qty');
const qtySelectValue2 = orderPay.querySelector('.select-qty__current-value');
const qtySelectList2 = orderPay.querySelector('.select-qty__list-wrapper');

qtySelect1.addEventListener('click', () => {
  qtySelectList1.classList.toggle('select-qty__list-wrapper--visible');
});

qtySelectList1.addEventListener('click', (e) => {
  handleClickQuantityList(e, qtySelect1, qtySelectValue1, price1);
});

qtySelect2.addEventListener('click', () => {
  qtySelectList2.classList.toggle('select-qty__list-wrapper--visible');
});

qtySelectList2.addEventListener('click', (e) => {
  handleClickQuantityList(e, qtySelect2, qtySelectValue2, price2);
});

function handleClickQuantityList(event, qtySelect, qtySelectValue, price) {
  const li = event.target.closest('.select-qty__item');

  if (!li) {
    return;
  }

  const liText = li.innerText;
  const selectedQty = +liText;

  price.textContent = `${selectedQty * 1200}$`;

  qtySelectValue.textContent = liText;
  qtySelectValue.classList.toggle(
    'select-qty__current-value--changed',
    li.innerText !== '1',
  );

  const selectedLi = qtySelect.querySelector('.select-qty__item--selected');

  selectedLi.classList.remove('select-qty__item--selected');
  li.classList.add('select-qty__item--selected');
}

// Select Country / City

const countrySelect = document.querySelector('.select--country');
const countrySelectValue = countrySelect.querySelector(
  '.select__current-value',
);
const countrySelectList = countrySelect.querySelector('.select__list-wrapper');

const citySelect = document.querySelector('.select--city');
const citySelectValue = citySelect.querySelector('.select__current-value');
const citySelectList = citySelect.querySelector('.select__list-wrapper');

countrySelect.addEventListener('click', () => {
  countrySelectList.classList.toggle('select__list-wrapper--visible');
});

countrySelectList.addEventListener('click', (e) => {
  handleClickSelectList(e, countrySelect, countrySelectValue);
});

citySelect.addEventListener('click', () => {
  citySelectList.classList.toggle('select__list-wrapper--visible');
});

citySelectList.addEventListener('click', (e) => {
  handleClickSelectList(e, citySelect, citySelectValue);
});

function handleClickSelectList(event, selectField, selectValue) {
  const li = event.target.closest('.select__item');

  if (!li) {
    return;
  }

  selectValue.innerText = li.innerText;

  const selectedLi = selectField.querySelector('.select__item--selected');

  li.classList.add('select__item--selected');

  if (!selectedLi) {
    return;
  }

  selectedLi.classList.remove('select__item--selected');
}

// Select Language

const langSelect = document.querySelector('.select-lang');

const langSelectValue = langSelect.querySelector('.select-lang__current-value');
const langSelectList = langSelect.querySelector('.select-lang__list-wrapper');

langSelect.addEventListener('click', () => {
  langSelectList.classList.toggle('select-lang__list-wrapper--visible');
});

langSelectList.addEventListener('click', (e) => {
  handleClickLangList(e, langSelect, langSelectValue);
});

function handleClickLangList(event, selectField, selectValue) {
  const li = event.target.closest('.select-lang__item');

  if (!li) {
    return;
  }

  selectValue.innerText = li.innerText;

  const selectedLi = selectField.querySelector('.select-lang__item--selected');

  li.classList.add('select-lang__item--selected');

  if (!selectedLi) {
    return;
  }

  selectedLi.classList.remove('select-lang__item--selected');
}

document.addEventListener('click', (e) => {
  handleClickOutsideSelectList(
    e,
    '.select-qty',
    qtySelectList1,
    'select-qty__list-wrapper--visible',
  );
  handleClickOutsideSelectList(
    e,
    '.select-qty',
    qtySelectList2,
    'select-qty__list-wrapper--visible',
  );

  handleClickOutsideSelectList(
    e,
    '.select--country',
    countrySelectList,
    'select__list-wrapper--visible',
  );

  handleClickOutsideSelectList(
    e,
    '.select--city',
    citySelectList,
    'select__list-wrapper--visible',
  );

  handleClickOutsideSelectList(
    e,
    '.select-lang',
    langSelectList,
    'select-lang__list-wrapper--visible',
  );
});

function handleClickOutsideSelectList(event, selector, selectList, className) {
  if (
    !event.target.closest(selector) &&
    selectList.classList.contains(className)
  ) {
    selectList.classList.remove(className);
  }
}

// #endregion

// #region setQuantityInOrderPaySection
// Set Order Pay Quantity After Click On Order Place Purchase Button

const orderPurchaseBtn = orderPlace.querySelector('.place-order__purchase-btn');

orderPurchaseBtn.addEventListener('click', () => {
  const currQtyTxt = qtySelectValue1.innerText;
  const currQty = +currQtyTxt;

  price2.textContent = `${currQty * 1200}$`;

  qtySelectValue2.textContent = currQtyTxt;
  qtySelectValue2.classList.toggle(
    'select-qty__current-value--changed',
    currQty !== 1,
  );

  const order2LiCollection = orderPay.querySelectorAll('.select-qty__item');
  const order2LiArr = [...order2LiCollection];

  const order2PrevSelectedLi = order2LiArr.find((li) => {
    return li.classList.contains('select-qty__item--selected');
  });

  const order2NextSelectedLi = order2LiArr.find((li) => {
    return li.innerText === currQtyTxt;
  });

  if (order2NextSelectedLi !== order2PrevSelectedLi) {
    order2NextSelectedLi.classList.add('select-qty__item--selected');
    order2PrevSelectedLi.classList.remove('select-qty__item--selected');
  }
});

// #endregion

// #region numberInputs
// Card Number & CVV Number Inputs

const cardNumInputs = orderPay.querySelectorAll('.pay-order__input--card-num');
const cvvInput = orderPay.querySelector('.pay-order__input--cvv');

for (const cardNumInput of cardNumInputs) {
  cardNumInput.addEventListener('input', (e) => {
    handleNumInputValidation(e, cardNumInput);
  });
}

cvvInput.addEventListener('input', (e) => {
  handleNumInputValidation(e, cvvInput);
});

function handleNumInputValidation(event, input) {
  const inputValue = event.target.value;

  for (const ch of inputValue) {
    if (!numbers.includes(ch)) {
      input.value = '';
    }
  }
}

// #endregion
