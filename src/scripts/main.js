'use strict';

window.addEventListener('DOMContentLoaded', addPrice);

const data = {
  price: 1200,
};

function addPrice() {
  document.querySelector('.header__price')
    .innerText = `$${data.price}`;
}

window.addEventListener('DOMContentLoaded', onPageLoad);

function onPageLoad() {
  const hash = window.location.hash;

  if (
    (hash === '#menu'
    || hash === '#language')
    && window.matchMedia('(min-width: 1280px)').matches
  ) {
    return;
  }

  if (
    (hash === '#faq'
    || hash === '#help')
    && window.matchMedia('(min-width: 1280px)').matches
  ) {
    document.body.classList.add('page__body--shadowed');

    return;
  }

  if (
    hash === '#menu'
    || hash === '#language'
    || hash === '#faq'
    || hash === '#help'
    || hash === '#place-order'
  ) {
    document.body.classList.add('page__body--with-menu');
    document.body.classList.add('page__body--shadowed');
  }
}

document.addEventListener('DOMContentLoaded', addPhoneMask);

function addPhoneMask() {
  const phoneInput = document.querySelector('#phone');
  const phoneInputContact = document.querySelector('#contact-phone');

  const maskOptions = {
    mask: '+{38}(000)000-00-00',
  };

  // eslint-disable-next-line no-undef
  IMask(phoneInput, maskOptions);
  // eslint-disable-next-line no-undef
  IMask(phoneInputContact, maskOptions);
}

window.addEventListener('hashchange', onHashChange);

function onHashChange() {
  const hash = window.location.hash;

  if (
    (hash === '#faq'
    || hash === '#help')
    && window.matchMedia('(min-width: 1280px)').matches
  ) {
    document.body.classList.add('page__body--shadowed');

    return;
  }

  if (
    hash === '#menu'
    || hash === '#language'
    || hash === '#faq'
    || hash === '#help'
    || hash === '#place-order'
  ) {
    document.body.classList.add('page__body--with-menu');
    document.body.classList.add('page__body--shadowed');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.body.classList.remove('page__body--shadowed');
  }
}

function handleWidthChange(width) {
  const hash = window.location.hash;

  if (
    (hash === '#faq'
    || hash === '#help'
    || hash === '#menu'
    || hash === '#language'
    || hash === '#place-order')
    && width.matches
  ) {
    document.body.classList.add('page__body--with-menu');
    document.body.classList.add('page__body--shadowed');
  } else if (hash === '#menu' || hash === '#language') {
    document.body.classList.remove('page__body--shadowed');
    document.body.classList.remove('page__body--with-menu');
  } else if (hash === '#faq' || hash === '#help') {
    document.body.classList.remove('page__body--with-menu');
  }
}

const screenWidth = window.matchMedia('(max-width: 1280px)');

handleWidthChange(screenWidth);
screenWidth.addEventListener('change', handleWidthChange);

const collapsibles = document.querySelectorAll('.collapsible__button');

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener('click', onToggleCollapsible);
};

function onToggleCollapsible() {
  const content = this.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.paddingBottom = 0;
  } else {
    content.style.maxHeight = content.scrollHeight + 100 + 'px';
    content.style.paddingBottom = '12px';
  }
}

function getInvalidStatus(name) {
  const trimmedName = name.innerText.toLowerCase().trim();
  const invalidValue = `Please, fill your ${trimmedName}`;

  return invalidValue;
};

function typeMismatch(name) {
  const mismathName = name.innerHTML.toLowerCase().trim().slice(0, -1);

  return `Incorrect ${mismathName} format*`;
};

function applyFocusStyles(label, input) {
  label.classList.add('input__name--focused');
  input.classList.add('input__field--focused');

  label.classList.remove('input__name--invalid');
  input.classList.remove('input__field--invalid');
}

function applyFocusOutStyles(label, input) {
  input.classList.remove('input__field--focused');

  if (!input.value) {
    label.classList.remove('input__name--focused');
  }
}

function applyInvalidStyles(label, input) {
  input.classList.add('input__field--invalid');
  label.classList.add('input__name--invalid');
}

function getInvalidLabel(label) {
  if (
    !label.innerText.includes(`Please, fill your`)
    && window.matchMedia('(min-width: 640px)').matches
  ) {
    return getInvalidStatus(label);
  }

  return label.innerText;
}

const inputs = document.querySelectorAll('.input--text');

for (let i = 0; i < inputs.length; i++) {
  const inputName = inputs[i].children[0];
  const inputField = inputs[i].children[1];
  const initialName = inputName.innerHTML;

  inputField.addEventListener('focus', onInputFocus);

  inputField.addEventListener('focusout', onInputFocusOut);

  inputField.addEventListener('input', onInput(initialName));
};

function onInputFocus() {
  applyFocusStyles(this.previousElementSibling, this);
}

function onInputFocusOut() {
  applyFocusOutStyles(this.previousElementSibling, this);
}

function onInput(initialName) {
  return function() {
    this.previousElementSibling.innerHTML = initialName;

    this.classList.remove('input__field--invalid');
    this.previousElementSibling.classList.remove('input__name--invalid');
  };
}

const form = document.querySelector('#form');
const slides = document.querySelectorAll('.place-order__slide');
const slidesForm = document.querySelectorAll('.form__slide');
const steps = document.querySelectorAll('.place-order__step');
const submitButton = document.querySelector('#purchase');
const placeOrderContent = document.querySelector('.place-order__content');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
}

submitButton.addEventListener('click', handleFormSteps);

let step = 1;

function handleFormSteps(e) {
  if (step < 2 || !validatePurchaseForm()) {
    e.preventDefault();
  }

  if (!validatePurchaseForm()) {
    return;
  }

  steps[step - 1].classList
    .replace('place-order__step--active', 'place-order__step--completed');
  steps[step].classList.add('place-order__step--active');

  if (step === 1) {
    slidesForm[0].classList.add('place-order__slide--swiped');

    setTimeout(() => {
      slidesForm[1].classList.add('place-order__slide--appeared');
      form.classList.add('grid--place-form-tablet');
    }, 300);
  }

  if (step === 2) {
    slides[0].classList.add('place-order__slide--swiped');
    placeOrderContent.classList.add('place-order__content--no-background');

    setTimeout(() => {
      slides[1].classList.add('place-order__slide--appeared');
      slides[0].style.display = 'none';
    }, 300);
  }

  step++;
}

function validatePurchaseForm() {
  let valid = true;

  if (step === 2) {
    const inputsCard
      = slidesForm[1].querySelectorAll('.input__field--number-card');
    const labelCard = slidesForm[1].querySelector('.input__name--card');

    inputsCard.forEach(input => {
      if (!input.value.trim()) {
        applyInvalidStyles(labelCard, input);

        labelCard.innerText = getInvalidLabel(labelCard);

        valid = false;
      }
    });

    const inputsExpiration
      = slidesForm[1].querySelectorAll('.input__field--number-expiration');
    const labelExpiration
      = slidesForm[1].querySelector('.input__name--expiration');

    inputsExpiration.forEach(input => {
      if (!input.value.trim()) {
        input.parentElement.style.borderColor = '#860404';
        labelExpiration.classList.add('input__name--invalid');

        labelExpiration.innerText = getInvalidLabel(labelExpiration);

        valid = false;
      }
    });

    const otherInputs
      = slidesForm[1].querySelectorAll('div[data-val="input--card"]');

    otherInputs.forEach(input => {
      const inputLabel = input.children[0];
      const inputField = input.children[1];

      if (!inputField.value.trim()) {
        applyInvalidStyles(inputLabel, inputField);

        inputLabel.innerText = getInvalidLabel(inputLabel);

        valid = false;
      }
    });

    return valid;
  }

  const localInputs = slidesForm[0].querySelectorAll('.input--text');
  const localDropdowns = slidesForm[0].querySelectorAll('.dropdown');

  localInputs.forEach(input => {
    const inputLabel = input.children[0];
    const inputField = input.children[1];

    if (
      inputField.id === 'phone'
      && inputField.value.trim().length < 17
    ) {
      applyInvalidStyles(inputLabel, inputField);

      inputLabel.innerText = getInvalidLabel(inputLabel);

      valid = false;
    }

    if (!inputField.value.trim()) {
      applyInvalidStyles(inputLabel, inputField);

      inputLabel.innerText = getInvalidLabel(inputLabel);

      valid = false;
    }

    if (inputField.validity.typeMismatch) {
      applyInvalidStyles(inputLabel, inputField);

      if (!inputLabel.innerText.includes(`Incorrect`)) {
        inputLabel.innerText = typeMismatch(inputLabel);
      }

      valid = false;
    }
  });

  localDropdowns.forEach(dropdown => {
    const dropdownInput = dropdown.children[0];
    const dropdownLabel = dropdown.previousElementSibling;

    if (!dropdownInput.value.trim()) {
      dropdownLabel.classList.add('input__name--invalid');

      dropdownLabel.innerText = getInvalidLabel(dropdownLabel);

      valid = false;
    }
  });

  return valid;
}

const cardInputs = document.querySelectorAll('.input__field--number-card');
const cardLabel = document.querySelector('.input__name--card');
const cardName = cardLabel.innerText.trim();

cardInputs[0].addEventListener('input', handleLogoVisibility);

function handleLogoVisibility(e) {
  const cardLogo = document.querySelector('.input__card-logo');

  cardLogo.className = 'input__card-logo';

  if (e.target.value[0] === '4') {
    cardLogo.classList.add('input__card-logo--visa');
  }

  if (e.target.value[0] === '5') {
    cardLogo.classList.add('input__card-logo--mastercard');
  }
}

cardInputs.forEach(input => {
  input.addEventListener('focus', onCardInputFocus);
  input.addEventListener('focusout', onCardInputFocusOut);
  input.addEventListener('input', onCardInput);
});

function onCardInputFocus() {
  applyFocusStyles(cardLabel, this);

  cardInputs.forEach(input => {
    input.classList.remove('input__field--invalid');
  });
}

function onCardInputFocusOut() {
  this.classList.remove('input__field--focused');

  if ([...cardInputs].every(input => !input.value)) {
    cardLabel.classList.remove('input__name--focused');
  }
}

function onCardInput(e) {
  const { value } = e.target;

  if (value.length > 3) {
    this.value = value.slice(0, 4);
  }

  cardLabel.innerText = cardName;
}

const inputCvv = document.querySelector('#input-cvv');
const labelCvv = document.querySelector('.input__name--cvv');

inputCvv.addEventListener('input', onInputCvv);

function onInputCvv(e) {
  const { value } = e.target;

  if (value.length > 2) {
    this.value = value.slice(0, 3);
  }

  labelCvv.innerText = 'CVV*';
}

const expirationInputs
  = document.querySelectorAll('.input__field--number-expiration');
const expirationLabel
  = document.querySelector('.input__name--expiration');
const expirationSlash = document.querySelector('#input-slash');

expirationInputs.forEach(input => {
  input.addEventListener('focus', onExpirationFocus);
  input.addEventListener('focusout', onExpirationFocusOut);
  input.addEventListener('input', onExpirationInput);
});

function onExpirationFocus() {
  expirationLabel.classList.add('input__name--focused');
  this.parentElement.style.borderColor = '#05c2df';

  expirationSlash.style.color = '#05c2df';

  expirationLabel.classList.remove('input__name--invalid');
}

function onExpirationFocusOut() {
  this.parentElement.style.borderColor = '';
  expirationSlash.style.color = '';

  if ([...expirationInputs].every(input => !input.value)) {
    expirationLabel.classList.remove('input__name--focused');
  }
}

function onExpirationInput(e) {
  const { value } = e.target;

  if (value.length > 1) {
    this.value = value.slice(0, 2);
  }

  expirationLabel.innerText = 'Expiration Date*';
}

const totalPrice = document.getElementById('price-total');
const quantityInput = document.querySelector('#quantity');

quantityInput.addEventListener('input', onQuantityChange);

function onQuantityChange(e) {
  const { value } = e.target;

  if (value.length < 1) {
    this.value = 1;

    return;
  }

  totalPrice.innerText = `$${value * 1200}`;
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownInput = dropdown.children[0];
  const dropdownButton = dropdown.children[1];
  const dropdownContent = dropdown.children[2];
  const contentitems
    = dropdownContent.querySelectorAll('.list__dropdown-item');

  dropdownButton.addEventListener('click', onToggleDropdown);
  dropdownInput.addEventListener('focus', onFocusDropdown);
  dropdownInput.addEventListener('focusout', onDropdownFocusOut);
  dropdownInput.addEventListener('input', onDropdownInput);

  window.addEventListener('click', (e) => {
    if (e.target !== dropdownButton) {
      dropdownContent.style.display = 'none';
    };
  });

  contentitems.forEach(item => {
    item.addEventListener('click', onDropDownItemClick);
  });
});

function onDropDownItemClick() {
  const input = this
    .parentElement
    .parentElement
    .previousElementSibling
    .previousElementSibling;

  input.value = this.innerText.trim();

  if (input.name.includes('quantity')) {
    input.dispatchEvent(new window.Event('input'));
  }
}

function onToggleDropdown() {
  const dropdownContent = this.nextElementSibling;

  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}

function onFocusDropdown() {
  const label = this.parentNode.previousElementSibling;

  if (!label.classList.contains('label') && !this.value) {
    label.classList.add('input__name--focused');
  }
}

function onDropdownFocusOut() {
  const label = this.parentNode.previousElementSibling;

  if (!this.value) {
    label.classList.remove('input__name--focused');
  }
}

function onDropdownInput() {
  const label = this.parentNode.previousElementSibling;

  const name = this.name;

  label.classList.remove('input__name--invalid');

  if (label.innerText.includes('Quantity')) {
    label.innerText = name[0].toUpperCase() + name.slice(1);

    return;
  }

  label.innerText = name[0].toUpperCase() + name.slice(1) + '*';
}

const slidersHeader = document.getElementsByClassName('slider-step--header');
const slidersAbout = document.getElementsByClassName('slider-step--about');
const counterNumber
  = document.getElementsByClassName('slideshow__counter-text')[0];
const slideshowList = document.querySelector('.slideshow__list');
const headerSliderList = document.querySelector('.header__carousel-list');
const slideDots = document.querySelectorAll('.slideshow__dot');
const controlMob = document.querySelectorAll('.slideshow__control-mob');

const sliderIndices = {
  header: 0,
  about: 0,
};

showSlider(sliderIndices, 'header', 2, slidersHeader);
showSlider(sliderIndices, 'about', 4, slidersAbout, counterNumber);

slidersHeader[0].addEventListener('click', onSliderHeaderPrev);

slidersHeader[2].addEventListener('click', onSliderHeaderNext);

slidersAbout[0].addEventListener('click', onSliderAboutPrev);
controlMob[0].addEventListener('click', onSliderAboutPrev);

slidersAbout[4].addEventListener('click', onSliderAboutNext);
controlMob[1].addEventListener('click', onSliderAboutNext);

let headerImageLength
  = window.getComputedStyle(headerSliderList).width.slice(0, -2);

function onSliderHeaderPrev() {
  sliderIndices.header -= 1;

  showSlider(sliderIndices, 'header', 2, slidersHeader);

  swipeImage(headerSliderList, 'header', headerImageLength);
}

function onSliderHeaderNext() {
  sliderIndices.header += 1;

  showSlider(sliderIndices, 'header', 2, slidersHeader);

  swipeImage(headerSliderList, 'header', headerImageLength);
}

let imageWidth = 430;

function onSliderAboutNext() {
  sliderIndices.about += 1;

  showSlider(sliderIndices, 'about', 4, slidersAbout, counterNumber);

  swipeImage(slideshowList, 'about', imageWidth);
}

function onSliderAboutPrev() {
  sliderIndices.about -= 1;

  showSlider(sliderIndices, 'about', 4, slidersAbout, counterNumber);

  swipeImage(slideshowList, 'about', imageWidth);
}

function showSlider(indices, key, maxIndex, sliders, label) {
  let i;

  if (indices[key] > maxIndex) {
    indices[key] = 0;
  }

  if (indices[key] < 0) {
    indices[key] = maxIndex;
  }

  for (i = 0; i <= maxIndex; i++) {
    sliders[i].classList.remove('slider-step--active');

    if (slideDots) {
      slideDots[i].classList.remove('slideshow__dot-active');
    }
  }

  sliders[indices[key]].classList.add('slider-step--active');
  slideDots[indices[key]].classList.add('slideshow__dot-active');

  if (label) {
    label.innerText = indices[key] + 1;
  }
}

function swipeImage(list, key, width) {
  list.style.translate = '-' + sliderIndices[key] * width + 'px';
}

function changeImageWidth(x) {
  if (x.matches) {
    imageWidth = 430;

    swipeImage(slideshowList, 'about', imageWidth);
  } else {
    imageWidth = 622;

    swipeImage(slideshowList, 'about', imageWidth);
  }
}

function changeHeaderCarouselWidth(x) {
  if (x.matches) {
    headerImageLength = 811;

    swipeImage(headerSliderList, 'header', headerImageLength);
  } else {
    headerImageLength = 1151;

    swipeImage(headerSliderList, 'header', headerImageLength);
  }
}

const matches = window.matchMedia('(max-width: 1440px)');

changeImageWidth(matches);
changeHeaderCarouselWidth(matches);
matches.addEventListener('change', changeImageWidth);
matches.addEventListener('change', changeHeaderCarouselWidth);

window.onscroll = function() {
  getFixed();
};

const headerTop = document.getElementsByClassName('header__top')[0];
const headerTitle = document.getElementsByClassName('header__title')[0];

const sticky = headerTop.offsetTop;

function getFixed() {
  if (window.scrollY > sticky) {
    headerTop.classList.add('header__top-fixed');
    headerTitle.classList.add('header__title-top-margin');
  } else {
    headerTop.classList.remove('header__top-fixed');
    headerTitle.classList.remove('header__title-top-margin');
  }
}

const playButtons = document.getElementsByClassName('play-button');
const videoContainer = document.getElementById('video');
const videoCross = document.getElementsByClassName('header__video-cross')[0];
const iframe = document.getElementsByClassName('header__iframe')[0];

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('click', onVideoClick);
}

function onVideoClick() {
  videoContainer.classList.add('header__video-container-active');
}

videoCross.addEventListener('click', onVideoClosed);

function onVideoClosed() {
  videoContainer.classList.replace(
    'header__video-container-active', 'header__video-container-closed'
  );

  iframe.contentWindow.postMessage(JSON.stringify({
    event: 'command',
    func: 'stopVideo',
  }), '*');

  setTimeout(() => {
    videoContainer.classList.remove('header__video-container-closed');
  }, 300);
}

const miniButton = document.querySelectorAll('.mini-button');

for (let i = 0; i < miniButton.length; i++) {
  miniButton[i].addEventListener('click', onMiniButtonClick);
};

function onMiniButtonClick(e) {
  if (
    e.target.classList.contains('mini-button__span')
    || e.target.classList.contains('mini-button__description')
  ) {
    return;
  }

  if (this.children[2].style.display === 'block') {
    this.children[2]
      .classList.add('mini-button__description-disappear');
    this.children[1].style.display = 'block';
    this.classList.remove('mini-button--active');

    setTimeout(() => {
      this.children[2].style.display = 'none';

      this.children[2]
        .classList.remove('mini-button__description-disappear');
    }, 300);
  } else {
    this.children[2].style.display = 'block';
    this.children[1].style.display = 'none';
    this.classList.add('mini-button--active');
  }
}

const contactForm = document.getElementsByClassName('contact__form')[0];
const contactButton = document.querySelector('#submit-contact');

contactButton.addEventListener('click', onSubmitContactForm);

function onSubmitContactForm(e) {
  if (!validateContactForm()) {
    e.preventDefault();
  }
}

function validateContactForm() {
  let valid = true;

  const inputsContact = contactForm.querySelectorAll('.input');

  inputsContact.forEach(input => {
    const label = input.children[0];
    const inputField = input.children[1];

    if (
      inputField.id === 'contact-phone'
      && inputField.value.trim().length < 17
    ) {
      applyInvalidStyles(label, inputField);

      label.innerText = getInvalidLabel(label);

      valid = false;
    }

    if (!inputField.value.trim()) {
      applyInvalidStyles(label, inputField);

      label.innerText = getInvalidLabel(label);

      valid = false;
    }
  });

  return valid;
}

contactForm.addEventListener('submit', onContactFormSubmit);

function onContactFormSubmit(e) {
  e.preventDefault();
  contactForm.reset();

  const labels = contactForm.querySelectorAll('.input__name');

  labels.forEach(label => {
    label.classList.remove('input__name--focused');
  });
}
