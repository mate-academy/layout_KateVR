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
        faqDesktop.style.height = 623 + 'px';
        content.style.borderBottom = 0;
        content.style.borderBottomLeftRadius = 0;
        content.style.borderBottomRightRadius = 0;
      }, 300);
    } else {
      collapsibles[i].style.borderBottom = 0;
      collapsibles[i].style.borderBottomLeftRadius = 0;
      collapsibles[i].style.borderBottomRightRadius = 0;
      content.style.maxHeight = content.scrollHeight + 100 + 'px';
      faqDesktop.style.height = 623 + content.scrollHeight + 'px';
      content.style.paddingBottom = '12px';
      content.style.borderBottom = '1px solid #05c2df';
      content.style.borderBottomLeftRadius = '4px';
      content.style.borderBottomRightRadius = '4px';
    }
  });
};

const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
  const inputName = inputs[i].childNodes[1];
  const inputField = inputs[i].childNodes[3];

  inputField.addEventListener('focus', function() {
    inputName.classList.add('input__name--focused');

    inputField.addEventListener('focusout', function() {
      if (inputField.value === '') {
        inputName.classList.remove('input__name--focused');
      }
    });
  });
};

const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const slides = document.getElementsByClassName('place-order__slide');
const steps = document.getElementsByClassName('place-order__step');

form2.addEventListener('submit', function(e) {
  e.preventDefault();
  slides[2].classList.add('place-order__slide--swiped');
  steps[0].classList.remove('place-order__step--active');
  steps[0].classList.add('place-order__step--complete');
  steps[1].classList.add('place-order__step--active');

  setTimeout(() => {
    slides[2].style.display = 'none';
    slides[1].classList.add('place-order__slide--appeared');
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
const cardLogo = document.getElementsByClassName('input__card-logo');

for (let i = 0; i < cardInputs.length; i++) {
  const labelCard = cardInputs[i].childNodes[1];
  const fieldsCard = cardInputs[i].childNodes[3].childNodes;

  for (let j = 3; j < fieldsCard.length; j = j + 4) {
    fieldsCard[j].addEventListener('focus', function() {
      labelCard.classList.add('input__name--card--focused');
    });

    fieldsCard[j].oninput = function() {
      if (fieldsCard[3].value.startsWith(4)) {
        cardLogo[0].classList.remove('input__card-logo--mastercard');
        cardLogo[0].classList.add('input__card-logo--visa');
      } else if (
        fieldsCard[3].value.startsWith(2) || fieldsCard[3].value.startsWith(5)
      ) {
        cardLogo[0].classList.remove('input__card-logo--visa');
        cardLogo[0].classList.add('input__card-logo--mastercard');
      } else {
        cardLogo[0].classList.remove('input__card-logo--mastercard');
        cardLogo[0].classList.remove('input__card-logo--visa');
      }

      if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
      }

      if (this.value.length === 4 && j !== 15) {
        fieldsCard[j + 4].focus();
      }
    };

    fieldsCard[j].addEventListener('focusout', function() {
      if (
        !fieldsCard[3].value
        && !fieldsCard[7].value
        && !fieldsCard[11].value
        && !fieldsCard[15].value
      ) {
        labelCard.classList.remove('input__name--card--focused');
      }
    });
  };
};

const inputCvv = document.getElementById('input-cvv');
const labelCvv = document.getElementById('cvv-label');

inputCvv.addEventListener('focus', function() {
  labelCvv.classList.add('input__name--card-back--focused');

  inputCvv.oninput = function() {
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  };
});

inputCvv.addEventListener('focusout', function() {
  if (inputCvv.value === '') {
    labelCvv.classList.remove('input__name--card-back--focused');
  }
});

const inputsExpireDate
= document.getElementsByClassName('input__field--number-expiration');
const labelExpireDate
= document.getElementsByClassName('input__name--card-back')[0];
const inputSlash = document.getElementById('input-slash');

for (let i = 0; i < inputsExpireDate.length; i++) {
  inputsExpireDate[i].addEventListener('focus', function() {
    labelExpireDate.classList.add('input__name--card-back--focused');
  });

  inputsExpireDate[i].oninput = function() {
    inputSlash.classList.add('input__card-expiration-slash--active');

    if (this.value.length > 2) {
      this.value = this.value.slice(0, 2);
    }

    if (this.value.length === 2 && i !== 1) {
      inputsExpireDate[i + 1].focus();
    }

    if (this.value.length === 2 && i === 1) {
      inputCvv.focus();
    }
  };

  inputsExpireDate[i].addEventListener('focusout', function() {
    if (inputsExpireDate[0].value === '' && inputsExpireDate[1].value === '') {
      labelExpireDate.classList.remove('input__name--card-back--focused');
      inputSlash.classList.remove('input__card-expiration-slash--active');
    }
  });
};

const inputCvvDesktop = document.getElementById('input-cvv-desktop');
const labelCvvDesktop = document.getElementById('cvv-label-desktop');

inputCvvDesktop.addEventListener('focus', function() {
  labelCvvDesktop.classList.add('input__name--card-back--focused');

  inputCvvDesktop.oninput = function() {
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  };
});

inputCvvDesktop.addEventListener('focusout', function() {
  if (inputCvvDesktop.value === '') {
    labelCvvDesktop.classList.remove('input__name--card-back--focused');
  }
});

const inputsExpireDateDesktop
= document.getElementsByClassName('input__field--number-expiration-desktop');
const labelExpireDateDesktop
= document.getElementsByClassName('input__name--card-back')[2];
const inputSlashDesktop = document.getElementById('input-slash-desktop');

for (let i = 0; i < inputsExpireDateDesktop.length; i++) {
  inputsExpireDateDesktop[i].addEventListener('focus', function() {
    labelExpireDateDesktop.classList.add('input__name--card-back--focused');
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
    if (
      inputsExpireDateDesktop[0].value === ''
      && inputsExpireDateDesktop[1].value === ''
    ) {
      labelExpireDateDesktop
        .classList.remove('input__name--card-back--focused');

      inputSlashDesktop
        .classList.remove('input__card-expiration-slash--active');
    }
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

  dropdownInput.value = contentItems[0].innerText;
  dropdowns[3].childNodes[1].value = '';
  dropdowns[5].childNodes[1].value = '';

  dropdownInput.oninput = function() {
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

    dropdownInput.addEventListener('focusout', function() {
      setTimeout(() => {
        if (dropdownInput.value === '') {
          dropdownLabel.classList.remove('input__name--focused');
        }
      }, 100);
    });
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

const sliders = document.getElementsByClassName('header__bottom-slider');
let slideIndex = 1;

showSlides(slideIndex);

sliders[0].addEventListener('click', function() {
  showSlides(slideIndex += -1);
});

sliders[2].addEventListener('click', function() {
  showSlides(slideIndex += 1);
});

function showSlides(n) {
  let i;

  if (n > sliders.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = sliders.length;
  }

  for (i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('header__bottom-slider--active');
  }

  sliders[slideIndex - 1].classList.add('header__bottom-slider--active');
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
    helpDesktop.classList.remove('popup-desktop--open');
    helpDesktop.classList.remove('popup-desktop--closed');
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
