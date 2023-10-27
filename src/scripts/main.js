'use strict';

// techButtons
const techInfoBtns = document.querySelectorAll('.tech__button');

techInfoBtns.forEach(techBtn => {
  techBtn.addEventListener('click', () => {
    techBtn.classList.toggle('tech__button--active');
  });
});

// quantity
const quantity = document.querySelector('[type=number]');
const cost = document.querySelector('.buy__price-cost');
const quantityArrow = document.querySelectorAll('.buy__quantity-arrow');

quantity.addEventListener('change', () => {
  modPrice();
});

quantityArrow.forEach(item => {
  item.addEventListener('click', () => {
    modPrice();
  });
});

function modPrice() {
  const value = quantity.value;
  const price = 1200;
  const total = price * value;

  cost.innerText = total + '$';
}

// locationDropdown
// countryDropdown
const dropdownInputC = document.querySelector('#countryBuy');
const dropdownListC = document.querySelector('.buy__dropdown-list--country');
const dropdownCountry = document.querySelectorAll('.buy__dropdown-item');

dropdownInputC.addEventListener('click', () => {
  dropdownListS.classList.remove('buy__dropdown-list--city--show');
  dropdownListC.classList.toggle('buy__dropdown-list--country--show');
});

dropdownCountry.forEach(item => {
  item.addEventListener('click', () => {
    dropdownInputC.value = item.innerHTML;
    dropdownListC.classList.remove('buy__dropdown-list--country--show');
  });
});

// cityDropdown
const dropdownInputS = document.querySelector('#cityBuy');
const dropdownListS = document.querySelector('.buy__dropdown-list--city');
const dropdownCity = document.querySelectorAll('.buy__dropdown-item--city');

dropdownInputS.addEventListener('click', () => {
  dropdownListC.classList.remove('buy__dropdown-list--country--show');
  dropdownListS.classList.toggle('buy__dropdown-list--city--show');
});

dropdownCity.forEach(item => {
  item.addEventListener('click', () => {
    dropdownInputS.value = item.innerHTML;
    dropdownListS.classList.remove('buy__dropdown-list--city--show');
  });
});

// menu
const body = document.getElementById('body');
const overlay = document.querySelector('.overlay');
const help = document.querySelector('#help');
const faq = document.getElementById('faq');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    body.classList.add('page__body--with-menu');
    overlay.style.display = 'block';

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280) {
        window.location.hash = '#';
        overlay.style.display = 'none';
      }
    });
  } else if (window.location.hash === '#buy') {
    body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#help') {
    body.classList.add('page__body--with-menu');
    help.classList.add('help--active');
    overlay.style.display = 'block';

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1280) {
        window.location.hash = '#';
        overlay.style.display = 'none';
      }
    });
  } else if (window.location.hash === '#faq') {
    body.classList.add('page__body--with-menu');
    faq.classList.add('faq--active');
    overlay.style.display = 'block';

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1280) {
        window.location.hash = '#';
        overlay.style.display = 'none';
      }
    });
  } else if (window.location.hash === '#video') {
    body.classList.add('page__body--with-menu');
    overlay.style.display = 'block';
    fullScreenVideo.classList.add('video--active');
  } else {
    body.classList.remove('page__body--with-menu');
    overlay.style.display = 'none';
    help.classList.remove('help--active');
    faq.classList.remove('faq--active');
    fullScreenVideo.classList.remove('video--active');
    video.src += '';
  }
});

// languageDropdown
const langSelected = document.querySelector('#langMain');
const langMenu = document.querySelector('#langMenu');
const langs = document.querySelectorAll('.top-actions__langs-item');

langSelected.addEventListener('click', (event) => {
  langMenu.classList.toggle('top-actions__langs-container--show');
  event.stopPropagation();
});

langs.forEach(lang => {
  lang.addEventListener('click', () => {
    langSelected.innerHTML = lang.innerHTML;
    langMenu.classList.remove('top-actions__langs-container--show');
  });
});

window.onclick = (event) => {
  if (!event.target.matches('#langMain')) {
    if (langMenu.classList.contains('top-actions__langs-container--show')) {
      langMenu.classList.remove('top-actions__langs-container--show');
    };
  };
};

// formValidation
const form = document.getElementById('formContact');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

const formOrder = document.getElementById('formBuyOrder');
const formOrderDiv = document.querySelector('.buy__form-order');

const formPay = document.getElementById('formBuyPay');
const formPayDiv = document.querySelector('.buy__form-pay');

const formNextButton = document.querySelector('.buy__button-next');
const formPurchaseButton = document.querySelector('.buy__button-purchase');

const tabOrder = document.getElementById('tabOrder');
const tabPay = document.getElementById('tabPay');
const tabComplete = document.getElementById('tabComplete');

const buyImage = document.querySelector('.buy__image');
const buyPrice = document.querySelector('.buy__price-container');

const buyComplete = document.querySelector('.buy__complete');
const buyCompleteButton = document.querySelector('.buy__complete-button');

formOrder.addEventListener('submit', (event) => {
  event.preventDefault();
  formOrderDiv.style.display = 'none';
  formNextButton.style.display = 'none';

  formPayDiv.style.display = 'block';
  formPurchaseButton.style.display = 'block';

  tabOrder.classList.remove('buy__tab--active');
  tabPay.classList.add('buy__tab--active');
});

formPay.addEventListener('submit', (event) => {
  event.preventDefault();
  formPayDiv.style.display = 'none';
  formPurchaseButton.style.display = 'none';

  tabPay.classList.remove('buy__tab--active');
  tabComplete.classList.add('buy__tab--active');

  buyImage.style.display = 'none';
  buyPrice.style.display = 'none';

  buyComplete.style.display = 'block';
});

buyCompleteButton.addEventListener('click', () => {
  formOrder.reset();
  formPay.reset();

  formOrderDiv.style.display = 'grid';
  formNextButton.style.display = 'block';

  buyComplete.style.display = 'none';
  buyImage.style.display = 'block';
  buyPrice.style.display = 'flex';

  quantity.value = '';
  cost.innerHTML = '0$';

  tabComplete.classList.remove('buy__tab--active');
  tabOrder.classList.add('buy__tab--active');
});

// Modal
const menuHelp = document.querySelector('#menuHelp');
const menuHelpButton = document.querySelector('#menuHelpButton');
const menuHelploseButton = document.querySelector('#menuHelpCloseButton');

const menuFAQ = document.querySelector('#menuFAQ');
const menuFAQButton = document.querySelector('#menuFAQButton');
const menuFAQButton2 = document.querySelector('#menuFAQButton2');
const menuFAQCloseButton = document.querySelector('#menuFAQCloseButton');

const menuContent = document.querySelector('#menuContent');

menuHelpButton.addEventListener('click', (event) => {
  menuContent.style.display = 'none';
  menuHelp.style.display = 'block';
  event.preventDefault();
});

[menuFAQButton, menuFAQButton2].forEach(item => {
  item.addEventListener('click', (event) => {
    menuContent.style.display = 'none';
    menuHelp.style.display = 'none';
    menuFAQ.style.display = 'block';
    event.preventDefault();
  });
});

[menuHelploseButton, menuFAQCloseButton].forEach(item => {
  item.addEventListener('click', (event) => {
    menuContent.style.display = 'block';
    menuHelp.style.display = 'none';
    menuFAQ.style.display = 'none';
    event.preventDefault();
  });
});

// Fullscreen Video
const fullScreenVideo = document.querySelector('#fullScreenVideo');
const video = document.querySelector('#video');

// FAQ
const faqQuestion = document.querySelectorAll('.faq__question');

faqQuestion.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.classList.toggle('faq__question--active');

    const description = item.querySelector('.faq__answer');

    if (item.classList.contains('faq__question--active')) {
      description.style.height = `${description.scrollHeight}px`;
      item.style.paddingBottom = '20px';
    } else {
      description.style.height = '0px';
      item.style.paddingBottom = '0';
    }

    removeOpen(index);
  });
});

function removeOpen(ind) {
  faqQuestion.forEach((it, i) => {
    if (ind !== i) {
      it.classList.remove('faq__question--active');

      const desc = it.querySelector('.faq__answer');

      desc.style.height = '0px';
      it.style.paddingBottom = '0';
    }
  });
}

// windowResizeCheck

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) {
    techInfoBtns.forEach(techBtn => {
      techBtn.classList.remove('tech__button--active');
    });
  }

  if (window.innerWidth < 1280) {
    langMenu.classList.remove('top-actions__langs-container--show');
  }
});
