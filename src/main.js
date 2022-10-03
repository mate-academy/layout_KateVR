'use strict';

// language select //
const headerLang = document.querySelector('.select__header--header');
const activeLang = document.querySelector('.select__current--header');
const allLang = [ ...document.querySelectorAll('.select__item--header') ];
const bodyLang = document.querySelector('.select__body--header');
const wrapper = document.querySelector('.page__wrapper');

activeLang.textContent = allLang[0].textContent;

function removeItemsClass(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove('select__item--active');
  }
}

function menuActivate(page) {
  page.classList.add('menu-page--active');
  wrapper.classList.add('page__wrapper--background');
}

function menuReactivate(page) {
  page.classList.remove('menu-page--active');
  wrapper.classList.remove('page__wrapper--background');
}

headerLang.addEventListener('click', (ev) => {
  bodyLang.classList.toggle('select__body--active');
});

bodyLang.addEventListener('click', (ev) => {
  removeItemsClass(allLang);

  const activeItem = ev.target;

  activeItem.classList.add('select__item--active');
  activeLang.textContent = activeItem.textContent;
  bodyLang.classList.toggle('select__body--active');
});

// menu //
const menuIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const linkLang = document.querySelector('.menu__link--lang');
const menuLang = document.querySelector('.language');
const langBack = document.querySelector('.language--back');
const menuItems = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', (ev) => {
  menuActivate(menu);
});

menuClose.addEventListener('click', (ev) => {
  menuReactivate(menu);
});

linkLang.addEventListener('click', (ev) => {
  menuActivate(menuLang);
});

langBack.addEventListener('click', (ev) => {
  menuReactivate(menuLang);
});

menuItems.forEach(item => {
  item.addEventListener('click', (ev) => {
    menuReactivate(menu);
  });
});

// faq-page //
const linkFaq = document.querySelector('.menu__link--faq');
const menuFaq = document.querySelector('.faq');
const faqClose = document.querySelector('.menu__close--faq');
const faqQuestions = [ ...document.querySelectorAll('.faq__question') ];
const faqAnswers = [ ...document.querySelectorAll('.faq__answer') ];
const faqUpdated = [ ...document.querySelectorAll('.faq__last-updated') ];
const faqButton = document.querySelector('.faq__button');
const faq = document.querySelector('.home-page__faq');
const otherQuestions = document.querySelector('.faq__other-questions');

linkFaq.addEventListener('click', (ev) => {
  menuActivate(menuFaq);
});

faq.addEventListener('click', (ev) => {
  menuActivate(menuFaq);
});

faqClose.addEventListener('click', (ev) => {
  menuReactivate(menuFaq);
  menu.classList.remove('menu-page--active');
});

for (let i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener('click', (ev) => {
    faqAnswers[i].classList.toggle('faq__answer--active');
    faqUpdated[i].classList.toggle('faq__last-updated--active');
  });
};

faqButton.addEventListener('click', (ev) => {
  otherQuestions.classList.toggle('faq__other-questions--active');
});

// help page //
const helpOpen = document.querySelector('.home-page__help');
const helpPage = document.querySelector('.help-page');
const linkHelp = document.querySelector('.menu__link--faq--help');
const closeHelp = document.querySelector('.menu__close--help-page');
const helpLinkFaq = document.querySelector('.help-page__linkFaq');
const helpLinkContact = document.querySelector('.help-page__linkContact');

linkHelp.addEventListener('click', (ev) => {
  menuActivate(helpPage);
});

helpOpen.addEventListener('click', (ev) => {
  menuActivate(helpPage);
});

closeHelp.addEventListener('click', (ev) => {
  menuReactivate(helpPage);
  menu.classList.remove('menu-page--active');
});

helpLinkFaq.addEventListener('click', (ev) => {
  menuReactivate(helpPage);
  menuActivate(menuFaq);
});

helpLinkContact.addEventListener('click', (ev) => {
  menuReactivate(helpPage);
  menu.classList.remove('menu-page--active');
});

// play video //
const playVideo = document.querySelector('.page__play-video');
const video = document.querySelector('.page__video-page');
const closeVideo = document.querySelector('.page__video-close');

playVideo.addEventListener('click', (ev) => {
  const top = playVideo.getBoundingClientRect().top + pageYOffset - 250;

  window.scrollTo(0, top);
  video.classList.add('page__video-page--active');
});

closeVideo.addEventListener('click', (ev) => {
  video.classList.remove('page__video-page--active');
});

const playVideoAbout = document.querySelector('.aboutProduct__video');
const videoOpen = document.querySelector('.page__video-page--about');
const closeVideoAbout = document.querySelector('.page__video-close--about');

playVideoAbout.addEventListener('click', (ev) => {
  const top = playVideoAbout.getBoundingClientRect().top + pageYOffset - 250;

  window.scrollTo(0, top);
  videoOpen.classList.add('page__video-page--active');
});

closeVideoAbout.addEventListener('click', (ev) => {
  videoOpen.classList.remove('page__video-page--active');
});

// order //
const headerBuy = document.querySelector('.header__button');
const homePageBuy = document.querySelector('.home-page__button');
const benefitsBuy = document.querySelector('.benefits__button');
const orderPage = document.querySelector('.order');
const orderClose = document.querySelector('.menu__close--order');

function ordering() {
  orderPage.classList.add('order--active');
  wrapper.classList.add('page__wrapper--background');
}

headerBuy.addEventListener('click', (ev) => {
  ordering();
});

homePageBuy.addEventListener('click', (ev) => {
  ordering();
});

benefitsBuy.addEventListener('click', (ev) => {
  window.scrollTo(0, 0);
  ordering();
});

orderClose.addEventListener('click', (ev) => {
  orderPage.classList.remove('order--active');
  wrapper.classList.remove('page__wrapper--background');
});

// order select //
const headerCountry = document.querySelector('.select__header--order-country');
const activeCountry = document.querySelector('.select__current--order-country');
const allCountry = [ ...document.querySelectorAll('.select__item--country') ];
const bodyCountry = document.querySelector('.select__body--country');
const selectCountryName = document.querySelector('.order__input-name--country');

activeCountry.textContent = allCountry[0].textContent;

headerCountry.addEventListener('click', (ev) => {
  bodyCountry.classList.toggle('select__body--active');
  selectCountryName.classList.add('order__input-name--focus');
});

bodyCountry.addEventListener('click', (ev) => {
  removeItemsClass(allCountry);

  const activeItem = ev.target;

  activeItem.classList.add('select__item--active');
  activeCountry.textContent = activeItem.textContent;
  bodyCountry.classList.toggle('select__body--active');
  selectCountryName.classList.remove('order__input-name--focus');
});

const headerCity = document.querySelector('.select__header--order-city');
const allCity = [ ...document.querySelectorAll('.select__item--city') ];
const activeCity = document.querySelector('.select__current--order-city');
const bodyCity = document.querySelector('.select__body--city');
const selectCityName = document.querySelector('.order__input-name--city');

headerCity.addEventListener('click', (ev) => {
  bodyCity.classList.toggle('select__body--active');
  selectCityName.classList.add('order__input-name--focus');
});

bodyCity.addEventListener('click', (ev) => {
  removeItemsClass(allCity);

  const activeItem = ev.target;

  activeItem.classList.add('select__item--active');
  activeCity.textContent = activeItem.textContent;
  bodyCity.classList.toggle('select__body--active');
  selectCityName.classList.remove('order__input-name--focus');
});

const headerQuantity = document.querySelector(
  '.select__header--order-quantity'
);
const allQuantity = [ ...document.querySelectorAll(
  '.select__item--quantity'
) ];
const activeQuantity = document.querySelector(
  '.select__current--order-quantity'
);
const bodyQuantity = document.querySelector('.select__body--quantity');

activeQuantity.textContent = allQuantity[0].textContent;

headerQuantity.addEventListener('click', (ev) => {
  bodyQuantity.classList.toggle('select__body--active');
});

bodyQuantity.addEventListener('click', (ev) => {
  removeItemsClass(allQuantity);

  const activeItem = ev.target;

  activeItem.classList.add('select__item--active');
  activeQuantity.textContent = activeItem.textContent;
  bodyQuantity.classList.toggle('select__body--active');

  allQuantity.forEach(item => {
    if (item.classList.contains('select__item--active')) {
      sumOrder.textContent = item.dataset.current * 1200 + '$';
    }
  });
});

const sumOrder = document.querySelector('.order__price-sum');

// order input place //
const reqInputs = document.querySelectorAll('._req');
const addError = function(el) {
  const inputNameActive = el.nextElementSibling;

  el.classList.add('order__place-input--invalid');
  inputNameActive.classList.remove('order__input-name--focus');
  inputNameActive.classList.add('order__input-name--invalid');
};

const removeError = function(el) {
  const inputNameActive = el.nextElementSibling;

  el.classList.remove('order__place-input--invalid');
  inputNameActive.classList.remove('order__input-name--focus');
  inputNameActive.classList.remove('order__input-name--invalid');
};

let error = 0;

const placeValidate = function() {
  error = 0;

  if (activeCity.textContent.length === 0) {
    selectCityName.textContent = 'Please, fill this field*';
    selectCityName.classList.add('order__input-name--invalid');
    error++;
  } else {
    selectCityName.classList.remove('order__input-name--invalid');
  }

  for (let i = 0; i < reqInputs.length; i++) {
    const input = reqInputs[i];

    removeError(input);

    if (input.validity.patternMismatch) {
      input.nextElementSibling.textContent = 'Incorrect format*';
      addError(input);
      error++;
    } else if (!input.value) {
      input.nextElementSibling.textContent = 'Please, fill this field*';
      addError(input);
      error++;
    }
  }

  return error;
};

reqInputs.forEach(el => {
  const inputNameActive = el.nextElementSibling;

  el.addEventListener('focus', (ev) => {
    inputNameActive.textContent = inputNameActive.dataset.name;
    el.classList.remove('order__place-input--invalid');
    inputNameActive.classList.remove('order__input-name--invalid');
    inputNameActive.classList.add('order__input-name--focus');
  });

  el.addEventListener('blur', (ev) => {
    if (el.classList.contains('order__place-input--norequired')) {
      inputNameActive.classList.remove('order__input-name--focus');
    } else if (el.validity.patternMismatch) {
      inputNameActive.textContent = 'Incorrect format*';
      addError(el);
    } else if (!el.value) {
      inputNameActive.textContent = 'Please, fill this field*';
      addError(el);
    } else {
      inputNameActive.classList.remove('order__input-name--focus');
    }
  });
});

// order pay //
const placeForm = document.querySelector('.order__form-place');
const payForm = document.querySelector('.order__form-pay');
const orderPhases = [...document.querySelectorAll('.order__phase')];

placeForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  placeValidate();

  if (error === 0) {
    placeForm.classList.remove('order__form-place--activity');
    payForm.classList.add('order__form-pay--activity');
    orderPhases[1].removeAttribute('disabled');
    orderPhases[0].setAttribute('disabled', 'disabled');
  }
});

const cardNumber = document.querySelector('.order__pay-input--cardNumber');

cardNumber.addEventListener('keydown', function(e) {
  const value = this.value.replace(/\s+/g, '');
  const isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))
    || (!isBackspace && value.length === 16)) {
    e.preventDefault();

    return false;
  }

  this.value = value.split('').reverse().join('')
    .replace(/\B(?=(\d{4})+(?!\d))/g, ' ').split('').reverse().join('').trim();
});

const expirationDate = document.querySelector(
  '.order__pay-input--expirationDate'
);

expirationDate.addEventListener('keydown', function(e) {
  const value = this.value.replace(/\s+/g, '');
  const isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))
    || (!isBackspace && value.length === 4)) {
    e.preventDefault();

    return false;
  }

  this.value = value.split('').reverse().join('')
    .replace(/\B(?=(\d{2})+(?!\d))/g, '/').split('').reverse().join('').trim();
});

const cvv = document.querySelector('.order__pay-input--cvv');

cvv.addEventListener('keydown', function(e) {
  this.value = this.value.replace(/./gm, '*');
});

cvv.addEventListener('blur', function(e) {
  this.value = this.value.replace(/./gm, '*');
});

// order input pay //
const orderInputsPay = document.querySelectorAll('.order__pay-input');
let errorPay = 0;

const payValidate = function() {
  errorPay = 0;

  for (let i = 0; i < orderInputsPay.length; i++) {
    const input = orderInputsPay[i];

    removeError(input);

    if (input.validity.patternMismatch) {
      input.nextElementSibling.textContent = 'Incorrect format*';
      addError(input);
      errorPay++;
    } else if (!input.value) {
      input.nextElementSibling.textContent = 'Please, fill this field*';
      addError(input);
      errorPay++;
    }
  }

  return errorPay;
};

orderInputsPay.forEach(el => {
  const inputNameActive = el.nextElementSibling;

  el.addEventListener('focus', (ev) => {
    ev.preventDefault();
    inputNameActive.textContent = inputNameActive.dataset.name;
    el.classList.remove('order__place-input--invalid');
    inputNameActive.classList.remove('order__input-name--invalid');
    inputNameActive.classList.add('order__input-name--focus');
  });

  el.addEventListener('blur', (ev) => {
    if (el.validity.patternMismatch) {
      inputNameActive.textContent = 'Incorrect format*';
      addError(el);
      errorPay++;
    } else if (!el.value) {
      inputNameActive.textContent = 'Please, fill this field*';
      addError(el);
      errorPay++;
    } else {
      inputNameActive.classList.remove('order__input-name--focus');
    }
  });
});

const orderComplete = document.querySelector('.order__complete');

payForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  payValidate();

  if (errorPay === 0) {
    payForm.classList.remove('order__form-pay--activity');
    orderComplete.classList.add('order__complete--activity');
    orderPhases[2].removeAttribute('disabled');
    orderPhases[1].setAttribute('disabled', 'disabled');
    orderPhases[0].setAttribute('disabled', 'disabled');

    setTimeout(() => {
      placeForm.classList.add('order__form-place--activity');
      orderPage.classList.remove('order--active');
      wrapper.classList.remove('page__wrapper--background');
      orderComplete.classList.remove('order__complete--activity');
      orderPhases[0].removeAttribute('disabled');
      orderPhases[2].setAttribute('disabled', 'disabled');
      placeForm.reset();
      payForm.reset();
    }, 3000);
  }
});

// slider aboutProduct
const sliderPrev = document.querySelector('.aboutProduct__previous');
const sliderNext = document.querySelector('.aboutProduct__next');
const sliderImages = document.querySelector('.aboutProduct__sliderConteiner');
const sliderCounter = document.querySelector('.aboutProduct__sliderCounter');
const sliderDots = document.querySelectorAll('.aboutProduct__dot');
const screenWidth = window.screen.width;

let sliderWidth = 430;
let disabledPoint = -1720;

if (screenWidth >= 1920) {
  sliderWidth = 622;
  disabledPoint = -2488;
} else if (screenWidth >= 768 && screenWidth < 1279) {
  sliderWidth = 340;
  disabledPoint = -1360;
} else if (screenWidth >= 320 && screenWidth < 767) {
  sliderWidth = 280;
}

let offsetSlider = 0;

const setDisabled = function() {
  if (offsetSlider === 0) {
    sliderPrev.setAttribute('disabled', true);
  } else if (offsetSlider === disabledPoint) {
    sliderNext.setAttribute('disabled', true);
  } else {
    sliderPrev.removeAttribute('disabled');
    sliderNext.removeAttribute('disabled');
  }
};

const setCount = function() {
  const sliderConteinerWidth = sliderWidth * 5;
  const activeSlide = (sliderConteinerWidth + offsetSlider) / sliderWidth;

  switch (activeSlide) {
    case 5:
      sliderCounter.textContent = '1/5';
      break;
    case 4:
      sliderCounter.textContent = '2/5';
      break;
    case 3:
      sliderCounter.textContent = '3/5';
      break;
    case 2:
      sliderCounter.textContent = '4/5';
      break;
    case 1:
      sliderCounter.textContent = '5/5';
      break;
    default:
      sliderCounter.textContent = '1/5';
  }
};

sliderPrev.addEventListener('click', (ev) => {
  sliderImages.style.transform = `translateX(${offsetSlider + sliderWidth}px)`;
  offsetSlider += sliderWidth;
  setDisabled();
  setCount();
});

sliderNext.addEventListener('click', (ev) => {
  sliderImages.style.transform = `translateX(${offsetSlider - sliderWidth}px)`;
  offsetSlider -= sliderWidth;
  setDisabled();
  setCount();
});

const resetActiveDot = function() {
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].classList.remove('aboutProduct__dot--active');
  }
};

sliderDots.forEach(dot => {
  dot.addEventListener('click', (ev) => {
    resetActiveDot();
    dot.classList.add('aboutProduct__dot--active');

    sliderImages.style.transform
      = `translateX(${(+dot.dataset.slide - 1) * sliderWidth * -1}px)`;
  });
});

// анимация
const animTitles = document.querySelectorAll('.animTitles');

function animOnScroll() {
  for (let index = 0; index < animTitles.length; index++) {
    const animItem = animTitles[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      (pageYOffset > animItemOffset - animItemPoint)
      && pageYOffset < (animItemOffset + animItemHeight)
    ) {
      animItem.classList.add('_active');
    } else {
      if (!animItem.classList.contains('anim-no-hide')) {
        animItem.classList.remove('_active');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft
    = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop
    = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop, leff: rect.left + scrollLeft,
  };
}

if (animTitles.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  setTimeout(() => {
    animOnScroll();
  }, 200);
}

// open characteristics
const buttonsTechSpecs = document.querySelectorAll('.techSpecs__openChar');
const techSpecsCharacteristics = document.querySelectorAll('.techSpecs__info');

buttonsTechSpecs.forEach(button => {
  button.addEventListener('click', (ev) => {
    if (button.classList.contains('techSpecs__openChar--1')) {
      techSpecsCharacteristics[0].classList.toggle('techSpecs__info--active');
    } else if (button.classList.contains('techSpecs__openChar--2')) {
      techSpecsCharacteristics[1].classList.toggle('techSpecs__info--active');
    } else if (button.classList.contains('techSpecs__openChar--3')) {
      techSpecsCharacteristics[2].classList.toggle('techSpecs__info--active');
    };
    button.classList.toggle('techSpecs__openChar--active');
  });
});

// button scrollToTop
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 1200) {
    document.querySelector('.contact__scrollToTop')
      .classList.add('contact__scrollToTop--active');
  } else {
    document.querySelector('.contact__scrollToTop')
      .classList.remove('contact__scrollToTop--active');
  }
});
