'use strict';

// SPECS
const button1 = document.getElementById('toggle-1');
const button2 = document.getElementById('toggle-2');
const button3 = document.getElementById('toggle-3');

const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');

const plus1 = document.getElementById('plus-1');
const plus2 = document.getElementById('plus-2');
const plus3 = document.getElementById('plus-3');

const minus1 = document.getElementById('minus-1');
const minus2 = document.getElementById('minus-2');
const minus3 = document.getElementById('minus-3');

function Dropdown1() {
  content1.classList.toggle('dp-active');

  if (content1.classList.contains('dp-active')) {
    plus1.style.display = 'none';
    minus1.style.display = 'block';
  } else {
    plus1.style.display = 'block';
    minus1.style.display = 'none';
  }
}

button1.addEventListener('click', Dropdown1);

function Dropdown2() {
  content2.classList.toggle('dp-active');

  if (content2.classList.contains('dp-active')) {
    plus2.style.display = 'none';
    minus2.style.display = 'block';
  } else {
    plus2.style.display = 'block';
    minus2.style.display = 'none';
  }
}

button2.addEventListener('click', Dropdown2);

function Dropdown3() {
  content3.classList.toggle('dp-active');

  if (content3.classList.contains('dp-active')) {
    plus3.style.display = 'none';
    minus3.style.display = 'block';
  } else {
    plus3.style.display = 'block';
    minus3.style.display = 'none';
  }
}

button3.addEventListener('click', Dropdown3);

// SLIDERS

const prev = document.getElementById('Previous');
const next = document.getElementById('Next');
const line = document.getElementById('blueslider');
let slideCount = 0;
const lineWidth = 69;

function updatePosition() {
  const position = slideCount * lineWidth;

  line.style.transform = `translateX(${position}px)`;
}

function Previous() {
  if (slideCount < 1) {
    slideCount = 2;
  } else {
    slideCount--;
  }

  updatePosition();
}

function Next() {
  if (slideCount >= 2) {
    slideCount = 0;
  } else {
    slideCount++;
  }

  updatePosition();
}

next.addEventListener('click', Next);
prev.addEventListener('click', Previous);

const prev1 = document.getElementById('Previous1');
const next1 = document.getElementById('Next1');
const line1 = document.getElementById('blueslider1');
let slideCount1 = 0;
const lineWidth1 = 69;

function updatePosition1() {
  const position1 = slideCount1 * lineWidth1;

  line1.style.transform = `translateX(${position1}px)`;
}

function Previous1() {
  if (slideCount1 < 1) {
    slideCount1 = 2;
  } else {
    slideCount1--;
  }

  updatePosition1();
}

function Next1() {
  if (slideCount1 >= 2) {
    slideCount1 = 0;
  } else {
    slideCount1++;
  }

  updatePosition1();
}

next1.addEventListener('click', Next1);
prev1.addEventListener('click', Previous1);

const nameInput = document.getElementById('name');
const nameLabel = document.getElementById('label-1');
const nameError = document.getElementById('name-error');

// CONTACT FORM

function validateName() {
  const name = nameInput.value;

  if (name.length === 0) {
    nameInput.style.borderBottom = '1px solid #860404';
    nameError.innerHTML = 'Please, fill your name*';
    nameError.style.opacity = 1;
    nameLabel.style.opacity = 0;
    nameInput.style.caretColor = '#860404';
  }

  if (
    !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)
    && !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)
  ) {
    nameError.innerHTML = 'Please enter the full name*';
    nameError.style.opacity = 1;
    nameLabel.style.opacity = 0;
    nameInput.style.borderBottom = '1px solid #860404';
  } else {
    nameInput.style.borderBottom = '1px solid #05C2DF';
    nameLabel.style.opacity = 1;
    nameError.innerHTML = '';
    nameInput.style.caretColor = '#05C2DF';
  }
}

nameInput.onkeyup = validateName;

nameInput.addEventListener('focus', function() {
  nameLabel.style.color = '#05C2DF';
  nameLabel.style.top = '-60px';
  nameInput.style.borderBottom = '1px solid #05C2DF';
});

nameInput.addEventListener('blur', function() {
  nameLabel.style.color = '#929292';
  nameInput.style.borderBottom = '1px solid #2f2f2f';

  if (nameInput.value.length === 0) {
    nameLabel.style.top = '-35px';
  }
});

const emailInput = document.getElementById('email');
const emailLabel = document.getElementById('label-2');
const emailError = document.getElementById('email-error');

function validateEmail() {
  const email = emailInput.value;

  if (email.length === 0 || email === null) {
    emailInput.style.borderBottom = '1px solid #860404';
    emailError.innerHTML = 'Please, fill your email*';
    emailError.style.opacity = 1;
    emailLabel.style.opacity = 0;
    emailInput.style.caretColor = '#860404';
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = 'Incorrect email format*';
    emailLabel.style.opacity = 0;
    emailInput.style.borderBottom = '1px solid #860404';
    emailError.style.opacity = 1;
  } else {
    emailInput.style.borderBottom = '1px solid #05C2DF';
    emailLabel.style.opacity = 1;
    emailError.innerHTML = '';
    emailInput.style.caretColor = '#05C2DF';
  }
}

emailInput.onkeyup = validateEmail;

emailInput.addEventListener('focus', function() {
  emailLabel.style.color = '#05C2DF';
  emailLabel.style.top = '-60px';
  emailInput.style.borderBottom = '1px solid #05C2DF';
});

emailInput.addEventListener('blur', function() {
  emailLabel.style.color = '#929292';
  emailInput.style.borderBottom = '1px solid #2f2f2f';

  if (emailInput.value.length === 0) {
    emailLabel.style.top = '-35px';
  }
});

const phoneInput = document.getElementById('phone');
const phoneLabel = document.getElementById('label-3');
const phoneError = document.getElementById('phone-error');

function validatePhone() {
  const phone = phoneInput.value;

  if (phone.length === 0 || phone === null) {
    phoneInput.style.borderBottom = '1px solid #860404';
    phoneError.innerHTML = 'Phone number is required*';
    phoneError.style.opacity = 1;
    phoneLabel.style.opacity = 0;
    phoneInput.style.caretColor = '#860404';
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone number should be 10 digits*';
    phoneLabel.style.opacity = 0;
    phoneInput.style.borderBottom = '1px solid #860404';
    phoneError.style.opacity = 1;
  } else {
    phoneInput.style.borderBottom = '1px solid #05C2DF';
    phoneLabel.style.opacity = 1;
    phoneError.innerHTML = '';
    phoneInput.style.caretColor = '#05C2DF';
  }
}

phoneInput.onkeyup = validatePhone;

phoneInput.addEventListener('focus', function() {
  phoneLabel.style.color = '#05C2DF';
  phoneLabel.style.top = '-60px';
  phoneInput.style.borderBottom = '1px solid #05C2DF';
});

phoneInput.addEventListener('blur', function() {
  phoneLabel.style.color = '#929292';
  phoneInput.style.borderBottom = '1px solid #2f2f2f';

  if (phoneInput.value.length === 0) {
    phoneLabel.style.top = '-35px';
  }
});

phoneInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

const messageInput = document.getElementById('message');
const messageLabel = document.getElementById('label-4');
const messageError = document.getElementById('message-error');

function validateMessage() {
  const message = messageInput.value;

  if (message.length <= 30) {
    messageInput.style.borderBottom = '1px solid #860404';
    messageError.innerHTML = 'Please, fill your message*';
    messageError.style.opacity = 1;
    messageLabel.style.opacity = 0;
    messageInput.style.caretColor = '#860404';
  } else {
    messageInput.style.borderBottom = '1px solid #05C2DF';
    messageLabel.style.opacity = 1;
    messageError.innerHTML = '';
    messageInput.style.caretColor = '#05C2DF';
  }
}

messageInput.onkeyup = validateMessage;

messageInput.addEventListener('focus', function() {
  messageLabel.style.color = '#05C2DF';
  messageLabel.style.top = '-60px';
  messageInput.style.borderBottom = '1px solid #05C2DF';
});

messageInput.addEventListener('blur', function() {
  messageLabel.style.color = '#929292';
  messageInput.style.borderBottom = '1px solid #2f2f2f';

  if (messageInput.value.length === 0) {
    messageLabel.style.top = '-35px';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function() {
  const inputs = [nameInput, emailInput, phoneInput, messageInput];
  const errors = [
    nameError,
    firstNameError,
    lastNameError,
    addressEmailError,
    addressPhoneError,
    emailError,
    phoneError,
    messageError,
  ];
  const labels = [
    nameLabel,
    firstNameLabel,
    lastNameLabel,
    addressEmailLabel,
    addressPhoneLabel,
    emailLabel,
    phoneLabel,
    messageLabel,
  ];

  errors.forEach((error) => {
    error.style.opacity = 0;
  });

  inputs.forEach((input) => {
    input.style.borderBottom = '1px solid #2f2f2f';
    input.style.caretColor = '#05C2DF';
  });

  labels.forEach((label) => {
    label.style.opacity = 1;
    label.style.color = '#929292';
    label.style.top = '-35px';
  });
});

// FAQ'S / LANGIAGE / QUANTITY

const more = document.getElementById('more');

more.addEventListener('click', function() {
  window.scrollTo(0, 1200);
});

const questionContents = document.querySelectorAll('.question-dropdown');

questionContents.forEach((content, index) => {
  content.addEventListener('click', function() {
    questionContents.forEach((otherContent, otherIndex) => {
      if (index !== otherIndex) {
        otherContent.classList.add('closed');
        otherContent.classList.remove('opened');
      }
    });

    content.classList.toggle('opened');
    content.classList.toggle('closed');
  });
});

const languageContent = document.querySelector('.lang__dp-content');
const languagesToggle = document.getElementById('lang__dp-toggle');
const languageOptions = document.querySelectorAll('.lang__dp-option');

languagesToggle.addEventListener('click', function() {
  if (
    languageContent.style.opacity === '0'
    || languageContent.style.opacity === ''
  ) {
    languageContent.style.opacity = '1';
    languageContent.style.zIndex = 2;
  } else {
    languageContent.style.opacity = '0';
    languageContent.style.zIndex = 0;
  }
});

languageOptions.forEach((languageOption) => {
  languageOption.addEventListener('click', function() {
    languagesToggle.innerHTML = languageOption.innerHTML;
    languageContent.style.opacity = 0;
    languageContent.style.zIndex = 0;
  });
});

const quantityInput = document.getElementById('quantity-input');
const quantityContent = document.querySelector('.quantity__content');
const quantityBtn = document.getElementById('quantity__button');
const quantityOptions = document.querySelectorAll('.quantity__option');

quantityBtn.addEventListener('click', function() {
  if (
    quantityContent.style.opacity === '0'
    || quantityContent.style.opacity === ''
  ) {
    quantityContent.style.opacity = '1';
    quantityContent.style.zIndex = '1';
  } else {
    quantityContent.style.opacity = '0';
    quantityContent.style.zIndex = '-1';
  }
});

quantityOptions.forEach((quantityOption) => {
  quantityOption.addEventListener('click', function() {
    quantityInput.value = quantityOption.querySelector('span').innerText;
    quantityContent.style.opacity = 0;
    quantityContent.style.zIndex = '-1';
  });
});

quantityInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

const quantityInput2 = document.getElementById('quantity-input2');
const quantityContent2 = document.querySelector('.quantity__content2');
const quantityBtn2 = document.getElementById('quantity__button2');
const quantityOptions2 = document.querySelectorAll('.quantity__option2');

quantityBtn2.addEventListener('click', function() {
  if (
    quantityContent2.style.opacity === '0'
    || quantityContent2.style.opacity === ''
  ) {
    quantityContent2.style.opacity = '1';
    quantityContent2.style.zIndex = '1';
  } else {
    quantityContent2.style.opacity = '0';
    quantityContent2.style.zIndex = '-1';
  }
});

quantityOptions2.forEach((quantityOption2) => {
  quantityOption2.addEventListener('click', function() {
    quantityInput2.value = quantityOption2.querySelector('span').innerText;
    quantityContent2.style.opacity = 0;
    quantityContent2.style.zIndex = '-1';
  });
});

quantityInput2.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// REGION DROPDOWNS

const countryContent = document.querySelector('.country__content');
const countryToggle = document.getElementById('country-toggle');
const countryOptions = document.querySelectorAll('.country__option');

countryToggle.addEventListener('click', function() {
  if (
    countryContent.style.opacity === '0'
    || countryContent.style.opacity === ''
  ) {
    countryContent.style.opacity = '1';
    countryContent.style.zIndex = '1';
  } else {
    countryContent.style.opacity = '0';
    countryContent.style.zIndex = '-1';
  }
});

countryOptions.forEach((countryOption) => {
  countryOption.addEventListener('click', function() {
    countryToggle.innerHTML = countryOption.innerHTML;
    countryContent.style.opacity = 0;
    countryContent.style.zIndex = '-1';
  });
});

const cityContent = document.querySelector('.city__content');
const cityToggle = document.getElementById('city-toggle');
const cityOptions = document.querySelectorAll('.city__option');

cityToggle.addEventListener('click', function() {
  if (cityContent.style.opacity === '0' || cityContent.style.opacity === '') {
    cityContent.style.opacity = '1';
    cityContent.style.zIndex = '1';
  } else {
    cityContent.style.opacity = '0';
    cityContent.style.zIndex = '-1';
  }
});

cityOptions.forEach((cityOption) => {
  cityOption.addEventListener('click', function() {
    cityToggle.innerHTML = cityOption.innerHTML;
    cityContent.style.opacity = 0;
    cityContent.style.zIndex = '-1';
  });
});

// PLACE ORDER MECHANIC

document.getElementById('pay-form').addEventListener('input', function(e) {
  const target = e.target;
  const maxLength = parseInt(target.getAttribute('maxlength'), 10);
  const length = target.value.length;

  if (length === maxLength) {
    const nextInput = target.nextElementSibling;

    if (nextInput) {
      nextInput.focus();
    }
  }
});

const placeOrder = document.getElementById('place-order');
const placeOrderForm = document.getElementById('place__order-form');

const pay = document.getElementById('pay');
const payForm = document.getElementById('pay-form');

const complete = document.getElementById('complete');

const buyLink = document.getElementById('buy-button');
const homeLink = document.getElementById('back-to-homepage');

const backBtnPlaceOrder = document.getElementById('back-btn-place-order');
const backBtnPlaceOrderSmall = document.getElementById(
  'back-btn-place-order-small'
);
const backBtnPlaceOrderXmark = document.getElementById(
  'back-btn-place-order-xmark'
);

const backBtnPay = document.getElementById('back-btn-pay');
const backBtnPaySmall = document.getElementById('back-btn-pay-small');
const backBtnPayXmark = document.getElementById('back-btn-pay-xmark');

const backBtnComplete = document.getElementById('back-btn-complete');
const backBtnCompleteSmall = document.getElementById('back-btn-complete-small');
const backBtnCompleteXmark = document.getElementById('back-btn-complete-xmark');

const page = document.getElementById('page');

buyLink.addEventListener('click', function() {
  placeOrder.style.opacity = 1;
  placeOrder.style.pointerEvents = 'all';
  placeOrder.style.overflowY = 'scroll';
  page.style.overflowY = 'hidden';
});

homeLink.addEventListener('click', function() {
  complete.style.opacity = 0;
  complete.style.pointerEvents = 'none';
  page.style.overflowY = 'scroll';
});

placeOrderForm.addEventListener('submit', function() {
  placeOrder.style.opacity = 0;
  placeOrder.style.pointerEvents = 'none';
  pay.style.opacity = 1;
  pay.style.pointerEvents = 'all';
  pay.style.overflowY = 'scroll';
  page.style.overflowY = 'hidden';
});

backBtnPlaceOrder.addEventListener('click', function() {
  placeOrder.style.opacity = 0;
  placeOrder.style.pointerEvents = 'none';
  page.style.overflowY = 'scroll';
});

backBtnPlaceOrderSmall.addEventListener('click', function() {
  placeOrder.style.opacity = 0;
  placeOrder.style.pointerEvents = 'none';
  page.style.overflowY = 'scroll';
});

backBtnPlaceOrderXmark.addEventListener('click', function() {
  placeOrder.style.opacity = 0;
  placeOrder.style.pointerEvents = 'none';
  page.style.overflowY = 'scroll';
});

backBtnPay.addEventListener('click', function() {
  pay.style.opacity = 0;
  pay.style.pointerEvents = 'none';
  page.style.overflowY = 'scroll';
});

backBtnPaySmall.addEventListener('click', function() {
  pay.style.opacity = 0;
  pay.style.pointerEvents = 'none';
  page.style.overflowY = 'scroll';
});

backBtnPayXmark.addEventListener('click', function() {
  pay.style.opacity = 0;
  page.style.overflowY = 'scroll';
  pay.style.pointerEvents = 'none';
});

backBtnPlaceOrderXmark.addEventListener('click', function() {
  placeOrder.style.opacity = 0;
  page.style.overflowY = 'scroll';
  placeOrder.style.pointerEvents = 'none';
});

backBtnComplete.addEventListener('click', function() {
  complete.style.opacity = 0;
  page.style.overflowY = 'scroll';
  complete.style.pointerEvents = 'none';
});

backBtnCompleteSmall.addEventListener('click', function() {
  complete.style.opacity = 0;
  page.style.overflowY = 'scroll';
  complete.style.pointerEvents = 'none';
});

backBtnCompleteXmark.addEventListener('click', function() {
  complete.style.opacity = 0;
  page.style.overflowY = 'scroll';
  complete.style.pointerEvents = 'none';
});

// PLACE ORDER FORM

const firstNameInput = document.getElementById('first-name');
const firstNameLabel = document.getElementById('label-5');
const firstNameError = document.getElementById('first-name-error');

function validateFirstName() {
  const firstName = firstNameInput.value;

  if (firstName.length <= 0 || firstName == null) {
    firstNameInput.style.borderBottom = '1px solid #860404';
    firstNameError.innerHTML = 'Please, enter your message*';
    firstNameLabel.style.opacity = 0;
    firstNameInput.style.caretColor = '#860404';
  } else {
    firstNameInput.style.borderBottom = '1px solid #05C2DF';
    firstNameLabel.style.opacity = 1;
    firstNameError.innerHTML = '';
    firstNameInput.style.caretColor = '#05C2DF';
  }
}

firstNameInput.onkeyup = validateFirstName;

firstNameInput.addEventListener('focus', function() {
  firstNameLabel.style.color = '#05C2DF';
  firstNameLabel.style.top = '5px';
  firstNameInput.style.borderBottom = '1px solid #05C2DF';
});

firstNameInput.addEventListener('blur', function() {
  if (firstNameInput.value.length === 0) {
    firstNameLabel.style.color = '#929292';
    firstNameLabel.style.top = '20px';
  } else {
    firstNameLabel.style.color = '#929292';
  }

  firstNameInput.style.borderBottom = '1px solid #2f2f2f';
});

const lastNameInput = document.getElementById('last-name');
const lastNameLabel = document.getElementById('label-6');
const lastNameError = document.getElementById('last-name-error');

function validateLastName() {
  const lastName = lastNameInput.value;

  if (lastName.length <= 0 || lastName == null) {
    lastNameInput.style.borderBottom = '1px solid #860404';
    lastNameError.innerHTML = 'Please, enter your message*';
    lastNameLabel.style.opacity = 0;
    lastNameInput.style.caretColor = '#860404';
  } else {
    lastNameInput.style.borderBottom = '1px solid #05C2DF';
    lastNameLabel.style.opacity = 1;
    lastNameError.innerHTML = '';
    lastNameInput.style.caretColor = '#05C2DF';
  }
}

lastNameInput.onkeyup = validateLastName;

lastNameInput.addEventListener('focus', function() {
  lastNameLabel.style.color = '#05C2DF';
  lastNameLabel.style.top = '5px';
  lastNameInput.style.borderBottom = '1px solid #05C2DF';
});

lastNameInput.addEventListener('blur', function() {
  if (lastNameInput.value.length === 0) {
    lastNameLabel.style.color = '#929292';
    lastNameLabel.style.top = '20px';
  } else {
    lastNameLabel.style.color = '#929292';
  }

  lastNameInput.style.borderBottom = '1px solid #2f2f2f';
});

const addressPhoneInput = document.getElementById('address-phone');
const addressPhoneLabel = document.getElementById('label-8');
const addressPhoneError = document.getElementById('address-phone-error');

function validateAddressPhone() {
  const addressPhone = addressPhoneInput.value;

  if (addressPhone.length === 0 || addressPhone === null) {
    addressPhoneInput.style.borderBottom = '1px solid #860404';
    addressPhoneError.innerHTML = 'Phone number is required*';
    addressPhoneLabel.style.opacity = 0;
    addressPhoneInput.style.caretColor = '#860404';
  }

  if (addressPhone.length !== 10 || addressPhone.length > 10) {
    addressPhoneError.innerHTML = 'Phone number should be 10 digits*';
    addressPhoneLabel.style.opacity = 0;
    addressPhoneInput.style.borderBottom = '1px solid #860404';
  }

  if (!addressPhone.match(/^[0-9]{10}$/)) {
    addressPhoneError.innerHTML = 'Phone number is required*';
    addressPhoneLabel.style.opacity = 0;
    addressPhoneInput.style.borderBottom = '1px solid #860404';
  } else {
    addressPhoneInput.style.borderBottom = '1px solid #05C2DF';
    addressPhoneLabel.style.opacity = 1;
    addressPhoneError.innerHTML = '';
    addressPhoneInput.style.caretColor = '#05C2DF';
  }
}

addressPhoneInput.onkeyup = validateAddressPhone;

addressPhoneInput.addEventListener('focus', function() {
  addressPhoneLabel.style.color = '#05C2DF';
  addressPhoneLabel.style.top = '5px';
  addressPhoneInput.style.borderBottom = '1px solid #05C2DF';
});

addressPhoneInput.addEventListener('blur', function() {
  if (addressPhoneInput.value.length === 0) {
    addressPhoneLabel.style.color = '#929292';
    addressPhoneLabel.style.top = '20px';
  } else {
    addressPhoneLabel.style.color = '#929292';
  }

  addressPhoneInput.style.borderBottom = '1px solid #2f2f2f';
});

const addressEmailInput = document.getElementById('address-email');
const addressEmailLabel = document.getElementById('label-7');
const addressEmailError = document.getElementById('address-email-error');

function validateAddressEmail() {
  const addressEmail = addressEmailInput.value;

  if (addressEmail.length === 0 || addressEmail === null) {
    addressEmailInput.style.borderBottom = '1px solid #860404';
    addressEmailError.innerHTML = 'Please, fill your email*';
    addressEmailLabel.style.opacity = 0;
    addressEmailInput.style.caretColor = '#860404';
  }

  if (!addressEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    addressEmailError.innerHTML = 'Incorrect email format*';
    addressEmailLabel.style.opacity = 0;
    addressEmailInput.style.borderBottom = '1px solid #860404';
    addressEmailInput.style.caretColor = '#860404';
  } else {
    addressEmailInput.style.borderBottom = '1px solid #05C2DF';
    addressEmailLabel.style.opacity = 1;
    addressEmailError.innerHTML = '';
    addressEmailInput.style.caretColor = '#05C2DF';
  }
}

addressEmailInput.onkeyup = validateAddressEmail;

addressEmailInput.addEventListener('focus', function() {
  addressEmailLabel.style.color = '#05C2DF';
  addressEmailLabel.style.top = '5px';
});

addressEmailInput.addEventListener('blur', function() {
  if (addressEmailInput.value.length === 0) {
    addressEmailLabel.style.color = '#929292';
    addressEmailLabel.style.top = '20px';
  } else {
    addressEmailLabel.style.color = '#929292';
  }

  addressEmailInput.style.borderBottom = '1px solid #2f2f2f';
});

const shippingInput = document.getElementById('shipping-address1');
const shippingLabel = document.getElementById('label-9');

function validateShipping() {
  const shipping = shippingInput.value;
  const shippingError = document.getElementById('shipping-error1');

  if (shipping.length <= 0 || shipping == null) {
    shippingInput.style.borderBottom = '1px solid #860404';
    shippingError.innerHTML = 'Please, enter your message*';
    shippingLabel.style.opacity = 0;
    shippingInput.style.caretColor = '#860404';
  } else {
    shippingInput.style.borderBottom = '1px solid #05C2DF';
    shippingLabel.style.opacity = 1;
    shippingError.innerHTML = '';
    shippingInput.style.caretColor = '#05C2DF';
  }
}

shippingInput.onkeyup = validateShipping;

shippingInput.addEventListener('focus', function() {
  shippingLabel.style.color = '#05C2DF';
  shippingLabel.style.top = '5px';
});

shippingInput.addEventListener('blur', function() {
  if (shippingInput.value.length === 0) {
    shippingLabel.style.color = '#929292';
    shippingLabel.style.top = '20px';
  } else {
    shippingLabel.style.color = '#929292';
  }

  shippingInput.style.borderBottom = '1px solid #2f2f2f';
});

const shippingInput2 = document.getElementById('shipping-address2');
const shippingLabel2 = document.getElementById('label-10');

function validateShipping2() {
  const shipping2 = shippingInput2.value;
  const shippingError2 = document.getElementById('shipping-error1');

  if (shipping2.length <= 0 || shipping2 == null) {
    shippingInput2.style.borderBottom = '1px solid #860404';
    shippingError2.innerHTML = 'Please, enter your message*';
    shippingLabel2.style.opacity = 0;
    shippingInput2.style.caretColor = '#860404';
  } else {
    shippingInput2.style.borderBottom = '1px solid #05C2DF';
    shippingLabel2.style.opacity = 1;
    shippingError2.innerHTML = '';
    shippingInput2.style.caretColor = '#05C2DF';
  }
}

shippingInput2.onkeyup = validateShipping2;

shippingInput2.addEventListener('focus', function() {
  shippingLabel2.style.color = '#05C2DF';
  shippingLabel2.style.top = '5px';
});

shippingInput2.addEventListener('blur', function() {
  if (shippingInput2.value.length === 0) {
    shippingLabel2.style.color = '#929292';
    shippingLabel2.style.top = '20px';
  } else {
    shippingLabel2.style.color = '#929292';
  }

  shippingInput2.style.borderBottom = '1px solid #2f2f2f';
});

// PAY FORM

document.getElementById('pay-form').addEventListener('input', function(e) {
  const target = e.target;
  const maxLength = parseInt(target.getAttribute('maxlength'), 10);
  const length = target.value.length;

  if (length === maxLength) {
    const nextInput = target.nextElementSibling;

    if (nextInput) {
      nextInput.focus();
    }
  }
});

const cardNumberParts = document.querySelectorAll('.card__number-part');

cardNumberParts.forEach((cardNumberPart) => {
  cardNumberPart.addEventListener('input', function() {
    const cardNumberPartValue = this.value;
    const isLessThan4 = cardNumberPartValue.length < 4;

    if (isLessThan4) {
      this.style.borderBottom = '2px solid #860404';
    } else {
      this.style.borderBottom = '1px solid #05C2DF';
    }

    cardNumberPart.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });

    cardNumberPart.addEventListener('focus', function() {
      cardNumberPart.style.borderBottom = "1px solid #05C2DF"
    });

    cardNumberPart.addEventListener('blur', function() {
      cardNumberPart.style.borderBottom = "1px solid #2f2f2f"
    });

  });
});

const holderNameInput = document.getElementById('holder-name');
const holderNameLabel = document.getElementById('label-11');
const holderNameError = document.getElementById('holder-name-error');

function validateHolderName() {
  const holderName = holderNameInput.value;

  if (holderName.length === 0 || holderName === null) {
    holderNameInput.style.borderBottom = '1px solid #860404';
    holderNameError.innerHTML = 'Please, fill your name*';
    holderNameLabel.style.opacity = 0;
    holderNameInput.style.caretColor = '#860404';
  }

  if (
    !holderName.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)
    && !holderName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)
  ) {
    holderNameError.innerHTML = 'Please enter the full name*';
    holderNameError.style.opacity = 1;
    holderNameLabel.style.opacity = 0;
    holderNameInput.style.borderBottom = '1px solid #860404';
  } else {
    holderNameInput.style.borderBottom = '1px solid #05C2DF';
    holderNameLabel.style.opacity = 1;
    holderNameError.innerHTML = '';
    holderNameInput.style.caretColor = '#05C2DF';
  }
}

holderNameInput.onkeyup = validateHolderName;

holderNameInput.addEventListener('focus', function() {
  holderNameInput.style.borderBottom = '1px solid #05C2DF';
  holderNameLabel.style.color = '#05C2DF';
  holderNameLabel.style.top = '-15px';
});

holderNameInput.addEventListener('blur', function() {
  if (holderNameInput.value.length === 0) {
    holderNameLabel.style.top = '0px';
  }

  holderNameInput.style.borderBottom = '1px solid #2f2f2f';
  holderNameLabel.style.color = '#929292';
});

const dateInput = document.getElementById('exp-date');

dateInput.addEventListener('input', function() {
  const sanitizedValue = this.value.replace(/[^0-9]/g, '');

  if (sanitizedValue.length >= 2) {
    this.value = sanitizedValue.slice(0, 2) + ' / ' + sanitizedValue.slice(2);
  } else {
    this.value = sanitizedValue;
  }
});

const expDateLabel = document.getElementById('label-12');

function validateExpDate() {
  const expDate = dateInput.value;
  const expDateError = document.getElementById('exp-date-error');

  if (expDate.length === 0 || expDate === null) {
    dateInput.style.borderBottom = '1px solid #860404';
    expDateLabel.style.color = '#860404';
    dateInput.style.caretColor = '#860404';
  } else {
    dateInput.style.borderBottom = '1px solid #05C2DF';
    expDateLabel.style.opacity = 1;
    expDateError.innerHTML = '';
    dateInput.style.caretColor = '#05C2DF';
  }
}

dateInput.onkeyup = validateExpDate;

dateInput.addEventListener('focus', function() {
  dateInput.style.borderBottom = '1px solid #05C2DF';
  expDateLabel.style.color = '#05C2DF';
});

dateInput.addEventListener('blur', function() {
  dateInput.style.borderBottom = '1px solid #2f2f2f';
  expDateLabel.style.color = '#929292';
});

const cvvInput = document.getElementById('cvv');
const cvvLabel = document.getElementById('label-13');

function validateCvv() {
  const cvv = cvvInput.value;
  const cvvError = document.getElementById('cvv-error');

  if (cvv.length === 0 || cvv === null) {
    cvvInput.style.borderBottom = '1px solid #860404';
    cvvLabel.style.color = '#860404';
    cvvInput.style.caretColor = '#860404';
  } else {
    cvvInput.style.borderBottom = '1px solid #05C2DF';
    cvvLabel.style.opacity = 1;
    cvvError.innerHTML = '';
    cvvInput.style.caretColor = '#05C2DF';
  }
}

cvvInput.onkeyup = validateCvv;

cvvInput.addEventListener('focus', function() {
  cvvInput.style.borderBottom = '1px solid #05C2DF';
  cvvLabel.style.color = '#05C2DF';
});

cvvInput.addEventListener('blur', function() {
  cvvInput.style.borderBottom = '1px solid #2f2f2f';
  cvvLabel.style.color = '#929292';
});

cvvInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

payForm.addEventListener('submit', function() {
  pay.style.opacity = 0;
  pay.style.pointerEvents = 'none';
  complete.style.opacity = 1;
  complete.style.pointerEvents = 'all';

  const cardNumberPartsArray = [
    ...document.querySelectorAll('.card__number-part'),
  ];

  const inputs2 = [
    holderNameInput,
    dateInput,
    cvvInput,
    ...cardNumberPartsArray,
  ];
  const errors = [holderNameError];
  const labels2 = [expDateLabel, cvvLabel, holderNameLabel];

  errors.forEach((error) => {
    error.style.opacity = 0;
  });

  inputs2.forEach((input2) => {
    input2.style.borderBottom = '1px solid #2f2f2f';
    input2.style.caretColor = '#05C2DF';
  });

  labels2.forEach((label2) => {
    label2.style.opacity = 1;
    label2.style.color = '#929292';
    label2.style.top = '-35px';
    holderNameLabel.style.top = '-5px';
  });
});
