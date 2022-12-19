'use strict';

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  const buyNowButton = document.getElementById('buy-now');

  if (hash === '#place-order') {
    buyNowButton.style.zIndex = '0';
  } else {
    setTimeout(() => {
      buyNowButton.style.zIndex = '1';
    }, 300);
  }

  if (
    hash === '#menu'
    || hash === '#language'
    || hash === '#faq'
    || hash === '#help'
    || hash === '#place-order'
  ) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const collapsibles = document.getElementsByClassName('collapsible__button');

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

for (let i = 0; i < inputs.length; i++) {
  const inputName = inputs[i].childNodes[1];
  const inputField = inputs[i].childNodes[3].childNodes[1];

  inputField.addEventListener('focus', function() {
    inputName.classList.add('input__name--focused');

    inputField.addEventListener('focusout', function() {
      if (inputField.value === '') {
        inputName.classList.remove('input__name--focused');
      }
    });
  });
};

const purchaseButton = document.getElementById('purchase');
const slides = document.getElementsByClassName('place-order__slide');
const steps = document.getElementsByClassName('place-order__step');

purchaseButton.addEventListener('click', function(e) {
  e.preventDefault();
  slides[1].classList.add('place-order__slide--swiped');
  steps[0].classList.remove('place-order__step--active');
  steps[1].classList.add('place-order__step--active');

  setTimeout(() => {
    slides[1].style.display = 'none';
  }, 300);

  setTimeout(() => {
    slides[2].classList.add('place-order__slide--appeared');
  }, 300);
});

const inputsCard = document.getElementsByClassName('input__field--number-card');
const labelCard = document.getElementsByClassName('input__name--card');

for (let i = 0; i < inputsCard.length; i++) {
  inputsCard[i].addEventListener('focus', function() {
    labelCard[0].classList.add('input__name--card--focused');
  });

  inputsCard[i].oninput = function() {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }

    if (this.value.length === 4 && i !== 3) {
      inputsCard[i + 1].focus();
    }
  };

  inputsCard[i].addEventListener('focusout', function() {
    if (
      inputsCard[0].value === ''
      && inputsCard[1].value === ''
      && inputsCard[2].value === ''
      && inputsCard[3].value === ''
    ) {
      labelCard[0].classList.remove('input__name--card--focused');
    }
  });
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
    inputSlash.classList.add('form__card-expiration-slash--active');

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
      inputSlash.classList.remove('form__card-expiration-slash--active');
    }
  });
};

const dropdowns = document.getElementsByClassName('dropdown');
const totalPrice = document.getElementById('price-total');
const quantityInput = dropdowns[0].childNodes[1];

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

  dropdownInput.value = contentItems[0].innerText;

  dropdownInput.oninput = function() {
    totalPrice.innerText = quantityInput.value * 1200 + '$';

    if (quantityInput.value.length > 5) {
      quantityInput.value = quantityInput.value.slice(0, 5);
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
  });

  window.addEventListener('click', function(e) {
    if (e.target !== dropdownButton && e.target !== dropdownInput) {
      dropdownContent.classList.remove('dropdown__content--visible');
    };
  });
};
