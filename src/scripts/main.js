'use strict';

// About Slider

const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slider__slides');
const sliderPoints = slider.querySelectorAll('.slider__point');
const sliderWidth = slides.offsetWidth;

slides.addEventListener('scroll', () => {
  for (const point of sliderPoints) {
    if (point.classList.contains('slider__point--active')) {
      point.classList.remove('slider__point--active');
    }
  }

  switch (slides.scrollLeft) {
    case 0:
      addActiveClass(0);
      break;

    case sliderWidth:
      addActiveClass(1);
      break;

    case 2 * sliderWidth:
      addActiveClass(2);
      break;

    case 3 * sliderWidth:
      addActiveClass(3);
      break;

    case 4 * sliderWidth:
      addActiveClass(4);
      break;

    default:
      break;
  }
});

function addActiveClass(item) {
  sliderPoints[item].classList.add('slider__point--active');
}

// Tech Specs Buttons

const techSpecsDetails = document.querySelector('.tech-specs__details');
const techSpecsButtons = techSpecsDetails.querySelectorAll('.tech-specs__btn');

techSpecsDetails.addEventListener('click', (e) => {
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

// Scroll Buy Now Link

const buyNowLink = document.querySelector('.page__buy-now-btn');
const getInTouchSection = document.getElementById('contact');
const getInTouchTop = getInTouchSection.offsetTop;
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > getInTouchTop - windowHeight) {
    buyNowLink.classList.add('page__buy-now-btn--hidden');
  } else {
    buyNowLink.classList.remove('page__buy-now-btn--hidden');
  }
});

// FAQ

const faq = document.getElementById('faq');

faq.addEventListener('click', (e) => {
  const question = e.target.closest('.faq__question');

  if (!question) {
    return;
  }

  question.classList.toggle('faq__question--selected');
});

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

// Select Quantity

const qtyPriceSection1 = document.querySelector('.order1__qty-price');
const price1 = qtyPriceSection1.querySelector('.qty-price__price-value');
const quantitySelect1 = qtyPriceSection1.querySelector(
  '.qty-price__select-wrapper',
);
const quantitySelectValue1 = quantitySelect1.querySelector(
  '.qty-price__select-value',
);
const quantitySelectList1 = quantitySelect1.querySelector(
  '.qty-price__select-list',
);

const qtyPriceSection2 = document.querySelector('.order2__qty-price');
const price2 = qtyPriceSection2.querySelector('.qty-price__price-value');
const quantitySelect2 = qtyPriceSection2.querySelector(
  '.qty-price__select-wrapper',
);
const quantitySelectValue2 = quantitySelect2.querySelector(
  '.qty-price__select-value',
);
const quantitySelectList2 = quantitySelect2.querySelector(
  '.qty-price__select-list',
);

quantitySelect1.addEventListener('click', () => {
  quantitySelectList1.classList.toggle('qty-price__select-list--visible');
});

quantitySelectList1.addEventListener('click', (e) => {
  handleClickQtySelList(e, quantitySelect1, quantitySelectValue1, price1);
});

quantitySelect2.addEventListener('click', () => {
  quantitySelectList2.classList.toggle('qty-price__select-list--visible');
});

quantitySelectList2.addEventListener('click', (e) => {
  handleClickQtySelList(e, quantitySelect2, quantitySelectValue2, price2);
});

document.addEventListener('click', (e) => {
  handleClickOutsideQtySelList(e, quantitySelectList1);
  handleClickOutsideQtySelList(e, quantitySelectList2);
});

function handleClickOutsideQtySelList(event, quantitySelectList) {
  if (
    !event.target.closest('.qty-price__select-wrapper') &&
    quantitySelectList.classList.contains('qty-price__select-list--visible')
  ) {
    quantitySelectList.classList.remove('qty-price__select-list--visible');
  }
}

function handleClickQtySelList(
  event,
  quantitySelect,
  quantitySelectValue,
  price,
) {
  const li = event.target.closest('.qty-price__select-li');

  if (!li) {
    return;
  }

  const liText = li.innerText;
  const selectedQuantity = +liText;

  price.textContent = `${selectedQuantity * 1200}$`;

  quantitySelectValue.textContent = liText;
  quantitySelectValue.classList.toggle(
    'qty-price__select-value--changed',
    li.innerText !== '1',
  );

  const selectedLi = quantitySelect.querySelector(
    '.qty-price__select-li--selected',
  );

  selectedLi.classList.remove('qty-price__select-li--selected');
  li.classList.add('qty-price__select-li--selected');
}

// Select Country/City

const countrySelect = document.querySelector(
  '.order1__select-wrapper--country',
);
const countrySelectValue = countrySelect.querySelector('.order1__select-value');
const countrySelectList = countrySelect.querySelector('.order1__select-list');

const citySelect = document.querySelector('.order1__select-wrapper--city');
const citySelectValue = citySelect.querySelector('.order1__select-value');
const citySelectList = citySelect.querySelector('.order1__select-list');

countrySelect.addEventListener('click', () => {
  countrySelectList.classList.toggle('order1__select-list--visible');
});

countrySelectList.addEventListener('click', (e) => {
  handleClickSelectList(e, countrySelect, countrySelectValue);
});

citySelect.addEventListener('click', () => {
  citySelectList.classList.toggle('order1__select-list--visible');
});

citySelectList.addEventListener('click', (e) => {
  handleClickSelectList(e, citySelect, citySelectValue);
});

document.addEventListener('click', (e) => {
  handleClickOutsideSelectList(
    e,
    '.order1__select-wrapper--country',
    countrySelectList,
  );

  handleClickOutsideSelectList(
    e,
    '.order1__select-wrapper--city',
    citySelectList,
  );
});

function handleClickOutsideSelectList(event, selector, selectList) {
  if (
    !event.target.closest(selector) &&
    selectList.classList.contains('order1__select-list--visible')
  ) {
    selectList.classList.remove('order1__select-list--visible');
  }
}

function handleClickSelectList(event, selectField, selectValue) {
  const li = event.target.closest('.order1__select-li');

  if (!li) {
    return;
  }

  selectValue.innerText = li.innerText;

  const selectedLi = selectField.querySelector('.order1__select-li--selected');

  li.classList.add('order1__select-li--selected');

  if (!selectedLi) {
    return;
  }

  selectedLi.classList.remove('order1__select-li--selected');
}
