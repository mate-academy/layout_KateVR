'use strict';

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

function validateName() {
  const name = nameInput.value;
  const nameError = document.getElementById('name-error');

  if (name.length === 0 || name === null) {
    nameInput.style.borderBottom = '1px solid #860404';
    nameError.innerHTML = 'Please, fill your name*';
    nameLabel.style.opacity = 0;
    nameInput.style.caretColor = '#860404';
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Please enter the full name*';
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
});

const emailInput = document.getElementById('email');
const emailLabel = document.getElementById('label-2');

function validateEmail() {
  const email = emailInput.value;
  const emailError = document.getElementById('email-error');

  if (email.length === 0 || email === null) {
    emailInput.style.borderBottom = '1px solid #860404';
    emailError.innerHTML = 'Please, fill your email*';
    emailLabel.style.opacity = 0;
    emailInput.style.caretColor = '#860404';
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = 'Incorrect email format*';
    emailLabel.style.opacity = 0;
    emailInput.style.borderBottom = '1px solid #860404';
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
});

const phoneInput = document.getElementById('phone');
const phoneLabel = document.getElementById('label-3');

function validatePhone() {
  const phone = phoneInput.value;
  const phoneError = document.getElementById('phone-error');

  if (phone.length === 0 || phone === null) {
    phoneInput.style.borderBottom = '1px solid #860404';
    phoneError.innerHTML = 'Phone number is required*';
    phoneLabel.style.opacity = 0;
    phoneInput.style.caretColor = '#860404';
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Phone number is required*';
    phoneLabel.style.opacity = 0;
    phoneInput.style.borderBottom = '1px solid #860404';
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone number should be 10 digits*';
    phoneLabel.style.opacity = 0;
    phoneInput.style.borderBottom = '1px solid #860404';
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
});

const messageInput = document.getElementById('message');
const messageLabel = document.getElementById('label-4');

function validateMessage() {
  const message = messageInput.value;
  const messageError = document.getElementById('message-error');

  if (message.length <= 30) {
    messageInput.style.borderBottom = '1px solid #860404';
    messageError.innerHTML = 'Please, fill your message*';
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
});

const more = document.getElementById('more');

more.addEventListener('click', function() {
  window.scrollTo(0, 1200);
});

const questionContents = document.querySelectorAll('.question-dropdown');

questionContents.forEach((content, index) => {
  content.addEventListener('click', function() {
    // Toggle classes for all questionContents
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
  if (languageContent.style.opacity === '0'
  || languageContent.style.opacity === '') {
    languageContent.style.opacity = '1';
  } else {
    languageContent.style.opacity = '0';
  }
});

languageOptions.forEach((languageOption) => {
  languageOption.addEventListener('click', function() {
    languagesToggle.innerHTML = languageOption.innerHTML;
    languageContent.style.opacity = 0;
  });
});

const quantityInput = document.getElementById('quantity-input');
const quantityContent = document.querySelector('.quantity__content');
const quantityBtn = document.getElementById('quantity__button');
const quantityOptions = document.querySelectorAll('.quantity__option');

quantityBtn.addEventListener('click', function() {
  if (quantityContent.style.opacity === '0'
  || quantityContent.style.opacity === '') {
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

const quantityInput2 = document.getElementById('quantity-input2');
const quantityContent2 = document.querySelector('.quantity__content2');
const quantityBtn2 = document.getElementById('quantity__button2');
const quantityOptions2 = document.querySelectorAll('.quantity__option2');

quantityBtn2.addEventListener('click', function() {
  if (quantityContent2.style.opacity === '0'
  || quantityContent2.style.opacity === '') {
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

const firstNameInput = document.getElementById('first-name');
const firstNameLabel = document.getElementById('label-5');

function validateFirstName() {
  const firstName = firstNameInput.value;
  const firstNameError = document.getElementById('first-name-error');

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
});

const lastNameInput = document.getElementById('last-name');
const lastNameLabel = document.getElementById('label-6');

function validateLastName() {
  const lastName = lastNameInput.value;
  const lastNameError = document.getElementById('last-name-error');

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
});

const addressPhoneInput = document.getElementById('address-phone');
const addressPhoneLabel = document.getElementById('label-8');

function validateAddressPhone() {
  const addressPhone = addressPhoneInput.value;
  const addressPhoneError = document.getElementById('address-phone-error');

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
});

const addressEmailInput = document.getElementById('address-email');
const addressEmailLabel = document.getElementById('label-7');

function validateAddressEmail() {
  const addressEmail = addressEmailInput.value;
  const addressEmailError = document.getElementById('address-email-error');

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

const countryContent = document.querySelector('.country__content');
const countryToggle = document.getElementById('country-toggle');
const countryOptions = document.querySelectorAll('.country__option');

countryToggle.addEventListener('click', function() {
  if (countryContent.style.opacity === '0'
  || countryContent.style.opacity === '') {
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

cardNumberParts.forEach((input) => {
  input.addEventListener('input', function() {
    const inputValue = this.value;
    const isLessThan4 = inputValue.length < 4;

    if (isLessThan4) {
      this.style.borderBottom = '2px solid #860404';
    } else {
      this.style.borderBottom = '1px solid #05C2DF';
    }
  });
});

const holderNameInput = document.getElementById('holder-name');
const holderNameLabel = document.getElementById('label-11');

function validateHolderName() {
  const holderName = holderNameInput.value;
  const holderNameError = document.getElementById('holder-name-error');

  if (holderName.length === 0 || holderName === null) {
    holderNameInput.style.borderBottom = '1px solid #860404';
    holderNameError.innerHTML = 'Please, fill your name*';
    holderNameLabel.style.opacity = 0;
    holderNameInput.style.caretColor = '#860404';
  }

  if (!holderName.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)
  && !holderName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    holderNameError.innerHTML = 'Please enter the full name*';
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
  holderNameLabel.style.color = '#05C2DF';
  holderNameLabel.style.top = '-15px';
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
  expDateLabel.style.color = '#05C2DF';
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
  cvvLabel.style.color = '#05C2DF';
});
