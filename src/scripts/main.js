'use strict';

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  const buyNowButton = document.getElementById('buy-now');

  if (
    hash === '#menu'
    || hash === '#language'
    || hash === '#faq'
    || hash === '#help'
    || hash === '#place-order'
  ) {
    document.body.classList.add('page__body--with-menu');
    buyNowButton.style.zIndex = '0';
  } else {
    document.body.classList.remove('page__body--with-menu');

    setTimeout(() => {
      buyNowButton.style.zIndex = '1';
    }, 300);
  }
});

const collapsibles = document.getElementsByClassName('collapsible__button');
const faqDesktop = document.getElementById('faq-desktop');

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener('click', function() {
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingBottom = 0;

      setTimeout(() => {
        collapsibles[i].style.borderBottom = '1px solid #05c2df';
        collapsibles[i].style.borderBottomLeftRadius = '4px';
        collapsibles[i].style.borderBottomRightRadius = '4px';
        content.style.borderBottom = 0;
        content.style.borderBottomLeftRadius = 0;
        content.style.borderBottomRightRadius = 0;
      }, 300);
    } else {
      collapsibles[i].style.borderBottom = 0;
      collapsibles[i].style.borderBottomLeftRadius = 0;
      collapsibles[i].style.borderBottomRightRadius = 0;
      content.style.maxHeight = content.scrollHeight + 100 + 'px';
      content.style.paddingBottom = '12px';
      content.style.borderBottom = '1px solid #05c2df';
      content.style.borderBottomLeftRadius = '4px';
      content.style.borderBottomRightRadius = '4px';
    }
  });
};

const inputs = document.getElementsByClassName('input');

function getMissingName(inputName) {
  const trimmedName = inputName.innerHTML.toLowerCase().trim();
  const invalidValue = `Please, fill your ${trimmedName}`;

  return invalidValue;
};

function typeMismatch(inputName) {
  const mismathName = inputName.innerHTML.toLowerCase().trim().slice(0, -1);

  return `Incorrect ${mismathName} format*`;
};

function returnInitialName(initialName) {
  return initialName;
};

for (let i = 0; i < inputs.length; i++) {
  const inputName = inputs[i].childNodes[1];
  const inputField = inputs[i].childNodes[3];
  const initialName = inputName.innerHTML;

  inputField.addEventListener('focus', function() {
    inputName.classList.add('input__name--focused');
    inputField.classList.add('input__field--focused');
  });

  inputField.addEventListener('focusout', function() {
    inputField.classList.remove('input__field--focused');

    if (!inputField.value) {
      inputName.classList.remove('input__name--focused');
    }

    inputField.classList.remove('input__field--invalid');
    inputName.classList.remove('input__name--invalid');
  });

  inputField.addEventListener('invalid', function(e) {
    if (e.target.validity.valueMissing) {
      inputField.classList.add('input__field--invalid');
      inputName.classList.add('input__name--invalid');

      if (inputName.innerHTML.includes(`Please, fill your`)) {
        return null;
      } else {
        inputName.innerHTML = getMissingName(inputName);
      }
    }

    if (e.target.validity.typeMismatch) {
      inputField.classList.add('input__field--invalid');
      inputName.classList.add('input__name--invalid');

      if (inputName.innerHTML.includes(`Incorrect`)) {
        return null;
      } else {
        inputName.innerHTML = typeMismatch(inputName);
      }
    }
  });

  inputField.oninput = function() {
    inputName.innerHTML = returnInitialName(initialName);

    inputField.classList.remove('input__field--invalid');
    inputName.classList.remove('input__name--invalid');
  };
};

const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const slides = document.getElementsByClassName('place-order__slide');
const steps = document.getElementsByClassName('place-order__step');
const placeOrderTop = document.getElementsByClassName('form__place-order-top');

form2.addEventListener('submit', function(e) {
  e.preventDefault();
  slides[2].classList.add('place-order__slide--swiped');
  steps[0].classList.remove('place-order__step--active');
  steps[0].classList.add('place-order__step--complete');
  steps[1].classList.add('place-order__step--active');

  setTimeout(() => {
    slides[2].style.display = 'none';
    slides[1].classList.add('place-order__slide--appeared');
    placeOrderTop[0].classList.add('form__place-order-top--grid');
    document.getElementById('place-order').scrollTop = 0;
  }, 300);
});

form1.addEventListener('submit', function(e) {
  e.preventDefault();
  slides[0].classList.add('place-order__slide--swiped');
  steps[1].classList.remove('place-order__step--active');
  steps[0].classList.remove('place-order__step--complete');
  steps[2].classList.add('place-order__step--active');

  setTimeout(() => {
    slides[0].style.display = 'none';
    slides[3].classList.add('place-order__slide--appeared');
    document.getElementById('place-order').scrollTop = 0;
  }, 300);
});

const cardInputs = document.getElementsByClassName('form__input--card');

for (let i = 0; i < cardInputs.length; i++) {
  const labelCard = cardInputs[i].childNodes[1];
  const fieldsCard = cardInputs[i].childNodes[3].childNodes;

  for (let j = 3; j < fieldsCard.length; j = j + 4) {
    fieldsCard[j].addEventListener('focus', function() {
      labelCard.classList.add('input__name--card_focused');
      fieldsCard[j].classList.add('input__field--focused');
    });

    fieldsCard[j].oninput = function() {
      labelCard.classList.remove('input__name--card_invalid');
      fieldsCard[j].classList.remove('input__field--invalid');

      if (fieldsCard[3].value.startsWith(4)) {
        fieldsCard[17].classList.remove('input__card-logo--mastercard');
        fieldsCard[17].classList.add('input__card-logo--visa');
      } else if (
        fieldsCard[3].value.startsWith(2) || fieldsCard[3].value.startsWith(5)
      ) {
        fieldsCard[17].classList.remove('input__card-logo--visa');
        fieldsCard[17].classList.add('input__card-logo--mastercard');
      } else {
        fieldsCard[17].classList.remove('input__card-logo--mastercard');
        fieldsCard[17].classList.remove('input__card-logo--visa');
      }

      if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
      }

      if (this.value.length === 4 && j !== 15) {
        fieldsCard[j + 4].focus();
      }
    };

    fieldsCard[j].addEventListener('focusout', function() {
      fieldsCard[j].classList.remove('input__field--focused');

      if (
        !fieldsCard[3].value
        && !fieldsCard[7].value
        && !fieldsCard[11].value
        && !fieldsCard[15].value
      ) {
        labelCard.classList.remove('input__name--card_focused');
      }
    });

    fieldsCard[j].addEventListener('invalid', function(e) {
      if (e.target.validity.valueMissing) {
        labelCard.classList.add('input__name--card_invalid');
        fieldsCard[j].classList.add('input__field--invalid');

        if (labelCard.innerHTML.includes(`Please, fill your`)) {
          return null;
        } else {
          labelCard.innerHTML = getMissingName(labelCard);
        }
      }
    });
  };
};

const cardHolder
  = document.getElementsByClassName('form__input--desktop-cardholder')[0];
const cardHolderLabel = cardHolder.childNodes[1];
const cardHolderInput = cardHolder.childNodes[3];

cardHolderInput.addEventListener('focus', function() {
  cardHolderLabel.classList.add('input__name--cardholder_focused');
});

cardHolderInput.addEventListener('focusout', function() {
  if (!cardHolderInput.value) {
    cardHolderLabel.classList.remove('input__name--cardholder_focused');
  }
});

cardHolderInput.addEventListener('invalid', function(e) {
  if (e.target.validity.valueMissing) {
    cardHolderInput.classList.add('input__field--invalid');
    cardHolderLabel.classList.add('input__name--cardholder_invalid');

    if (cardHolderLabel.innerHTML.includes(`Please, fill your`)) {
      return null;
    } else {
      cardHolderLabel.innerHTML = getMissingName(cardHolderLabel);
    }
  }
});

cardHolderInput.addEventListener('input', function() {
  cardHolderInput.classList.remove('input__field--invalid');
  cardHolderLabel.classList.remove('input__name--cardholder_invalid');
});

const inputCardholderMobile = document.getElementById('card-holder-name');
const labelCardholderMobile
  = document.getElementsByClassName('input__name--cardholder')[0];

inputCardholderMobile.addEventListener('focus', function() {
  labelCardholderMobile.classList.add('input__name--cardholder_focused');
});

inputCardholderMobile.addEventListener('focusout', function() {
  if (!inputCardholderMobile.value) {
    labelCardholderMobile.classList.remove('input__name--cardholder_focused');
  }
});

inputCardholderMobile.addEventListener('invalid', function(e) {
  if (e.target.validity.valueMissing) {
    inputCardholderMobile.classList.add('input__field--invalid');
    labelCardholderMobile.classList.add('input__name--cardholder_invalid');

    if (labelCardholderMobile.innerHTML.includes(`Please, fill your`)) {
      return null;
    } else {
      labelCardholderMobile.innerHTML = getMissingName(labelCardholderMobile);
    }
  }
});

inputCardholderMobile.addEventListener('input', function() {
  inputCardholderMobile.classList.remove('input__field--invalid');
  labelCardholderMobile.classList.remove('input__name--cardholder_invalid');
});

const inputCvv = document.getElementById('input-cvv');
const labelCvv = document.getElementById('cvv-label');

inputCvv.addEventListener('focus', function() {
  labelCvv.classList.add('input__name--card-back_focused');
  inputCvv.classList.add('input__field--focused');

  inputCvv.oninput = function() {
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  };
});

inputCvv.addEventListener('focusout', function() {
  inputCvv.classList.remove('input__field--focused');

  if (!inputCvv.value) {
    labelCvv.classList.remove('input__name--card-back_focused');
  }
});

inputCvv.addEventListener('invalid', function(e) {
  if (e.target.validity.valueMissing) {
    labelCvv.classList.add('input__name--card-back_invalid');
    inputCvv.classList.add('input__field--invalid');

    if (labelCvv.innerHTML.includes(`Please, fill your`)) {
      return null;
    } else {
      labelCvv.innerHTML = getMissingName(labelCvv);
    }
  }
});

inputCvv.addEventListener('input', function() {
  inputCvv.classList.remove('input__field--invalid');
  labelCvv.classList.remove('input__name--card-back_invalid');
});

const inputsExpireDate
= document.getElementsByClassName('input__field--number-expiration');
const labelExpireDate
= document.getElementsByClassName('input__name--card-back');
const inputSlash = document.getElementById('input-slash');
const expirationSpan
= document.getElementsByClassName('input__card-expiration');

for (let i = 0; i < inputsExpireDate.length; i++) {
  inputsExpireDate[i].addEventListener('focus', function() {
    labelExpireDate[0].classList.add('input__name--card-back_focused');
    expirationSpan[0].classList.add('input__card-expiration--focused');
  });

  inputsExpireDate[i].addEventListener('input', function() {
    inputSlash.classList.add('input__card-expiration-slash--active');
    labelExpireDate[0].classList.remove('input__name--card-back_invalid');
    expirationSpan[0].classList.remove('input__card-expiration--invalid');

    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }

    if (this.value.length === 2 && i !== 1) {
      inputsExpireDate[i + 1].focus();
    }

    if (this.value.length === 2 && i === 1) {
      inputCvv.focus();
    }
  });

  inputsExpireDate[i].addEventListener('focusout', function() {
    expirationSpan[0].classList.remove('input__card-expiration--focused');

    if (!inputsExpireDate[0].value && !inputsExpireDate[1].value) {
      labelExpireDate[0].classList.remove('input__name--card-back_focused');
      inputSlash.classList.remove('input__card-expiration-slash--active');
    }
  });

  inputsExpireDate[i].addEventListener('invalid', function(e) {
    if (e.target.validity.valueMissing) {
      labelExpireDate[0].classList.add('input__name--card-back_invalid');
      expirationSpan[0].classList.add('input__card-expiration--invalid');

      if (labelExpireDate[0].innerHTML.includes(`Please, fill your`)) {
        return null;
      } else {
        labelExpireDate[0].innerHTML = getMissingName(labelExpireDate[0]);
      }
    }
  });
};

const inputCvvDesktop = document.getElementById('input-cvv-desktop');
const labelCvvDesktop = document.getElementById('cvv-label-desktop');

inputCvvDesktop.addEventListener('focus', function() {
  labelCvvDesktop.classList.add('input__name--card-back_focused');
  inputCvvDesktop.classList.add('input__field--focused');

  inputCvvDesktop.oninput = function() {
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  };
});

inputCvvDesktop.addEventListener('focusout', function() {
  inputCvvDesktop.classList.remove('input__field--focused');

  if (!inputCvvDesktop.value) {
    labelCvvDesktop.classList.remove('input__name--card-back_focused');
  }
});

inputCvvDesktop.addEventListener('invalid', function(e) {
  if (e.target.validity.valueMissing) {
    inputCvvDesktop.classList.add('input__field--invalid');
    labelCvvDesktop.classList.add('input__name--card-back_invalid');

    if (labelCvvDesktop.innerHTML.includes(`Please, fill your`)) {
      return null;
    } else {
      labelCvvDesktop.innerHTML = getMissingName(labelCvvDesktop);
    }
  }
});

inputCvvDesktop.addEventListener('input', function() {
  inputCvvDesktop.classList.remove('input__field--invalid');
  labelCvvDesktop.classList.remove('input__name--card-back_invalid');
});

const inputsExpireDateDesktop
= document.getElementsByClassName('input__field--number-expiration-desktop');
const labelExpireDateDesktop
= document.getElementsByClassName('input__name--card-back')[2];
const inputSlashDesktop = document.getElementById('input-slash-desktop');
const expirationSpanDesktop
= document.getElementsByClassName('input__card-expiration')[1];

for (let i = 0; i < inputsExpireDateDesktop.length; i++) {
  inputsExpireDateDesktop[i].addEventListener('focus', function() {
    labelExpireDateDesktop.classList.add('input__name--card-back_focused');
    expirationSpanDesktop.classList.add('input__card-expiration--focused');
  });

  inputsExpireDateDesktop[i].oninput = function() {
    inputSlashDesktop.classList.add('input__card-expiration-slash--active');

    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }

    if (this.value.length === 2 && i !== 1) {
      inputsExpireDateDesktop[i + 1].focus();
    }

    if (this.value.length === 2 && i === 1) {
      inputCvvDesktop.focus();
    }
  };

  inputsExpireDateDesktop[i].addEventListener('focusout', function() {
    expirationSpanDesktop.classList.remove('input__card-expiration--focused');

    if (
      !inputsExpireDateDesktop[0].value
      && !inputsExpireDateDesktop[1].value
    ) {
      labelExpireDateDesktop
        .classList.remove('input__name--card-back_focused');

      inputSlashDesktop
        .classList.remove('input__card-expiration-slash--active');
    }
  });

  inputsExpireDateDesktop[i].addEventListener('invalid', function(e) {
    if (e.target.validity.valueMissing) {
      expirationSpanDesktop.classList.add('input__card-expiration--invalid');
      labelExpireDateDesktop.classList.add('input__name--card-back_invalid');

      if (labelExpireDateDesktop.innerHTML.includes(`Please, fill your`)) {
        return null;
      } else {
        labelExpireDateDesktop.innerHTML
          = getMissingName(labelExpireDateDesktop);
      }
    }
  });

  inputsExpireDateDesktop[i].addEventListener('input', function() {
    expirationSpanDesktop.classList.remove('input__card-expiration--invalid');
    labelExpireDateDesktop.classList.remove('input__name--card-back_invalid');
  });
};

const dropdowns = document.getElementsByClassName('dropdown');
const totalPrice = document.getElementById('price-total');
const totalPrice2 = document.getElementById('price-total-2');
const quantityInput = dropdowns[1].childNodes[1];
const quantityInput2 = dropdowns[6].childNodes[1];

function filterItems(txtValue, filter) {
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    return '';
  } else {
    return 'none';
  }
};

for (let i = 0; i < dropdowns.length; i++) {
  const dropdownInput = dropdowns[i].childNodes[1];
  const dropdownButton = dropdowns[i].childNodes[3];
  const dropdownContent = dropdowns[i].childNodes[5];
  const contentItems = dropdownContent.childNodes[1].children;
  const dropdownLabel = dropdowns[i].previousElementSibling;
  const initialNameDropdown = dropdownLabel.innerHTML;

  dropdownInput.value = contentItems[0].innerText;
  dropdowns[3].childNodes[1].value = '';
  dropdowns[5].childNodes[1].value = '';

  dropdownInput.oninput = function() {
    dropdownLabel.innerHTML
      = returnInitialName(initialNameDropdown);
    dropdownLabel.classList.remove('input__name--invalid');

    totalPrice.innerText = quantityInput.value * 1200 + '$';
    totalPrice2.innerText = quantityInput2.value * 1200 + '$';

    if (quantityInput.value.length > 5) {
      quantityInput.value = quantityInput.value.slice(0, 5);
    }

    if (quantityInput2.value.length > 5) {
      quantityInput2.value = quantityInput2.value.slice(0, 5);
    }

    const filter = dropdownInput.value.toUpperCase();

    for (let k = 0; k < contentItems.length; k++) {
      const txtValue = contentItems[k].textContent || contentItems[k].innerText;

      contentItems[k].style.display = filterItems(txtValue, filter);
    };
  };

  for (let j = 0; j < contentItems.length; j++) {
    contentItems[j].addEventListener('click', function() {
      dropdownInput.value = this.textContent || this.innerText;

      dropdownLabel.innerHTML
      = returnInitialName(this.textContent || this.innerText);
      dropdownLabel.classList.remove('input__name--invalid');
      totalPrice.innerText = quantityInput.value * 1200 + '$';
      totalPrice2.innerText = quantityInput2.value * 1200 + '$';

      dropdownContent.style.display = 'none';
    });
  };

  dropdownButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });

  dropdownInput.addEventListener('click', function() {
    dropdownContent.classList.add('dropdown__content--visible');

    if (dropdownContent.style.display === 'none') {
      dropdownContent.style.display = 'block';
    }
  });

  dropdownInput.addEventListener('focus', function() {
    if (!dropdownLabel.classList.contains('label')) {
      dropdownLabel.classList.add('input__name--focused');
    }
  });

  dropdownInput.addEventListener('focusout', function() {
    setTimeout(() => {
      if (!dropdownInput.value) {
        dropdownLabel.classList.remove('input__name--focused');
      }
    }, 100);
  });

  dropdownInput.addEventListener('invalid', function(e) {
    if (e.target.validity.valueMissing) {
      dropdownLabel.classList.add('input__name--invalid');

      if (dropdownLabel.innerHTML.includes(`Please, fill your`)) {
        return null;
      } else {
        dropdownLabel.innerHTML = getMissingName(dropdownLabel);
      }
    }
  });

  window.addEventListener('click', function(e) {
    if (e.target !== dropdownButton && e.target !== dropdownInput) {
      dropdownContent.classList.remove('dropdown__content--visible');

      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      }
    };
  });
};

const slidersHeader = document.getElementsByClassName('slider-step--header');
const slidersAbout = document.getElementsByClassName('slider-step--about');
const counterNumber
  = document.getElementsByClassName('slideshow__counter-text')[0];

let sliderIndex = 1;
let sliderAboutIndex = 1;

showSlider(sliderIndex);
showSliderAbout(sliderAboutIndex);

function changeNumber(number) {
  return number;
};

slidersHeader[0].addEventListener('click', function() {
  showSlider(sliderIndex += -1);
});

slidersHeader[2].addEventListener('click', function() {
  showSlider(sliderIndex += 1);
});

slidersAbout[0].addEventListener('click', function() {
  showSliderAbout(sliderAboutIndex += -1);
});

slidersAbout[4].addEventListener('click', function() {
  showSliderAbout(sliderAboutIndex += 1);
});

function showSlider(n) {
  let i;

  if (n > slidersHeader.length) {
    sliderIndex = 1;
  }

  if (n < 1) {
    sliderIndex = slidersHeader.length;
  }

  for (i = 0; i < slidersHeader.length; i++) {
    slidersHeader[i].classList.remove('slider-step--active');
  }

  slidersHeader[sliderIndex - 1].classList.add('slider-step--active');
}

function showSliderAbout(n) {
  let i;

  if (n > slidersAbout.length) {
    sliderAboutIndex = 1;
  }

  if (n < 1) {
    sliderAboutIndex = slidersAbout.length;
  }

  for (i = 0; i < slidersAbout.length; i++) {
    slidersAbout[i].classList.remove('slider-step--active');
  }

  slidersAbout[sliderAboutIndex - 1].classList.add('slider-step--active');
  counterNumber.innerHTML = changeNumber(sliderAboutIndex);
}

const stepsDesktop
= document.getElementsByClassName('place-order__step-desktop');
const slidesDesktop
= document.getElementsByClassName('place-order__slide-desktop');
const slidesDesktopFinal
= document.getElementsByClassName('place-order__slide-desktop-final');
const slidesDesktopComplete
= document.getElementsByClassName('place-order__slide-desktop-complete');
const placeOrderContent = document
  .getElementsByClassName('place-order__content-desktop');
const formDesktop = document.getElementById('form-desktop');
const formDesktop2 = document.getElementById('form-desktop-2');

formDesktop.addEventListener('submit', function(e) {
  e.preventDefault();
  stepsDesktop[0].classList.remove('place-order__step-desktop--active');
  stepsDesktop[0].classList.add('place-order__step-desktop--complete');
  stepsDesktop[1].classList.add('place-order__step-desktop--active');
  slidesDesktop[0].classList.add('place-order__slide-desktop--swiped');

  setTimeout(() => {
    slidesDesktop[0].style.display = 'none';
    slidesDesktop[1].classList.add('place-order__slide-desktop--appeared');
    document.getElementById('place-order').scrollTop = 0;
  }, 300);
});

formDesktop2.addEventListener('submit', function(e) {
  e.preventDefault();
  stepsDesktop[1].classList.remove('place-order__step-desktop--active');
  stepsDesktop[2].classList.add('place-order__step-desktop--active');
  stepsDesktop[0].classList.remove('place-order__step-desktop--complete');

  slidesDesktopFinal[0]
    .classList.add('place-order__slide-desktop-final--swiped');

  setTimeout(() => {
    slidesDesktopFinal[0].style.display = 'none';

    slidesDesktopComplete[0]
      .classList.add('place-order__slide-desktop-complete--appeared');
    document.getElementById('place-order').scrollTop = 0;
    placeOrderContent[0].classList.add('place-order__content-desktop-complete');
  }, 300);
});

const linkHelp = document.getElementById('link-help');
const linkFaq = document.getElementById('link-faq');
const popupDesktopIcon = document.getElementsByClassName('popup-desktop__icon');
const helpDesktop = document.getElementById('help-desktop');
const linkMoreFaq = document.getElementById('link-more-faq');

linkHelp.addEventListener('click', function() {
  document.body.classList.add('page__body--shadowed');
  helpDesktop.classList.add('popup-desktop--open');
});

linkFaq.addEventListener('click', function() {
  document.body.classList.add('page__body--shadowed');
  faqDesktop.classList.add('popup-desktop--open');
});

linkMoreFaq.addEventListener('click', function() {
  document.body.classList.remove('page__body--shadowed');
  faqDesktop.classList.add('popup-desktop--closed');

  setTimeout(() => {
    faqDesktop.classList.remove('popup-desktop--open');
    faqDesktop.classList.remove('popup-desktop--closed');
  }, 300);
});

popupDesktopIcon[1].addEventListener('click', function() {
  document.body.classList.remove('page__body--shadowed');
  helpDesktop.classList.add('popup-desktop--closed');

  setTimeout(() => {
    helpDesktop.classList.remove('popup-desktop--open');
    helpDesktop.classList.remove('popup-desktop--closed');
  }, 300);
});

popupDesktopIcon[0].addEventListener('click', function() {
  document.body.classList.remove('page__body--shadowed');
  faqDesktop.classList.add('popup-desktop--closed');

  setTimeout(() => {
    faqDesktop.classList.remove('popup-desktop--open');
    faqDesktop.classList.remove('popup-desktop--closed');
  }, 300);
});

const iconMenu = document.getElementById('icon-menu');
const iconMenuCross = document.getElementById('menu-cross-icon');

iconMenu.addEventListener('click', function() {
  document.body.classList.add('page__body--shadowed');
});

iconMenuCross.addEventListener('click', function() {
  document.body.classList.remove('page__body--shadowed');
});

window.onscroll = function() {
  getFixed();
};

const headerTop = document.getElementsByClassName('header__top')[0];
const headerTitle = document.getElementsByClassName('header__title')[0];

const sticky = headerTop.offsetTop;

function getFixed() {
  if (window.pageYOffset > sticky) {
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
  playButtons[i].addEventListener('click', function() {
    videoContainer.classList.add('header__video-container-active');
  });
}

videoCross.addEventListener('click', function() {
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
});

const slidesImages = document.getElementsByClassName('slideshow__image');
const slideDots = document.getElementsByClassName('slideshow__dot');
const slideControl = document.getElementsByClassName('slideshow__control-mob');
let slideIndex = 1;

showSlides(slideIndex);

slideControl[0].addEventListener('click', function() {
  showSlides(slideIndex += -1);
});

slideControl[1].addEventListener('click', function() {
  showSlides(slideIndex += 1);
});

slidersAbout[0].addEventListener('click', function() {
  showSlides(slideIndex += -1);
});

slidersAbout[4].addEventListener('click', function() {
  showSlides(slideIndex += 1);
});

for (let i = 0; i < slideDots.length; i++) {
  slideDots[i].addEventListener('click', function(e) {
    showSlides(slideIndex = e.target.dataset.number);
  });
}

function showSlides(n) {
  let i;

  if (n > slidesImages.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slidesImages.length;
  }

  for (i = 0; i < slidesImages.length; i++) {
    slidesImages[i].style.display = 'none';
  }

  for (i = 0; i < slideDots.length; i++) {
    slideDots[i].classList.remove('slideshow__dot-active');
  }

  slidesImages[slideIndex - 1].style.display = 'block';
  slideDots[slideIndex - 1].classList.add('slideshow__dot-active');
}

const miniButton = document.getElementsByClassName('mini-button');

for (let i = 0; i < miniButton.length; i++) {
  miniButton[i].addEventListener('click', function(e) {
    if (
      e.target.classList.contains('mini-button__span')
      || e.target.classList.contains('mini-button__description')
    ) {
      return null;
    }

    if (miniButton[i].children[1].style.display === 'none') {
      miniButton[i].children[1].style.display = 'block';
      miniButton[i].classList.remove('mini-button--active');
    } else {
      miniButton[i].children[1].style.display = 'none';
      miniButton[i].classList.add('mini-button--active');
    }

    if (miniButton[i].children[2].style.display === 'block') {
      miniButton[i].children[2]
        .classList.add('mini-button__description-disappear');

      setTimeout(() => {
        miniButton[i].children[2].style.display = 'none';

        miniButton[i].children[2]
          .classList.remove('mini-button__description-disappear');
      }, 300);
    } else {
      miniButton[i].children[2].style.display = 'block';
    }
  });
};

const contactForm = document.getElementsByClassName('contact__form')[0];

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  contactForm.reset();
});
